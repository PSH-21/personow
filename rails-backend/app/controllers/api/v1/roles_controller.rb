module API::V1
  class RolesController < ApiController
    respond_to :json

    def create
      user = authenticate_user
      event = Event.find_by(id: params[:id])
      if user && event
        membership = EventMember.find_by(user_id: user.id, event_id: event.id)
        if membership[:creator]
          role = Role.new(title: params[:title], description: params[:description],
                          event_id: params[:id])
          if role.save
            render json: {success: "Role created"}
          else
            render json: {error: "Role not created"}
          end
        else
          render json: {error: "Not authorised"}
        end

      end
    end
  end
end