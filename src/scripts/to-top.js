import scrollTo from './utils/scrollTo';

const arrowDown = document.querySelector('#to-top');
const logo = document.querySelector('.logo');
const runScroll = () => scrollTo(document.documentElement, 0, 200);

const onscroll = () => {
    const height = document.documentElement.scrollTop;
    logo.addEventListener('click', runScroll);

    if (height > 300) {
        arrowDown.addEventListener('click', runScroll);
        arrowDown.classList.remove('hidden');
    } else {
        arrowDown.removeEventListener('click', runScroll);
        arrowDown.classList.add('hidden');
    }
};

window.onscroll = onscroll;
