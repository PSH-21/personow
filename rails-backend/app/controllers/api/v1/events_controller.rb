module API::V1
  class EventsController < ApiController
    respond_to :json

    def index
      events = Event.all.order(:start_date)
      respond_with :api, :v1, events
    end

    def upcoming
      range_end = Time.now + 14.days
      events = Event.where('end_date BETWEEN ? AND ?', Time.now, range_end).order(:end_date)
      respond_with events
    end

    def show
      user = User.find_by(token: request.headers['token'])
      event = Event.find_by(id: params[:id])
      if user && event
        membership = EventMember.find_by(user_id: user.id, event_id: event.id)
      end
      if event
        if user && membership
          render json: {
                          id: event[:id],
                          title: event[:title],
                          description: event[:description],
                          start_date: event[:start_date],
                          end_date: event[:end_date],
                          group_id: event[:group_id],
                          group_name: event.group[:name],
                          creator: membership[:creator]
                       }
        else
          respond_with event
        end
      elsif user
        render json: {error: "invalid event id"}
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
        shifts = event.shifts.order(:start_time)
        results = shifts.map do |shift|
          user = User.find_by(id: shift[:user_id])
          user_name = user ? user[:name] : ''
          role = Role.find_by(id: shift[:role_id])
          role_name = role[:title]

          {
            id: shift[:id],
            event_id: event.id,
            date: shift[:start_time].to_date,
            length: shift[:end_time] - shift[:start_time],
            start_time: shift[:start_time],
            end_time: shift[:end_time],
            role_id: shift[:role_id],
            user_id: shift[:user_id],
            role_name: role_name,
            user_name: user_name
          }
        end
        respond_with results
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
        event = Event.create(title: params[:title], description: params[:description], start_date: params[:start_date],
         end_date: params[:end_date], group_id: params[:group_id], updated_at: Time.now)
        event_member = EventMember.create(user_id: user.id, event_id: event.id, creator: true, notifications: true) if event
        role = Role.create(title: 'General Volunteer', description: 'Give us a helping hand reaching our event goals.',
                           event_id: event.id) if event
        if event
          render json: {success: "Event created", event_id: event.id}
        else
          render json: {error: "Event not saved"}
      end
    end

    def destroy
      user = authenticate_user
      event = Event.find_by(id: params[:id])
      if user && event
        membership = EventMember.find_by(user_id: user.id, event_id: event.id)
        if membership[:creator]
          if event.destroy
            render json: {success: "Event deleted"}
          else
            render json: {error: "Event not deleted"}
          end
        else
          render json: {error: "Not authorised"}
        end
      elsif user
        render json: {error: "Invalid event id"}
      end
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