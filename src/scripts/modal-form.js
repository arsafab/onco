const formTriggers = document.querySelectorAll('.modal-form-trigger');
const modalForm = document.querySelector('.modal-form');
const closeBtn = document.querySelector('.close-modal');

const openModal = () => {
    modalForm.classList.remove('hide');
    modalForm.classList.add('show');
};

const closeModal = () => {
    modalForm.classList.remove('show');
    modalForm.classList.add('hide');
};

const backdropFormClick = (event) => {
    if (event.target.classList.contains('modal-form')) {
        modalForm.classList.remove('show');
        modalForm.classList.add('hide');
    }
};

formTriggers.forEach(trigger => trigger.addEventListener('click', openModal));
closeBtn.addEventListener('click', closeModal);
modalForm.addEventListener('click', backdropFormClick);
