Rails.application.routes.draw do

  get 'yourschedule/:id', to: 'test#schedule'


  resources :event_members
  resources :group_members
  resources :shifts
  resources :roles
  resources :events
  resources :groups
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api, :defaults => {:format => :json} do
    namespace :v1 do
      post '/register', to: 'users#create'
      post '/login', to: 'users#login'
      get '/user', to: 'users#show'
      get '/user-events', to: 'users#events'
      get '/user-groups', to: 'users#groups'
      post '/group-members/:id', to: 'group_members#toggle'
      post '/user', to: 'users#update'
      get '/your-events', to: 'users#created_events'
      get '/your-shifts', to: 'users#shifts'
      get '/events', to: 'events#index'
      get '/groups', to: 'groups#index'
      get '/events/:id', to: 'events#show'
      get '/groups/:id', to: 'groups#show'
      get '/roles/:id', to: 'events#roles'
      get '/shifts/:id', to: 'events#shifts'
      post '/shift/:id', to: 'users#claim'
      get '/group-events/:id', to: 'groups#events'

      resources :users
      resources :events
      resources :groups
      resources :group_members
    end
  end

  # , :path => "", :constraints => {:subdomain => "api"}

  # constraints subdomain: 'api' do
  #   scope module: 'api', :defaults => {:format => :json} do
  #     namespace :v1 do
  #       resources :users
  #       resources :events
  #     end
  #   end
  # end


end

