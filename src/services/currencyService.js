import axios from "axios";

const API_KEY = "cur_live_UiEiheEvg133MszjQugoByRexjOcMhLj40bZLUzX";
const URL =
  "https://api.currencyapi.com/v3/range?datetime_start=2021-11-30T23:59:59Z&datetime_end=2021-12-31T23:59:59Z&accuracy=day";

export const fetchCurrencyRates = async () => {
  try {
    const response = await axios.get(URL, {
      headers: {
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching currency rates:", error);
    return null;
  }
};
