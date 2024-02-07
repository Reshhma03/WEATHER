import React, { useState } from 'react';
import Form from './Form';
import Weather from './Weather';
import './App.css';


const API_KEY = 'b6eca42997b020d9d2989adeaea54e7f';

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Form fetchWeather={fetchWeather} />
      {weather && <Weather data={weather} />}
    </div>
  );
}

export default App;
