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
            <tr>
              <td>24K</td>
              <td>{goldPrices.price_gram_24k}</td>
            </tr>
            <tr>
              <td>22K</td>
              <td>{goldPrices.price_gram_22k}</td>
            </tr>
            <tr>
              <td>21K</td>
              <td>{goldPrices.price_gram_21k}</td>
            </tr>
            <tr>
              <td>20K</td>
              <td>{goldPrices.price_gram_20k}</td>
            </tr>
            <tr>
              <td>18K</td>
              <td>{goldPrices.price_gram_18k}</td>
            </tr>
            <tr>
              <td>16K</td>
              <td>{goldPrices.price_gram_16k}</td>
            </tr>
            <tr>
              <td>14K</td>
              <td>{goldPrices.price_gram_14k}</td>
            </tr>
            <tr>
              <td>10K</td>
              <td>{goldPrices.price_gram_10k}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GoldPrices;
