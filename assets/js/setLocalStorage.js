import data from './data.js';

export default function setLocalStorage() {
  localStorage.setItem('lang', data.lang);
}
