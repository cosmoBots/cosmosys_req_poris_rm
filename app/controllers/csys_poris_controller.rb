class CsysPorisController < ApplicationController
  before_action :find_this_project
  before_action :authorize, :except => [:find_this_project, :form,:form_commit]
  skip_before_action :check_if_login_required, only: [:form, :form_commit]

  def find_this_project
    # @project variable must be set before calling the authorize filter
    if (params[:issue_id]) then
      @issue = Issue.find(params[:issue_id])
      @project = @issue.project
    else
      @project = params[:id] ? Project.find(params[:id]) : Project.first
    end
    #print("Project: "+@project.to_s+"\n")
  end

  def menu
  end

# BEGIN ******************** Port this to PORIS JSON

private def create_project_tree(current_issue, root_url, thisproject, thiskey)
  issue_url = root_url + '/projects/' + thisproject.identifier
  issue_new_url = root_url + '/projects/' + thisproject.identifier + '/issues/new'
  cfprefixvalue = thisproject.code
  childrentypevector = thisproject.trackers.map{|t| t.name}

  # TODO: CHANGE THESE PATCHES BY A CALLBACK OR SOME PROPERTY, SO COSMOSYS DOES NOT KNOW ANYTHING ABOUT CSYSREQ
  childrentypevector += ["rqInfo","rqComplex","rqOpt","rqMech","rqHw","rqSw"] if childrentypevector.include?("rq")

  infobox = [
    ["Project:"],
    [thisproject.name,"/projects/"+thisproject.identifier,"link"],
    [thisproject.description],
  ]

  tree_node = {
    'title':  cfprefixvalue + ". " + thisproject.identifier  + ": " + thisproject.name,
    'subtitle': thisproject.description,
    'expanded': true,
    'id': thisproject.id.to_s,
    'return_url': root_url+'/cosmosys/'+thisproject.id.to_s+'/treeview.json'+'?key='+thiskey,
    'issue_show_url': issue_url+'?key='+thiskey,
    'issue_new_url': issue_new_url+'?key='+thiskey,
    'issue_edit_url': issue_url+"/edit"+'?key='+thiskey,
    'leaf': childrentypevector.size <= 0,
    'nodetype': "project",
    'childrentype': childrentypevector,
    'info': infobox,
    'children': []
  }

  childrenitems = thisproject.issues.where(:parent => nil).sort_by {|obj| obj.csys.chapter_order}

  childrenitems = thisproject.issues.select { |n| n.parent.project != thisproject } if childrenitems.size == 0

  childrenitems.each {|c| tree_node[:children] << create_tree(c,root_url,false,thisproject,thiskey) if c.csys.shall_report}

  thisproject.csys.update_cschapters

  return tree_node
end

