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

end
