function weatherObj() {
  this.weatherMain = "";
  this.weatherDescription = "";
  this.mainTemp = "";
  this.mainFeels = "";
  this.mainMin = "";
  this.mainMax = "";
  this.mainPress = "";
  this.mainHum = "";
  this.windSpeed = "";
  this.windDir = "";
  this.sysSunrise = "";
  this.sysSunset = "";

  function parseWeather(rawWeather) {
    this.weatherMain = rawWeather.weather[0].main;
    this.weatherDescription = rawWeather.weather[0].description;
    this.mainTemp = rawWeather.main.temp;
    this.mainFeels = rawWeather.main.feels_like;
    this.mainMin = rawWeather.main.temp_min;
    this.mainMax = rawWeather.main.temp_max;
    this.mainPress = rawWeather.main.pressure;
    this.mainHum = rawWeather.main.humidity;
    this.windSpeed = rawWeather.wind.speed;
    this.windDir = rawWeather.wind.deg;
    this.Sunrise = rawWeather.sys.sunrise;
    this.Sunset = rawWeather.sys.sunset;

    return this;
  }

  return { parseWeather };
}

export default weatherObj;