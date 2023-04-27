import createBody from './createBody.js';
import createButtons from './createBtns.js';
import updBtnKeys from './updBtnKeys.js';
import lightBtn from './lightBtns.js';
import preventDef from './preventDefault.js';
import Data from './data.js';

const data = new Data();

const pressedBtns = new Set();

function setLocalStorage() {
  localStorage.setItem('lang', data.lang);
}

function changeLanguage() {
  if (pressedBtns.has('ControlLeft') && pressedBtns.has('AltLeft')) {
    data.lang = (data.lang === 'en') ? 'ru' : 'en';
  }
  updBtnKeys(data.lang);
  setLocalStorage();
}

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    data.lang = localStorage.getItem('lang');
  }
  changeLanguage();
}

function addBtnToSetPressed(event) {
  pressedBtns.add(event.code);
  changeLanguage();
}

function removeBtnFromSetPressed(event) {
  pressedBtns.delete(event.code);
}

createBody();
createButtons();
updBtnKeys(data.lang);

document.addEventListener('DOMContentLoaded', getLocalStorage);
document.addEventListener('unload', setLocalStorage);
document.addEventListener('keydown', lightBtn);
document.addEventListener('keyup', lightBtn);
document.addEventListener('keydown', preventDef);
document.addEventListener('keydown', addBtnToSetPressed);
document.addEventListener('keyup', removeBtnFromSetPressed);
