# Importing auxiliary libraries for the test
require "optparse"                   # This library allows us to easily parse the command line arguments
require "roo"                        # This library allows us to easily read an ODS file (for api)
require "rexml/document"
require "pathname"
require "fileutils"

# Importing test configuration file
require_relative "config"

savemem = Config::SAVEMEM

def nametoidl(n)
  ret = n.gsub("(", "_")
  ret = ret.gsub(")", "_")
  ret = ret.gsub("Ñ", "NY")
  ret = ret.gsub(".", "_")
  ret = ret.gsub("+", "p")
  ret = ret.gsub("/", "_")
  ret = ret.gsub("¿", "_")
  ret = ret.gsub("?", "_")
  ret = ret.gsub("-", "_")
  ret = ret.gsub("á", "a")
  ret = ret.gsub("é", "e")
  ret = ret.gsub("í", "i")
  ret = ret.gsub("ó", "o")
  ret = ret.gsub("ú", "u")
  ret = ret.gsub("Á", "A")
  ret = ret.gsub("É", "E")
  ret = ret.gsub("Í", "I")
  ret = ret.gsub("Ó", "O")
  ret = ret.gsub("Ú", "U")
  ret = ret.gsub("ñ", "ny")

  if ret.downcase == "sequence"
    ret += "b"
  end

  ret
end

def desctomonit(n)
  nametoidl(n.split("\n")[0].split("\r")[0])
end

######### WE WILL PARSE THE COMMAND LINE ARGUMENTS FOR THE WRAPPER GEN #############

def dir_path(string)
  if File.directory?(string)
    string
  else
    raise NotADirectoryError, string
  end
end

parser = OptionParser.new do |opts|
  opts.banner = "Usage: example.rb [options]"

  opts.on("-m", "--model_root_path PATH", "the root path where the models shall be picked from") do |model_root_path|
    options[:model_root_path] = dir_path(model_root_path)
  end

  opts.on("-p", "--model_path PATH", "the path for the model to be processed") do |model_path|
    options[:model_path] = model_path
  end

  opts.on("-o", "--output_path PATH", "the path to create the Python classes") do |output_path|
    options[:output_path] = dir_path(output_path)
  end
end

options = {}
parser.parse!(into: options)

# Printing the obtained arguments:
puts "/* The PORIS instrument description ODS filename is: #{File.basename(options[:model_path])} */"
deviceName = File.basename(options[:model_path], ".ods")
puts "Device name: #{deviceName}"

relativepath = options[:model_path].sub(options[:model_root_path], "").sub(/\.ods$/, "")

# As an example of a constant defined in the configuration file, we'll print the welcome message
puts Config::WELCOME_MESSAGE

