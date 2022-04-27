const path = '../img/';
import iconCloudy from '../img/weather-cloudy.svg';

const body = function() {
  const wholeContainer =document.createElement('div');
  wholeContainer.id = "whole-container";
    const topLevelContainer = document.createElement('div');
    topLevelContainer.id = "top-level";
    topLevelContainer.className = "main-container";
      const logoContainer = document.createElement('div');
      logoContainer.id = "tl-logo-container";
        const weatherLogo = document.createElement('img');
        weatherLogo.src = iconCloudy;
        weatherLogo.id = "icon-weather";
        const cityName = document.createElement('div');
        cityName.innerHTML = "Charlotte";
        cityName.id = "city-name";
      logoContainer.append(weatherLogo, cityName);
      const quickWeatherContainer = document.createElement('div');
      quickWeatherContainer.id = "qw-container";
        const currentTempContainer = document.createElement('div');
        currentTempContainer.id = "current-temp-container";
          const weatherTemp = document.createElement('div');
          weatherTemp.id = "weather-temp";
          weatherTemp.innerHTML = "76" + String.fromCharCode(176);
          const weatherTempLabel = document.createElement('div');
          weatherTempLabel.id = "weather-temp-label";
          weatherTempLabel.innerHTML = "Current Temp (F)"
        currentTempContainer.append(weatherTemp, weatherTempLabel);
        const subQWContainerBG = document.createElement('div');
        subQWContainerBG.id = "sub-qw-container-bg";
          const subQWContainer = document.createElement('div');
          subQWContainer.id = "sub-qw-container";
            const weatherMainDescLabel = document.createElement('div');
            weatherMainDescLabel.id = "weather-main-desc-label";
            weatherMainDescLabel.className = 'qw-label';
            weatherMainDescLabel.innerHTML = "Conditions:";
            const weatherMainDesc = document.createElement('div');
            weatherMainDesc.id = "weather-main-desc";
            weatherMainDesc.innerHTML = "Super Duper Cloudy";
            const weatherMainHumLabel = document.createElement('div');
            weatherMainHumLabel.id = "weather-main-hum-label";
            weatherMainHumLabel.className = 'qw-label';
            weatherMainHumLabel.innerHTML = "Humidity:";
            const weatherMainHum = document.createElement('div');
            weatherMainHum.id = "weather-main-hum";
            weatherMainHum.innerHTML = "62%";
            const weatherMainPressLabel = document.createElement('div');
            weatherMainPressLabel.id = "weather-main-press-label";
            weatherMainPressLabel.className = 'qw-label';
            weatherMainPressLabel.innerHTML = "Pressure:";
            const weatherMainPress = document.createElement('div');
            weatherMainPress.id = "weather-main-press";
            weatherMainPress.innerHTML = "30.1 in";
            const weatherWindDirLabel = document.createElement('div');
            weatherWindDirLabel.id = "weather-wind-dir-label";
            weatherWindDirLabel.className = 'qw-label';
            weatherWindDirLabel.innerHTML = "Wind Direction:";
            const weatherWindDir = document.createElement('div');
            weatherWindDir.id = "weather-wind-dir";
            weatherWindDir.innerHTML = "NE";
          subQWContainer.append(weatherMainDescLabel, weatherMainDesc, weatherMainHumLabel, weatherMainHum, weatherMainPressLabel, weatherMainPress, weatherWindDirLabel, weatherWindDir);
        subQWContainerBG.appendChild(subQWContainer);
      quickWeatherContainer.append(currentTempContainer, subQWContainerBG);

    topLevelContainer.append(logoContainer, quickWeatherContainer);
    const sep1 = document.createElement('hr');
    const midLevelContainer = document.createElement('div');
    midLevelContainer.id = "mid-level";
    midLevelContainer.className = "main-container";
      const midLevelSubContainer = document.createElement('div');
      midLevelSubContainer.id = "mid-level-sub-container";
        const cloudCoverageContainer = document.createElement('div');
        cloudCoverageContainer.id = "cloud-cov-container";
        cloudCoverageContainer.className = 'sub-widget';
          const cloudCoverageLabel = document.createElement('div');
          cloudCoverageLabel.id = "cloud-cov-label";
          cloudCoverageLabel.innerHTML = "Cloud Coverage";
          const cloudCoveragePercentage = document.createElement('div');
          cloudCoveragePercentage.id = "cloud-cov-percentage";
          cloudCoveragePercentage.innerHTML = "40%";
        cloudCoverageContainer.append(cloudCoverageLabel, cloudCoveragePercentage);
        const sunRiseSetContainer = document.createElement('div');
        sunRiseSetContainer.id = "sun-rise-set-container";
        sunRiseSetContainer.className = 'sub-widget';
          const sunRiseContainer = document.createElement('div');
          sunRiseContainer.id = "sun-rise-container";
            const sunRiseLabel = document.createElement('div');
            sunRiseLabel.id = "sun-rise-label";
            sunRiseLabel.innerHTML = "Sunrise";
            const sunRiseTime = document.createElement('div');
            sunRiseTime.id = "sun-rise-time";
            sunRiseTime.innerHTML = "6:37";
          sunRiseContainer.append(sunRiseLabel, sunRiseTime);
          const sunSetContainer = document.createElement('div');
          sunSetContainer.id = "sun-set-container";
            const sunSetLabel = document.createElement('div');
            sunSetLabel.id = "sun-set-label";
            sunSetLabel.innerHTML = "Sunset";
            const sunSetTime = document.createElement('div');
            sunSetTime.id = "sun-set-time";
            sunSetTime.innerHTML = "17:14";
          sunSetContainer.append(sunSetLabel, sunSetTime);
        sunRiseSetContainer.append(sunRiseContainer, sunSetContainer);
        const tempMinMaxContainer = document.createElement('div');
        tempMinMaxContainer.id = "temp-min-max-container";
        tempMinMaxContainer.className = 'sub-widget';
          const tempMinContainer = document.createElement('div');
          tempMinContainer.id = "temp-min-container";
            const tempMinLabel = document.createElement('div');
            tempMinLabel.id = "temp-min-label";
            tempMinLabel.innerHTML = "Low";
            const tempMinValue = document.createElement('div');
            tempMinValue.id = "temp-min-value";
            tempMinValue.innerHTML = "61" + String.fromCharCode(176);
          tempMinContainer.append(tempMinLabel, tempMinValue);
          const tempMaxContainer = document.createElement('div');
          tempMaxContainer.id = "temp-max-container";
            const tempMaxLabel = document.createElement('div');
            tempMaxLabel.id = "temp-max-label";
            tempMaxLabel.innerHTML = "High";
            const tempMaxValue = document.createElement('div');
            tempMaxValue.id = "temp-max-value";
            tempMaxValue.innerHTML = "69" + String.fromCharCode(176);
          tempMaxContainer.append(tempMaxLabel, tempMaxValue);
        tempMinMaxContainer.append(tempMinContainer, tempMaxContainer);
        const visibilityContainer = document.createElement('div');
        visibilityContainer.id = "vis-container";
        visibilityContainer.className = 'sub-widget';
          const visLabel = document.createElement('div');
          visLabel.id = "vis-label";
          visLabel.innerHTML = "Visibility";
          const visValue = document.createElement('div');
          visValue.id = 'vis-value';
          visValue.innerHTML = "6.2 mi";
        visibilityContainer.append(visLabel, visValue);
      midLevelSubContainer.append(cloudCoverageContainer, sunRiseSetContainer, tempMinMaxContainer, visibilityContainer);
    midLevelContainer.appendChild(midLevelSubContainer);
  
  wholeContainer.append(topLevelContainer, sep1, midLevelContainer);
  return wholeContainer;
}

export default body;