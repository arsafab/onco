import scrollTo from './utils/scrollTo';

const links = [...document.querySelectorAll('a')]
    .filter(link => !!link.hash);

const ancors = links.map((link) => {
    const id = link.href.split('/').reverse()[0];
    return document.querySelector(id);
});

const getTopCoordinate = (elem) => {
    const box = elem.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return box.top + scrollTop;
};

const scrollToAncor = (event) => {
    const blockToMove = ancors.find((ancor) => {
        const blockId = `#${ancor.getAttribute('id')}`;
        const hash = event.target.href
            .split('/')
            .reverse()[0];

        return blockId === hash;
    });

    const top = getTopCoordinate(blockToMove);

    scrollTo(document.documentElement, top - 120, 200);
};

links.forEach(link => link.addEventListener('click', scrollToAncor));
