/* PalDB food-consumption meter. Renders <span class="food-meter" data-value="N"
   [data-max="10"]> into N filled + (max-N) empty pip images.
   The asset base is derived from this script's own URL so it resolves under any
   deploy path — the site root locally AND the /paldb/ subpath on GitHub Pages —
   on both the EN tree and the deeper /vi/ tree. */
(function () {
  "use strict";

  // Captured at load time while document.currentScript is still valid (it is
  // null later when Material's instant-loading re-runs init).
  var SCRIPT_SRC =
    (document.currentScript && document.currentScript.src) || "";

  function assetPrefix() {
    // e.g. https://vukyn.github.io/paldb/javascripts/food-meter.js?123
    //   → https://vukyn.github.io/paldb/  (site base, ends in "/")
    if (SCRIPT_SRC) {
      return SCRIPT_SRC.replace(/javascripts\/food-meter\.js.*$/, "");
    }
    // Fallback: count path segments → that many "../" reaches the site root.
    var segs = location.pathname.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
    return segs.length ? "../".repeat(segs.length) : "./";
  }

  function build(el, prefix) {
    var val = parseInt(el.getAttribute("data-value") || "0", 10);
    var max = parseInt(el.getAttribute("data-max") || "10", 10);
    var frag = document.createDocumentFragment();
    for (var i = 0; i < max; i++) {
      var img = document.createElement("img");
      img.className = "food-pip";
      img.alt = "";
      img.src = prefix + "assets/icons/ui/" + (i < val ? "food-filled" : "food-empty") + ".png";
      frag.appendChild(img);
    }
    el.appendChild(frag);
    if (!el.getAttribute("aria-label")) el.setAttribute("aria-label", "Food " + val + "/" + max);
  }

  function init() {
    var prefix = assetPrefix();
    document.querySelectorAll(".food-meter").forEach(function (el) {
      if (el.dataset.rendered) return;
      el.dataset.rendered = "1";
      build(el, prefix);
    });
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
