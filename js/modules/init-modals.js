import {Modals} from './modals.js';

let modals;

// Здесь реализован пример открытия модалки через колбэк закрытия
// const openModalInCloseCallback = (name, context = this) => {
//   context._enableScrolling = false;
//   context._setSettings('default');
//   modals.open(name);
// };

// closeCallback() {
//   openModalInCloseCallback('modal-5');
// },

const settings = {
  'default': {
    preventDefault: true,
    stopPlay: true,
    lockFocus: true,
    startFocus: true,
    focusBack: false,
    eventTimeout: 400,
    openCallback: false,
    closeCallback: false,
  },
};

const initModals = () => {
  const modalElements = document.querySelectorAll('.modal');
  if (modalElements.length) {
    modalElements.forEach((el) => {
      setTimeout(() => {
        el.classList.remove('modal--preload');
      }, 100);
    });
  }

  modals = new Modals(settings);
  window.modals = modals;
};

function initModalProductFeedback() {
  const modalElements = document.querySelectorAll('.reviews-tire__feedback');
  if (modalElements.length) {
    modalElements.forEach((el) => {
      setTimeout(() => {
        el.click();
      }, 10000);
    });
  }
}

export {modals, initModals, initModalProductFeedback};
