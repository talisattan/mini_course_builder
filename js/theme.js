// Light is the default; a visitor's choice is remembered in their browser.
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  root.setAttribute('data-theme', saved === 'dark' ? 'dark' : 'light');

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('theme-toggle');

    function update() {
      var dark = root.getAttribute('data-theme') === 'dark';
      button.textContent = dark ? 'Light theme' : 'Dark theme';
      button.setAttribute('aria-pressed', dark ? 'true' : 'false');
    }

    button.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      update();
    });

    update();
  });
})();
