import React, { useEffect, useState } from "react";

const PriceChart = ({ prices }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (prices && prices.length > 0) {
      const data = {
        labels: prices.map(price => new Date(price.created_at).toLocaleString()),
        datasets: [{
          label: 'Price (USD)',
          data: prices.map(price => price.rate),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        }]
      };
      setChartData(data);
    }
  }, [prices]);

  return (
    <div>
      <h2>Price Chart</h2>
      <canvas id="chart" width="400" height="400"></canvas>
    </div>
  );
};

export default PriceChart;

