require_dependency 'cosmosys_issue'

# Patches Redmine's Issues dynamically.
module CosmosysIssuePorisPatch
  def self.included(base) # :nodoc:
    base.extend(ClassMethods)

    base.send(:include, InstanceMethods)

    # Same as typing in the class
    base.class_eval do
      unloadable # Send unloadable so it will not be unloaded in development
    end

  end

  module ClassMethods
  end

  module InstanceMethods
    @@prSystracker = Tracker.find_by_name('prSys')
    @@prParamtracker = Tracker.find_by_name('prParam')
    @@prModetracker = Tracker.find_by_name('prMode')
    @@prValuetracker = Tracker.find_by_name('prValue')
    @@prValFloattracker = Tracker.find_by_name('prValFloat')
    @@prValTexttracker = Tracker.find_by_name('prValText')
    @@prCmdtracker = Tracker.find_by_name('prCmd')

    @@prMincf = IssueCustomField.find_by_name('prMin')
    @@prDefaultcf = IssueCustomField.find_by_name('prDefault')
    @@prMaxcf = IssueCustomField.find_by_name('prMax')
    @@prDefaultTextcf = IssueCustomField.find_by_name('prDefaultText')

    def find_node(refproject, across_projects)
      if self.issue.parent == nil then
        return self.issue
      else
        if across_projects && (self.issue.project != refproject) then
          return self.issue
        else
          if self.issue.tracker == @@prSystracker || self.issue.tracker == @@prParamtracker then
            return self.issue
          else
            return self.issue.parent.csys.find_node(refproject, across_projects)
          end
        end
      end
    end

    def addPorisNode(elem, model)
      model.addItem(elem)
      elem.setIdent(self.get_identifier)
      elem.setDescription(self.issue.description)
    end


    def createElement(model)
      ret = nil
      if self.issue.tracker == @@prSystracker then
        ret = PORISSys.new(self.issue.subject)
      else
        if self.issue.tracker == @@prParamtracker then
          ret = PORISParam.new(self.issue.subject)
        else
          if self.issue.tracker == @@prModetracker then
            ret = PORISMode.new(self.issue.subject)
          else
            if self.issue.tracker == @@prValuetracker then
              ret = PORISValue.new(self.issue.subject)
            else
              if self.issue.tracker == @@prValFloattracker then

                minvalue = nil
                minvaluecf = self.issue.custom_values.find_by_custom_field_id(@@prMincf.id)
                if minvaluecf != nil then
                  minvalueval = minvaluecf.value
                  if minvalueval != nil then
                    minvalue = minvalueval
                  end
                end
                maxvalue = nil
                maxvaluecf = self.issue.custom_values.find_by_custom_field_id(@@prMaxcf.id)
                if maxvaluecf != nil then
                  maxvalueval = maxvaluecf.value
                  if maxvalueval != nil then
                    maxvalue = maxvalueval
                  end
                end
                defvalue = nil
                defvaluecf = self.issue.custom_values.find_by_custom_field_id(@@prDefaultcf.id)
                if defvaluecf != nil then
                  defvalueval = defvaluecf.value
                  if defvalueval != nil then
                    defvalue = defvalueval
                  end
                end
                ret = PORISValueFloat.new(self.issue.subject, minvalue, defvalue, maxvalue)
              else
                if self.issue.tracker == @@prValTexttracker then
                  defvalue = nil
                  defvaluecf = self.issue.custom_values.find_by_custom_field_id(@@prDefaultTextcf.id)
                  if defvaluecf != nil then
                    defvalueval = defvaluecf.value
                    if defvalueval != nil then
                      defvalue = defvalueval
                    end
                  end
                    ret = PORISValueString.new(self.issue.subject, defvalue)
                else
                  if self.issue.tracker == @@prCmdtracker then
                    # Skip at this moment
                  end
                end
              end
            end
          end
        end
      end

      if ret != nil then
        ret.setIdent(self.get_identifier)
        ret.setDescription(self.issue.description)
      end
      return ret
    end


    def toPORISDestinations(items_dict)
      # Then we add the relationships
      first_iteration = (items_dict.keys.length == 0)
      items_dict.keys.each{|i|
        puts('--> '+ i + ' ' + items_dict[i][:elem].getName)
        issue = items_dict[i][:issue]
        elem = items_dict[i][:elem]
        issue.relations_to.each{|r|
          if r.relation_type == 'blocks' then
            otherissue = Issue.find(r.issue_from_id)
            # In the case the other side of the relationship is in another project
            # then we can have errors when accessing the items_dict
            otherdict = items_dict[r.issue_from_id.to_s]
            if (otherdict != nil) then
              otherelem = otherdict[:elem]
              if otherelem.class == PORISMode then
                if elem.class == PORISMode then
                  puts(otherelem.getName + " is submode of " + elem.getName )
                  elem.addSubMode(otherelem)
                else
                  elem.addMode(otherelem)
                end
              else
                if otherelem.is_a?(PORISValue) then
                  elem.addValue(otherelem)
                end
              end
            end
          end
        }
      }
    end

    def toPORISXMLNode(model, items_dict, root_issue, across_projects)
      # First we add the root
      firstelement = (items_dict.keys.length == 0)
      if (firstelement) then
        puts("000000000000000000000000000000")
      end

      thiselement = self.createElement(model)
      if (thiselement != nil) then
        self.addPorisNode(thiselement, model)
        items_dict[self.id.to_s] = { elem: thiselement, issue:self.issue }

        # Then we add the subtree
        self.issue.children.each {|c|
          # Explore childrens only inside current project, unless across_projects flag is set
          puts("root: " + root_issue.project.identifier + " " + root_issue.subject)
          puts("self: " + self.issue.project.identifier + " " + self.issue.subject)
          puts("c: " + c.project.identifier + " " + c.subject)
          if across_projects || (self.issue.project == root_issue.project) || (c.tracker == @@prModetracker && (self.issue.parent.project == root_issue.project)) then
            puts("Ey!")
            items_dict, child_elem = c.csys.toPORISXMLNode(model, items_dict, root_issue, across_projects)
            if child_elem.class == PORISMode then
              thiselement.addMode(child_elem)
            else
              if child_elem.class == PORISSys then
                thiselement.addSubsystem(child_elem)
              else
                if child_elem.class == PORISParam then
                  thiselement.addParam(child_elem)
                else
                  if child_elem.is_a?(PORISValue) then
                    thiselement.addValue(child_elem)
                  else
                    puts("Skipping descendant " + c.subject + " because of unknown PORIS class " + child_elem.class.name)
                  end
                end
              end
            end
          end
        }
      end
      if (firstelement) then
        puts("AAAAAAAAAAAAAAAAAAAAAAAAAAA")
        self.toPORISDestinations(items_dict)
      end
      # Finally we return the items_dict
      return items_dict, thiselement
    end

    def toPORISXML(across_projects)
      thismodel = PORISDoc.new(self.issue.id)
      rootissue = self.find_node(self.issue.project, across_projects)
      items_dict = {}
      items_dict,thisroot = rootissue.csys.toPORISXMLNode(thismodel, {}, rootissue, across_projects)
      puts("************************")
      puts(items_dict.keys.to_s)
      puts("+++++++++++++++++++++++++")
      thismodel.setRoot(thisroot)
      puts("Number of nodes loaded ", thismodel.id_counter.to_s)

      # Finally we return the document
      return thismodel
    end

  end
end
# Add module to Issue
CosmosysIssue.send(:include, CosmosysIssuePorisPatch)

module CosmosysIssueOverwritePorisPatch


end
CosmosysIssue.send(:prepend, CosmosysIssueOverwritePorisPatch)
