const triggers = document.querySelectorAll('.modal-trigger');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');

const openModal = () => {
    modal.classList.remove('hide');
    modal.classList.add('show');
};

const closeModal = () => {
    modal.classList.remove('show');
    modal.classList.add('hide');
};

const backdropClick = (event) => {
    if (event.target.classList.contains('modal')) {
        modal.classList.remove('show');
        modal.classList.add('hide');
    }
};

triggers.forEach(trigger => trigger.addEventListener('click', openModal));
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', backdropClick);
