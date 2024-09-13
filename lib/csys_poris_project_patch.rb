require_dependency 'cosmosys_project'

# Patches Redmine's Issues dynamically.
module CosmosysProjectPatch
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

    def toPORISXML(across_projects)
      thismodel = PORISDoc.new(self.project.id)
      rootissue = self.project.issues.first
      # Maybe there is no item in the project, so we can not continue
      if (rootissue != nil) then
        rootissue = rootissue.csys.find_node(self.project, false)
        # Maybe there is no item in the project, so we can not continue
        if (rootissue != nil) then
            items_dict = {}
            puts("************ PROJECT ************")
            items_dict,thisroot = rootissue.csys.toPORISXMLNode(thismodel, {}, rootissue, across_projects)
            puts("************ ITEMS_DICT ************")
            puts(items_dict.keys.to_s)
            puts("************ THISROOT ************")
            thismodel.setRoot(thisroot)
        end
      end
      # Finally we return the document
      return thismodel
    end

  end
end
# Add module to Issue
CosmosysProject.send(:include, CosmosysProjectPatch)

module CosmosysIssueOverwritePatch

end
CosmosysProject.send(:prepend, CosmosysIssueOverwritePatch)
