export default function highLightBtn(event) {
  const btn = document.querySelector(`[data-code="${event.code}"]`);
  if (event.repeat) {
    btn.classList.remove('keyboard__btn_pressed');
  }
  btn.classList.toggle('keyboard__btn_pressed');
}
