import {initVh} from './utils/init-vh.js';
import {initModals} from './modules/init-modals.js';
import {initForm} from './modules/form/init-form.js';
import {smoothScroll} from './modules/smooth-scroll.js';
import {initHeaderNav, scrollNav} from './modules/header-nav.js';
import {initMap} from './modules/map.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

    initVh();

  // Modules
  // ---------------------------------
    initHeaderNav();
    smoothScroll();

    window.addEventListener('load', () => {
      scrollNav();
      initModals();
      initForm();
      ymaps.ready(initMap);
    });
});