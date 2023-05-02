import clickedBtns from './clickedBtns.js';
import preventDef from './preventDefault.js';

export default function clickOnKbd(event) {
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
