class DashboardController < ApplicationController
  def index
    @prices = Price.last(10)
  end
end

