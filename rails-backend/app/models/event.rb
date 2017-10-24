class Event < ApplicationRecord
  has_many :event_members
  has_many :users, through :event_members

  has_many :roles
end
