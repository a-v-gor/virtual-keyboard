import fnBtns from './fnBtns.js';
import watchPressedBtns from './watchPressedBtns.js';
import pressedBtns from './pressedBtns.js';
import audioPlay from './audioPlay.js';

export default function lightBtns(event) {
  const className = 'keyboard__btn_pressed';
  const btn = document.querySelector(`[data-code="${event.code}"]`);
  const capsBtn = document.querySelector(`[data-code="${'CapsLock'}"]`);
  const capsIsPressed = Array.from(capsBtn.classList).includes(className);

  function addClass() {
    btn.classList.add(className);
  }

  function removeClass() {
    btn.classList.remove(className);
  }
  if (fnBtns.includes(event.code) || !btn
  || (pressedBtns.has('ShiftLeft') && (event.code === 'ShiftRight'))
  || (pressedBtns.has('ShiftRight') && (event.code === 'ShiftLeft'))) {
    return;
  }

  if (event.type === 'keydown') {
    if ((event.code === 'CapsLock') && (capsIsPressed)) {
      removeClass();
      audioPlay();
    } else if (!event.repeat) {
      addClass();
      audioPlay();
    }
  } else if (!(event.code === 'CapsLock')) {
    removeClass();
  }
  watchPressedBtns(event);
}
