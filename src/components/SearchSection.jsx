import React from "react";
import "./style.css";

const SearchSection = ({ getWeatherDetails }) => {
  const API_KEY = "b9669f0236a84264a12214827250304";

  const handleCitySearch = (e) => {
    e.preventDefault();

    const searchInput = e.target.querySelector(".search-input");
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=7`;
    getWeatherDetails(API_URL);
  };

  return (
    <div className="sidebar">
      <form id="cityForm" className="city-form" onSubmit={handleCitySearch}>
        <input
          id="city"
          className="search-input"
          type="search"
          placeholder="Introduceti Locatia"
          required
        />
        <button className="btn btn-search">Cauta</button>
      </form>
      <div className="separator">
        <span className="separator-text">sau</span>
      </div>
      <button id="locationBtn" className="btn btn-location">
        Foloseste locatia curenta
      </button>
    </div>
  );
};

export default SearchSection;
