// AggiePromise Project — small progressive enhancements. Site works without JS.
(function () {
  document.documentElement.classList.add('js');

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        toggle.focus();
      }
    });
  }

  // Resource directory: text search + category filter
  var dir = document.querySelector('[data-resource-directory]');
  if (!dir) return;
  var tools = dir.querySelector('.res-tools');
  tools.hidden = false;
  var input = dir.querySelector('#res-search');
  var chips = Array.prototype.slice.call(dir.querySelectorAll('.chip'));
  var cards = Array.prototype.slice.call(dir.querySelectorAll('.res-card'));
  var subs = Array.prototype.slice.call(dir.querySelectorAll('.res-sub'));
  var sections = Array.prototype.slice.call(dir.querySelectorAll('.res-section'));
  var count = dir.querySelector('.res-count');
  var none = dir.querySelector('.res-none');
  var activeCat = 'all';

  function apply() {
    var q = (input.value || '').trim().toLowerCase();
    var shown = 0;
    cards.forEach(function (c) {
      var okCat = activeCat === 'all' || c.getAttribute('data-category') === activeCat;
      var okText = !q || c.textContent.toLowerCase().indexOf(q) !== -1;
      c.hidden = !(okCat && okText);
      if (!c.hidden) shown++;
    });
    subs.forEach(function (s) { s.hidden = !s.querySelector('.res-card:not([hidden])'); });
    sections.forEach(function (s) { s.hidden = !s.querySelector('.res-card:not([hidden])'); });
    count.textContent = 'Showing ' + shown + ' of ' + cards.length + ' resources';
    none.classList.toggle('is-shown', shown === 0);
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      activeCat = chip.getAttribute('data-filter');
      chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c === chip)); });
      apply();
    });
  });
  input.addEventListener('input', apply);
  apply();
})();
