import createBody from './createBody.js';
import updBtnKeys from './updBtnKeys.js';
import preventDef from './preventDefault.js';
import getLocalStorage from './getLocalStorage.js';
import clickedBtns from './clickedBtns.js';

function onLoadPage() {
  createBody();
  getLocalStorage();
  updBtnKeys();
}

function clickOnKbd(event) {
  let key;

  function kDown(str) {
    let EventStr;
    if (str === 'mousedown') {
      EventStr = 'keydown';
    } else {
      EventStr = 'keyup';
    }
    return new KeyboardEvent(EventStr, { code: `${key}` });
  }

  if (event.type === 'mousedown') {
    key = event.target.getAttribute('data-code');
    clickedBtns.push(key);
  } else {
    key = clickedBtns.splice(0, 1);
  }
  preventDef(kDown(event.type));
}

document.addEventListener('DOMContentLoaded', onLoadPage);
document.addEventListener('keydown', preventDef);
document.addEventListener('keyup', preventDef);
document.addEventListener('mousedown', clickOnKbd);
document.addEventListener('mouseup', clickOnKbd);
