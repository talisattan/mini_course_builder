// Shows one lesson at a time. The address hash (#policy) says which one,
// so links and the browser back button work without separate pages.
(function () {
  var sections = Array.prototype.slice.call(document.querySelectorAll('.lesson'));
  var links = Array.prototype.slice.call(document.querySelectorAll('#lesson-list a'));
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var position = document.getElementById('position');
  var current = 0;

  function indexFromHash() {
    var id = window.location.hash.slice(1);
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].id === id) return i;
    }
    return 0;
  }

  function show(index) {
    current = index;
    sections.forEach(function (section, i) {
      section.hidden = i !== index;
    });
    links.forEach(function (link, i) {
      if (i === index) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
    prev.disabled = index === 0;
    next.disabled = index === sections.length - 1;
    position.textContent = 'Lesson ' + (index + 1) + ' of ' + sections.length;
  }

  function go(index) {
    window.location.hash = sections[index].id;
  }

  window.addEventListener('hashchange', function () {
    show(indexFromHash());
    window.scrollTo(0, 0);
  });
  prev.addEventListener('click', function () { go(current - 1); });
  next.addEventListener('click', function () { go(current + 1); });

  show(indexFromHash());
})();
