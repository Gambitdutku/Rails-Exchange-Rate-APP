require 'httparty'

class PriceFetcher
  def self.fetch_prices
    # Döviz Kurları (USD, EUR, GBP örneği)
    forex_response = HTTParty.get("https://api.exchangerate-api.com/v4/latest/USD")
    if forex_response.success?
      rates = forex_response.parsed_response['rates']
      %w[EUR GBP TRY].each do |currency|
        Price.create(currency: currency, rate: rates[currency], source: 'Forex')
      end
    end

    # Bitcoin Fiyatı
    btc_response = HTTParty.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
    if btc_response.success?
      rate = btc_response.parsed_response['bitcoin']['usd']
      Price.create(currency: 'BTC', rate: rate, source: 'Crypto')
    end

    # Altın Fiyatı (CoinGecko API üzerinden)
    gold_response = HTTParty.get("https://api.coingecko.com/api/v3/simple/price?ids=tether-gold&vs_currencies=usd")
    if gold_response.success?
      rate = gold_response.parsed_response['tether-gold']['usd']
      Price.create(currency: 'Gold', rate: rate, source: 'Metals')
    end
  end
end

