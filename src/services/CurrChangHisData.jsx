// CurrencyChart.js
import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import axios from "axios";
import { useInterval } from "react-use";

function CurrencyChart({ fromCurrency, toCurrency }) {
  const [currencyData, setCurrencyData] = useState([]);
  const [currentRate, setCurrentRate] = useState(null);

  const API_KEY = "cb8991e2ea-18b7bfe4b9-sfqvsn";

  const fetchCurrencyData = async () => {
    try {
      const response = await axios.get(
        `https://api.fastforex.io/fetch-one?from=${fromCurrency}&to=${toCurrency}&api_key=${API_KEY}`
      );
      const rate = response.data.result[toCurrency];
      setCurrentRate(rate);
      setCurrencyData((prevData) => [
        ...prevData,
        { time: new Date().toLocaleTimeString(), rate },
      ]);
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  };

  useInterval(fetchCurrencyData, 10000); // Fetch data every 1 seconds

  const times = currencyData.map((item) => item.time);
  const rates = currencyData.map((item) => item.rate);

  return (
    <center>
      <h2>Real-time Currency Exchange Rate Chart</h2>
      <Plot
        data={[
          {
            x: times,
            y: rates,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "blue" },
          },
        ]}
        layout={{
          width: 800,
          height: 500,
          title: `USD to EGP Exchange Rates`,
        }}
      />
    </center>
  );
}

export default CurrencyChart;
