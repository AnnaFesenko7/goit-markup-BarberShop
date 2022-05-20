export const manageNavigation = () => {
  const navLinks = document.querySelectorAll('.nav__link');

  for (let link of navLinks) {
    link.addEventListener('click', addAccent);
  }

  function addAccent(e) {
    const accentLink = document.querySelector('.current');
    accentLink.classList.remove('current');
    this.classList.add('current');
  }
};
