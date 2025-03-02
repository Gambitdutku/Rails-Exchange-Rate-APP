module Api
  class PricesController < ApplicationController
    def index
      @prices = Price.all
      render json: @prices
    end
  end
end

