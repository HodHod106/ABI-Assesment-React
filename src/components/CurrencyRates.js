import React, { useEffect, useState } from "react";
import { fetchCurrencyRates } from "../services/currencyService";

const CurrencyRates = () => {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    const getRates = async () => {
      const data = await fetchCurrencyRates();
      setRate(data);
    };
    getRates();
  }, []);

  return (
    <div className="grid-container">
      {rate && (
        <div className="grid-item">
          <h3>USD to EGP</h3>
          <p>{rate}</p>
        </div>
      )}
    </div>
  );
};

export default CurrencyRates;
