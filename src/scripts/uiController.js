import weatherAPI from './owAPIController.js';
import iconCloudy from '../img/weather-cloudy.svg';
import iconFog from '../img/weather-fog.svg';
import iconHazy from '../img/weather-hazy.svg';
import iconLightningRainy from '../img/weather-lightning-rainy.svg';
import iconLightning from '../img/weather-lightning.svg';
import iconPartlyCloudy from '../img/weather-partly-cloudy.svg';
import iconPartlyRainy from '../img/weather-partly-rainy.svg';
import iconPartlySnowyRainy from '../img/weather-partly-snowy-rainy.svg';
import iconPartlySnowy from '../img/weather-partly-snowy.svg';
import iconPouring from '../img/weather-pouring.svg';
import iconRainy from '../img/weather-rainy.svg';
import iconSnowyHeavy from '../img/weather-snowy-heavy.svg';
import iconSnowRainy from '../img/weather-snowy-rainy.svg';
import iconSnowy from '../img/weather-snowy.svg';
import iconSunny from '../img/weather-sunny.svg';
import iconWindyCloudy from '../img/weather-windy-cloudy.svg';
import iconWindy from '../img/weather-windy.svg';

const uiController = () => {
  async function displayCWeather(location) {
    let weather = await weatherAPI().getWeather(location);
    console.log(weather);

    const weatherIcon = document.querySelector('#icon-weather');
    const locNameElement = document.querySelector('#city-name');
    const weatherTemp = document.querySelector('#weather-temp');
    const wMainDesc = document.querySelector('#weather-main-desc');
    const wMainHum = document.querySelector('#weather-main-hum');
    const wMainPress = document.querySelector('#weather-main-press');
    const cloudCov = document.querySelector('#cloud-cov-percentage');
    const sRiseTime = document.querySelector('#sun-rise-time');
    const sSetTime = document.querySelector('#sun-set-time');
    const tMin = document.querySelector('#temp-min-value');
    const tMax = document.querySelector('#temp-max-value');
    const vis = document.querySelector('#vis-value');
    const windDir = document.querySelector('#weather-wind-dir');

    locNameElement.innerHTML = await weather.locName;
    weatherTemp.innerHTML = await Math.round(weather.mainTemp + Number.EPSILON) + String.fromCharCode(176);
    wMainDesc.innerHTML = await weather.weatherMain;
    wMainHum.innerHTML = await weather.mainHum + " %";
    wMainPress.innerHTML = await Math.round((weather.mainPress + Number.EPSILON)* 10) / 10 + " in";
    cloudCov.innerHTML = await weather.cloudCover + " %";
    sRiseTime.innerHTML = await weather.sysSunrise;
    sSetTime.innerHTML = await weather.sysSunset;
    tMin.innerHTML = await Math.round(weather.mainMin + Number.EPSILON) + String.fromCharCode(176);
    tMax.innerHTML = await Math.round(weather.mainMax + Number.EPSILON) + String.fromCharCode(176);
    vis.innerHTML = await Math.round((weather.visDistance + Number.EPSILON) * 10) / 10 + " mi";
    windDir.innerHTML = await weather.windDir;

    if (weather.weatherID > 800 && weather.weatherID <= 802) { //Partly Cloudy
      weatherIcon.src = iconPartlyCloudy;
    } else if (weather.weatherID > 802 && weather.weatherID <= 804) { //Cloudy
      weatherIcon.src = iconCloudy;
    } else if (weather.weatherID = 800) { //Clear or Sunny
      weatherIcon.src = iconSunny;
    } else if (weather.weatherID = 741) { //Fog
      weatherIcon.src = iconFog;
    } else if (weather.weatherID = 721) { //Hazey
      weatherIcon.src = iconHazy;
    } else if (weather.weatherID >= 200 && weather.weatherID <= 232) { //Lightning Storm
      weatherIcon.src = iconLightningRainy;
    } else if (weather.weatherID >= 300 && weather.weatherID <= 321) {
      weatherIcon.src = iconPartlyRainy;
    } else if ((weather.weatherID >= 500 && weather.weatherID <= 501) || weather.weatherI === 520 || weather.weatherI === 521) {
      weatherIcon.src = iconRainy;
    } else if ((weather.weatherID >= 502 && weather.weatherID <=504) || weather.weatherI === 522 || weather.weatherI === 531) {
      weatherIcon.src = iconPouring;
    } else if (weather.weatherID === 511 || weather.weatherID === 615) {
      weatherIcon.src = iconPartlySnowyRainy;
    } else if (weather.weatherID === 616) {
      weatherIcon.src = iconSnowRainy;
    } else if (weather.weatherID === 600 || weather.weatherID === 612 || weather.weatherID === 620) {
      weatherIcon.src = iconSnowy;
    } else if ((weather.weatherID >= 601 && weather.weatherID <= 611) || weather.weatherI === 613 || weather.weatherI === 621 || weather.weatherI === 622) {
      weatherIcon.src = iconSnowyHeavy;
    }
    return;
  }

  return {displayCWeather};
}

export default uiController;