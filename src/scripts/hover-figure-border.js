import { addHover, removeHover } from './utils/hover';

// hover figure border in treatment block
const treatmentContent = document.querySelector('.treatment-content');

const catchHoverEvent = (event) => {
    let { target } = event;

    while (!target.classList.contains('treatment-content')) {
        if (target.classList.contains('arrow-down')) {
            const figure = target.parentNode;

            if (figure.classList.contains('hovered')) {
                removeHover(figure);
                break;
            } else {
                addHover(figure);
                break;
            }
        }

        target = target.parentNode;
    }
};

treatmentContent.addEventListener('mouseover', catchHoverEvent);
treatmentContent.addEventListener('mouseout', catchHoverEvent);
