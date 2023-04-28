import fnBtns from './fnBtns.js';

export default function preventDef(event) {
  const preventArr = fnBtns.concat(['Backspace', 'Tab', 'Delete', 'CapsLock', 'ShiftLeft',
    'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltLeft', 'AltLeft', 'AltRight',
    'ContextMenu', 'ControlRight']);

  const usBtnArr = ['Enter', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

  function addText(str) {
    const textArea = document.querySelector('.keyboard__input-field');
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const readyStr = textArea.value.substring(0, start) + str + textArea.value.substring(end);
    textArea.value = readyStr;
    textArea.focus();
    textArea.selectionEnd = (start === end) ? (end + str.length) : end;
  }

  if (preventArr.includes(event.code) || event.code.startsWith('Key')) {
    event.preventDefault();
  }

  if (event.code === 'Tab') {
    addText('  ');
  } else if (!preventArr.includes(event.code) && !usBtnArr.includes(event.code)) {
    const btn = document.querySelector(`[data-code="${event.code}"]`);
    addText(btn.innerHTML);
  }
}
