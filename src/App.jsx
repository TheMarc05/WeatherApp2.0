import React from "react";
import SearchSection from "./components/SearchSection.jsx";
import "./components/style.css";

const App = () => {
  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page-container">
      <SearchSection getWeatherDetails={getWeatherDetails} />

      <div class="page-content"></div>
    </div>
  );
};

export default App;
