function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector('body');
console.log(bodyElem);

const spanElem = bodyElem.querySelector('.color');
console.log(spanElem);

const btnElem = bodyElem.querySelector('.change-color');
console.log(btnElem);

btnElem.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  bodyElem.style.backgroundColor = newColor;
  spanElem.textContent = newColor;
});