class PriceChannel < ApplicationCable::Channel
  def subscribed
    stream_from "price_channel"
  end

  def unsubscribed

  end
end

