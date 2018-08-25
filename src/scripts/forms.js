const contactsFormInputs = document.querySelectorAll('#contacts input');
const contactsFormSubmitBtn = document.querySelector('#contacts button[type=submit]');

const jumbotronFormInputs = document.querySelectorAll('.jumbotron-block input');
const jumbotronFormSubmitBtn = document.querySelector('.jumbotron-block button[type=submit]');

const pricesFormInputs = document.querySelectorAll('#prices input');
const pricesFormSubmitBtn = document.querySelector('#prices button[type=submit]');


const validateContactsForm = () => {
    contactsFormSubmitBtn.disabled = [...contactsFormInputs].some(input => !input.value);
};

const validateJumbotronForm = () => {
    jumbotronFormSubmitBtn.disabled = [...jumbotronFormInputs].some(input => !input.value);
};

const validatePricesForm = () => {
    pricesFormSubmitBtn.disabled = [...pricesFormInputs].some(input => !input.value);
};

[...contactsFormInputs].forEach(input => input.addEventListener('keyup', validateContactsForm));
[...jumbotronFormInputs].forEach(input => input.addEventListener('keyup', validateJumbotronForm));
[...pricesFormInputs].forEach(input => input.addEventListener('keyup', validatePricesForm));
