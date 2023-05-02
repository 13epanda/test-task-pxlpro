import { debounce } from './debounce.js';

const initVh = () => {
    let vh = window.innerHeight / 100;

    const getVh = () => {
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    getVh();

    window.addEventListener('resize', function () {
        if (vh === window.innerHeight) {
            return;
        }
        vh = window.innerHeight / 100;
        debounce(getVh(), 500);
    });
};

export {initVh};