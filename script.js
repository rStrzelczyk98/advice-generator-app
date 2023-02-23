'use strict';

const btn = document.querySelector('.btn');

window.addEventListener('load', getAdvice);
btn.addEventListener('click', getAdvice);

async function getAdvice() {
  const data = await fetch('https://api.adviceslip.com/advice');
  const dataJSON = await data.json();
  const { id, advice } = dataJSON.slip;
  displayAdvice(id, advice);
  loseFocus();
}

function loseFocus() {
  const click = btn.closest('.btn');
  setTimeout(() => click.blur(), 600);
}

function displayAdvice(arg_1, arg_2) {
  const adviceNumber = document.querySelector('.advice-number');
  const adviceText = document.querySelector('.advice');
  setTimeout(() => {
    adviceNumber.textContent = arg_1;
    adviceText.textContent = arg_2;
  }, 300);
}
