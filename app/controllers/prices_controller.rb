class PricesController < ApplicationController
  def index
    # Burada @prices değişkeni, fiyatları veritabanından alır
    @prices = Price.order(created_at: :desc).limit(100)

    # Fiyatları JSON formatında döndürüyoruz
    render json: @prices
  end
end

