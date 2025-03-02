
require 'sidekiq'
require 'sidekiq-cron'

Sidekiq::Cron::Job.create(
  name: 'price_update - every 10 seconds',
  cron: '*/10 * * * * *',
  class: 'PriceUpdateWorker' # Worker sınıfınız
)

