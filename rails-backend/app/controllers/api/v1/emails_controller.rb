module API::V1
  class EmailsController < ApiController

    def group_event
      user = authenticate_user
      event = Event.find_by(id: params[:event_id])
      if user && event && event.group
        membership = EventMember.find_by(user_id: user.id, event_id: event.id)
        if membership && membership[:creator]
          EventMailer.group_volunteer_call(event).deliver_now
          render json: {success: "Emails sent"}
        else
          render json: {error: "Not authorised"}
        end
      elsif user && event
        render json: {error: "Event has no group"}   
      elsif user
        render json: {error: "Invalid event id"}
      end
    end
  end
end