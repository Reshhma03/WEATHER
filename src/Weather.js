import React from 'react';

function Weather({ data }) {
  // Check if data exists before accessing nested properties
  if (!data) return null;

  // Destructure necessary properties from data
  const { name, main, weather } = data;
  // Check if main and weather objects exist before accessing their properties
  const temperature = main ? main.temp : null;
  const description = weather ? weather[0].description : null;

  return (
    <div>
      <h2>{name}</h2>
      {/* Display temperature and description only if they are available */}
      {temperature && <p>Temperature: {temperature}°C</p>}
      {description && <p>Description: {description}</p>}
    </div>
  );
}

export default Weather;
