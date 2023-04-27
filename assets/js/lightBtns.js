function highLightBtn(event) {
  if (!event.code === 'CapsLock') {
    document.querySelector(`[data-code="${event.code}"]`).classList.add('keyboard__btn_pressed');
  }
}

function unHighLightBtn(event) {
  if (!event.code === 'CapsLock') {
    document.querySelector(`[data-code="${event.code}"]`).classList.remove('keyboard__btn_pressed');
  }
}

export { highLightBtn, unHighLightBtn };
