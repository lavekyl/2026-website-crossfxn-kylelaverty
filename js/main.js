(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('primary-nav');
  if (!toggle || !menu) return;

  function close() {
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
  }
  function open() {
    toggle.setAttribute('aria-expanded', 'true');
    menu.classList.add('open');
  }

  toggle.addEventListener('click', function () {
    toggle.getAttribute('aria-expanded') === 'true' ? close() : open();
  });

  // Close after tapping a link, so the page scrolls to the anchor unobscured.
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', close);
  });

  // Close on Escape and return focus to the button.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      close();
      toggle.focus();
    }
  });

  // Close when tapping anywhere outside the menu.
  document.addEventListener('click', function (e) {
    if (!menu.classList.contains('open')) return;
    if (!menu.contains(e.target) && !toggle.contains(e.target)) close();
  });
})();
