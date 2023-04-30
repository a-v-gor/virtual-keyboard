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
  const readyStr = textArea.value.substring(0, start) + copyStr + textArea.value.substring(end);
  textArea.value = readyStr;
  textArea.focus();
  textArea.selectionEnd = (start === end) ? (end + copyStr.length) : end;
}
