import axios from "axios";

const API_KEY = "newsapi.org";
const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

export const fetchNews = async () => {
  try {
    const response = await axios.get(URL);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
