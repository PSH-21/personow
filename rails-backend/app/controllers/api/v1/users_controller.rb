module API::V1
  class UsersController < ApplicationController
    def index
      @users = User.all
      render json: @users
    end

    def show
      # @user = User.find(params[:id])
      # render json: @user
      respond_with User.find(params[:id])
    end

    def create
      user = User.new(user_params)
      if user.save
        session[:user_id] = user.id
        redirect_to '/'
      else
        redirect_to '/signup'
      end
  
    end
  
    private
    def user_params
      params.require(:user).permit(
        :name,
        :email,
        :password,
        :password_confirmation
      )
    end
  end
end