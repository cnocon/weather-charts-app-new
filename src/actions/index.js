// axios docs https://www.npmjs.com/package/axios
import axios from 'axios';
require('dotenv').config();

// api key for https://openweathermap.org/
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast`;
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/onecall`
export const FETCH_WEATHER = 'FETCH_WEATHER';

export async function fetchWeather(city) {
  const url = `${ROOT_URL}?q=${city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;

  return await axios.get(url)
    .then(res => {
      const lat = res.data.city.coord.lat; 
      const lon = res.data.city.coord.lon;
      const weatherUrl = `${WEATHER_URL}?id=524901&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lat=${lat}&lon=${lon}&exclude=minutely,hourly`;
      const weatherData = axios.get(weatherUrl);

      return {
        type: FETCH_WEATHER,
        payload: weatherData
      };
    }).catch(err => {
      console.error(err);
    });
}
