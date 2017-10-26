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
      resources :users
      resources :events
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

