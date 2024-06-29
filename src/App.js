import React from "react";
import News from "./components/News";
import CurrencyRates from "./components/CurrencyRates";
import GoldPrices from "./components/GoldPrices";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#currency">Currency Exchange</a>
            </li>
            <li>
              <a href="#gold">Gold Prices</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h1>Welcome to the News, Currency, and Gold Tracker</h1>
          <p>
            Stay updated with the latest news, currency exchange rates, and gold
            prices.
          </p>
        </section>
        <section id="news">
          <h2>Latest News</h2>
          <News />
        </section>
        <section id="currency">
          <h2>Currency Exchange Rates</h2>
          <CurrencyRates />
        </section>
        <section id="gold">
          <center>
            <h2 id="goldProceColor">Gold Prices</h2>
          </center>
          <GoldPrices />
        </section>
      </main>
    </div>
  );
}
export default App;
