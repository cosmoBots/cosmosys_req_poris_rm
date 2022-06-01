class AddCmd < ActiveRecord::Migration[5.2]
  def up
		t = Tracker.find_by_name("prMode")
		
		tracker_ids = []

		# Unwanted custom_fields
		unwanted_cfs = []
		ucf = IssueCustomField.find_by_name("rqType")
		unwanted_cfs << ucf.id
		ucf = IssueCustomField.find_by_name("rqLevel")
		unwanted_cfs << ucf.id
		ucf = IssueCustomField.find_by_name("rqRationale")
		unwanted_cfs << ucf.id
		ucf = IssueCustomField.find_by_name("rqSources")
		unwanted_cfs << ucf.id
		ucf = IssueCustomField.find_by_name("rqVar")
		unwanted_cfs << ucf.id
		ucf = IssueCustomField.find_by_name("rqValue")
		unwanted_cfs << ucf.id


		# prSys
		prCmd = Tracker.new
		prCmd.name = "prCmd"
		prCmd.copy_from(t)
		prCmd.save
		prCmd.copy_workflow_rules(t)
		tracker_ids << prCmd.id
		prCmd.custom_field_ids -= unwanted_cfs

    tmp = IssueCustomField.find_by_name('prSrcLabel')
    tmp.tracker_ids << prCmd.id
  end

  def change_issues_from_tracker(srctracker,desttracker)
		iss = Issue.where(tracker:srctracker)
		iss.each{|i|
			pr = i.project
			if not (pr.trackers.include?(desttracker)) then
				pr.trackers << desttracker
			end
			i.tracker = desttracker
			i.save
		}		
	end

	def down
  
		rqtrak = Tracker.find_by_name('prMode')

		trak = Tracker.find_by_name('prCmd')
		if (trak != nil) then
			change_issues_from_tracker(trak,rqtrak)
			trak.destroy
		end
  end
end
