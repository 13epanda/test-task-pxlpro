import { debounce } from "../../utils/debounce.js";

const textarea = document.getElementsByTagName('textarea');

const resizeTextarea = (el) => {
    const heightStyle = el.target.style.height.replace('px', '');
    if (heightStyle > el.target.scrollHeight) {
        el.target.style.height = `${el.target.scrollHeight - 24}px`;
    }
    else {
        el.target.style.height = `${el.target.scrollHeight}px`;
    }
}

const initTextArea = () => {
    if (textarea.length >= 1) {
        [].forEach.call(textarea, el => {
            el.addEventListener('keydown', function (el) {
                debounce(resizeTextarea(el), 500);
            });
        });
    }
}

export {initTextArea};