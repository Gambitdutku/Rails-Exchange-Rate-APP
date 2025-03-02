class Price < ApplicationRecord
  validates :currency, :rate, :source, presence: true
end

