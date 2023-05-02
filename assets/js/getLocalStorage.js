import data from './data.js';
import changeLanguage from './changeLanguage.js';

export default function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    data.lang = localStorage.getItem('lang');
  }
  changeLanguage();
}
