module API::V1
  class GroupsController < ApiController
    respond_to :json

    def index
      @groups = Group.all
      respond_with :api, :v1, @groups
    end

    def show
      group_id = request.headers['group']
      group = Group.find_by(id: group_id)
      if group
        respond_with group
      else
        render json: {error: "Invalid group id"}
      end
    end

    def create
      # @event = Event.new(event_params)
      respond_with Group.create(name: params[:name], description: params[:description])

      # respond_to do |format|
      #   if @event.save
      #     format.json { render
      #   else
      #     format.json { render json: @event.errors, status: :unprocessable_entity }
      #   end
      # end
    end

    def events
      group_id = request.headers['group']
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