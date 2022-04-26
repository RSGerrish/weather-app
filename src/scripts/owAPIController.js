import weatherObj from './weather.js';

const owAPIController = () => {
  
  async function getWeather(location) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=74d49cd949be6aae6f11e76ff6b56a6a&units=standard`, {mode: 'cors'});
    let weatherData = await response.json();
    console.log(weatherData);
    weatherData = parseWeather(weatherData);
    console.log(weatherData);
    return weatherData;
  }

  function parseWeather(rawWeather) {
    let parsedWeather = new weatherObj;

    parsedWeather = parsedWeather.parseWeather(rawWeather);
    
    return parsedWeather;
  }

  return { getWeather, parseWeather };
};

export default owAPIController;