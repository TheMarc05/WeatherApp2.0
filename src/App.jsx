import React from 'react';
import SearchSection from './components/SearchSection';
import CurrentWeather from './components/CurrentWeather';
import {useEffect, useRef, useState } from 'react';

const App = () => {
    const [currentWeather, setCurrentWeather] = useState({});
    const searchInputRef = useRef(null);
    
    return (
        <div className="page-container">
            <SearchSection />
            <div className="page-content">
                <CurrentWeather />
            </div>
        </div>
    );
};

export default App;