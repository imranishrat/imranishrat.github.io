document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.main-nav').forEach(function (nav) {
    var existing = nav.querySelector('.dropdown');
    if (!existing) {
      var pubLink = Array.from(nav.children).find(function (el) {
        return el.tagName === 'A' && el.textContent.trim() === 'Publications';
      });
      if (!pubLink) return;
      var dropdown = document.createElement('div');
      dropdown.className = 'dropdown';
      dropdown.innerHTML = '<a href="publications.html" aria-haspopup="true" aria-expanded="false">Publications</a><div class="dropdown-menu" role="menu"><a href="publications.html#journal-articles" role="menuitem">Journal Articles</a><a href="publications.html#book" role="menuitem">Book</a><a href="publications.html#book-chapters" role="menuitem">Book Chapters</a><a href="publications.html#conference-publications" role="menuitem">Conference Publications</a><a href="publications.html#other-research-outputs" role="menuitem">Other Research Outputs</a></div>';
      pubLink.replaceWith(dropdown);
    }
    var dropdown = nav.querySelector('.dropdown');
    if (!dropdown) return;
    var trigger = dropdown.querySelector(':scope > a');
    if (!trigger) return;
    trigger.addEventListener('click', function (event) {
      if (window.innerWidth <= 767) {
        event.preventDefault();
        var open = dropdown.classList.toggle('open');
        trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      }
    });
    document.addEventListener('click', function (event) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
