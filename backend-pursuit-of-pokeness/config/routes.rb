Rails.application.routes.draw do
  resources :poke_users
  resources :users
  resources :pokemons
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
