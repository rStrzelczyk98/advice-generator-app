'use strict';

const btn = document.querySelector('.btn');

window.addEventListener('load', getAdvice);
btn.addEventListener('click', () => {
  btn.blur();
  getAdvice();
});

async function getAdvice() {
  const adviceNumber = document.querySelector('.advice-number');
  const adviceText = document.querySelector('.advice');
  const data = await fetch('https://api.adviceslip.com/advice');
  const dataJSON = await data.json();
  const { id, advice } = dataJSON.slip;
  adviceNumber.textContent = id;
  adviceText.textContent = advice;
}
