import weatherAPI from './owAPIController.js';
import uiController from './uiController.js';
import logoSVG from "../img/weather-logo.svg";

const header = function() {
  const headerElement = document.createElement('header');

  const logoContainer = document.createElement('div');
  logoContainer.id = "logo-container";
    const logoImg = document.createElement('img');
    logoImg.id = "logo-img";
    logoImg.src = logoSVG;
    const logoName = document.createElement('div');
    logoName.id = "logo-name";
    logoName.innerHTML = "Weather App";
  logoContainer.append(logoImg, logoName);

  const searchContainer = document.createElement('form');
  searchContainer.id = "search-container";
    const searchFieldContainer = document.createElement('div');
    searchFieldContainer.id = "search-field-container";
      const searchLabel = document.createElement('label');
      searchLabel.htmlFor = 'search-text';
      searchLabel.id = 'search-label';
      searchLabel.innerHTML = 'Search for your location'
      const searchInput = document.createElement('input');
      searchInput.type = 'text';
      searchInput.id = 'search-text';
      searchInput.name = 'search-text';
      searchInput.required = true;
    searchFieldContainer.append(searchLabel, searchInput);
    
    const searchButton = document.createElement('button');
    searchButton.innerHTML = 'Get Weather';
    searchButton.id = 'search-button';
    searchContainer.append(searchFieldContainer, searchButton);
  
  headerElement.append(logoContainer, searchContainer);  
  
  searchButton.addEventListener("click", async (event) => {
    event.preventDefault();
    
    const searchLoc = searchInput.value;

    if (searchLoc) {
      uiController().displayCWeather(searchLoc);
    } else {
      window.confirm("Please enter a city or zip code to search")
    }
  });

  return headerElement;
}

export default header;