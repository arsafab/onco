const triggers = document.querySelectorAll('.modal-trigger');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const modalCrosshair = document.querySelector('.modal .crosshair');

const modalBody = modal.firstElementChild.firstElementChild;

const openModal = (event) => {
    let { target } = event;

    modal.classList.remove('hide');
    modal.classList.add('show');
    modalBody.innerHTML = '';

    while (target.tagName !== 'SECTION') {
        if (target.tagName === 'FIGURE') {
            const content = [...target.children].find(item => item.tagName === 'FIGCAPTION');

            [...content.children].forEach((item) => {
                if (item.tagName !== 'BUTTON') {
                    modalBody.appendChild(item.cloneNode(true));
                }
            });

            return;
        }

        target = target.parentNode;
    }
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
modalCrosshair.addEventListener('click', closeModal);
