import { addActive, removeActive } from './utils/active';

const indicators = document.querySelectorAll('.indicators');

const defineFigureClasses = (lastActiveItemIndex, sliderItems) => {
    sliderItems.forEach((item, i) => {
        removeActive(item);
        item.classList.remove('right');
        item.classList.remove('left');

        if (i < lastActiveItemIndex - 2) {
            item.classList.add('left');
        } else if (i > lastActiveItemIndex) {
            item.classList.add('right');
        } else {
            addActive(item);
        }
    });
};

const showNextItems = (slider) => {
    const sliderItems = slider.querySelectorAll('.slider-content figure');
    const activeIndicatorIndex = [...slider.querySelectorAll('span')]
            .findIndex(span => span.classList.contains('active')) + 1; // add 1 to get ability of multiply

    const lastActiveItemIndex = (activeIndicatorIndex * 3) - 1;
    defineFigureClasses(lastActiveItemIndex, sliderItems);
};

const defineSlider = (path) => {
    const sliderIndex = [...indicators].findIndex(item => (
        path[2].getAttribute('id') === item.parentNode.getAttribute('id')
    ));

    return indicators[sliderIndex].parentNode;
};

const catchIndicatorClick = (event) => {
    let { target } = event;

    while (!target.classList.contains('indicators')) {
        if (target.tagName === 'SPAN') {
            if (target.classList.contains('active')) {
                break;
            } else {
                const slider = defineSlider(event.path);
                const prevActiveIndicator = slider.querySelector('.indicators .active');

                removeActive(prevActiveIndicator);
                addActive(target);
                showNextItems(slider);
                break;
            }
        }

        target = target.parentNode;
    }
};

indicators.forEach(item => item.addEventListener('click', catchIndicatorClick));
