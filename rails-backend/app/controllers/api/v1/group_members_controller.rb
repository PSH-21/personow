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
      user = authenticate_user
      group = Group.find_by(id: params[:id])
      if user && group
        member = GroupMember.find_by(user_id: user.id, group_id: group.id)
        if member
          member.destroy
          render json: {success: "Left group"}
        else
          member = GroupMember.create(user_id: user.id, group_id: group.id)
          render json: {success: "Joined group"} if member
        end
      else
        render json: {error: "Membership unchanged"}
      end
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