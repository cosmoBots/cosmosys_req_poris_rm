Redmine::Plugin.register :cosmosys_req_poris do
  name 'Cosmosys PORIS plugin'
  author 'Txinto Vaz'
  description 'A plugin to activate PORIS features of the cosmosys_req plugin.'
  version '0.0.1'
  url 'http://cosmobots.eu'
  author_url 'http://cosmobots.eu'

  requires_redmine_plugin :cosmosys, :version_or_higher => '0.0.2'
  requires_redmine_plugin :cosmosys_git, :version_or_higher => '0.0.2'
  requires_redmine_plugin :cosmosys_req, :version_or_higher => '0.2.0'

  permission :csys_poris_menu, :csys_poris => :menu
  permission :csys_poris_porispanel, :csys_poris => :porispanel
  permission :csys_poris_porispanel_commit, :csys_poris => :porispanel_commit

  menu :project_menu, :csys_poris, {:controller => 'csys_poris', :action => 'menu' }, :caption => 'PORIS', :after => :activity, :param => :id

  require 'csys_poris'

  require 'PORIS'
  # TODO: Remove this example
  require 'ARCGenIIIPORIS'

  # Patches to the Redmine core.
  require 'csys_poris_project_patch'
  require 'csys_poris_issue_patch'

  Mime::Type.register 'text/poris', :poris

end
