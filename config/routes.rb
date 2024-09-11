# Plugin's routes
# See: http://guides.rubyonrails.org/routing.html
get 'csys_poris/:id/menu', :to => 'csys_poris#menu'
get 'csys_poris/:id/form', :to => 'csys_poris#form'
post 'csys_poris/:id/form', :to => 'csys_poris#form_commit'
get 'csys_poris_issues/:id/form', :to => 'csys_poris_issues#form'
post 'csys_poris_issues/:id/form', :to => 'csys_poris_issues#form_commit'
