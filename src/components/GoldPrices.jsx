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
    <div className="table-container">
      {goldPrices && (
        <table>
          <thead>
            <tr>
              <th>Gold Type</th>
              <th>Price (USD/gram)</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(goldPrices)
              .filter(([type]) => type.includes("k") && !type.includes("ask"))
              .map(([type, price]) => (
                <tr key={type}>
                  <td>{type.replace("price_gram_", "").toUpperCase()}</td>
                  <td>{price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GoldPrices;
