class EventMailer < ApplicationMailer

  def group_volunteer_call(event)
    if event.group
      @event = event
      
      creator_id = EventMember.find_by(event_id: event.id, creator: true)[:user_id]
      @creator_name = User.find_by(id: creator_id)[:name]

      members = event.group.group_members
      email_list = []
      members.each do |member|
        if member[:notifications] == true
          email_list.push (User.find(member[:user_id])[:email])
        end
      end
      
      mail(bcc: email_list, subject: "Volunteer for #{@event[:title]}!")
    end

  end

end
