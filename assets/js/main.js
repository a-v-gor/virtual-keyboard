import createBody from './createBody.js';
import createButtons from './createBtns.js';
import updBtnKeys from './updBtnKeys.js';
import { highLightBtn, unHighLightBtn } from './lightBtns.js';
import preventDef from './preventDefault.js';
import Data from './data.js';

const data = new Data();

const pressedBtns = new Set();

function changeLanguage() {
  if (pressedBtns.has('ControlLeft') && pressedBtns.has('AltLeft')) {
    data.lang = (data.lang === 'en') ? 'ru' : 'en';
    updBtnKeys(data.lang);
  }
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

document.addEventListener('keydown', highLightBtn);
document.addEventListener('keyup', unHighLightBtn);
document.addEventListener('keydown', preventDef);
document.addEventListener('keydown', addBtnToSetPressed);
document.addEventListener('keyup', removeBtnFromSetPressed);
