const head = document.querySelector('.input-select__head');
const item = document.querySelectorAll('.input-select__item');
const select = document.querySelector('.input-select__select');
const options = select.getElementsByTagName('option');

const onItemClick = (el, index) => {
    head.textContent = el.target.textContent;
    //head.style.color = '#fff';
    [].forEach.call(options, el => {
        if (el.hasAttribute('selected')) {
            el.removeAttribute('selected');
        }
    });
    options[index].setAttribute('selected', '');
    head.classList.remove('open');
}

const onHeadClick = () => {
    if (head.classList.contains('open')) {
        head.classList.remove('open');
    }
    else {
        head.classList.add('open');
        item.forEach(function(el, index) {
            el.addEventListener('click', e => onItemClick(e, index));
        });
    }
}

const initSelect = () => {
    head.addEventListener('click', onHeadClick);
}

const resetSelect = () => {
    //head.textContent = 'Город';
    head.style.color = null;
    [].forEach.call(options, el => {
        if (el.hasAttribute('selected')) {
            el.removeAttribute('selected');
        }
    });
    head.classList.remove('open');
    item.forEach(function(el, index) {
        el.removeEventListener('click', e => onItemClick(e, index));
    });
}

export {initSelect, resetSelect};