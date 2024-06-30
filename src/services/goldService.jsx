import axios from "axios";

const API_KEY = "goldapi-rgclisly0i0oop-io";
const URL = "https://www.goldapi.io/api/XAU/USD";

export const fetchGoldPrices = async () => {
  try {
    //console.log("Goldlll  ");
    // return null; //remove later
    const response = await axios.get(URL, {
      headers: {
        "x-access-token": API_KEY,
      },
    });

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching gold prices:", error);
    return null;
  }
};
