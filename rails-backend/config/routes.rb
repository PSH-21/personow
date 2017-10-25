Rails.application.routes.draw do
  resources :event_members
  resources :group_members
  resources :shifts
  resources :roles
  resources :events
  resources :groups
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api do
    namespace :v1 do
      resources :users
      resources :events
    end
  end
end
