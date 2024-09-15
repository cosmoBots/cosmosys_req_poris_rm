class CsysPorisController < ApplicationController
  before_action :find_this_project
  before_action :authorize, :except => [:find_this_project]

  def find_this_project
    # @project variable must be set before calling the authorize filter
    if (params[:issue_id]) then
      @issue = Issue.find(params[:issue_id])
      @project = @issue.project
    else
      @project = params[:id] ? Project.find(params[:id]) : Project.first
      @issue = nil
    end
    #print("Project: "+@project.to_s+"\n")
  end

  def porispanel
    # Do nothing if the request is not a GET
    return unless request.get?

    respond_to do |format|
      format.html {
        # calculate
        puts("key")
        @key = User.current.api_key
        puts(@key)
        across_sub = false
        if params[:across_sub] != nil then
          if params[:across_sub] == "y" then
            across_sub = true
          end
        end
        across_sup= false
        if params[:across_sup] != nil then
          if params[:across_sup] == "y" then
            across_sup = true
          end
        end
        from_root= false
        if params[:from_root] != nil then
          if params[:from_root] == "y" then
            from_root = true
          end
        end
        if (@issue != nil) then
          @formpath = url_for(:controller => 'csys_poris', :action => 'porispanel', :format => 'poris', @issue_id => @issue_id.to_s, :key => User.current.api_key)
        else
          @formpath = url_for(:controller => 'csys_poris', :action => 'porispanel', :format => 'poris', :key => User.current.api_key)
        end
        if across_sub then
          @formpath += "&across_sub=y"
        end
        if across_sup then
          @formpath += "&across_sup=y"
        end
        if from_root then
          @formpath += "&from_root=y"
        end
      }

      format.poris {
        is_project = @issue ? false : true

        across_sub = false
        if params[:across_sub] != nil then
          if params[:across_sub] == "y" then
            across_sub = true
          end
        end
        across_sup= false
        if params[:across_sup] != nil then
          if params[:across_sup] == "y" then
            across_sup = true
          end
        end
        from_root= false
        if params[:from_root] != nil then
          if params[:from_root] == "y" then
            from_root = true
          end
        end

        if (@issue != nil) then
          thismodel = @issue.csys.toPORISXML(from_root, across_sup, across_sub)
        else
          thismodel = @project.csys.toPORISXML(across_sup, across_sub)
        end

        ActiveSupport.escape_html_entities_in_json = false
        render xml: thismodel.toXML.to_s
        ActiveSupport.escape_html_entities_in_json = true
      }
    end
  end

  def menu
    porispanel
  end

  def porispanel_commit
    # Get the user, either from the key or from the current user
    u = (params[:key] != nil) ? User.find_by_api_key(params[:key]) : User.current

    # Block access if the user is not allowed to see the project
    raise ::Unauthorized unless u != nil
    raise ::Unauthorized unless u.class.name == "User" || params[:key] != nil
    raise ::Unauthorized unless u.class.name == "User" || params[:key] != ""
    raise ::Unauthorized unless u.allowed_to?(:csys_poris_porispanel_commit, @project)

    # Do nothing if the request is a GET
    return if request.get?

    structure = params[:structure]
    json_params_wrapper = JSON.parse(request.body.read())
    structure = json_params_wrapper['structure']
    print ("structure: \n\n")
    puts structure
    rootnode = structure[0]
    ch = rootnode['children']
    chord = 1
    if (ch != nil) then
      ch.each { |c|
        CosmosysIssue.update_node(c,nil,chord)
        chord += 1
      }
    end

    redirect_to :action => 'porispanel', :method => :get, :id => @project.id
  end

end
