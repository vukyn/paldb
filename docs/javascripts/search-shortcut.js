// Global search shortcut: Cmd/Ctrl+K opens & focuses the Material search box,
// plus a visible hint badge (⌘K / Ctrl K) so users know it exists.
// (Material also keeps its built-in F / S / "/" shortcuts.)

document.addEventListener("keydown", function (e) {
  if ((e.metaKey || e.ctrlKey) && !e.altKey && e.key.toLowerCase() === "k") {
    var input = document.querySelector(".md-search__input");
    if (!input) return;                   // search not present on this page
    e.preventDefault();
    var toggle = document.getElementById("__search");
    if (toggle) toggle.checked = true;    // open the search overlay
    setTimeout(function () { input.focus(); input.select(); }, 0);
  }
});

// Inject the hint badge once the search form is in the DOM.
(function addHint() {
  var form = document.querySelector(".md-search__form");
  if (!form || form.querySelector(".md-search__shortcut")) return;
  var isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  var badge = document.createElement("span");
  badge.className = "md-search__shortcut";
  badge.setAttribute("aria-hidden", "true");
  badge.innerHTML = isMac
    ? "<kbd>⌘</kbd><kbd>K</kbd>"
    : "<kbd>Ctrl</kbd><kbd>K</kbd>";
  form.appendChild(badge);
})();

// Fallback if the form wasn't parsed yet when this script ran.
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".md-search__form");
  if (form && !form.querySelector(".md-search__shortcut")) {
    var isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
    var badge = document.createElement("span");
    badge.className = "md-search__shortcut";
    badge.setAttribute("aria-hidden", "true");
    badge.innerHTML = isMac ? "<kbd>⌘</kbd><kbd>K</kbd>" : "<kbd>Ctrl</kbd><kbd>K</kbd>";
    form.appendChild(badge);
  }
});
