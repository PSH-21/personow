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
      # post '/group-members', to: 'group_members#create'
      post '/user', to: 'users#update'
      get '/your-events', to: 'users#created_events'
      get '/your-shifts', to: 'users#shifts'
      get '/events', to: 'events#index'
      get '/groups', to: 'groups#index'
      get '/event', to: 'events#show'
      get '/group', to: 'groups#show'
      get '/roles', to: 'events#roles'
      get '/shifts', to: 'events#shifts'
      get '/group-events', to: 'groups#events'

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

