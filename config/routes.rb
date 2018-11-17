Rails.application.routes.draw do
  # resources :users
  root 'pages#index'
  post '/contact', to: 'pages#contact'
  # post '/users/new', to: 'users#new'
  match '*path', to: 'pages#index', via: :all
end
