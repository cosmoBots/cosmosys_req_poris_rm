class CreateCsysPoris < ActiveRecord::Migration[5.2]
	def up
  
		t = Tracker.find_by_name("rq")
		
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
		prSys = Tracker.new
		prSys.name = "prSys"
		prSys.copy_from(t)
		prSys.save
		prSys.copy_workflow_rules(t)
		tracker_ids << prSys.id
		prSys.custom_field_ids -= unwanted_cfs
		

		prParam = Tracker.new
		prParam.name = "prParam"
		prParam.copy_from(t)
		prParam.save
		prParam.copy_workflow_rules(t)
		tracker_ids << prParam.id
		prParam.custom_field_ids -= unwanted_cfs		

		prMode = Tracker.new
		prMode.name = "prMode"
		prMode.copy_from(t)
		prMode.save
		prMode.copy_workflow_rules(t)
		tracker_ids << prMode.id
		prMode.custom_field_ids -= unwanted_cfs		

		prValue = Tracker.new
		prValue.name = "prValue"
		prValue.copy_from(t)
		prValue.save
		prValue.copy_workflow_rules(t)
		tracker_ids << prValue.id
		prValue.custom_field_ids -= unwanted_cfs		

		prValFloat = Tracker.new
		prValFloat.name = "prValFloat"
		prValFloat.copy_from(t)
		prValFloat.save
		prValFloat.copy_workflow_rules(t)
		tracker_ids << prValFloat.id
		prValFloat.custom_field_ids -= unwanted_cfs		

		prValText = Tracker.new
		prValText.name = "prValText"
		prValText.copy_from(t)
		prValText.save
		prValText.copy_workflow_rules(t)
		tracker_ids << prValText.id
		prValText.custom_field_ids -= unwanted_cfs

		prminfield = IssueCustomField.create!(:name => 'prMin', 
		:field_format => 'float', :description => 'Minimum float value',
		:is_for_all => true, :tracker_ids => [prValFloat.id])

		prdefault = IssueCustomField.create!(:name => 'prDefault', 
		:field_format => 'float', :description => 'Default float value',
		:is_for_all => true, :tracker_ids => [prValFloat.id])

		prmaxfield = IssueCustomField.create!(:name => 'prMax', 
		:field_format => 'float', :description => 'Maximum float value',
		:is_for_all => true, :tracker_ids => [prValFloat.id])

		rqdefaulttextfield = IssueCustomField.create!(:name => 'prDefaultText', 
			:description => 'Default text for a value',
			:field_format => 'string', :searchable => true,
			:is_for_all => true, :tracker_ids => [prValText.id])

		rqsrclabelfield = IssueCustomField.create!(:name => 'prSrcLabel', 
			:description => 'The label in source code.',
			:field_format => 'string', :searchable => true,
			:is_for_all => true, :tracker_ids => tracker_ids)		
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
		# Custom fields
		tmp = IssueCustomField.find_by_name('prMin')
		if (tmp != nil) then
			tmp.destroy
		end
		tmp = IssueCustomField.find_by_name('prDefault')
		if (tmp != nil) then
			tmp.destroy
		end
		tmp = IssueCustomField.find_by_name('prMax')
		if (tmp != nil) then
			tmp.destroy
		end
		tmp = IssueCustomField.find_by_name('prDefaultText')
		if (tmp != nil) then
			tmp.destroy
		end
		tmp = IssueCustomField.find_by_name('prSrcLabel')
		if (tmp != nil) then
			tmp.destroy
		end
  
		rqtrak = Tracker.find_by_name('rq')

		trak = Tracker.find_by_name('prSys')
		if (trak != nil) then
			change_issues_from_tracker(trak,rqtrak)
			trak.destroy
		end
  
		trak = Tracker.find_by_name('prParam')
		if (trak != nil) then
			change_issues_from_tracker(trak,rqtrak)
			trak.destroy
		end
  
		trak = Tracker.find_by_name('prMode')
		if (trak != nil) then
			change_issues_from_tracker(trak,rqtrak)
			trak.destroy
		end
  
		trak = Tracker.find_by_name('prValue')
		if (trak != nil) then
			change_issues_from_tracker(trak,rqtrak)
			trak.destroy
		end
		  
		trak = Tracker.find_by_name('prValFloat')
		if (trak != nil) then
			change_issues_from_tracker(trak,rqtrak)
			trak.destroy
		end
  
		trak = Tracker.find_by_name('prValText')
		if (trak != nil) then
			change_issues_from_tracker(trak,rqtrak)
			trak.destroy
		end	  
	end
  end
  