class PokeUsersController < ApplicationController
    def index
        @poke_users = PokeUser.all
        render json: @poke_users, status: :ok
    end
    def create
        @poke_user = PokeUser.new(poke_user_params)
        if @poke_user.save
            render json: @poke_user, status: :created
        else
            render json: @poke_user.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def poke_user_params
        params.require(:poke_user).permit(:pokemon_id, :user_id)
    end
end
