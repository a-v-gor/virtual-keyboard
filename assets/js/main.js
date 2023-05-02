import createBody from './createBody.js';
import updBtnKeys from './updBtnKeys.js';
import preventDef from './preventDefault.js';
import getLocalStorage from './getLocalStorage.js';
import clickOnKbd from './clickOnKbd.js';
import focusOnInput from './focusOnInput.js';

function onLoadPage() {
  createBody();
  getLocalStorage();
  updBtnKeys();
}

document.addEventListener('DOMContentLoaded', onLoadPage);
document.addEventListener('keydown', preventDef);
document.addEventListener('keyup', preventDef);
document.addEventListener('mouseup', focusOnInput);
document.addEventListener('mousedown', clickOnKbd);
document.addEventListener('mouseup', clickOnKbd);
