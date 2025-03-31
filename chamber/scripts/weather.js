const apiKey = '2d7046070472dbedc20d442275532897'; // replace with your actual OpenWeatherMap API key
const lat = 16.7666;  // Example: Sunset Valley latitude
const lon = 3.0026;   // Example: Sunset Valley longitude
const units = 'metric'; // use 'imperial' for Fahrenheit

const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

async function getWeather() {
  try {
    const response = await fetch(weatherURL);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error('Weather Fetch Error:', error);
  }
}

function displayWeather(data) {
  const currentTemp = data.list[0].main.temp.toFixed(0);
  const description = data.list[0].weather.map(w => capitalize(w.description)).join(', ');
  const iconSrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

  document.querySelector('#current-temp').textContent = `${currentTemp}°C`;
  document.querySelector('#description').textContent = description;
  document.querySelector('#weather-icon').setAttribute('src', iconSrc);
  document.querySelector('#weather-icon').setAttribute('alt', description);

  const forecastContainer = document.querySelector('#forecast');
  forecastContainer.innerHTML = '';

  // Forecast for next 3 days (every 8th item ≈ 24 hours)
  for (let i = 8; i <= 24; i += 8) {
    const day = new Date(data.list[i].dt_txt).toLocaleDateString('en-US', { weekday: 'short' });
    const temp = data.list[i].main.temp.toFixed(0);
    const icon = data.list[i].weather[0].icon;
    const alt = capitalize(data.list[i].weather[0].description);

    forecastContainer.innerHTML += `
      <div class="forecast-day">
        <p>${day}</p>
        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${alt}">
        <p>${temp}°C</p>
      </div>
    `;
  }
}

function capitalize(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

getWeather();
