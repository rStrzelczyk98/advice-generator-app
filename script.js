'use strict';

const btn = document.querySelector('.btn');

window.addEventListener('load', getAdvice);
btn.addEventListener('click', getAdvice.bind(null, 300));

async function getAdvice(time) {
  const data = await fetch('https://api.adviceslip.com/advice');
  const dataJSON = await data.json();
  const { id, advice } = dataJSON.slip;
  loading();
  displayAdvice(id, advice, time);
  loseFocus(time);
}

function loseFocus(time) {
  const click = btn.closest('.btn');
  setTimeout(() => click.blur(), time);
}

function displayAdvice(arg_1, arg_2, time = 0) {
  const adviceNumber = document.querySelector('.advice-number');
  const adviceText = document.querySelector('.advice');
  setTimeout(() => {
    adviceNumber.textContent = arg_1;
    adviceText.textContent = arg_2;
  }, time);
}

function loading() {
  const dice = document.querySelector('.dice-icon');
  dice.classList.toggle('roll');
}
