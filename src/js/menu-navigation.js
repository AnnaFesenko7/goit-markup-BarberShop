export const manageMenuNavigation = () => {
  const menuLinks = document.querySelectorAll('.menu__link');

  for (let link of menuLinks) {
    link.addEventListener('click', addAccent);
  }

  function addAccent(e) {
    const accentLink = document.querySelector('.current');

    this.classList.add('current');
    accentLink.classList.remove('current');
  }
};
