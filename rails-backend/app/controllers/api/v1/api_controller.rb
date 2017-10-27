module API::V1
  class ApiController < ApplicationController
    skip_before_action :verify_authenticity_token

    private
    # Returns user to caller, or responds error to request.
      def authenticate_user
        user_token = request.headers['token']
        if user_token
          @user = User.find_by(token: user_token)
          #Unauthorize if a user object is not returned
          if @user.nil?
            return unauthorize
          end
          @user
        else
          return unauthorize
        end
      end

      def unauthorize
        render json: {error: "Not logged in"}
        return nil
      end
  end
end