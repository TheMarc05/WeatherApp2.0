import React from 'react';
import './style.css';

function SearchSection() {
    return (
        <div className="search-section">
            <div class="sidebar">
                <form id="cityForm" class="city-form">
                    <label for="city">Enter the city</label>
                    <input
                        id="city"
                        type="text"
                        placeholder="Cugir, Timisoara..."
                        required
                    />
                    <button id="searchBtn" class="btn btnSeach">Search</button>
                </form>
                <div class="separator">
                    <span class="separator-text">or</span>
                </div>
                <button id="locationBtn" class="btn btnLocation">
                    Use current location
                </button>
            </div>
        </div >
    );
}

export default SearchSection;