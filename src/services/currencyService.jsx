import axios from "axios";

const API_KEY = "fcd27db08f-c2d1544272-sg5lfp";
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
