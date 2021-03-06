Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: 'json'} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :photos do
      resources :comments, only: [:create]
    end
    resources :albums
    resources :comments, only: [:destroy]
    resources :tags
  end
end
