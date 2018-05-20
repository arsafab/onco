import scrollTo from './utils/scrollTo';

const arrowDown = document.querySelector('#arrow-down');
const { innerWidth } = window;
let runScroll;

if (innerWidth < 940 && innerWidth > 820) {
    runScroll = () => scrollTo(document.documentElement, 710, 200);
} else if (innerWidth <= 820 && innerWidth > 491) {
    runScroll = () => scrollTo(document.documentElement, 630, 200);
} else if (innerWidth <= 491 && innerWidth > 425) {
    runScroll = () => scrollTo(document.documentElement, 640, 200);
} else if (innerWidth <= 425) {
    runScroll = () => scrollTo(document.documentElement, 675, 200);
} else {
    runScroll = () => scrollTo(document.documentElement, 780, 200);
}

arrowDown.addEventListener('click', runScroll);
