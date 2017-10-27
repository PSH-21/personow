module API::V1
  class GroupsController < ApplicationController
    respond_to :json

    def index
      @groups = Group.all
      respond_with :api, :v1, @groups
    end

    def show
      # @user = User.find(params[:id])
      # render json: @user
      # @event = Event.find(params[:id])
    end
  end
end