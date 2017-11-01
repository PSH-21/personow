module API::V1
  class RolesController < ApiController
    respond_to :json

    def create
      user = authenticate_user
      event = Event.find_by(id: params[:event_id])
      if user && event
        membership = EventMember.find_by(user_id: user.id, event_id: event.id)
        if membership[:creator]
          role = Role.new(title: params[:title], description: params[:description],
                          event_id: params[:event_id])
          if role.save
            render json: {success: "Role created"}
          else
            render json: {status: 'error', message: "Role not created"}
          end
        else
          render json: {status: 'error', message: "Not authorised"}
        end

      end
    end
  end
end