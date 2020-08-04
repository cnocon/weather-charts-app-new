// axios docs https://www.npmjs.com/package/axios
import axios from 'axios';

// api key for https://openweathermap.org/
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${process.env.WEATHER_API_KEY}`;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather`;
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/onecall`
export const FETCH_WEATHER = 'FETCH_WEATHER';

export async function fetchWeather(city) {
  const url = `${ROOT_URL}?q=${city}&appid=${process.env.WEATHER_API_KEY}`;
  let lat;
  let lon;

  return axios.get(url)
    .then(res => {
      const lat = res.data.coord.lat; 
      const lon = res.data.coord.lon; 
      const weatherUrl = `${WEATHER_URL}?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=be540b6aaedda8283a9241849a10e2ea`;
      const weatherData = axios.get(weatherUrl);

      return {
        type: FETCH_WEATHER,
        payload: weatherData
      };
    })
}
