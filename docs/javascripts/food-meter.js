/* PalDB food-consumption meter. Renders <span class="food-meter" data-value="N"
   [data-max="10"]> into N filled + (max-N) empty pip images.
   Asset path prefix is computed from the page depth, so it resolves on both the
   EN tree and the deeper /vi/ tree (assets live only at the site root). */
(function () {
  "use strict";

  function assetPrefix() {
    // Directory-URL page (e.g. /pals/lamball/ or /vi/pals/lamball/): count path
    // segments → that many "../" reaches the site root.
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
