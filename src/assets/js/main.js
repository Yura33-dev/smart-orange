'use strict';

import burgerMenu from './burger';
import promoSlider from './slider';
import hideLabels from './hideLabels';

document.addEventListener('DOMContentLoaded', () => {
  burgerMenu(
    '.header__navigation-mobile-btn',
    '.header__navigation-mobile',
    '.mobile-close',
  );

  promoSlider(
    '.slider__wrapper',
    '.slider__slide',
    '.btn-slider-right',
    '.btn-slider-left',
    '.promo__counter',
  );

  hideLabels(
    'input[name="phone"]',
    'input[name="email"]',
    'textarea[name="message"]',
    'input[name="agreement"]',
    '.btn-submit',
  );
});
