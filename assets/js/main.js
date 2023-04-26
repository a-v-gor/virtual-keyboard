import createBody from './createBody.js';
import createButtons from './createBtns.js';
import updBtnKeys from './updBtnKeys.js';
import highLightBtn from './lightBtns.js';

createBody();
createButtons();
updBtnKeys('en');

function preventDefault(event) {
  const preventArr = ['Tab', 'AltLeft'];

  if (preventArr.includes(event.code)) {
    event.preventDefault();
  }

  if (event.code === 'Tab') {
    document.querySelector('.keyboard__input-field').value += '  ';
  }
}

document.addEventListener('keydown', preventDefault);
document.addEventListener('keydown', highLightBtn);
document.addEventListener('keyup', highLightBtn);
