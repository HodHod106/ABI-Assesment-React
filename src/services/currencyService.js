import axios from "axios";

const URL = "https://api.exchangeratesapi.io/latest?base=USD";

export const fetchCurrencyRates = async () => {
  try {
    const response = await axios.get(URL);
    return response.data.rates.EGP;
  } catch (error) {
    console.error("Error fetching currency rates:", error);
    return null;
  }
};
