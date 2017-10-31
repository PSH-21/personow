# Preview all emails at http://localhost:3000/rails/mailers/event_mailer
class EventMailerPreview < ActionMailer::Preview

  def group_volunteer_call_first
    EventMailer.group_volunteer_call(Event.first)
  end

  def group_volunteer_call_second
    EventMailer.group_volunteer_call(Event.second)
  end

end
