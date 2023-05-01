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
  const start = textArea.selectionStart;
  const end = textArea.selectionEnd;
  let startStr = textArea.value.substring(0, start);
  let endStr = textArea.value.substring(end);
  if (str === 'Delete') {
    copyStr = '';
    endStr = endStr.slice(1);
  } else if (str === 'Backspace') {
    copyStr = '';
    startStr = startStr.substring(0, startStr.length - 1);
  }
  const readyStr = startStr + copyStr + endStr;
  textArea.value = readyStr;
  textArea.focus();

  textArea.selectionEnd = (start === end) ? (end + copyStr.length) : end;
}
