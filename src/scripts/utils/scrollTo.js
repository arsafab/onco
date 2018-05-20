const scrollTo = (element, to, duration) => {
    if (duration <= 0) return;

    const elem = element;
    const difference = to - elem.scrollTop;
    const perTick = (difference / duration) * 10;

    setTimeout(() => {
        elem.scrollTop += perTick;

        if (elem.scrollTop === to) return;

        scrollTo(elem, to, duration - 10);
    }, 10);
};

export default scrollTo;
