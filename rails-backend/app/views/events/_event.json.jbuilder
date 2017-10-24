json.extract! event, :id, :title, :description, :start_date, :end_date, :group_id, :created_at, :updated_at
json.url event_url(event, format: :json)
