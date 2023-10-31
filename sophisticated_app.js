// Filename: sophisticated_app.js

/* 
This code is an example of a sophisticated, elaborate, and complex JavaScript application.
It combines multiple functionalities including data manipulation, user interactions, and API requests.

The application is a Weather Dashboard that allows users to search for the current weather and forecast for a specific location.
It fetches weather data from an external weather API, displays the results, and provides a user-friendly UI for a seamless experience.

Important note: To run this code, please replace the value of the 'API_KEY' constant with a valid API key obtained from a weather API provider.
*/

// Constants & Variables
const API_KEY = "<YOUR_API_KEY>";
let currentLocation = "";

// DOM Elements
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const currentWeatherContainer = document.querySelector("#current-weather");
const forecastContainer = document.querySelector("#forecast");

// Event Listeners
searchForm.addEventListener("submit", handleSearchFormSubmit);

// Functions

// Invoked when the search form is submitted
function handleSearchFormSubmit(e) {
  e.preventDefault();
  
  currentLocation = searchInput.value.trim();
  
  if (currentLocation) {
    searchWeather(currentLocation);
    searchInput.value = "";
  }
}

// Fetches the weather data for the given location
function searchWeather(location) {
  const currentWeatherURL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;
  const forecastURL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=5`;
  
  fetch(currentWeatherURL)
    .then(response => response.json())
    .then(data => {
      // Process and display current weather
      renderCurrentWeather(data.current);
    })
    .catch(error => {
      console.error("Failed to fetch current weather:", error);
    });
  
  fetch(forecastURL)
    .then(response => response.json())
    .then(data => {
      // Process and display forecast
      renderForecast(data.forecast);
    })
    .catch(error => {
      console.error("Failed to fetch forecast:", error);
    });
}

// Renders the current weather data
function renderCurrentWeather(weatherData) {
  currentWeatherContainer.innerHTML = `
    <h2>${currentLocation}</h2>
    <p>Temperature: ${weatherData.temp_c}°C</p>
    <p>Condition: ${weatherData.condition.text}</p>
    <p>Wind: ${weatherData.wind_kph} km/h</p>
  `;
}

// Renders the forecast data
function renderForecast(forecastData) {
  forecastContainer.innerHTML = `
    <h2>5-Day Forecast for ${currentLocation}</h2>
    <ul>
      ${forecastData.forecastday.map(day => `
        <li>
          <p>Date: ${day.date}</p>
          <p>Temperature: ${day.day.avgtemp_c}°C</p>
          <p>Condition: ${day.day.condition.text}</p>
        </li>
      `).join("")}
    </ul>
  `;
}

// Initial execution - Demo with a default location
searchWeather("New York");

// More lines of code could be added for further functionality, error handling, and UI enhancements.