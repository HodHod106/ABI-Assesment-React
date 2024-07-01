import React, { useEffect, useState } from "react";
import { fetchNews } from "../services/newsService";

// import React, { useEffect, useState } from 'react';
// import { fetchNews } from "./fetchNews"; // Adjust the path as necessary

const NewsComponent = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      setError(null);
      const newsData = await fetchNews();
      // console.log(length);
      if (newsData.length > 0) {
        setNews(newsData); // Adjust based on the actual response structure
      } else {
        setError("No news data found");
      }
      setLoading(false);
    };

    getNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="grid-container-newes">
        {news.map((item, index) => {
          if (item.imageUrl == null) {
            return "dad";
          } else {
            return (
              <div key={index} className="grid-item">
                <img src={item.imageUrl} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.author}</p>
                <button onClick={() => window.open(item.url, "_blank")}>
                  Read More
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default NewsComponent;

// return (
//   <div className="grid-container-newes">
//     {news.map((article, index) => {
//       if (article.urlToImage == null) {
//         return null;
//       }
//       console.log(article.urlToImage);
//       return (
//         <div key={index} className="grid-item">
//           <img src={article.urlToImage} alt={article.title} />
//           <h3>{article.title}</h3>
//           <p>{article.author}</p>
//           <button onClick={() => window.open(article.url, "_blank")}>
//             Read More
//           </button>
//         </div>
//       );
//     })}
//   </div>
// );
// };
