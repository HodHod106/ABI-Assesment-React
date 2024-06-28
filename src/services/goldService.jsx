import axios from "axios";

const API_KEY = "goldapi-2rg15slxx67d3a-io";

const URL = "https://www.goldapi.io/api/XAU/USD";

export const fetchGoldPrices = async () => {
  try {
    //console.log("Goldlll  ");
    return null; //remove later
    const response = await axios.get(URL, {
      headers: {
        "x-access-token": API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching gold prices:", error);
    return null;
  }
};
