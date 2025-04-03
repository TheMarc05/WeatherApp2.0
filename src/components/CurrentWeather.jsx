import React from 'react';
import './style.css';

function CurrentWeather({ weather }) {
    return (
        <div className="weather-panel today">
            <h2 className='section-title'>Weather in {weather.city} today</h2>
            <div className="weather-details">
                <img src={`icons/${weather.icon}.svg`} alt="weather-icon" />
                
                    <p className="date">{weather.date}</p>
                    <p>Temperature: {weather.temperature}</p>
                    <p>Wind: {weather.wind} kph</p>
                    <p>Humidity: {weather.humidity}%</p>
                
            </div>
           
        </div>
    );
}

export default CurrentWeather;