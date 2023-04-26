import btnKeys from './btnKeys.js';

export default function updBtnKeys(lang) {
  const btns = document.querySelectorAll('.keyboard__btn');
  for (let i = 0; i < btns.length; i += 1) {
    const btn = btns[i];
    const key = btnKeys[lang][btn.dataset.code];
    btn.innerHTML = key;
  }
}