private def create_nonproject_tree(current_issue, root_url, thisproject, thiskey)
  issue_url = root_url + '/issues/' + current_issue.id.to_s
  issue_new_url = root_url + '/projects/' + thisproject.identifier + '/issues/new?issue[parent_issue_id]=' + current_issue.id.to_s + '&issue[tracker_id]=' + "Feature"
  cftitlevalue = current_issue.subject
  cfchapterstring = current_issue.chapter_str
  childrentypevector = CosmosysIssue.get_childrentype(current_issue,current_issue.tracker)
  if current_issue.tracker.name != "rq" then
    childrentypevector += ["rqInfo","rqComplex","rqOpt","rqMech","rqHw","rqSw"] if childrentypevector.include?("rq")
  end
  currentnodetype = CosmosysIssue.get_nodetype(current_issue,current_issue.tracker)

  infobox = [
    [currentnodetype+": "+current_issue.csys.identifier],
    [current_issue.description],
  ]

  if current_issue.relations_to.size > 0 then
    infobox += [["*** Incoming relations ***"]]
    current_issue.relations_to.each{|r|
      infobox += [["<- "+translate_rel(true,r.relation_type)+" '"+r.issue_from.subject+"'","/issues/"+r.issue_from_id.to_s,r.issue_from.csys.identifier]]
    }
  end

  if current_issue.relations_from.size > 0 then
    infobox += [["*** Outgoing relations ***"]]
    current_issue.relations_from.each{|r|
      infobox += [["-> "+translate_rel(false,r.relation_type)+" '"+r.issue_to.subject+"'","/issues/"+r.issue_to_id.to_s,r.issue_to.csys.identifier]]
    }
  end

  if (current_issue.children.size > 0) then
    titlestring = cfchapterstring + " : " + cftitlevalue
  else
    # TODO: CHANGE THESE PATCHES BY A CALLBACK OR SOME PROPERTY, SO COSMOSYS DOES NOT KNOW ANYTHING ABOUT CSYSREQ
    if currentnodetype == "rqInfo" or current_issue.tracker.name == "csInfo" then
      titlestring = cfchapterstring + " " + cftitlevalue
    else
      titlestring = cfchapterstring + " " + current_issue.csys.get_identifier  + ": " + cftitlevalue
    end
  end

  tree_node = {
    'title':  titlestring,
    'subtitle': current_issue.description,
    'expanded': true,
    'id': current_issue.id.to_s,
    'return_url': root_url+'/cosmosys/'+thisproject.id.to_s+'/treeview.json?issue_id='+current_issue.id.to_s+'?key='+thiskey,
    'issue_show_url': issue_url+'?key='+thiskey,
    'issue_new_url': issue_new_url+'?key='+thiskey,
    'issue_edit_url': issue_url+"/edit"+'?key='+thiskey,
    'leaf': childrentypevector.size <= 0,
    'nodetype': currentnodetype,
    'childrentype': childrentypevector,
    'info': infobox,
    'children': []
  }

  childrenitems = current_issue.children.sort_by {|obj| obj.csys.chapter_order}

  childrenitems.each {|c| tree_node[:children] << create_tree(c,root_url,false,thisproject,thiskey) if c.csys.shall_report}

  return tree_node
end

def create_tree(current_issue, root_url, is_project, thisproject, thiskey)
  return is_project ?
    create_project_tree(current_issue, root_url, thisproject, thiskey) :
    create_nonproject_tree(current_issue, root_url, thisproject, thiskey)
end


# END ******************** Port this to PORIS JSON
















  def form
    require 'json'

    # Get the user, either from the key or from the current user
    u = (params[:key] != nil) ? User.find_by_api_key(params[:key]) : User.current

    # Block access if the user is not allowed to see the project
    raise ::Unauthorized unless u != nil
    raise ::Unauthorized unless u.class.name == "User" || params[:key] != nil
    raise ::Unauthorized unless u.class.name == "User" || params[:key] != ""
    raise ::Unauthorized unless u.allowed_to?(:csys_poris_form, @project)

    # Do nothing if the request is not a GET
    return unless request.get?

    respond_to do |format|
      format.html {
        # calculate
        puts("key")
        @key = User.current.api_key
        puts(@key)
        splitted_url = request.fullpath.split('/csys_poris')
        root_url = splitted_url[0]
        @treeviewpath = root_url+"/csys_poris/"+@project.identifier+"/form"
      }

      format.json {
        treedata = []
        is_project = @issue ? false : true

        if (@issue) then
          thisnodeid = params[:issue_id]
        else
          res = @project.issues.where(:parent => nil).limit(1)
          thisnodeid = (res.size > 0) ? res.first.id : nil
        end

        thisnode = Issue.find(thisnodeid) if thisnodeid != nil

        splitted_url = request.fullpath.split('/csys_poris')
        root_url = splitted_url[0]

        tree_node = create_tree(thisnode,root_url,is_project,@project,u.api_key)

        treedata << tree_node

        ActiveSupport.escape_html_entities_in_json = false
        render json: treedata
        ActiveSupport.escape_html_entities_in_json = true
      }
    end
  end

  def form_commit
    # Get the user, either from the key or from the current user
    u = (params[:key] != nil) ? User.find_by_api_key(params[:key]) : User.current

    # Block access if the user is not allowed to see the project
    raise ::Unauthorized unless u != nil
    raise ::Unauthorized unless u.class.name == "User" || params[:key] != nil
    raise ::Unauthorized unless u.class.name == "User" || params[:key] != ""
    raise ::Unauthorized unless u.allowed_to?(:csys_poris_form_commit, @project)

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

    redirect_to :action => 'form', :method => :get, :id => @project.id
  end

end
