import React from 'react';
import './style.css';

const SearchSection = ({ getWeatherDetails, searchInputRef }) => {
    const API_KEY = "b9669f0236a84264a12214827250304";
  // Handles city search form submission
  const handleCitySearch = (e) => {
    e.preventDefault();
    const input = e.target.querySelector(".search-input");
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${input.value}&days=7`;
    getWeatherDetails(API_URL); // Fetches weather details for the entered city
  };

    return (
        <div className="search-section">
            <div className="sidebar">
                <form id="cityForm" className="city-form" action="#"  onSubmit={handleCitySearch}>
                    <input
                        id="city"
                        className='search-input'
                        type="search"
                        placeholder="Enter a city..."
                        ref={searchInputRef}
                        required
                    />
                    <button id="searchBtn" className="btn btnSeach">Search</button>
                </form>
                <div className="separator">
                    <span className="separator-text">or</span>
                </div>
                <button id="locationBtn" className="btn btnLocation">
                    Use current location
                </button>
            </div>
        </div >
    );
}

export default SearchSection;