const footer = function() {
  const footerElement = document.createElement('footer');
  const credit = document.createElement('div');
  credit.id = 'footer-credit';
  credit.innerHTML = "Website Designed By Robin Gerrish 2022"

  footerElement.appendChild(credit);

  return footerElement;
}

export default footer;