/* Big Mike's Jerky — lightweight theme interactions (vanilla JS, no deps) */
(function () {
  'use strict';

  /* ---- Mobile nav toggle ---- */
  function initNavToggle() {
    var toggle = document.querySelector('[data-nav-toggle]');
    var nav = document.querySelector('[data-nav]');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---- Quantity steppers ---- */
  function initQtySteppers() {
    document.querySelectorAll('[data-qty]').forEach(function (wrap) {
      var input = wrap.querySelector('input');
      if (!input) return;
      wrap.querySelectorAll('[data-qty-step]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var step = parseInt(btn.getAttribute('data-qty-step'), 10);
          var min = parseInt(input.min || '1', 10);
          var next = (parseInt(input.value, 10) || min) + step;
          input.value = next < min ? min : next;
          input.dispatchEvent(new Event('change', { bubbles: true }));
        });
      });
    });
  }

  /* ---- Product gallery thumbnails ---- */
  function initGallery() {
    var gallery = document.querySelector('[data-gallery]');
    if (!gallery) return;
    var mainImg = gallery.querySelector('[data-gallery-main] img');
    gallery.querySelectorAll('[data-gallery-thumb]').forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var src = thumb.getAttribute('data-full');
        if (mainImg && src) mainImg.src = src;
        gallery.querySelectorAll('[data-gallery-thumb]').forEach(function (t) {
          t.classList.remove('is-active');
        });
        thumb.classList.add('is-active');
      });
    });
  }

  /* ---- Update cart count from Shopify Ajax API ---- */
  function refreshCartCount() {
    var badge = document.querySelector('[data-cart-count]');
    if (!badge) return;
    fetch('/cart.js', { headers: { 'Accept': 'application/json' } })
      .then(function (r) { return r.json(); })
      .then(function (cart) {
        badge.textContent = cart.item_count;
        badge.style.display = cart.item_count > 0 ? 'grid' : 'none';
      })
      .catch(function () {});
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNavToggle();
    initQtySteppers();
    initGallery();
    refreshCartCount();
  });
})();
