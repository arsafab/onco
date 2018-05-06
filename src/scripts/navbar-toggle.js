const navbarToggle = document.querySelector('#navbar-toggle');
const mainNav = document.querySelector('#main-nav');

const toggleNav = () => {
    navbarToggle.classList.toggle('active');
    mainNav.classList.toggle('active');

    if (navbarToggle.classList.contains('hovered')
        && navbarToggle.classList.contains('active')) {
            navbarToggle.classList.remove('hovered');
        }
};

const addHover = () => {
    navbarToggle.classList.add('hovered');
};

const removeHover = () => {
    navbarToggle.classList.remove('hovered');
};

const closeNav = (event) => {
    let { target } = event;

    while (target !== mainNav) {
        if (target.tagName === 'A') {
            navbarToggle.classList.remove('active');
            mainNav.classList.remove('active');
            return;
        }

        target = target.parentNode;
    }
};

if (navbarToggle) navbarToggle.addEventListener('click', toggleNav);
if (navbarToggle) navbarToggle.addEventListener('mouseenter', addHover);
if (navbarToggle) navbarToggle.addEventListener('mouseleave', removeHover);
if (mainNav) mainNav.addEventListener('click', closeNav);
