import { disableScroll, enableScroll } from './utils/scroll';

const formTriggers = document.querySelectorAll('.modal-form-trigger');
const modalForm = document.querySelector('.modal-form');
const closeBtn = document.querySelector('.close-modal');
const modalFormCrosshair = document.querySelector('.modal-form .crosshair');
const modalFormSubmitBtn = document.querySelector('.modal-form button[type=submit]');
const modalFormInputs = document.querySelectorAll('.modal-form input');

const allFieldsError = document.querySelector('.modal-form .all-fields-error');
const EmailError = document.querySelector('.modal-form .email-error');
const TelError = document.querySelector('.modal-form .tel-error');

const openModalForm = () => {
    disableScroll();
    modalForm.classList.remove('hide');
    modalForm.classList.add('show');
};

const closeModalForm = () => {
    enableScroll();
    modalForm.classList.remove('show');
    modalForm.classList.add('hide');
};

const backdropFormClick = (event) => {
    if (event.target.classList.contains('modal-form')) {
        enableScroll();
        modalForm.classList.remove('show');
        modalForm.classList.add('hide');
    }
};

const validateForm = (event) => {
    if (event.target.type === 'email' && event.target.value) {
        modalFormSubmitBtn.disabled = /\S+@\S+\.\S+/.test(String(event.target.value).toLowerCase());
        modalFormSubmitBtn.disabled
            ? EmailError.classList.add('hide')
            : EmailError.classList.remove('hide');
    }

    if (event.target.type === 'tel' && event.target.value) {
        modalFormSubmitBtn.disabled = /[a-zA-Zа-яА-Я]/.test(String(event.target.value).toLowerCase());
        modalFormSubmitBtn.disabled
            ? TelError.classList.remove('hide')
            : TelError.classList.add('hide');
    }

    modalFormSubmitBtn.disabled = [...modalFormInputs].some(input => !input.value);
    modalFormSubmitBtn.disabled
        ? allFieldsError.classList.remove('hide')
        : allFieldsError.classList.add('hide');
};

formTriggers.forEach(trigger => trigger.addEventListener('click', openModalForm));
closeBtn.addEventListener('click', closeModalForm);
modalForm.addEventListener('click', backdropFormClick);
modalFormCrosshair.addEventListener('click', closeModalForm);
[...modalFormInputs].forEach(input => input.addEventListener('keyup', validateForm));
modalFormSubmitBtn.addEventListener('click', closeModalForm);
