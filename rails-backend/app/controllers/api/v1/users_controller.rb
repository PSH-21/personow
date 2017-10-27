module API::V1
  class UsersController < ApiController
    def index
      @users = User.all
      render json: @users
    end

    def show
      user = authenticate_user
      if user
        render json: {name: user.name,
                      email: user.email,
                      notifications: user.notification}
      end
    end

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
        render json: {token: user.token}
      else
        render json: {error: "Login failure"}
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