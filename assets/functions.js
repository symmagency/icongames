document.addEventListener('DOMContentLoaded', function () {
    const el = document.querySelector('.header-content .mini-cart-holder');
  
    if (el) {
      el.insertAdjacentHTML(
        'beforebegin',
        '<div class="icon-search"><img src="https://symmagency.github.io/icongames/assets/discount-bar.png"/></div>'
      );
    }
  });
  