module API::V1
  class GroupsController < ApiController
    respond_to :json

    def index
      @groups = Group.all
      respond_with :api, :v1, @groups
    end

    def show
      group_id = params[:id]
      group = Group.find_by(id: group_id)
      if group
        respond_with group
      else
        render json: {error: "Invalid group id"}
      end
    end

    def create
      # @event = Event.new(event_params)
      puts params
      user = authenticate_user
      puts 'check1'
      puts user.id
      puts user
      group = Group.create(name: params[:name], description: params[:description])

      group_member = GroupMember.create(user_id: user.id, group_id: group.id, creator: true)
      puts 'check2'
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