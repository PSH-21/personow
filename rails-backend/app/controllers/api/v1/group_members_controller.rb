module API::V1
  class GroupMembersController < ApiController
    respond_to :json

    # def index
    #   @groups = Group_Member.all
    #   respond_with :api, :v1, @groups
    # end

    # def show
    #   group = Group.find(params[:id])
    #   respond_with :api, :v1, group
    #   # @user = User.find(params[:id])
    #   # render json: @user
    #   # @event = Event.find(params[:id])
    # end

    def create
      # @event = Event.new(event_params)
      # puts 'yes here'
      respond_with GroupMember.create(user_id: params[:user_id], group_id: params[:group_id])
        # notifications: params[notifications], creator: params[:creator], admin: params[:admin]
      #   )
      # }

      # respond_to do |format|
      #   if @event.save
      #     format.json { render
      #   else
      #     format.json { render json: @event.errors, status: :unprocessable_entity }
      #   end
      # end
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = GroupMember.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:group_member).permit(:name, :description)
    end
  end
end