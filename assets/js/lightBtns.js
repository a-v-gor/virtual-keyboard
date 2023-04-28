import fnBtns from './fnBtns.js';

export default function lightBtn(event) {
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

  if (fnBtns.includes(event.code) || !btn) {
    return;
  }

  if (event.type === 'keydown') {
    if ((event.code === 'CapsLock') && (capsIsPressed)) {
      removeClass();
    } else {
      addClass();
    }
  } else if (!(event.code === 'CapsLock')) {
    removeClass();
  }
}
