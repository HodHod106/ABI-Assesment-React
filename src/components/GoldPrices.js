import React, { useEffect, useState } from "react";
import { fetchGoldPrices } from "../services/goldService";

const GoldPrices = () => {
  const [goldPrices, setGoldPrices] = useState(null);

  useEffect(() => {
    const getPrices = async () => {
      const data = await fetchGoldPrices();
      setGoldPrices(data);
    };
    getPrices();
  }, []);

  return (
    <div className="grid-container">
      {goldPrices && (
        <div className="grid-item">
          <h3>Gold Price (USD/Oz)</h3>
          <p>{goldPrices.price}</p>
        </div>
      )}
    </div>
  );
};

export default GoldPrices;
