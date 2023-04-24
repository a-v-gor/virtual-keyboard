export default function createButtons() {
  const row1 = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '←'];
  const row2 = ['↹', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'];
  const row3 = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'];
  const row4 = ['Shift ⇑', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', '⇑'];
  const row5 = ['Ctrl', '⊞', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→'];

  const nodeList = document.querySelectorAll('.keyboard__btns-row');
  const arr = [];
  arr.push(row1, row2, row3, row4, row5);
  for (let node of nodeList) {
    const btns = node.querySelectorAll('.keyboard__btn');
    createRow(btns, arr.splice(0, 1).flat(1));
  }

  function createRow(btnsRow, strArr) {
    const resultArr = [].concat(strArr);
    for (let btn of btnsRow) {
      btn.innerHTML = resultArr.splice(0, 1);
    }
  }
}