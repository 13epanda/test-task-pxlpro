const textarea = document.getElementsByTagName('textarea');

const resizeTextarea = (el) => {
    setTimeout(function() {
        el.target.style.height = `${el.target.scrollHeight}px`;
    }, 1);
}

const initTextArea = () => {
    if (textarea.length >= 1) {
        [].forEach.call(textarea, el => {
            el.addEventListener('keydown', resizeTextarea);
        });
    }
}

export {initTextArea};