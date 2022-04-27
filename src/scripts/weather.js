function weatherObj() {
  this.locName = "";
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
  this.weatherID = "";

  function parseWeather(rawWeather) {
    let utcDate = new Date(0);

    this.locName = rawWeather.name;
    this.weatherMain = rawWeather.weather[0].main;
    this.weatherDescription = rawWeather.weather[0].description;
    this.weatherID = rawWeather.weather[0].id;
    this.mainTemp = KtoF(rawWeather.main.temp);
    this.mainFeels = KtoF(rawWeather.main.feels_like);
    this.mainMin = KtoF(rawWeather.main.temp_min);
    this.mainMax = KtoF(rawWeather.main.temp_max);
    this.mainPress = HPAtoIOM(rawWeather.main.pressure);
    this.mainHum = rawWeather.main.humidity;
    this.visDistance = MtoMile(rawWeather.visibility);
    this.windSpeed = MPStoMPH(rawWeather.wind.speed);
    this.windDir = windDir(rawWeather.wind.deg);
    this.cloudCover = rawWeather.clouds.all
    utcDate.setUTCSeconds(rawWeather.sys.sunrise);
    this.sysSunrise = utcDate.getHours() + ':' + utcDate.getMinutes();
    utcDate.setUTCSeconds(rawWeather.sys.sunrise);
    this.sysSunset = utcDate.getHours() + ':' + utcDate.getMinutes();
    utcDate.setUTCSeconds(rawWeather.dt);
    this.localTime = utcDate.toUTCString();


    /*
    Either I am not calling the recent rain fall correctly or I need
    to figure out a better way to test if the value is available
    
    Update: I believe this is worked out. I will test on next rainy day - RSG
    */

    if (rawWeather.hasOwnProperty("rain['1hr']")) {this.rain1hr = rawWeather.rain['1hr']};
    if (rawWeather.hasOwnProperty("rain['3hr']")) {this.rain3hr = rawWeather.rain['3hr']};

    return this;
  }

  function KtoF(kValue) {
    return (kValue - 273.15) * (9/5) + 32;
  }

  function KtoC(kValue) {
    return kValue - 273.15;
  }

  function CtoF(cValue) {
    return (cValue * (9/5)) + 32;
  }

  function FtoC(fValue) {
    return (fValue - 32) * (5/9);
  }

  function HPAtoIOM(hValue) {
    return hValue * 0.029529983071445;
  }

  function MtoMile(mValue) {
    return mValue * 0.000621371;
  }

  function MPStoMPH(mValue) {
    return mValue * 2.23694;
  }

  function windDir(wDeg) {
    if (wDeg >= 360 - 22.5 || wDeg <  22.5) {return 'N';}
    else if (wDeg >= 22.5 && wDeg < 67.5) {return 'NE';}
    else if (wDeg >= 67.5 && wDeg < 112.5) {return 'E';}
    else if (wDeg >= 112.5 && wDeg < 157.5) {return 'SE';}
    else if (wDeg >= 157.5 && wDeg < 202.5) {return 'S';}
    else if (wDeg >= 202.5 && wDeg < 247.5) {return 'SW';}
    else if (wDeg >= 247.5 && wDeg < 292.5) {return 'W';}
    else if (wDeg >= 292.5 && wDeg < 337.5) {return 'NW';}
    else {return null;}
  }

  return { parseWeather };
}

export default weatherObj;