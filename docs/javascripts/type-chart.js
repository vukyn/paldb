/* PalDB interactive element type-effectiveness chart.
   Self-contained (no external lib). Renders into #type-chart if present.
   Pick an element (click to lock, hover to preview) → two panels show what
   counters it and what it is super-effective (1.5×) against. */
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
  // Chip display order (matches the reference layout).
  var ORDER = ["neutral", "fire", "water", "electric", "grass", "ground", "ice", "dragon", "dark"];
  var LABEL = {
    electric: "Electric", water: "Water", fire: "Fire", grass: "Grass",
    ground: "Ground", ice: "Ice", dragon: "Dragon", dark: "Dark", neutral: "Neutral"
  };
  var DEFAULT = "fire";

  // Localize captions to the page language (i18n sets <html lang>; fall back to
  // a /vi/ path prefix). Element names stay English in both.
  function strings() {
    var lang = (document.documentElement.getAttribute("lang") || "").slice(0, 2);
    if (lang !== "vi" && /^\/vi(\/|$)/.test(location.pathname)) lang = "vi";
    if (lang === "vi") {
      return {
        title: "Nguyên tố nào khắc nguyên tố nào?",
        sub: "Chọn nguyên tố của một Pal để xem gì khắc nó và nó mạnh trước gì.",
        counter: function (n) { return "Khắc Pal hệ " + n + " bằng"; },
        deal: function (n) { return n + " gây 1.5× lên"; },
        none: "không có hệ nào"
      };
    }
    return {
      title: "What beats each element?",
      sub: "Pick a Pal's element to see what counters it and what it's strong against.",
      counter: function (n) { return "Counter a " + n + " Pal with"; },
      deal: function (n) { return n + " deals 1.5× to"; },
      none: "nothing"
    };
  }

  // Derive "countered by" as the strict inverse of STRONG.
  var WEAK = {};
  ORDER.forEach(function (e) { WEAK[e] = []; });
  Object.keys(STRONG).forEach(function (att) {
    STRONG[att].forEach(function (def) { WEAK[def].push(att); });
  });

  var SHIELD = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/></svg>';
  var SWORDS = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4l9 9M14.5 12.5L20 18l-2 2-5.5-5.5M20 4l-6.5 6.5M4 20l4-4"/></svg>';

  function chip(e) {
    return '<span class="tc-el tc-' + e + '">' + LABEL[e] + '</span>';
  }

  function render(root) {
    var T = strings();
    root.classList.add("tc");

    root.innerHTML =
      '<div class="tc-title">' + T.title + '</div>' +
      '<div class="tc-sub">' + T.sub + '</div>' +
      '<div class="tc-chips"></div>' +
      '<div class="tc-panels">' +
        '<div class="tc-panel tc-counter">' +
          '<div class="tc-phead">' + SHIELD + '<span class="tc-phead-txt"></span></div>' +
          '<div class="tc-pbody"></div>' +
        '</div>' +
        '<div class="tc-panel tc-deal">' +
          '<div class="tc-phead">' + SWORDS + '<span class="tc-phead-txt"></span></div>' +
          '<div class="tc-pbody"></div>' +
        '</div>' +
      '</div>';

    var chips = root.querySelector(".tc-chips");
    var counterHead = root.querySelector(".tc-counter .tc-phead-txt");
    var dealHead = root.querySelector(".tc-deal .tc-phead-txt");
    var counterBody = root.querySelector(".tc-counter .tc-pbody");
    var dealBody = root.querySelector(".tc-deal .tc-pbody");

    var buttons = {};
    var locked = null;

    function body(el, list) {
      el.innerHTML = list.length
        ? list.map(chip).join("")
        : '<span class="tc-empty">' + T.none + '</span>';
    }

    function show(sel) {
      ORDER.forEach(function (e) { buttons[e].classList.toggle("sel", e === sel); });
      var nameHtml = '<span class="tc-name tc-' + sel + '">' + LABEL[sel] + '</span>';
      counterHead.innerHTML = T.counter(nameHtml);
      dealHead.innerHTML = T.deal(nameHtml);
      body(counterBody, WEAK[sel]);
      body(dealBody, STRONG[sel]);
    }

    ORDER.forEach(function (e) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "tc-el tc-" + e;
      b.textContent = LABEL[e];
      b.setAttribute("aria-label", LABEL[e]);
      b.addEventListener("mouseenter", function () { if (!locked) show(e); });
      b.addEventListener("mouseleave", function () { if (!locked) show(DEFAULT); });
      b.addEventListener("click", function () {
        locked = (locked === e) ? null : e;
        show(locked || DEFAULT);
      });
      buttons[e] = b;
      chips.appendChild(b);
    });

    show(DEFAULT);
  }

  function init() {
    var root = document.getElementById("type-chart");
    if (!root || root.dataset.rendered) return;
    root.dataset.rendered = "1";
    render(root);
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
