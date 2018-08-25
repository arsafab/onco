import { addActive, removeActive } from './utils/active';

const feedbackItems = document.querySelectorAll('.feedback-item');
const feedbackArrowRight = document.querySelector('.feedback-block .arrow-right');
const feedbackArrowLeft = document.querySelector('.feedback-block .arrow-left');

const showRightFeedback = () => {
    const items = [...feedbackItems];
    const index = items.findIndex(item => item.classList.contains('active'));

    if (index !== feedbackItems.length - 1) {
        removeActive(feedbackItems[index]);
        feedbackItems[index].classList.add('left');
        feedbackItems[index + 1].classList.remove('right');
        addActive(feedbackItems[index + 1]);
        feedbackArrowLeft.disabled = false;
    } 

    if (index + 2 === feedbackItems.length) {
        feedbackArrowRight.disabled = true;
    }
};

const showLeftFeedback = () => {
    const items = [...feedbackItems];
    const index = items.findIndex(item => item.classList.contains('active'));

    if (index !== 0) {
        removeActive(feedbackItems[index]);
        feedbackItems[index].classList.add('right');
        feedbackItems[index - 1].classList.remove('left');
        addActive(feedbackItems[index - 1]);
        feedbackArrowRight.disabled = false;
    }

    if (index - 1 === 0) {
        feedbackArrowLeft.disabled = true;
    }
};

feedbackArrowRight.addEventListener('click', showRightFeedback);
feedbackArrowLeft.addEventListener('click', showLeftFeedback);
