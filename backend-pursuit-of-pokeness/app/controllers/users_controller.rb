class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users, status: :ok
    end

    def create
        @pokemon = User.new(user_params)
        if @user.save
            render json: @user, status: :created
        else
            render json: @user.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.require(:user).permit(:name)
    end
end
