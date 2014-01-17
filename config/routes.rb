OmniauthRails::Application.routes.draw do
  resources :votes

  match '/auth/:service/callback' => 'services#create', via: %i(get post)
  match '/auth/failure' => 'services#failure', via: %i(get post)
  match '/logout' => 'sessions#destroy', via: %i(get delete), as: :logout

  resources :services, only: %i(index create destroy)

  post 'sms' => "application#twilio_create"
  root to: "sessions#new"

end
