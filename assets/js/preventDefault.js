export default function preventDef(event) {
  function addText(str) {
    const textArea = document.querySelector('.keyboard__input-field');
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const readyStr = textArea.value.substring(0, start) + str + textArea.value.substring(end);
    textArea.value = readyStr;
    textArea.focus();
    textArea.selectionEnd = (start === end) ? (end + str.length) : end;
  }

  if (event.code.startsWith('Key')) {
    event.preventDefault();
  }

  if (event.code === 'Tab') {
    event.preventDefault();
    addText('  ');
  }

  if (event.code.startsWith('Key')) {
    const btn = document.querySelector(`[data-code="${event.code}"]`);
    addText(btn.innerHTML);
  }
}
