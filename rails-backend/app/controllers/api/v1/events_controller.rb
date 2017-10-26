module API::V1
  class EventsController < ApplicationController
    respond_to :json

    def index
      @events = Event.all
      respond_with :api, :v1, @events
    end

    def show
      # @user = User.find(params[:id])
      # render json: @user
      # @event = Event.find(params[:id])
    end
  end
end