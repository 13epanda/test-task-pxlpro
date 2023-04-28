const initWScroll = () => {
    let wscroll = document.body.offsetWidth - document.querySelector(('.page-header')).clientWidth;
    document.documentElement.style.setProperty('--wscroll', `${wscroll}px`);
};

export {initWScroll};