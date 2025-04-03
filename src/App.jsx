import React from 'react';
import SearchSection from './components/SearchSection';
import CurrentWeather from './components/CurrentWeather';

function App() {
  return (
     
    <div className="page-container">
        
          <SearchSection />
          <CurrentWeather weather={weather}/>
    </div>

  );
}

export default App;