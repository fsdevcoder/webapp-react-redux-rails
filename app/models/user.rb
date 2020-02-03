class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :todos

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def self.find_by_credentials(user_name, pw)
    user = User.find_by_username(user_name)
    user && user.is_password?(pw) ? user : nil
  end

  def self.generate_session_token
    token = SecureRandom::urlsafe_base64(16)
    token = SecureRandom::urlsafe_base64(16) while User.find_by_session_token(token)
    token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end