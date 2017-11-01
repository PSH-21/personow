class Role < ApplicationRecord
  belongs_to :event
  has_many :shifts, dependent: :destroy

  validates :title, presence: true
end
