// The course is one long page. This only marks the lesson being read
// in the contents list; the links themselves are plain anchors.
(function () {
  if (!('IntersectionObserver' in window)) return;

  var links = {};
  document.querySelectorAll('#lesson-list a').forEach(function (link) {
    links[link.getAttribute('href').slice(1)] = link;
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      Object.keys(links).forEach(function (id) {
        links[id].removeAttribute('aria-current');
      });
      links[entry.target.id].setAttribute('aria-current', 'true');
    });
  }, { rootMargin: '0px 0px -70% 0px' });

  document.querySelectorAll('.lesson').forEach(function (section) {
    observer.observe(section);
  });
})();
