import data from './data.js';
import btnKeys from './btnKeys.js';
import btnKeysShifted from './btnKeysShifted.js';

export default function updBtnKeys() {
  let btnKeysObj;
  if (data.shift) {
    btnKeysObj = btnKeysShifted;
  } else {
    btnKeysObj = btnKeys;
  }

  const btns = document.querySelectorAll('.keyboard__btn');
  const lettersArr = ['Backquote', 'BracketLeft', 'BracketRight', 'Semicolon', 'Quote', 'Comma', 'Period'];
  for (let i = 0; i < btns.length; i += 1) {
    const btn = btns[i];
    let key = btnKeysObj[data.lang][btn.dataset.code];
    if (data.caps && !data.shift && (btn.dataset.code.startsWith('Key') || lettersArr.includes(btn.dataset.code))) {
      key = key.toUpperCase();
    } else if (data.caps && data.shift && (btn.dataset.code.startsWith('Key') || lettersArr.includes(btn.dataset.code))) {
      key = key.toLowerCase();
    }
    btn.innerHTML = key;
  }
}
