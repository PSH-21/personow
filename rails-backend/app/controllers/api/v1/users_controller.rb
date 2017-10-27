module API::V1
  class UsersController < ApiController
    def index
      @users = User.all
      render json: @users
    end

    def show
      # @user = User.find(params[:id])
      # render json: @user
      respond_with User.find(params[:id])
    end

    def create
      user = User.new(user_params)
      if user.save!
        p 'user saved'
        render json: {token: user.token}
      else
        p 'not saved'
        render json: {error: "registration failure"}
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