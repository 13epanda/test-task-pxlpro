"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initVh = void 0;

var initVh = function initVh() {
  var vh = window.innerHeight / 100;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
};

exports.initVh = initVh;