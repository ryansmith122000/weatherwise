
// Example dynamic data
const weatherData = {
   location: 'Oceanside, California',
  description: 'Sunny',
  temperature: '25°C ',
  wind: '10 km/h ',
  humidity: '60%',
  forecast: [
    { day: 'Monday', condition: 'Sunny', temperature: '28°C' },
    { day: 'Tuesday', condition: 'Partly Cloudy', temperature: '26°C' },
    { day: 'Wednesday', condition: 'Rain', temperature: '22°C' },
    { day: 'Thursday', condition: 'Overcast', temperature: '18°C' },
    { day: 'Friday', condition: 'Partly Cloudy', temperature: '22°C' },
    { day: 'Saturday', condition: 'Sunny', temperature: '26°C' },
    { day: 'Sunday', condition: 'Overcast', temperature: '25°C' },
  ],
  windInfo: '10 km/h',
  humidityInfo: '60%',
  pressureInfo: '1015 hPa',
  sunriseInfo: '6:00 AM',
  sunsetInfo: '6:00 PM',
  uvIndexInfo: '4',
}; 

// Function to dynamically update weather data
function updateWeatherData() {
  document.getElementById('location').textContent = weatherData.location;
  document.getElementById('description').textContent = weatherData.description;
  document.getElementById('temperature').textContent = weatherData.temperature;
  document.getElementById('wind').textContent = `Wind: ${weatherData.wind}`;
  document.getElementById('humidity').textContent = `Humidity: ${weatherData.humidity}`;

  const forecastList = document.getElementById('forecastList');
  forecastList.innerHTML = '';
  weatherData.forecast.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
          <p class="font-bold">${item.day}</p>
          <p class="text-blue-500">${item.condition}, ${item.temperature}</p>
        `;
    forecastList.appendChild(listItem);
  });

  document.getElementById('windInfo').textContent = `Wind: ${weatherData.windInfo}`;
  document.getElementById('humidityInfo').textContent = `Humidity: ${weatherData.humidityInfo}`;
  document.getElementById('pressureInfo').textContent = `Pressure: ${weatherData.pressureInfo}`;
  document.getElementById('sunriseInfo').textContent = `Sunrise: ${weatherData.sunriseInfo}`;
  document.getElementById('sunsetInfo').textContent = `Sunset: ${weatherData.sunsetInfo}`;
  document.getElementById('uvIndexInfo').textContent = `UV Index: ${weatherData.uvIndexInfo}`;
}

// Update the weather data on page load
updateWeatherData();
