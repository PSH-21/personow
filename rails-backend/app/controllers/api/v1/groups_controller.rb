module API::V1
  class GroupsController < ApiController
    respond_to :json

    def index
      groups = Group.all
      respond_with :api, :v1, groups
    end

    def show
      group_id = params[:id]
      group = Group.find_by(id: group_id)
      if group
        user = authenticate_user
        if user
          group_member = GroupMember.where('group_id = ? AND user_id = ?', group.id, user.id)
          if group_member
            respond_with group, group_member
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
      # @event = Event.new(event_params)
      # puts params
      user = authenticate_user
      # puts 'check1'
      # puts user.id
      # puts user
      group = Group.create(name: params[:name], description: params[:description])

      group_member = GroupMember.create(user_id: user.id, group_id: group.id, creator: true)
      # puts 'check2'
      respond_with :api, :v1, group
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