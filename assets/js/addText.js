export default function addText(str) {
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
  textArea.selectionEnd = textArea.selectionStart;
  const pos = textArea.selectionStart;
  let startStr = textArea.value.substring(0, pos);
  let endStr = textArea.value.substring(pos);
  if (str === 'Delete') {
    copyStr = '';
    endStr = endStr.slice(1);
  } else if (str === 'Backspace') {
    copyStr = '';
    startStr = startStr.substring(0, startStr.length - 1);
  }
  let numPos;
  if (str === 'Delete') {
    numPos = 0;
  } else if (str === 'Backspace') {
    numPos = -1;
  } else {
    numPos = copyStr.length;
  }
  const readyStr = startStr + copyStr + endStr;
  textArea.value = readyStr;
  textArea.focus();
  textArea.selectionEnd = pos + numPos;
}
