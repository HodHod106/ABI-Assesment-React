import React, { useEffect, useState } from "react";
import { fetchNews } from "../services/newsService";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews();
      setNews(data);
    };
    getNews();
  }, []);

  return (
    <div className="grid-container-newes">
      {news.map((article, index) => {
        if (article.urlToImage == null) {
          return null;
        }
        console.log(article.urlToImage);
        return (
          <div key={index} className="grid-item">
            <img src={article.urlToImage} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <button onClick={() => window.open(article.url, "_blank")}>
              Read More
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default News;
