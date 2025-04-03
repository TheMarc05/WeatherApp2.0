import React from 'react';
import './style.css';

function CurrentWeather({ weather }) {
    return (
        <div className="weather-panel today">
            <h2 className='section-title'>Weather in {weather.city} today</h2>
            <div className="weather-panel">
                <img src={weather.icon} alt="weather-icon" />
                <div className="weather-details">
                    <p className="date">{weather.date}</p>
                    <p>{weather.temperature}</p>
                    <p>{weather.wind}</p>
                    <p>{weather.humidity}</p>
                </div>
            </div>
           
        </div>
    );
}

export default CurrentWeather;