export default function createBody() {
  function addNode(strNode, strClass, parentNode, strIn = '') {
    const node = document.createElement(`${strNode}`);
    node.className = `${strClass}`;
    if (strIn.length) {
      node.innerHTML = strIn;
    }
    parentNode.append(node);
  }

  function addBtnsToRow() {
    for (let rNum = 0; rNum < 5; rNum += 1) {
      let btnNum = 9;
      if (rNum === 0) {
        btnNum = 14;
      } else if (rNum === 1) {
        btnNum = 15;
      } else if (rNum === 2 || rNum === 3) {
        btnNum = 13;
      }
      addNode('div', 'keyboard__btns-row', document.querySelector('.keyboard__btns-wrapper'));
      const btnRows = document.querySelectorAll('.keyboard__btns-row');
      for (let i = 0; i < btnNum; i += 1) {
        let btnClassName = 'keyboard__btn';
        if (rNum === 0) {
          if (i === 0) {
            btnClassName = 'keyboard__btn keyboard__btn_funk';
          } else if (i === 13) {
            btnClassName = 'keyboard__btn keyboard__btn_long keyboard__btn_funk';
          }
        } else if (rNum === 1) {
          if (i === 0 || i === 14) {
            btnClassName = 'keyboard__btn keyboard__btn_funk';
          }
        } else if (rNum === 2) {
          if (i === 0 || i === 12) {
            btnClassName = 'keyboard__btn keyboard__btn_long keyboard__btn_funk';
          }
        } else if (rNum === 3) {
          if (i === 0) {
            btnClassName = 'keyboard__btn keyboard__btn_long keyboard__btn_funk';
          } else if (i > 10) {
            btnClassName = 'keyboard__btn keyboard__btn_funk';
          }
        } else if (rNum === 4) {
          if (i === 3) {
            btnClassName = 'keyboard__btn keyboard__btn_long';
          } else {
            btnClassName = 'keyboard__btn keyboard__btn_funk';
          }
        }
        addNode('div', btnClassName, btnRows[btnRows.length - 1]);
      }
    }
  }

  addNode('header', 'header', document.body);
  addNode('div', 'wrapper', document.querySelector('.header'));
  addNode('h1', 'title', document.querySelector('.wrapper'), 'Virtual keyboard');
  addNode('main', 'main', document.body);
  addNode('div', 'wrapper keyboard', document.querySelector('.main'));
  addNode('form', 'keyboard__input-form', document.querySelector('.wrapper.keyboard'));
  addNode('label', 'keyboard__input-label', document.querySelector('.keyboard__input-form'), 'Text field');
  document.querySelector('.keyboard__input-label').setAttribute('for', 'input');
  addNode('textarea', 'keyboard__input-field', document.querySelector('.keyboard__input-form'));
  document.querySelector('.keyboard__input-field').setAttribute('id', 'input');
  document.querySelector('.keyboard__input-field').setAttribute('rows', '10');
  document.querySelector('.keyboard__input-field').setAttribute('cols', '100');
  addNode('div', 'keyboard__btns-wrapper', document.querySelector('.wrapper.keyboard'));
  addBtnsToRow();
}
