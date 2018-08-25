const confirmation = document.querySelector('.confirmation');
const closeConfirmationBtn = document.querySelector('.close-confirmation');
const confirmationCrosshair = document.querySelector('.confirmation .crosshair');
const submitButtons = document.querySelectorAll('button[type=submit]');

const openConfirmation = () => {
    confirmation.classList.remove('hide');
    confirmation.classList.add('show');
};

const closeConfirmation = () => {
    confirmation.classList.remove('show');
    confirmation.classList.add('hide');

    [...document.querySelectorAll('input')].forEach((input) => {
        if (input.value) {
            input.value = ''; // eslint-disable-line no-param-reassign
        }
    });

    [...submitButtons].forEach((btn) => {
        if (!btn.disabled) {
            btn.disabled = true; // eslint-disable-line no-param-reassign
        }
    });
};

const backdropConfirmationClick = (event) => {
    if (event.target.classList.contains('confirmation')) {
        confirmation.classList.remove('show');
        confirmation.classList.add('hide');
    }
};

confirmation.addEventListener('click', backdropConfirmationClick);
closeConfirmationBtn.addEventListener('click', closeConfirmation);
confirmationCrosshair.addEventListener('click', closeConfirmation);

[...submitButtons].forEach(btn => btn.addEventListener('click', openConfirmation));
