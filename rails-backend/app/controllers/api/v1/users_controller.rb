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
end