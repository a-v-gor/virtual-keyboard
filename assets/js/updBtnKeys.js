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
  for (let i = 0; i < btns.length; i += 1) {
    const btn = btns[i];
    const key = btnKeysObj[data.lang][btn.dataset.code];
    btn.innerHTML = key;
  }
}
