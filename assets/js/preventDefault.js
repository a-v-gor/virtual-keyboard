export default function preventDef(event) {
  const preventArr = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'CapsLock', 'ControlRight', 'Tab', 'AltLeft', 'AltRight'];

  if (preventArr.includes(event.code) || event.code.startsWith('Key')) {
    event.preventDefault();
  }

  if (event.code === 'Tab') {
    document.querySelector('.keyboard__input-field').value += '  ';
  }

  if (event.code.startsWith('Key')) {
    document.querySelector('.keyboard__input-field').value += event.key;
  }
}
