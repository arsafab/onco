const confirmation = document.querySelector('.confirmation');
const closeConfirmationBtn = document.querySelector('.close-confirmation');
const confirmationCrosshair = document.querySelector('.confirmation .crosshair');

const openConfirmation = () => {
    confirmation.classList.remove('hide');
    confirmation.classList.add('show');
};

const closeConfirmation = () => {
    confirmation.classList.remove('show');
    confirmation.classList.add('hide');
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
