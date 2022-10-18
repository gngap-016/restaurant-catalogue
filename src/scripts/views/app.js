import NavbarInitiator from '../utils/navbar-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    buttonOpen,
    buttonClose,
    navbar,
    body,
  }) {
    this._buttonOpen = buttonOpen;
    this._buttonClose = buttonClose;
    this._navbar = navbar;
    this._body = body;

    this._initialAppShell();
  }

  _initialAppShell() {
    NavbarInitiator.init({
      buttonOpen: this._buttonOpen,
      buttonClose: this._buttonClose,
      navbar: this._navbar,
      body: this._body,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async renderPage() {
    const mainContainer = document.querySelector('#mainContent');
    mainContainer.innerHTML = '<div class="lds-dual-ring"></div>';
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    mainContainer.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElement = document.querySelector('.skip-link');
    skipLinkElement.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  }
}

export default App;
