import './style.css';
import appHeader from './scripts/header.js';
import appBody from './scripts/body.js';
import appFooter from './scripts/footer.js';
import uiController from './scripts/uiController.js';

async function main() {
  const body = document.querySelector('body');
  const main = document.createElement('main');
  
  body.appendChild(appHeader());
  body.appendChild(main);
  main.appendChild(appBody());
  body.appendChild(appFooter());

  uiController().displayCWeather('Charlotte');
}

main();