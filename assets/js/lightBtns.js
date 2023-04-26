function highLightBtn(event) {
  const btn = document.querySelector(`[data-code="${event.code}"]`);
  btn.classList.toggle('keyboard__btn_pressed');
}

function unHighLightBtn(event) {
  const btn = document.querySelector(`[data-code="${event.code}"]`);
  btn.classList.remove('keyboard__btn_pressed');
}

export { highLightBtn, unHighLightBtn };
