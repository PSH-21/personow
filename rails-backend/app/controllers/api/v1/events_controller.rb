module API::V1
  class EventsController < ApiController
    respond_to :json

    def index
      events = Event.all
      respond_with :api, :v1, events
    end

    def show
      event_id = params[:id]
      event = Event.find_by(id: event_id)
      if event
        respond_with event
      else
        render json: {error: "Invalid event id"}
      end
    end

    def roles
      event_id = params[:id]
      event = Event.find_by(id: event_id)
      if event
        respond_with event.roles
      else
        render json: {error: "Invalid event id"}
      end
    end

    def shifts
      event_id = params[:id]
      event = Event.find_by(id: event_id)
      if event
        respond_with event.shifts
      else
        render json: {error: "Invalid event id"}
      end
    end

    def member_toggle
      user = authenticate_user
      event = Event.find_by(id: params[:id])
      if user && event
        member = EventMember.find_by(user_id: user.id, event_id: event.id)
        if member
          member.destroy
          render json: {success: "Left event"}
        else
          member = EventMember.create(user_id: user.id, event_id: event.id)
          render json: {success: "Joined event"}
        end
      elsif user
        render json: {error: "invalid event"}
      end
    end

    def create
      # @event = Event.new(event_params)
      user = authenticate_user
      if user
        event = Event.create(title: params[:title], description: params[:description], start_date: params[:start_date], end_date: params[:end_date], updated_at: Time.now)
        event_member = EventMember.create(user_id: user.id, event_id: event.id, creator: true, notifications: true)
        render json: {success: "Event created"}
        puts "event-created check"
      # else
      #   render json: {error: "invalid event"}
      end
      # respond_to do |format|
      #   if @event.save
      #     format.json { render
      #   else
      #     format.json { render json: @event.errors, status: :unprocessable_entity }
      #   end
      # end
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:event).permit(:title, :description, :start_date, :end_date, :group_id)
    end
  end
end