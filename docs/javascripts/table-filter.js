/* PalDB table filter. For any <div class="table-filter" [data-placeholder="…"]>
   wrapping a markdown table, inject a search box above it and show/hide rows by
   text match. Works on the EN and /vi/ trees alike (no asset paths involved). */
(function () {
  "use strict";

  function attach(wrap) {
    if (wrap.dataset.filtered) return;
    var table = wrap.querySelector("table");
    if (!table) return;
    wrap.dataset.filtered = "1";

    var input = document.createElement("input");
    input.type = "search";
    input.className = "table-filter-input";
    input.placeholder = wrap.getAttribute("data-placeholder") || "Filter…";
    // Material wraps the <table> in scrollwrap DIVs, so the table is not a
    // direct child of wrap — insert the search box at the top of wrap instead.
    wrap.insertBefore(input, wrap.firstChild);

    var rows = Array.prototype.slice.call(table.querySelectorAll("tbody tr"));
    var count = document.createElement("div");
    count.className = "table-filter-count";
    wrap.appendChild(count);

    function apply() {
      var q = input.value.trim().toLowerCase();
      var shown = 0;
      rows.forEach(function (r) {
        var hit = !q || r.textContent.toLowerCase().indexOf(q) >= 0;
        r.style.display = hit ? "" : "none";
        if (hit) shown++;
      });
      count.textContent = q ? shown + " / " + rows.length : "";
    }
    input.addEventListener("input", apply);
  }

  function init() {
    document.querySelectorAll(".table-filter").forEach(attach);
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
