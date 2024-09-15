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

    def toPORISXML(across_super_projects, across_sub_projects)
      thismodel = PORISDoc.new(self.project.id)
      rootissue = self.project.issues.first
      # Maybe there is no item in the project, so we can not continue
      if (rootissue != nil) then
        puts("Root issue candidate is " + rootissue.subject)
        rootissue = rootissue.csys.find_root(self.project, across_super_projects)
        puts("Root issue is " + rootissue.subject)
        # Maybe there is no item in the project, so we can not continue
        if (rootissue != nil) then
            items_dict = {}
            puts("************ PROJECT ************")
            items_dict,thisroot = rootissue.csys.toPORISXMLNode(thismodel, {}, rootissue, across_sub_projects)
            puts("************ ITEMS_DICT ************")
            puts(items_dict.keys.to_s)
            puts("************ THISROOT ************")
            thismodel.setRoot(thisroot)
        end
      end
      # Finally we return the document
      return thismodel
    end

    def calculate_form_path(root_url, i, from_root, across_sup, across_sub, key)
      formpath = ""
      if (i != nil) then
        formpath = root_url+"/csys_poris/" + self.project.identifier + "/porispanel.xml?issue_id="+i.id.to_s+"&key="+key
      else
        formpath = root_url+"/csys_poris/" + self.project.identifier + "/porispanel.xml?key="+key
      end
      if across_sub then
        formpath += "&across_sub=y"
      end
      if across_sup then
        formpath += "&across_sup=y"
      end
      if from_root then
        formpath += "&from_root=y"
      end
      return formpath      
    end

  end
end
# Add module to Issue
CosmosysProject.send(:include, CosmosysProjectPatch)

module CosmosysIssueOverwritePatch

end
CosmosysProject.send(:prepend, CosmosysIssueOverwritePatch)
