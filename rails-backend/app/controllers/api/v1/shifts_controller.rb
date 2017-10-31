module API::V1
  class ShiftsController < ApiController
    respond_to :json

    def create
      user = authenticate_user
      puts 'check'
      puts user
      puts 'check2'
      puts params
      puts 'check3'
      puts params[:event_id]
      event = Event.find_by(id: params[:event_id])
      if user && event
        membership = EventMember.find_by(user_id: user.id, event_id: event.id)
        if membership[:creator]
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

      end
    end
  end
end