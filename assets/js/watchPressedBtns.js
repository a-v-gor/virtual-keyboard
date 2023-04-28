import data from './data.js';
import pressedBtns from './pressedBtns.js';
import changeLanguage from './changeLanguage.js';
import updBtnKeys from './updBtnKeys.js';

export default function watchPressedBtns(event) {
  if (event.type === 'keydown') {
    pressedBtns.add(event.code);
    if (pressedBtns.has('ControlLeft') && pressedBtns.has('AltLeft')) {
      data.lang = (data.lang === 'en') ? 'ru' : 'en';
      changeLanguage();
    }
    if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {
      data.shift = true;
      updBtnKeys();
    }
  } else {
    pressedBtns.delete(event.code);
    if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {
      data.shift = false;
      updBtnKeys();
    }
  }
}
