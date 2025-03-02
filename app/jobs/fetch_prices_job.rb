class FetchPricesJob < ApplicationJob
  queue_as :default

  def perform(*args)
    PriceFetcher.fetch_prices
    Rails.logger.info("Prices fetched at #{Time.now}")
  end
end

