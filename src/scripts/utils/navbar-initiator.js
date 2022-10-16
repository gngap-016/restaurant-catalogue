const NavbarInitiator = {
  init({ buttonOpen, buttonClose, navbar, body }) {
    buttonOpen.addEventListener('click', (event) => {
      this._toggleNavbar({ event, navbar, body, buttonOpen });
    });

    buttonClose.addEventListener('click', (event) => {
      this._closeNavbar({ event, navbar, body, buttonOpen });
    });
  },

  _toggleNavbar({ event, navbar, body, buttonOpen }) {
    event.stopPropagation();
    navbar.classList.toggle('show_navbar_menu');
    body.classList.toggle('disabled_body_scroll');
    buttonOpen.classList.toggle('hide_button_open_navbar_menu');
  },

  _closeNavbar({ event, navbar, body, buttonOpen }) {
    event.stopPropagation();
    navbar.classList.remove('show_navbar_menu');
    body.classList.remove('disabled_body_scroll');
    buttonOpen.classList.remove('hide_button_open_navbar_menu');
  },
};

export default NavbarInitiator;
