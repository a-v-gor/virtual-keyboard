import fnBtns from './fnBtns.js';
import addText from './addText.js';
import lightBtns from './lightBtns.js';

export default function preventDef(event) {
  const preventArr = fnBtns.concat(['Tab', 'CapsLock', 'ControlLeft',
    'MetaLeft', 'AltLeft', 'AltLeft', 'AltLeft', 'AltRight', 'ContextMenu', 'ControlRight']);

  const usBtnArr = ['Backspace', 'ShiftLeft', 'ShiftRight', 'Delete', 'Enter', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Space'];

  if (!usBtnArr.includes(event.code)) {
    event.preventDefault();
  }
  if (event.type === 'keydown') {
    if (event.code === 'Tab') {
      addText('  ');
    } else if (!preventArr.includes(event.code) && !usBtnArr.includes(event.code)) {
      const btn = document.querySelector(`[data-code="${event.code}"]`);
      if (btn) {
        addText(btn.innerHTML);
      }
    }
  }
  lightBtns(event);
}
