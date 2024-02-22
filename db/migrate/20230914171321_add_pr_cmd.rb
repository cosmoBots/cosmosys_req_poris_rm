class AddPrCmd < ActiveRecord::Migration[5.2]
	def up
  
		t2 = Tracker.find_by_name("prCmd")
		# This is for the case prCmd has been already created by hand
		if t2 == nil then
			t = Tracker.find_by_name("prValue")
			
			# prCmd
			prCmd = Tracker.new
			prCmd.name = "prCmd"
			prCmd.copy_from(t)
			prCmd.save
			prCmd.copy_workflow_rules(t)
		
			rqsrclabelfield = IssueCustomField.find_by_name('prSrcLabel')
		    rqsrclabelfield.tracker_ids << prCmd.id
		end
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
		prValue = Tracker.find_by_name('prValue')
    rqsrclabelfield = IssueCustomField.find_by_name('prSrcLabel')
		prCmd = Tracker.find_by_name('prCmd')
    rqsrclabelfield.tracker_ids.delete(prCmd.id)

		if (prCmd != nil) then
			change_issues_from_tracker(prCmd,prValue)
			prCmd.destroy
		end
	end

end
