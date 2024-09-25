class AddPermissions < ActiveRecord::Migration[5.2]
  def up
		Role.all.each{|tr|
			changed = false

=begin
      permission :csys_poris_menu, :csys_poris => :menu
      permission :csys_poris_porispanel, :csys_poris => :porispanel
      permission :csys_poris_porispanel_commit, :csys_poris => :porispanel_commit
=end

			if tr.permissions.include?(:view_issues) then
				tr.permissions += [
          :csys_poris_menu,
          :csys_poris_porispanel
				]
				changed = true
			end
			if tr.permissions.include?(:edit_issues) then
				tr.permissions += [
          :csys_poris_porispanel_commit,
				]
				changed = true
			end
			if changed then
				tr.save
			end
		}
  end

  def down

  end
end
