import {initVh} from './utils/init-vh.js';
import {smoothScroll} from './modules/smooth-scroll.js';
import {headerNav} from './modules/header-nav.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

    initVh();

  // Modules
  // ---------------------------------
    smoothScroll();
    headerNav();

    window.addEventListener('load', () => {
    });
});