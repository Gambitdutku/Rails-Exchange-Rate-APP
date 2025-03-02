Rails.application.routes.draw do
  # Ana sayfa için route
  root 'dashboard#index'

  # API endpoint'i için route
  namespace :api do
    resources :prices, only: [:index]
  end
end

