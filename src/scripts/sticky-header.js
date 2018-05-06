const header = document.querySelector('#header');

const onScroll = () => {
    if (window.scrollY >= 300) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};

document.addEventListener('scroll', onScroll);
