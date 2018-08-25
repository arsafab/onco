const html = document.querySelector('html');
const body = document.querySelector('body');

export const disableScroll = () => {
    html.classList.add('disable-scroll');
    body.classList.add('disable-scroll');
};

export const enableScroll = () => {
    html.classList.remove('disable-scroll');
    body.classList.remove('disable-scroll');
};
