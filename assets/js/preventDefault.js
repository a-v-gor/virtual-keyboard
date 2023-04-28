import fnBtns from './fnBtns.js';

export default function preventDef(event) {
  const preventArr = fnBtns.concat(['Tab', 'CapsLock', 'ShiftLeft',
    'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltLeft', 'AltLeft', 'AltRight',
    'ContextMenu', 'ControlRight']);

  const usBtnArr = ['Backspace', 'Delete', 'Enter', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Space'];

  function addText(str) {
    let copyStr;
    if (str === '&amp;') {
      copyStr = '&';
    } else if (str === '&gt;') {
      copyStr = '>';
    } else if (str === '&lt;') {
      copyStr = '<';
    } else {
      copyStr = str;
    }
    const textArea = document.querySelector('.keyboard__input-field');
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const readyStr = textArea.value.substring(0, start) + copyStr + textArea.value.substring(end);
    textArea.value = readyStr;
    textArea.focus();
    textArea.selectionEnd = (start === end) ? (end + copyStr.length) : end;
  }

  if (!usBtnArr.includes(event.code)) {
    event.preventDefault();
  }

  if (event.code === 'Tab') {
    addText('  ');
  } else if (!preventArr.includes(event.code) && !usBtnArr.includes(event.code)) {
    const btn = document.querySelector(`[data-code="${event.code}"]`);
    if (btn) {
      addText(btn.innerHTML);
    }
  }
}
