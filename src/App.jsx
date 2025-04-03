import React from 'react';
import SearchSection from './components/SearchSection';
import CurrentWeather from './components/CurrentWeather';
import {useEffect, useRef, useState } from 'react';
import { weatherCodes } from "./constants";
import NoResultsDiv from './components/NoResultsDiv';

const App = () => {
    const [currentWeather, setCurrentWeather] = useState({});
    const [hasNoResults, setHasNoResults] = useState(false);
    const searchInputRef = useRef(null);
    const API_KEY = "b9669f0236a84264a12214827250304";
    // Fetches weather details  for the entered city
    const getWeatherDetails = async (API_URL) => {
        setHasNoResults(false);
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error();
            const data = await response.json();
            const weather = data.current;
            console.log(data);
            const weatherIcon = Object.keys(weatherCodes).find((icon) => weatherCodes[icon].includes(data.current.condition.code));
            const date = data.current.last_updated;
            const currentWeather ={
                city: data.location.name,
                temperature: weather.temp_c,
                wind: weather.wind_kph,
                humidity: weather.humidity,
                icon: weatherIcon,
                date: date,
            };
            setCurrentWeather(currentWeather);
            searchInputRef.current.value = data.location.name;
        } catch {
            setHasNoResults(true);
            console.log(error);
        }
    };

    useEffect(() => {
    const defaultCity = "London";
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${defaultCity}&days=2`;
    getWeatherDetails(API_URL);
    }, []);
    
    return (
        <div className="page-container">
            <SearchSection getWeatherDetails={getWeatherDetails} searchInputRef={searchInputRef} />
            <div className="page-content">
                {hasNoResults? (<NoResultsDiv/>) : (<CurrentWeather weather={currentWeather} />)}
                
            </div>
        </div>
    );
};

export default App;