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

    def toPORISXML
      thismodel = ARCGenIIIPORIS.new(self.id)
    end

  end
end
# Add module to Issue
CosmosysProject.send(:include, CosmosysProjectPatch)

module CosmosysIssueOverwritePatch

  @@rqtracker = Tracker.find_by_name('rq')
  @@cftype = IssueCustomField.find_by_name('rqType')
  @@cflevel = IssueCustomField.find_by_name("rqLevel")
  @@cfvar = IssueCustomField.find_by_name("rqVar")
  @@cfvalue = IssueCustomField.find_by_name("rqValue")
  @@cfverif = CustomField.find_by_name("rqVerif")
  @@cfverifdescr = CustomField.find_by_name("rqVerifDescr")
  @@cfrationale = CustomField.find_by_name("rqRationale")
  @@cfcomplst = IssueCustomField.find_by_name('rqComplanceState')
  @@cfcompldoc = IssueCustomField.find_by_name('rqComplianceDocs')
  @@cfrefdocs = IssueCustomField.find_by_name('rqRefDocs')
  @@cfapldocs = IssueCustomField.find_by_name('rqAplDocs')
  @@csinfotracker = Tracker.find_by_name('csInfo')

end
CosmosysProject.send(:prepend, CosmosysIssueOverwritePatch)
