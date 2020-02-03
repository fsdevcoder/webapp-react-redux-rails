class Tag < ApplicationRecord
  validates :name, presence: true

  has_many :taggings,
    inverse_of: :tag
end