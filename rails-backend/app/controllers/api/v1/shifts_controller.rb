module API::V1
  class ShiftsController < ApiController
    respond_to :json

    def create
      user = authenticate_user
      event = Event.find_by(id: params[:event_id])
      if user && event
        membership = EventMember.find_by(user_id: user.id, event_id: event.id)
        if membership && membership[:creator]
          shift = Shift.new(start_time: params[:start_time], end_time: params[:end_time],
                            role_id: params[:role_id], user_id: nil)
          if shift.save
            render json: {success: "Shift created"}
          else
            render json: {error: "Shift not created"}
          end
        else
          render json: {error: "Not authorised"}
        end
      elsif user
        render json: {error: "Invalid event id"}
      end
    end

    def destroy
      user = authenticate_user
      shift = Shift.find_by(id: params[:id])
      if user && shift
        event = shift.role.event
        membership = EventMember.find_by(user_id: user.id, event_id: event.id)
        if membership[:creator]
          if shift.destroy
            render json: {success: "Shift deleted"}
          else
            render json: {error: "Shift not deleted"}
          end
        else
          render json: {error: "Not authorised"}
        end
      elsif user
        render json: {error: "Invalid shift id"}
      end
    end

  end
end