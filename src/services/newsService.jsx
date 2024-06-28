import axios from "axios";

const API_KEY = "2befa5a94f3a4aa59d8368ca7a22c065";
const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

export const fetchNews = async () => {
  try {
    //  console.log("Got here ");
    const response = await axios.get(URL);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
