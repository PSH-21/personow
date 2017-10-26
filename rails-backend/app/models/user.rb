class User < ApplicationRecord

  has_secure_password
  has_secure_token

  has_many :group_members
  has_many :groups, through: :group_members

  has_many :event_members
  has_many :events, through: :event_members

  has_many :shifts

  validates :email, presence: true
  validates :name, presence: true

  
end
