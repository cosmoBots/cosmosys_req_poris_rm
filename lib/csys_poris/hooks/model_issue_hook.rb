module CosmosysReq
  module Hooks
    class ModelIssueHook < Redmine::Hook::ViewListener
      render_on :view_issues_sidebar_queries_bottom, :partial => "csys_poris/issues"
    end
  end
end
