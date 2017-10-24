json.extract! event_member, :id, :user_id, :event_id, :creator, :admin, :notifications, :created_at, :updated_at
json.url event_member_url(event_member, format: :json)
