import React, { useState } from 'react';

function Form({ fetchWeather }) {
  const [city, setCity] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with city:", city);
    fetchWeather(city);
    setCity('');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default Form;
