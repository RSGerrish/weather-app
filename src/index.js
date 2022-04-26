import './style.css';
import icon from './img/book-open-variant.svg';
import weatherAPI from './scripts/owAPIController.js';

const body = document.querySelector('body');
const header = document.createElement('header');
header.innerHTML = "Hello, dlroW!";
body.appendChild(header);

let weather = weatherAPI().getWeather('Charlotte');

const main = document.createElement('main');
body.appendChild(main);

const form = document.createElement('form');
main.appendChild(form);

const div = document.createElement('div');
form.appendChild(div);

const label = document.createElement('label');
label.htmlFor = 'search-text';
label.id = 'search-label';
label.innerHTML = 'Search for your location:'
const input = document.createElement('input');
input.type = 'text';
input.id = 'search-text';
input.name = 'search-text';
div.append(label, input);

const button = document.createElement('button');
button.innerHTML = 'Get Weather';
form.appendChild(button);

button.addEventListener("click", function(e) {
  e.preventDefault();

  weatherAPI().getWeather(input.value);
  console.log(input.value);
});