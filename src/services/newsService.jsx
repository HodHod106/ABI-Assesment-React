// // import axios from "axios";

// // // const API_KEY = "2befa5a94f3a4aa59d8368ca7a22c065";
// // const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`;
// // export const fetchNews = async () => {
// //   try {
// //     //  console.log("Got here ");
// //     const response = await axios.get(URL);
// //     return response.data.articles;
// //   } catch (error) {
// //     console.error("Error fetching news:", error);
// //     return [];
// //   }
// // };

// import axios from "axios";

// //console.log(process.env.REACT_APP_NEWS_API_KEY, "fiugfiew");

// //const BASE_URL = `https://newsapi.org/v2/top-headlines`;
// // `${BASE_URL}?apiKey=${API_KEY}`
// // https://api.goperigon.com/v1/sources?apiKey=7611ec0a-a743-4387-9083-e665ca1fb1db
// export const fetchNews = async () => {
//   try {
//     // const response = await axios.get(
//     //   `https://api.goperigon.com/v1/all -H "x-api-key:7611ec0a-a743-4387-9083-e665ca1fb1db"`
//     // );
//     // // console.log(response.articles);
//     const response = await axios.get("https://api.goperigon.com/v1/all", {
//       headers: {
//         "x-api-key": "7611ec0a-a743-4387-9083-e665ca1fb1db",
//       },
//     });

//     return response.articles;
//   } catch (error) {
//     console.error("Error fetching news data:", error);
//     return [];
//   }
// };

// // pub_4764490f6e1086591612193df45749b02c182
// // https://newsdata.io/api/1/latest?apikey=pub_4764490f6e1086591612193df45749b02c182&q=pizza

import axios from "axios";

export const fetchNews = async () => {
  try {
    const response = await axios.get(
      "https://api.goperigon.com/v1/all?from=2024-06-30&country=us&sourceGroup=top100&showNumResults=true&showReprints=false&paywall=false&excludeLabel=Non-news&excludeLabel=Opinion&excludeLabel=Paid News&excludeLabel=Roundup&excludeLabel=Press Release&sortBy=date&category=Finance&category=Tech&category=Sports",
      {
        headers: {
          "x-api-key": "7611ec0a-a743-4387-9083-e665ca1fb1db",
        },
      }
    );
    console.log(response.data.articles);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news data:", error);
    return [];
  }
};
