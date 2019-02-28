class User < ApplicationRecord
  has_many :poke_users
  has_many: :pokemons, through: :poke_users
end
