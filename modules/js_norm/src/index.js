window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let calc = require('./parts/calc.js'),
      modal = require('./parts/modal.js'),
      tabs = require('./parts/tabs.js'),
      slider = require('./parts/slider.js'),
      timer = require('./parts/timer.js');

  calc();
  modal();
  slider();
  tabs();
  timer();
});