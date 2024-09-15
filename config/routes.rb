# Plugin's routes
# See: http://guides.rubyonrails.org/routing.html
get 'csys_poris/:id/menu', :to => 'csys_poris#menu'
get 'csys_poris/:id/porispanel', :to => 'csys_poris#porispanel'
post 'csys_poris/:id/porispanel', :to => 'csys_poris#porispanel_commit'
