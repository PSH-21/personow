class Role < ApplicationRecord
  belongs_to :event
  has_many :shifts

  validates :title, presence: true
end
