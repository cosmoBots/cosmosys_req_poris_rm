class AddPorisLabel < ActiveRecord::Migration[5.2]
  def up
    porisSysTracker = Tracker.find_by_name("prSys")
    porisParamTracker = Tracker.find_by_name("prParam")
    porisModeTracker = Tracker.find_by_name("prMode")
    porisValueTracker = Tracker.find_by_name("prValue")
    porisValueFloatTracker = Tracker.find_by_name("prValFloat")
    porisValueTextTracker = Tracker.find_by_name("prValText")
    porisCommandTracker = Tracker.find_by_name("prCmd")

    porisTrackers = [porisSysTracker, porisParamTracker, porisModeTracker, porisValueTracker, porisValueFloatTracker, porisValueTextTracker, porisCommandTracker]
    porisTrackerIDs = []
    porisTrackers.each {|t| porisTrackerIDs << t.id}

    rqsrcfield = IssueCustomField.create!(:name => 'prLabel',
		:field_format => 'string', :searchable => true,
		:is_for_all => true, :tracker_ids => porisTrackerIDs)

=begin
    # We do not need to do this, but it is kept here for reference

    rqManagerRole = Role.find_by_name("rqMngr")
    rqWriterRole = Role.find_by_name("rqWriter")

    rqWriterRoles = [rqManagerRole, rqWriterRole]
    rqWriterRoleIDs = []
    rqWriterRoles.each {|r| rqWriterRoleIDs << r.id}

    WorkflowTransition.all.each{|wft|
		  if (porisTrackers.include?(wft.tracker)) then
        if (not rqWriterRoleIDs.include?(wft.role_id)) then
          ro_field(wft.tracker_id,rqsrcfield.id,wft.role_id,wft.old_status_id,wft.new_status_id)
        end
      end
    }
=end
  end

  def down
		tmp = IssueCustomField.find_by_name('prLabel')
		if (tmp != nil) then
			tmp.destroy
		end
  end
end
