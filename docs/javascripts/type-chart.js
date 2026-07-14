/* PalDB interactive element type-effectiveness chart.
   Self-contained (no external lib). Renders into #type-chart if present.
   Click an element to lock its matchups; hover to preview. */
(function () {
  "use strict";

  // Game data — arrows from the in-game element chart (attacker → super-effective vs).
  var STRONG = {
    water: ["fire"],
    fire: ["grass", "ice"],
    electric: ["water"],
    grass: ["ground"],
    ground: ["electric"],
    ice: ["dragon"],
    dragon: ["dark"],
    dark: ["neutral"],
    neutral: []
  };
  // Display order (cycle first, then the chain tail).
  var ORDER = ["electric", "water", "fire", "grass", "ground", "ice", "dragon", "dark", "neutral"];
  var LABEL = {
    electric: "Electric", water: "Water", fire: "Fire", grass: "Grass",
    ground: "Ground", ice: "Ice", dragon: "Dragon", dark: "Dark", neutral: "Neutral"
  };

  // Localize the caption to the page language (i18n sets <html lang>; fall back
  // to a /vi/ path prefix). Element names stay English in both.
  function strings() {
    var lang = (document.documentElement.getAttribute("lang") || "").slice(0, 2);
    if (lang !== "vi" && /^\/vi(\/|$)/.test(location.pathname)) lang = "vi";
    if (lang === "vi") {
      return {
        hint: "Chọn 1 element để xem khắc hệ (viền xanh = mạnh hơn, đỏ = yếu hơn).",
        strong: "mạnh vs", weak: "yếu trước", none: "—"
      };
    }
    return {
      hint: "Click an element to see its matchups (green = super-effective against, red = weak to).",
      strong: "strong vs", weak: "weak to", none: "—"
    };
  }

  // Derive "weak to" as the strict inverse of STRONG.
  var WEAK = {};
  ORDER.forEach(function (e) { WEAK[e] = []; });
  Object.keys(STRONG).forEach(function (att) {
    STRONG[att].forEach(function (def) { WEAK[def].push(att); });
  });

  function render(root) {
    var grid = document.createElement("div");
    grid.className = "type-grid";

    var T = strings();

    var caption = document.createElement("div");
    caption.className = "type-caption";
    caption.textContent = T.hint;

    var buttons = {};
    var locked = null;

    function clear() {
      ORDER.forEach(function (e) {
        buttons[e].classList.remove("strong", "weak", "active");
      });
    }

    function show(sel) {
      clear();
      if (!sel) {
        caption.textContent = T.hint;
        return;
      }
      buttons[sel].classList.add("active");
      STRONG[sel].forEach(function (t) { buttons[t].classList.add("strong"); });
      WEAK[sel].forEach(function (t) { buttons[t].classList.add("weak"); });
      var strongTxt = STRONG[sel].length ? STRONG[sel].map(function (e) { return LABEL[e]; }).join(", ") : T.none;
      var weakTxt = WEAK[sel].length ? WEAK[sel].map(function (e) { return LABEL[e]; }).join(", ") : T.none;
      caption.innerHTML = "<strong>" + LABEL[sel] + "</strong> — " + T.strong + " <span class='c-strong'>" +
        strongTxt + "</span> · " + T.weak + " <span class='c-weak'>" + weakTxt + "</span>";
    }

    ORDER.forEach(function (e) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "type-el el-" + e;
      b.textContent = LABEL[e];
      b.setAttribute("aria-label", LABEL[e] + " matchups");
      b.addEventListener("mouseenter", function () { if (!locked) show(e); });
      b.addEventListener("mouseleave", function () { if (!locked) show(null); });
      b.addEventListener("click", function () {
        locked = (locked === e) ? null : e;
        show(locked);
      });
      buttons[e] = b;
      grid.appendChild(b);
    });

    root.appendChild(grid);
    root.appendChild(caption);
  }

  function init() {
    var root = document.getElementById("type-chart");
    if (!root || root.dataset.rendered) return;
    root.dataset.rendered = "1";
    render(root);
  }

  // Material's instant navigation swaps content without a full reload.
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
