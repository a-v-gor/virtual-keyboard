import fnBtns from './fnBtns.js';

export default function preventDef(event) {
  const preventArr = fnBtns.concat(['Backspace', 'Tab', 'Delete', 'CapsLock', 'ShiftLeft',
    'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltLeft', 'AltLeft', 'AltRight',
    'ContextMenu', 'ControlRight']);

  const usBtnArr = ['Enter', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Space'];

  function addText(str) {
    const textArea = document.querySelector('.keyboard__input-field');
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const readyStr = textArea.value.substring(0, start) + str + textArea.value.substring(end);
    textArea.value = readyStr;
    textArea.focus();
    textArea.selectionEnd = (start === end) ? (end + str.length) : end;
  }

  if (!usBtnArr.includes(event.code)) {
    event.preventDefault();
  }

  if (event.code === 'Tab') {
    addText('  ');
  } else if (!preventArr.includes(event.code)) {
    const btn = document.querySelector(`[data-code="${event.code}"]`);
    addText(btn.innerHTML);
  }
}
