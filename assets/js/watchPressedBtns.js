import data from './data.js';
import pressedBtns from './pressedBtns.js';
import changeLanguage from './changeLanguage.js';
import updBtnKeys from './updBtnKeys.js';
import lightBtns from './lightBtns.js';

export default function watchPressedBtns(event) {
  // if ((event.code === 'ShiftLeft') || (event.code === 'ShiftRight')) {
  //   if (event.type === 'keydown') {
  //     if (!pressedBtns.has('ShiftLeft') && !pressedBtns.has('ShiftRight')) {
  //       data.shift = true;
  //       pressedBtns.add(event.code);
  //     }
  //   } else if (pressedBtns.has(event.code)) {
  //     data.shift = false;
  //     pressedBtns.delete(event.code);
  //   }
  //   updBtnKeys();
  // }

  if (event.type === 'keydown') {
    if ((((event.code === 'ShiftLeft') || (event.code === 'ShiftRight'))
    && !(pressedBtns.has('ShiftLeft') || pressedBtns.has('ShiftRight')))
    || !((event.code === 'ShiftLeft') || (event.code === 'ShiftRight'))) {
      console.log(pressedBtns);
      pressedBtns.add(event.code);
    }
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

  lightBtns(event);
}
