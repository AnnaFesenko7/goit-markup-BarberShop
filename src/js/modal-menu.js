export const manageModalMenu = () => {
  const refs = {
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    openMenuBtn: document.querySelector('[data-menu-open]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);

  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu(e) {
    refs.menu.classList.toggle('is-hidden');
  }
};
