class Shift < ApplicationRecord
  belongs_to :user
  belongs_to :role

  validates :start_time, presence: true
  validate :end_after_start
  
    def end_after_start
      errors.add(:end_time, "can't be before the start date.") if
        end_time < start_time
    end
end
