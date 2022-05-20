export const manageModalWindow = () => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  for (let btn of refs.openModalBtn) {
    btn.addEventListener('click', toggleModal);
  }
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    refs.modal.classList.toggle('is-hidden');
  }
};
