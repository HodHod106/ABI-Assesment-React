import axios from "axios";

const API_KEY = "cb8991e2ea-18b7bfe4b9-sfqvsn";
const URL = `https://api.fastforex.io/fetch-all?api_key=${API_KEY}`;

export const fetchCurrencyRates = async () => {
  try {
    //console.log("jg0w9yg0weyg90");
    const response = await axios.get(URL);
    //console.log(response.data.results.EGP);
    return response.data.results.EGP;
  } catch (error) {
    console.error("Error fetching currency rates:", error);
    return null;
  }
};

fetchCurrencyRates();
