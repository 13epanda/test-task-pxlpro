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
    smoothScroll();
    initHeaderNav();
    scrollNav();
    initModals();
    initForm();

    window.addEventListener('load', () => {
      ymaps.ready(initMap);
    });
});