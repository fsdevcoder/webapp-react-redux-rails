class Step < ApplicationRecord
  validates :title, :body, :todo, presence: true
  validates :done, inclusion: { in: [true, false] }
end