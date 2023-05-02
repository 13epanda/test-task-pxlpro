let lastTimeout;

const debounce = (cb, interval = 20) => {
    if (lastTimeout) {
        window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(cb, interval);
};

export {debounce};
