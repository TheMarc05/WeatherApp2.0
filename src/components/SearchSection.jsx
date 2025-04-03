import React from 'react';
import './style.css';

function SearchSection() {
    return (
        <div className="search-section">
            <div className="sidebar">
                <form id="cityForm" className="city-form">
                    <label for="city">Enter the city</label>
                    <input
                        id="city"
                        type="text"
                        placeholder="Cugir, Timisoara..."
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