import consumer from "./consumer"

consumer.subscriptions.create("PriceChannel", {
  received(data) {
    console.log("Received data:", data)
  }
});

