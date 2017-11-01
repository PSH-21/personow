class Event < ApplicationRecord
  belongs_to :group

  has_many :event_members, dependent: :destroy
  has_many :users, through: :event_members

  has_many :roles, dependent: :destroy
  has_many :shifts, through: :roles

  validates :title, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true
  validate :end_after_start

  def end_after_start
    if start_date && end_date
      errors.add(:end_date, "can't be before the start date.") if
        end_date < start_date
    end
  end
end
