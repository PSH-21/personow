class Event < ApplicationRecord
  has_many :event_members
  has_many :users, through: :event_members

  has_many :roles

  validates :title, presence: true
  validates :start_date, presence: true
  validate :end_after_start

  def end_after_start
    errors.add(:end_date, "can't be before the start date.") if
      end_date < start_date
  end
end
