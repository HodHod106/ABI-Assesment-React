import axios from "axios";

const API_KEY = "goldapi.io";
const URL = "https://www.goldapi.io/api/XAU/USD";

export const fetchGoldPrices = async () => {
  try {
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
