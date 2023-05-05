import {initVh} from './utils/init-vh.js';
import {initModals} from './modules/init-modals.js';
import {initPhoneMask, initJsPhoneMask} from './modules/phone-mask.js';
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
    initPhoneMask();
    initJsPhoneMask();

    

    window.addEventListener('load', () => {
      ymaps.ready(initMap);
    });
});