def loadODS
  dictdata = Roo::Spreadsheet.open(options[:model_path])
  dictdata = dictdata.sheet(Config::DICT_FILE_SHEET)
  dictdata = dictdata.parse(start_row: Config::DICT_MAX_ROWS_ROW, end_row: Config::DICT_MAX_ROWS_ROW + 1, start_column: Config::DICT_MAX_ROWS_COLUMN, end_column: Config::DICT_MAX_ROWS_COLUMN)

  desc_file_row_limit = dictdata[0][1]
  # Now we read the PORIS instrument description from the file file
  filedata = Roo::Spreadsheet.open(options[:model_path])
  filedata = filedata.sheet(Config::DESC_FILE_SHEET)
  filedata = filedata.parse(start_row: Config::DESC_FILE_START_ROW, end_row: desc_file_row_limit, start_column: Config::DESC_FILE_START_COLUMN, end_column: Config::DESC_FILE_COLUMN_LIMIT)
  nodesdata = filedata

  virtual_nodes_counter = 1

  nodes_dict = {}
  virtual_nodes = {}
  rowcount = 0

  nodesdata.each do |row|
    if row.length > 1
      rowcount += 1
      puts "row #{row}"
      thiskey = row[Config::DESC_IDENT_COLUMN]
      if thiskey.length > 0
        thisnode = {}
        thisnode["ident"] = thiskey
        # In case we came from graphml, this column could be empty
        thisid = row[Config::DESC_ID_COLUMN].to_s
        if thisid.length <= 0
          # TODO: Find a more robust strategy to generate identifiers
          # out of the Redmine space
          thisid = 2000000000 + rowcount
        end

        thisnode["id"] = thisid
        thisnode["subject"] = row[Config::DESC_SUBJECT_COLUMN]
        thisnode["description"] = row[Config::DESC_DESCRIPTION_COLUMN]
        thisnode["parent"] = row[Config::DESC_PARENT_COLUMN]
        blockingstr = row[Config::DESC_BLOCKING_COLUMN]
        thisnode["tracker"] = row[Config::DESC_TRACKER_COLUMN]
        thisnode["blocking"] = []
        thisnode["virtual"] = false
        if blockingstr && blockingstr.length > 0
          thisnode["blocking"] = blockingstr.split(",").map(&:strip)
        else
          if thisnode["tracker"] == "prMode"
            # The mode can not hold no destinations because the player will show an empty slot,
            # we will create a virtual value for it
            virtnode = {}
            virtid = (-virtual_nodes_counter).to_s
            virtual_nodes_counter += 1
            virtident = "VIRT#{virtid}"
            virtnode["ident"] = virtident
            virtnode["id"] = virtid
            virtnode["tracker"] = "prValue"
            virtnode["subject"] = thisnode["subject"]
            virtnode["description"] = thisnode["description"]
            virtnode["parent"] = thisnode["parent"]
            virtnode["blocking"] = []
            virtnode["precedents"] = []
            virtnode["children"] = []
            virtnode["virtual"] = true
            nodes_dict[virtident] = virtnode
            thisnode["blocking"] = [virtident]
          else
            thisnode["blocking"] = []
          end
        end

        # print("Parsed:",thisnode['blocking'])
        thisnode["min"] = row[Config::DESC_MIN_COLUMN]
        thisnode["default_data"] = row[Config::DESC_DEF_COLUMN]
        thisnode["max"] = row[Config::DESC_MAX_COLUMN]
        thisnode["deftext"] = row[Config::DESC_DEFTEXT_COLUMN]
        precedentstr = row[Config::DESC_PRECEDENTS_COLUMN]
        thisnode["precedents"] = []
        if precedentstr
          thisnode["precedents"] = precedentstr.split(",").map(&:strip)
        else
          thisnode["precedents"] = []
        end

        thisnode["children"] = []
        nodes_dict[thiskey] = thisnode
      end
    end
  end

  # Relationships
  nodes_dict.each do |thiskey, thisnode|
    # Parent relationship
    if thisnode["parent"]
      parentkey = thisnode["parent"]
      if parentkey.length > 0 && nodes_dict.key?(parentkey)
        thisparent = nodes_dict[parentkey]
        thisnode["parentnode"] = thisparent
        thisparent["children"] << thiskey
      end
    end
  end

  nodes_to_add = {}
  unless savemem
    # Create engineering modes
    nodes_dict.each do |thiskey, thisnode|
      if !thisnode["virtual"] && thisnode["tracker"] == "prSys"
        # Now, for each node of type prSys we must
        # create a new mode, engineering
        virtnode = {}
        virtid = (-virtual_nodes_counter).to_s
        virtual_nodes_counter += 1
        virtident = "ENG#{virtid}"
        virtnode["ident"] = virtident
        virtnode["id"] = virtid
        virtnode["tracker"] = "prMode"
        virtnode["subject"] = "Engineering"
        virtnode["description"] = "#{thisnode["subject"]} engineering mode"
        virtnode["parent"] = thiskey
        virtnode["parentnode"] = thisnode
        virtnode["blocking"] = []
        virtnode["precedents"] = []
        virtnode["children"] = []
        virtnode["virtual"] = false

        # The engineering mode will be blocked by all the modes of its children
        thisnode["children"].each do |ch0|
          if nodes_dict[ch0]["tracker"] == "prSys" || nodes_dict[ch0]["tracker"] == "prParam"
            nodes_dict[ch0]["children"].each do |ch|
              # If it is a virtual node, it can be not in nodes_dict, but in nodes_to_add
              if nodes_dict.key?(ch)
                if nodes_dict[ch]["tracker"] == "prMode" && !nodes_dict[ch]["virtual"]
                  virtnode["blocking"] << ch
                  puts "#{ch},#{nodes_dict[ch]["subject"]},bloquea a,#{virtident},#{virtnode["description"]}"
                end
              else
                if nodes_to_add[ch]["virtual"] == false
                  puts "CHECK THIS: A NON VIRTUAL NODE NOT IN NODES_DICT"
                end
              end
            end
          end
        end

        if virtnode["blocking"].length > 0
          nodes_to_add[virtident] = virtnode
          thisnode["children"] << virtident
        end
      end
    end
  end

  tree_dict = {}
  while tree_dict.length < nodes_dict.length
    nodes_dict.each do |k, v|
      if !tree_dict.key?(k)
        if !v.key?("parentnode")
          tree_dict[k] = v
          puts "Adding ROOT #{tree_dict[k]["subject"]}"
        else
          if nodes_dict[k]["parent"] && tree_dict.key?(nodes_dict[k]["parent"])
            tree_dict[k] = v
            puts "Adding NODE #{tree_dict[k]["parentnode"]["subject"]}: #{tree_dict[k]["subject"]}"
          end
        end
      end
    end
  end

  nodes_to_add.each do |n, virtnode|
    # Tengo que añadir el bloqueo de los modos de ingeniería
    # hijos a los modos de ingeniería padres
    thisparent = virtnode["parentnode"]
    thisparent["children"].each do |c|
      if c != n && thisparent["tracker"] == "prSys"
        tree_dict[c]["children"].each do |c2|
          if nodes_to_add.key?(c2)
            puts "#{c2},#{nodes_to_add[c2]["description"]},bloquea a,#{n},#{virtnode["description"]}"
            virtnode["blocking"] << c2
          end
        end
      end
    end
  end

  nodes_to_add.each do |n, virtnode|
    tree_dict[n] = virtnode
  end

  tree_dict.each do |k, n|
    puts "#{k},#{n["subject"]}"
  end

  tree_dict
