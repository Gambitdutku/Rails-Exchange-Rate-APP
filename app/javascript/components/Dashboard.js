import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Card, Container, Row, Col, Spinner } from "react-bootstrap";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Chart.js modüllerini yükle
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  // API'den fiyat verilerini çekmek için useEffect hook'u kullanıyoruz
  useEffect(() => {
    axios.get("/api/prices")
      .then(response => {
        setPrices(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching prices:", error);
        setLoading(false);
      });
  }, []);

  // Grafik verisini hazırlıyoruz
  const chartData = {
    labels: prices.map(price => new Date(price.created_at).toLocaleString()), // Tarihler
    datasets: [
      {
        label: 'Price (USD)',
        data: prices.map(price => price.rate), // Fiyatlar
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      }
    ]
  };

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Card>
            <Card.Header as="h5">Canlı Fiyatlar</Card.Header>
            <Card.Body>
              {loading ? (
                <div className="d-flex justify-content-center">
                  <Spinner animation="border" variant="primary" />
                </div>
              ) : (
                <>
                  <Line data={chartData} />
                  <div className="mt-4">
                    <h5>Fiyatlar:</h5>
                    <ul className="list-group">
                      {prices.map((price, index) => (
                        <li className="list-group-item" key={index}>
                          <strong>{new Date(price.created_at).toLocaleString()}:</strong> {price.rate} USD
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

