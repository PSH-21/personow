module API::V1
  class UsersController < ApiController

    def create
      user = User.new(user_params)
      user.notification = true

      if user.save
        p 'user saved'
        render json: {token: user.token}
      else
        p 'not saved'
        render json: {error: "Registration failure"}
      end
    end

    def login
      if user = User.authenticate_with_credentials(params[:email], params[:password])
        render json: {token: user.token, name: user.name, user_id: user.id}
      else
        render json: {error: "Login failure"}
      end
    end

    def show
      user = authenticate_user
      if user
        render json: {name: user.name,
                      email: user.email,
                      notifications: user.notification}
      end
    end

    def events
      user = authenticate_user
      if user
        render json: user.events
      end
    end

    def groups
      user = authenticate_user
      if user
        render json: user.groups
      end
    end

    def created_events
      user = authenticate_user
      if user
        memberships = user.event_members.where(creator: true)
        events = memberships.map { |x| Event.find(x.event_id) }
        render json: events
      end
    end
    
    def update
      user = authenticate_user
      if user
        user.name = params[:name]
        user.email = params[:email]
        user.notification = params[:notifications]
        if user.save
          render json: {success: "Update saved"}
        else
          render json: {error: "Update not saved"}
        end

      end

    end


    private
    def user_params
      params.permit(
        :name,
        :email,
        :password,
        :password_confirmation
      )
    end
  end
end