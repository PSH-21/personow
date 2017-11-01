class User < ApplicationRecord

  has_secure_password
  has_secure_token

  has_many :group_members, dependent: :destroy
  has_many :groups, through: :group_members

  has_many :event_members, dependent: :destroy
  has_many :events, through: :event_members

  has_many :shifts, dependent: :nullify

  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :name, presence: true

  def self.authenticate_with_credentials(email, password)
    if email
      user = User.find_by_email(email.downcase.strip)
    end
    if user && user.authenticate(password)
      user
    else
      nil
    end
  end
end
