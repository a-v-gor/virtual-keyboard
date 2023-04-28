import createBody from './createBody.js';
import updBtnKeys from './updBtnKeys.js';
import lightBtn from './lightBtns.js';
import preventDef from './preventDefault.js';
import getLocalStorage from './getLocalStorage.js';
import watchPressedBtns from './watchPressedBtns.js';

function onLoadPage() {
  createBody();
  getLocalStorage();
  updBtnKeys();
}

document.addEventListener('DOMContentLoaded', onLoadPage);
document.addEventListener('keydown', preventDef);
document.addEventListener('keydown', watchPressedBtns);
document.addEventListener('keydown', lightBtn);
document.addEventListener('keyup', lightBtn);
document.addEventListener('keyup', watchPressedBtns);