end

methods_dict = {}

def create_ruby_code(nodes_dict, device_name, output_path, relative_path)
  methods_str = "    #----------------------------------------------------------------------\n"
  methods_str += "    #  Specific methods\n"
  methods_str += "    #----------------------------------------------------------------------\n\n"
  porish_str = "require 'PORIS'\n\n"
  porish_str += "class #{device_name}PORIS < PORISDoc\n"
  porish_str += "    def initialize(project_id)\n"
  porish_str += "        super(project_id)\n"
  porisc_str = ""

  porisc_init_str = ""
  porisc_init_rel_str = ""

  nodes_dict.each do |thiskey, thisnode|
    nodename = nametoidl(thisnode["subject"])
    thisclass = thisnode["tracker"]

    if thisclass == "prParam" || thisclass == "prSys"
      enumname = "enum_#{nodename}"
      enummodename = "#{enumname}Mode"
      choicesname = "#{nodename}ChoiceList"

      nodevar = "enum#{nodename}"
      modevar = "enum#{nodename}Mode"

      modevar_ = "#{modevar}_"
      nodevar_ = "#{nodevar}_"

      if thisclass == "prParam"
        # PORISParam prBinning;
        porish_str += "        @pr#{nodename} = PORISParam('#{nodename}')\n"
        if !savemem
          porish_str += "        @md#{nodename}Mode_UNKNOWN = PORISMode('#{nodename}Mode_UNKNOWN')\n"
          porish_str += "        @vl#{nodename}_UNKNOWN = PORISValue('#{nodename}_UNKNOWN')\n"
        else
          porish_str += "        @md#{nodename}UNKNOWN = PORISMode('UNKNOWN')\n"
          porish_str += "        @vl#{nodename}_UNKNOWN = PORISValue('UNKNOWN')\n"
        end

        methods_str += "\n    ## #{thisclass} #{nodename} \n"
        methods_str += "\n    # #{nodename}\n"
        methods_str += "    def get_#{nodename}\n"
        methods_str += "        @pr#{nodename}.getSelectedValue\n"
        methods_str += "    end\n\n"

        methods_str += "    def set_#{nodename}(value)\n"
        methods_str += "        @pr#{nodename}.setValue(value)\n"
        methods_str += "    end\n\n"

        parent_node = nil
        parent_node_name = ""
        if thisnode.key?("parentnode")
          parent_node = thisnode["parentnode"]
          parent_node_name = nametoidl(parent_node["subject"])
          if parent_node.key?("paramcounter")
            counter = parent_node["paramcounter"]
          else
            counter = 0
          end

          parent_node["paramcounter"] = counter + 1
        else
          counter = 0
        end

        porisc_init_str += "        addItem(@pr#{nodename})\n"
        if !savemem
          porisc_init_str += "        @pr#{nodename}.ident = '#{thisnode["ident"]}'\n"
          porisc_init_str += "        @pr#{nodename}.description = '#{desctomonit(thisnode["description"])}'\n"
        end

        if parent_node
          porisc_init_str += "        @sys#{parent_node_name}.addParam(@pr#{nodename})\n"
        end

        if !savemem
          porisc_init_str += "        addItem(@vl#{nodename}_UNKNOWN)\n"
        end

        if !savemem
          porisc_init_str += "        @vl#{nodename}_UNKNOWN.ident = 'UNK_#{thisnode["ident"]}'\n"
          porisc_init_str += "        @vl#{nodename}_UNKNOWN.description = 'Unknown value for #{nodename}'\n"
        end

        porisc_init_str += "        @pr#{nodename}.addValue(@vl#{nodename}_UNKNOWN)\n"

        if !savemem
          porisc_init_str += "        addItem(@md#{nodename}Mode_UNKNOWN)\n"
        else
          porisc_init_str += "        addItem(@md#{nodename}UNKNOWN)\n"
        end

        if !savemem
          porisc_init_str += "        @md#{nodename}Mode_UNKNOWN.ident = 'UNKM_#{thisnode["ident"]}'\n"
          porisc_init_str += "        @md#{nodename}Mode_UNKNOWN.description = 'Unknown mode for #{nodename}'\n"
        end

        if !savemem
          porisc_init_str += "        @pr#{nodename}.addMode(@md#{nodename}Mode_UNKNOWN)\n"
          porisc_init_str += "        @md#{nodename}Mode_UNKNOWN.addValue(@vl#{nodename}_UNKNOWN)\n"
          porisc_init_str += "        @md#{parent_node_name}Mode_UNKNOWN.addSubMode(@md#{nodename}Mode_UNKNOWN)\n"
        else
          porisc_init_str += "        @pr#{nodename}.addMode(@md#{nodename}UNKNOWN)\n"
          porisc_init_str += "        @md#{nodename}UNKNOWN.addValue(@vl#{nodename}_UNKNOWN)\n"
          porisc_init_str += "        @md#{parent_node_name}UNKNOWN.addSubMode(@md#{nodename}UNKNOWN)\n"
        end

        methods_str += "\n    ## #{nodename}Mode \n"
        methods_str += "    def get_#{nodename}Mode\n"
        methods_str += "        @pr#{nodename}.getSelectedMode\n"
        methods_str += "    end\n\n"

        methods_str += "    def set_#{nodename}Mode(mode)\n"
        methods_str += "        @pr#{nodename}.selectMode(mode)\n"
        methods_str += "    end\n\n"
      else
        # PORISSys prDetector;
        porish_str += "        @sys#{nodename} = PORISSys('#{nodename}')\n"
        if !savemem
          porish_str += "        @md#{nodename}Mode_UNKNOWN = PORISMode('#{nodename}Mode_UNKNOWN')\n"
        else
          porish_str += "        @md#{nodename}UNKNOWN = PORISMode('UNKNOWN')\n"
        end

        parent_node = nil
        parent_node_name = ""
        if thisnode.key?("parentnode")
          parent_node = thisnode["parentnode"]
          parent_node_name = nametoidl(parent_node["subject"])
          if parent_node.key?("syscounter")
            counter = parent_node["syscounter"]
          else
            counter = 0
          end

          parent_node["syscounter"] = counter + 1
        else
          counter = 0
          porish_str += "        setRoot(@sys#{nodename})\n"
        end

        porisc_init_str += "        addItem(@sys#{nodename})\n"
        if !savemem
          porisc_init_str += "        @sys#{nodename}.ident = '#{thisnode["ident"]}'\n"
          porisc_init_str += "        @sys#{nodename}.description = '#{desctomonit(thisnode["description"])}'\n"
        end

        if parent_node
          porisc_init_str += "        @sys#{parent_node_name}.addSubsystem(@sys#{nodename})\n"
        end

        if !savemem
          porisc_init_str += "        addItem(@md#{nodename}Mode_UNKNOWN)\n"
        else
          porisc_init_str += "        addItem(@md#{nodename}UNKNOWN)\n"
        end

        if !savemem
          porisc_init_str += "        @md#{nodename}Mode_UNKNOWN.ident = 'UNKM_#{thisnode["ident"]}'\n"
          porisc_init_str += "        @md#{nodename}Mode_UNKNOWN.description = '#{desctomonit(thisnode["description"])}'\n"
          porisc_init_str += "        @sys#{nodename}.addMode(@md#{nodename}Mode_UNKNOWN)\n"
        else
          porisc_init_str += "        @sys#{nodename}.addMode(@md#{nodename}UNKNOWN)\n"
        end

        methods_str += "\n    ## #{nodename}Mode \n"
        methods_str += "    def get_#{nodename}Mode\n"
        methods_str += "        @sys#{nodename}.getSelectedMode\n"
        methods_str += "    end\n\n"

        methods_str += "    def set_#{nodename}Mode(mode)\n"
        methods_str += "        @sys#{nodename}.selectMode(mode)\n"
        methods_str += "    end\n\n"
      end

      if thisclass == "prParam"
        values_str = "#{nodename}_UNKNOWN"
        values_short_str = "UNKNOWN"
        value_max_str = values_str
      end

      if !savemem
        modelist_str = "#{nodename}Mode_UNKNOWN"
      else
        modelist_str = "#{nodename}UNKNOWN"
      end

      modeshortlist_str = "UNKNOWN"
      switchfm2 = false
      if thisnode.key?("parentnode")
        parentnode = thisnode["parentnode"]
        if parentnode
          parentnodename = nametoidl(parentnode["subject"])
          parentnodeclass = parentnode["tracker"]
          parentnodevar = "enum#{parentnodename}"
          parentmodevar = "enum#{parentnodename}Mode"
          parentmodevar_ = "#{parentmodevar}_"
          parentnodevar_ = "#{parentnodevar}_"
          parentnodemodevar = parentnode

          parentnode["children"].each do |k|
            childnode = nodes_dict[k]
            childname = nametoidl(childnode["subject"])
            childclass = childnode["tracker"]
            if childclass == "prMode"
              anyvaluepresentparentinner = false
              firstfound = false

              childnode["blocking"].each do |kv|
                kvnode = nodes_dict[kv]
                kvname = nametoidl(kvnode["subject"])
                kvclass = kvnode["tracker"]
                if kvclass == "prMode"
                  if kvnode["parentnode"] == thisnode
                    if !savemem
                      porisc_init_rel_str += "        # Marcamos #{nodename}Mode_#{kvname} como elegible para #{parentnodename}Mode_#{childname}\n"
                      porisc_init_rel_str += "        @md#{parentnodename}Mode_#{childname}.addSubMode(@md#{nodename}Mode_#{kvname})\n"
                    else
                      porisc_init_rel_str += "        @md#{parentnodename}#{childname}.addSubMode(@md#{nodename}#{kvname})\n"
                    end

                    anyvaluepresentparentinner = true
                    if !firstfound
                      firstfound = true
                    end
                  end
                end
              end

              if anyvaluepresentparentinner
                anyvaluepresentparentouter = true
              end
            end
          end
        end
      else
        parentnode = nil
      end

      monitsetparam = nil
      methods_str_fl = ""
      minimum_float = nil
      maximum_float = nil
      if thisclass == "prParam"
        thisnode["children"].each do |k|
          childnode = nodes_dict[k]
          childname = nametoidl(childnode["subject"])
          childclass = childnode["tracker"]
          if childclass == "prMode"
            if !savemem
              modelist_str += ",#{nodename}Mode_#{childname}"
              modeshortlist_str += ",#{childname}"
            else
              modelist_str += ",#{nodename}#{childname}"
              modeshortlist_str += ",#{childname}"
            end

            anyvaluepresentinner = false
            firstdone = false

            childnode["blocking"].each do |kv|
              kvnode = nodes_dict[kv]
              kvname = nametoidl(kvnode["subject"])
              kvclass = kvnode["tracker"]
              if kvclass == "prValFloat" || kvclass == "prValText" || kvclass == "prValue"
                if kvnode["virtual"] == false
                  if !savemem
                    porisc_init_rel_str += "        # Marcamos #{nodename}_#{kvname} como elegible para #{nodename}Mode_#{childname}\n"
                    porisc_init_rel_str += "        @md#{nodename}Mode_#{childname}.addValue(@vl#{nodename}_#{kvname})\n"
                  else
                    porisc_init_rel_str += "        @md#{nodename}#{childname}.addValue(@vl#{nodename}_#{kvname})\n"
                  end

                  anyvaluepresentinner = true
                  if !firstdone
                    firstdone = true
                  end

                  if kvclass == "prValFloat"
                    if maximum_float.nil?
                      maximum_float = kvnode["max"]
                    else
                      maximum_float = [maximum_float, kvnode["max"]].max
                    end

                    if minimum_float.nil?
                      minimum_float = kvnode["min"]
                    else
                      minimum_float = [minimum_float, kvnode["min"]].min
                    end

                    methods_str_fl += "\n    ## #{thisclass} #{parentNodeName} \n"
                    methods_str_fl += "\n    # #{nodename}Double  \n"
                    methods_str_fl += "    def get_#{nodename}Double\n"
                    methods_str_fl += "        v = @pr#{nodename}.getSelectedValue\n"
                    methods_str_fl += "        v.__class__ = PORISValueFloat\n"
                    methods_str_fl += "        v.getData\n"
                    methods_str_fl += "    end\n\n"

                    methods_str_fl += "    def set_#{nodename}Double(data)\n"
                    methods_str_fl += "        @pr#{nodename}.getSelectedValue.setData(data)\n"
                    methods_str_fl += "    end\n\n"
                  end

                  if kvclass == "prValText"
                    methods_str_fl += "\n    ## #{thisclass} #{parentNodeName} \n"
                    methods_str_fl += "\n    # #{nodename}String #\n"
                    methods_str_fl += "    def get_#{nodename}String\n"
                    methods_str_fl += "        v = @pr#{nodename}.getSelectedValue\n"
                    methods_str_fl += "        v.__class__ = PORISValueString\n"
                    methods_str_fl += "        v.getData\n"
                    methods_str_fl += "    end\n\n"

                    methods_str_fl += "    def set_#{nodename}String(data)\n"
                    methods_str_fl += "        @pr#{nodename}.getSelectedValue.setData(data)\n"
                    methods_str_fl += "    end\n\n"
                  end
                end
              else
                if childclass == "prValFloat" || childclass == "prValText" || childclass == "prValue"
                  values_str += ",#{nodename}_#{childname}"
                  values_short_str += ",#{childname}"
                  value_max_str = "#{nodename}_#{childname}"
                end
              end
            end
          end
        end
        methods_str += methods_str_fl
      else
        if thisclass == "prSys"
          thisnode["children"].each do |k|
            childnode = nodes_dict[k]
            childname = nametoidl(childnode["subject"])
            childclass = childnode["tracker"]
            if childclass == "prMode"
              if !savemem
                modelist_str += ",#{nodename}Mode_#{childname}"
                modeshortlist_str += ",#{childname}"
              else
                modelist_str += ",#{nodename}#{childname}"
                modeshortlist_str += ",#{childname}"
              end
            end
          end
        end
      end
    else
      parent_node = thisnode["parentnode"]
      parent_node_name = nametoidl(parent_node["subject"])
      if thisclass == "prMode"
        #PORISMode prDetectorMode_Image;
        if !savemem
          porish_str += "        @md#{parent_node_name}Mode_#{nodename} = PORISMode('#{parent_node_name}Mode_#{nodename}')\n"
        else
          porish_str += "        @md#{parent_node_name}#{nodename} = PORISMode('#{nodename}')\n"
        end

        if !savemem
          porisc_init_str += "        addItem(@md#{parent_node_name}Mode_#{nodename})\n"
        else
          porisc_init_str += "        addItem(@md#{parent_node_name}_#{nodename})\n"
        end

        if !savemem
          porisc_init_str += "        @md#{parent_node_name}Mode_#{nodename}.ident = '#{thisnode["ident"]}'\n"
          porisc_init_str += "        @md#{parent_node_name}Mode_#{nodename}.description = '#{desctomonit(thisnode["description"])}'\n"
        end

        if parent_node["tracker"] == "prParam"
          if !savemem
            porisc_init_str += "        @pr#{parent_node_name}.addMode(@md#{parent_node_name}Mode_#{nodename})\n"
          else
            porisc_init_str += "        @pr#{parent_node_name}.addMode(@md#{parent_node_name}#{nodename})\n"
          end
        else
          if !savemem
            porisc_init_str += "        @sys#{parent_node_name}.addMode(@md#{parent_node_name}Mode_#{nodename})\n"
          else
            porisc_init_str += "        @sys#{parent_node_name}.addMode(@md#{parent_node_name}#{nodename})\n"
          end
        end
      else
        if thisclass == "prValue"
          if thisnode["virtual"] == false
            #PORISValue prBinning_1x1;
            if !savemem
              porish_str += "        @vl#{parent_node_name}_#{nodename} = PORISValue('#{parent_node_name}_#{nodename}')\n"
            else
              porish_str += "        @vl#{parent_node_name}_#{nodename} = PORISValue('#{nodename}')\n"
            end

            porisc_init_str += "        addItem(@vl#{parent_node_name}_#{nodename})\n"

            if !savemem
              porisc_init_str += "        @vl#{parent_node_name}_#{nodename}.ident = '#{thisnode["ident"]}'\n"
              porisc_init_str += "        @vl#{parent_node_name}_#{nodename}.description = '#{desctomonit(thisnode["description"])}'\n"
            end

            porisc_init_str += "        @pr#{parent_node_name}.addValue(@vl#{parent_node_name}_#{nodename})\n"
          end
        else
          if thisclass == "prValFloat"
            # PORISValueFloat prExpTime_Normal;
            if !savemem
              porishstr += "        self.vl#{parentNodeName}_#{nodename} = PORISValueFloat(\"#{parentNodeName}_#{nodename}\", #{thisnode["min"]}, #{thisnode["default_data"]}, #{thisnode["max"]})\n"
            else
              porishstr += "        self.vl#{parentNodeName}_#{nodename} = PORISValueFloat(\"#{nodename}\", #{thisnode["min"]}, #{thisnode["default_data"]}, #{thisnode["max"]})\n"
            end

            poriscinitstr += "        self.addItem(self.vl#{parentNodeName}_#{nodename})\n"

            if !savemem
              poriscinitstr += "        self.vl#{parentNodeName}_#{nodename}.ident = \"#{thisnode["ident"]}\"\n"
              poriscinitstr += "        self.vl#{parentNodeName}_#{nodename}.description = \"#{desctomonit(thisnode["description"])}\"\n"
            end

            poriscinitstr += "        self.pr#{parentNodeName}.addValue(self.vl#{parentNodeName}_#{nodename})\n"
          elsif thisclass == "prValText"
            if !savemem
              porishstr += "        self.vl#{parentNodeName}_#{nodename} = PORISValueString(\"#{parentNodeName}_#{nodename}\", '#{thisnode["deftext"]}')\n"
            else
              porishstr += "        self.vl#{parentNodeName}_#{nodename} = PORISValueString(\"#{nodename}\", '#{thisnode["deftext"]}')\n"
            end

            poriscinitstr += "        self.addItem(self.vl#{parentNodeName}_#{nodename})\n"
            if !savemem
              poriscinitstr += "        self.vl#{parentNodeName}_#{nodename}.ident = \"#{thisnode["ident"]}\"\n"
              poriscinitstr += "        self.vl#{parentNodeName}_#{nodename}.description = \"#{desctomonit(thisnode["description"])}\"\n"
            end

            poriscinitstr += "        self.pr#{parentNodeName}.addValue(self.vl#{parentNodeName}_#{nodename})\n"
          elsif thisclass == "prCmd"
            thisnode = {}
            thiskey = "#{parentNodeName}_#{nodename}"
            thisnode["method"] = "exec#{thiskey}"
            thisnode["node"] = parentNodeName
            methods_dict[thiskey] = thisnode
            methodsstr += "\n    ## Action trigger #{thiskey} ##\n"
            methodsstr += "    def #{thisnode["method"]}(value)\n"
            methodsstr += "        # Override this\n"
            methodsstr += "        true\n"
            methodsstr += "    end\n\n"
          else
            porishstr += "        #TODO: Other xx#{parentNodeName}_#{nodename}\n"
          end
        end
      end
    end
  end

  poriscinitstr += poriscinitrelstr + "\n"

  poriscstr += poriscinitstr

  File.open("./#{output_path}#{relative_path}/#{deviceName}PORIS.rb", "w") do |file|
    file.write(porishstr)
    file.write(poriscstr)
    file.write(methodsstr)
  end
