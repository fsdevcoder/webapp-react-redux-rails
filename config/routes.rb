Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :todos, only: [:index, :create, :show, :update, :destroy]
    resources :steps, only: [:index, :create, :show, :update, :destroy]
  end

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  get '/home', to: 'static_pages#root'

  root 'sessions#new'
end
