module API::V1
  class GroupsController < ApiController
    respond_to :json

    def index
      @groups = Group.all
      respond_with :api, :v1, @groups
    end

    def show
      group = Group.find(params[:id])
      p 'check'
      p 'check'
      respond_with :api, :v1, group
      p 'check'
      # @user = User.find(params[:id])
      # render json: @user
      # @event = Event.find(params[:id])
    end
  end
end