end

require "fileutils"

def replace_string_file(pattern_file, dest_file, pattern_text, replacement_text)
  filedata = File.read(pattern_file)
  filedata.gsub!(pattern_text, replacement_text)
  File.write(dest_file, filedata)
end

def file_gen_from_pattern(pattern_file_str, src_file_str, dest_file_str, marker_str, particles_dir, replacement_dir)
  pattern_lines = File.readlines(pattern_file_str)

  lines_to_include = []
  particle_lines = {}

  particles_dir.each do |k, v|
    v.each { |particle| particle_lines[particle] = [] }
  end

  pattern_lines.each do |l|
    line_base = l
    replacement_dir.each { |k2, v2| line_base.gsub!(k2, v2) }

    particles_dir.each do |k, v|
      v.each do |particle|
        line_to_include = line_base.gsub(k, particle)
        particle_lines[particle] << line_to_include
      end
    end
  end

  particle_lines.each do |k, v|
    lines_to_include.concat(v)
    lines_to_include << "\n"
  end

  File.open(dest_file_str, "w") do |filedest|
    File.foreach(src_file_str) do |line|
      filedest.write(line)
      if line.include?(marker_str)
        filedest.write(lines_to_include.join)
      end
    end
  end
end

# Loads the ODS file into a nodes dictionary
nodes_dict = load_ods

# Creates the code in the src_c++ folder
create_python_code(nodes_dict, deviceName, args.output_path, relativepath)
