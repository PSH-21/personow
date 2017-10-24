class Role < ApplicationRecord
  belongs_to :event
  has_many :shifts
end
