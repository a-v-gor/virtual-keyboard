import createBody from './createBody.js';
import createButtons from './createBtns.js';
import updBtnKeys from './updBtnKeys.js';
import { highLightBtn, unHighLightBtn } from './lightBtns.js';
import preventDef from './preventDefault.js';

createBody();
createButtons();
updBtnKeys('en');

document.addEventListener('keydown', preventDef);
document.addEventListener('keydown', highLightBtn);
document.addEventListener('keyup', unHighLightBtn);
