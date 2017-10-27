class User < ApplicationRecord

  has_secure_password
  has_secure_token

  has_many :group_members
  has_many :groups, through: :group_members

  has_many :event_members
  has_many :events, through: :event_members

  has_many :shifts

  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :name, presence: true

  def self.authenticate_with_credentials(email, password)
    user = User.find_by_email(email.downcase.strip)
    if user && user.authenticate(password)
      user
    else
      nil
    end
  end
end
