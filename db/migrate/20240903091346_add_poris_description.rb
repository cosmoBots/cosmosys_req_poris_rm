class AddPorisDescription < ActiveRecord::Migration[5.2]
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

    rqManagerRole = Role.find_by_name("rqMngr")
    rqWriterRole = Role.find_by_name("rqWriter")

    rqWriterRoles = [rqManagerRole, rqWriterRole]
    rqWriterRoleIDs = []
    rqWriterRoles.each {|r| rqWriterRoleIDs << r.id}

    rqrationalefield = IssueCustomField.create!(:name => 'prModelInput',
		:field_format => 'text',
		:description => 'YAML text for describing a PORIS subtree, for fast creation',
		:min_length => '', :max_length => '', :regexp => '',
		:default_value => '', :is_required => false,
		:is_filter => false, :searchable => false,
		:visible => false, :role_ids => rqWriterRoleIDs,
		:full_width_layout => "1", :text_formatting => "full",
		:is_for_all => true, :tracker_ids => porisTrackerIDs
    )
  end

  def down
		tmp = IssueCustomField.find_by_name('prModelInput')
		if (tmp != nil) then
			tmp.destroy
		end
  end
end
