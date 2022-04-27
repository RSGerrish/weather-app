import weatherObj from './weather.js';

const owAPIController = () => {
  
  async function getWeather(location) {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=74d49cd949be6aae6f11e76ff6b56a6a&units=standard`, {mode: 'cors'});
      let weatherData = await response.json();

      weatherData = await parseWeather(weatherData);

      return weatherData;
    } catch (error) {
      console.log("Error: " + error);
    };
  };

  async function parseWeather(rawWeather) {
    let parsedWeather = new weatherObj;

    parsedWeather = parsedWeather.parseWeather(rawWeather);
    
    return parsedWeather;
  }

  return { getWeather, parseWeather };
};

export default owAPIController;