class Shift < ApplicationRecord
  belongs_to :user
  belongs_to :role

  validates :start_time, presence: true
  validates :end_time, presence: true
  validate :end_after_start
  
    def end_after_start
      if start_time && end_time
      errors.add(:end_time, "can't be before the start date.") if
        end_time < start_time
      end
    end
end
