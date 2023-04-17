const initVh = () => {
    let vh = window.innerHeight / 100;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export {initVh};