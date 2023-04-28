import data from './data.js';
import pressedBtns from './pressedBtns.js';
import changeLanguage from './changeLanguage.js';
import updBtnKeys from './updBtnKeys.js';

export default function watchPressedBtns(event) {
  if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {
    if (event.type === 'keydown') {
      data.shift = true;
    } else {
      data.shift = false;
    }
    updBtnKeys();
  }

  if (event.type === 'keydown') {
    pressedBtns.add(event.code);
    if (pressedBtns.has('ControlLeft') && pressedBtns.has('AltLeft')) {
      data.lang = (data.lang === 'en') ? 'ru' : 'en';
      changeLanguage();
    }
    if (event.code === 'CapsLock') {
      if (data.caps) {
        data.caps = false;
        updBtnKeys();
        pressedBtns.delete(event.code);
      } else {
        data.caps = true;
        updBtnKeys();
      }
    }
  } else if ((event.type === 'keyup') && !(event.code === 'CapsLock')) {
    pressedBtns.delete(event.code);
  }
}
