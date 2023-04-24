export function createBody() {
  const body = document.querySelector(".body");
  const str = `
  <header class="header">
    <div class="wrapper">
      <h1 class="title">Virtual keyboard</h1>
    </div>
  </header>
  <main class="main">
    <div class="wrapper keyboard">
      <form class="keyboard__input-form">
        <label class="keyboard__input-label" for="input">Text field</label>
        <textarea class="keyboard__input-field" id="input" rows="10" cols="50"></textarea>
      </form>
      <div class="keyboard__btns-wrapper">
        <div class="keyboard__btns-row">
          <div class="keyboard__btn keyboard__btn_funk"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn keyboard__btn_long keyboard__btn_funk"></div>
        </div>
        <div class="keyboard__btns-row">
          <div class="keyboard__btn keyboard__btn_funk"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn keyboard__btn_funk"></div>
        </div>
        <div class="keyboard__btns-row">
          <div class="keyboard__btn keyboard__btn_long keyboard__btn_funk"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn keyboard__btn_long keyboard__btn_funk"></div>
        </div>
        <div class="keyboard__btns-row">
          <div class="keyboard__btn keyboard__btn_long keyboard__btn_funk"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn"></div>
          <div class="keyboard__btn keyboard__btn_funk"></div>
          <div class="keyboard__btn keyboard__btn_funk"></div>
        </div>
        <div class="keyboard__btns-row">
          <div class="keyboard__btn keyboard__btn_funk"></div>
          <div class="keyboard__btn keyboard__btn_funk"></div>
          <div class="keyboard__btn keyboard__btn_funk"></div>
          <div class="keyboard__btn keyboard__btn_long"></div>
          <div class="keyboard__btn keyboard__btn_funk"></div>
          <div class="keyboard__btn keyboard__btn_funk"></div>
          <div class="keyboard__btn keyboard__btn_funk"></div>
          <div class="keyboard__btn keyboard__btn_funk"></div>
          <div class="keyboard__btn keyboard__btn_funk"></div>
        </div>
      </div>
    </div>
  </main>
  <footer class="footer">
    <div class="wrapper">
      
    </div>
  </footer>`
  body.innerHTML = str;
}