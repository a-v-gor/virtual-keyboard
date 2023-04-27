import data from './data.js';
import updBtnKeys from './updBtnKeys.js';
import setLocalStorage from './setLocalStorage.js';

export default function changeLanguage() {
  updBtnKeys(data.lang);
  setLocalStorage();
}
