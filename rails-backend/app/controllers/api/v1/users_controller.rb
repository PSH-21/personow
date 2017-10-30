module API::V1
  class UsersController < ApiController

    def create
      user = User.new(user_params)
      user.notification = true

      if user.save
        p 'user saved'
        render json: {token: user.token, user_id: user.id}
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
        results = events.map do |event|
          event_name = event[:title]
          event_id = event[:id]
          if id = event[:group_id]
            group = Group.find_by(id: id)
            group_name = group[:name]
          else
            group_name = ''
          end
          event_shifts = event.shifts
          avail_shifts = event_shifts.reject { |x| x.user_id != nil }

          {
            id: event_id,
            name: event_name,
            group: group_name,
            avail: avail_shifts.size,
            total: event_shifts.size
          }
        end
        render json: results
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

    def shifts
      puts 'here'
      user = authenticate_user
      puts user
      if user
        shifts = Shift.where('user_id = ?', user.id)
        puts shifts
        render json: shifts
      end
    end

    def claim
      user = authenticate_user
      shift = Shift.find_by(id: params[:id])
      if user && shift
        if shift.user_id == user.id
          shift.user_id = nil
          shift.save
          render json: {success: "Cancelled shift"}
        elsif shift.user_id == nil
          membership = EventMembers.find_by(event_id: event.id, user_id: user.id)
          if !membership
            EventMembers.create(event_id: event.id, user_id: user.id)
          end
          shift.user_id = user.id
          shift.save
          render json: {success: "Claimed shift"}
        else
          render json: {error: "Shift unavailable"}
        end

      else
        render json: {error: "Invalid user or shift"}
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