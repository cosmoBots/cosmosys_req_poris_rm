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

    def find_sys(refproject)
      if self.issue.parent == nil then
        return self.issue
      else
        if self.issue.project != refproject then
          return self.issue
        else
          if self.issue.tracker == @@prSystracker then
            return self.issue
          else
            return self.issue.parent.csys.find_sys(refproject)
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

    def toPORISXMLNode(model, items_dict)
      # First we add the root
      thiselement = self.createElement(model)
      if (thiselement != nil) then
        self.addPorisNode(thiselement, model)
        items_dict[self.id.to_s] = thiselement

        # Then we add the subtree
        self.issue.children.each {|c|
          items_dict, child_elem = c.csys.toPORISXMLNode(model,items_dict)
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
        }
        # Then we add the relationships


        # Finally we return the items_dict
      end
      return items_dict, thiselement
    end

    def toPORISXML
      thismodel = PORISDoc.new(self.issue.id)
      rootissue = self.find_sys(self.issue.project)
      items_dict = {}
      items_dict,thisroot = rootissue.csys.toPORISXMLNode(thismodel,{})
      puts(items_dict)
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
