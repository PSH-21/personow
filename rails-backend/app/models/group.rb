class Group < ApplicationRecord
  has_many :group_members, dependent: :destroy
  has_many :users, through: :group_members

  has_many :events, dependent: :destroy

  validates :name, presence: true
end
