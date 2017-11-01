module API::V1
  class GroupsController < ApiController
    respond_to :json

    def index
      groups = Group.all
      respond_with :api, :v1, groups
    end

    def show
      user = User.find_by(token: request.headers['token'])
      group = Group.find_by(id: params[:id])
      if group
        if user
          group_member = GroupMember.find_by(group_id: group.id, user_id: user.id)
          if group_member
            render json: {
                            id: group[:id],
                            name: group[:name],
                            description: group[:description],
                            creator: group_member[:creator]
                         }
          else
            respond_with group          
          end
        else
          respond_with group
        end
      else
        render json: {error: "Invalid group id"}
      end
    end

    def create
      user = authenticate_user
      if user
        group = Group.create(name: params[:name], description: params[:description])
        group_member = GroupMember.create(user_id: user.id, group_id: group.id, creator: true)
        respond_with :api, :v1, group
      end
    end

    def events
      group_id = params[:id]
      group = Group.find_by(id: group_id)
      if group
        respond_with group.events
      else
        render json: {error: "Invalid group id"}
      end
    end

    def member_toggle
      user = authenticate_user
      group = Group.find_by(id: params[:id])
      if user && group
        member = GroupMember.find_by(user_id: user.id, group_id: group.id)
        if member
          member.destroy
          render json: {success: "Left group"}
        else
          member = GroupMember.create(user_id: user.id, group_id: group.id)
          render json: {success: "Joined group"}
        end
      elsif user
        render json: {error: "invalid group"}
      end
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Group.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:group).permit(:name, :description)
    end
  end
end