import createBody from './createBody.js';
import updBtnKeys from './updBtnKeys.js';
import preventDef from './preventDefault.js';
import getLocalStorage from './getLocalStorage.js';

function onLoadPage() {
  createBody();
  getLocalStorage();
  updBtnKeys();
}

function clickOnKbd(event) {
  const key = event.target.getAttribute('data-code');

  function kDown(str) {
    let EventStr;
    if (str === 'mousedown') {
      EventStr = 'keydown';
    } else {
      EventStr = 'keyup';
    }
    return new KeyboardEvent(EventStr, { code: `${key}` });
  }

  preventDef(kDown(event.type));
}

document.addEventListener('DOMContentLoaded', onLoadPage);
document.addEventListener('keydown', preventDef);
document.addEventListener('keyup', preventDef);
document.addEventListener('mousedown', clickOnKbd);
document.addEventListener('mouseup', clickOnKbd);
