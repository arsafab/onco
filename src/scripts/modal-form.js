const formTriggers = document.querySelectorAll('.modal-form-trigger');
const modalForm = document.querySelector('.modal-form');
const closeBtn = document.querySelector('.close-modal');
const modalFormCrosshair = document.querySelector('.modal-form .crosshair');

const openModalForm = () => {
    modalForm.classList.remove('hide');
    modalForm.classList.add('show');
};

const closeModalForm = () => {
    modalForm.classList.remove('show');
    modalForm.classList.add('hide');
};

const backdropFormClick = (event) => {
    if (event.target.classList.contains('modal-form')) {
        modalForm.classList.remove('show');
        modalForm.classList.add('hide');
    }
};

formTriggers.forEach(trigger => trigger.addEventListener('click', openModalForm));
closeBtn.addEventListener('click', closeModalForm);
modalForm.addEventListener('click', backdropFormClick);
modalFormCrosshair.addEventListener('click', closeModalForm);
