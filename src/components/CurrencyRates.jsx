import React, { useEffect, useState } from "react";
import { fetchCurrencyRates } from "../services/currencyService";

const CurrencyRates = () => {
  const [rate, setRate] = useState(null);
  const [amount, setAmount] = useState(1); // Initial amount for conversion
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EGP");
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const getRates = async () => {
      const data = await fetchCurrencyRates();
      setRate(data);
    };
    getRates();
  }, []);

  const handleAmountChange = (e) => {
    let value = parseInt(e.target.value, 10); // Parse the value as an integer

    // Check if the parsed value is not a number (NaN) or less than or equal to zero
    if (isNaN(value) || value <= 0) {
      // Option 1: Prevent updating state with non-positive values
      // return;

      // Option 2: Reset amount to a positive default value
      value = 1; // Reset to 1 or any positive default value
    }

    setAmount(value); // Update amount state with the valid (positive) input value
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const convertCurrency = () => {
    if (!rate) return; // Ensure rates are fetched

    let convertedValue;
    // Conversion logic based on fetched rates
    if (fromCurrency === "USD" && toCurrency === "EGP") {
      convertedValue = amount * rate; // Adjust key based on your actual data structure
    } else if (fromCurrency === "EGP" && toCurrency === "USD") {
      convertedValue = amount / rate; // Adjust key based on your actual data structure
    } else {
      console.error("Unsupported conversion.");
      return;
    }

    setConvertedAmount(convertedValue.toFixed(2)); // Round to two decimal places
  };
  console.log(rate);

  return (
    <div className="currency-rates">
      <div className="grid-container">
        {rate && (
          <div className="grid-item">
            <h3>USD to EGP</h3>
            <p>{rate}</p>
          </div>
        )}
        <div className="conversion-section">
          <h3>Currency Converter</h3>
          <div className="input-section">
            <input type="number" value={amount} onChange={handleAmountChange} />
            <select value={fromCurrency} onChange={handleFromCurrencyChange}>
              <option value="USD">USD</option>
              <option value="EGP">EGP</option>
            </select>
            <span>to</span>
            <select value={toCurrency} onChange={handleToCurrencyChange}>
              <option value="EGP">EGP</option>
              <option value="USD">USD</option>
            </select>
            <button onClick={convertCurrency}>Convert</button>
          </div>
          {convertedAmount !== null && (
            <div className="result">
              <p>
                {amount} {fromCurrency} is approximately {convertedAmount}{" "}
                {toCurrency}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyRates;
