import createBody from './createBody.js';
import createButtons from './createBtns.js';
import updBtnKeys from './updBtnKeys.js';
import lightBtn from './lightBtns.js';
import preventDef from './preventDefault.js';
import data from './data.js';
import setLocalStorage from './setLocalStorage.js';
import getLocalStorage from './getLocalStorage.js';
import watchPressedBtns from './watchPressedBtns.js';

function onLoadPage() {
  createBody();
  createButtons();
  getLocalStorage();
  updBtnKeys(data.lang);
}

document.addEventListener('DOMContentLoaded', onLoadPage);
document.addEventListener('unload', setLocalStorage);
document.addEventListener('keydown', lightBtn);
document.addEventListener('keyup', lightBtn);
document.addEventListener('keydown', preventDef);
document.addEventListener('keydown', watchPressedBtns);
document.addEventListener('keyup', watchPressedBtns);
