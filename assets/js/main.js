'use strict';
const header = document.createElement('header');
header.className = 'header';
header.innerHTML = `<div class="wrapper">
  <h1 class="header-title">Virtual keyboard</h1>
</div>`;

const main = document.createElement('main');
main.className = 'main';
main.innerHTML = `<div class="wrapper">
<div class="text">
  <label for="keyboard">The keyboard</label>
  <textarea id="keyboard" cols="100" rows="15"></textarea>
</div>
<div class="keys">
  
</div>
</div>`;
const footer = document.createElement('footer');
footer.className = 'footer';
footer.innerHTML = `<footer class="footer">
<div class="wrapper">
  
</div>
</footer>`;

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);

for (let i = 0; i < 71; i++) {
  let key = document.createElement('div');
  key.className = 'key';
  key.innerHTML = `${i}`;
  document.getElementsByClassName('keys')[0].appendChild(key);
}