import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  buttonOpen: document.querySelector('.navbar__button__open_menu'),
  buttonClose: document.querySelector('.navbar__button__close_menu'),
  navbar: document.querySelector('.navbar'),
  body: document.querySelector('body'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});

const navbarElement = document.querySelector('.navbar');
// eslint-disable-next-line func-names
window.addEventListener('scroll', function () {
  // eslint-disable-next-line no-unused-expressions
  this.scrollY > 20 ? navbarElement.classList.add('sticky_navbar') : navbarElement.classList.remove('sticky_navbar');
});
