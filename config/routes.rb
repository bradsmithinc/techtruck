OmniauthRails::Application.routes.draw do
  match '/auth/:service/callback' => 'services#create', via: [:get, :post]
  match '/auth/failure' => 'services#failure', via: [:get, :post]
  root to: "services#new"
end
