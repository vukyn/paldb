/* PalDB table filter. For any <div class="table-filter" [data-placeholder="…"]>
   wrapping a markdown table, inject a search box above it and show/hide rows by
   text match. Works on the EN and /vi/ trees alike (no asset paths involved).

   Opt-in pagination: add data-page-size="N" to the wrap and rows are paged N at
   a time with a pager below the table. Filter query and page are mirrored to the
   URL as ?q=… and ?page=… so a view is shareable/bookmarkable and survives back/
   forward. (URL sync targets the first paged table on the page — pages here have
   at most one.) */
(function () {
  "use strict";

  function readParams() {
    try {
      return new URLSearchParams(window.location.search);
    } catch (e) {
      return new URLSearchParams("");
    }
  }

  function writeParams(params) {
    var qs = params.toString();
    var url = window.location.pathname + (qs ? "?" + qs : "") + window.location.hash;
    window.history.replaceState(null, "", url);
  }

  function attach(wrap) {
    if (wrap.dataset.filtered) return;
    var table = wrap.querySelector("table");
    if (!table) return;
    wrap.dataset.filtered = "1";

    var pageSize = parseInt(wrap.getAttribute("data-page-size"), 10);
    var paged = !isNaN(pageSize) && pageSize > 0;

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

    var pager = null;
    if (paged) {
      pager = document.createElement("nav");
      pager.className = "table-filter-pager";
      pager.setAttribute("aria-label", "Pagination");
      wrap.appendChild(pager);
    }

    // Seed from URL (?q, ?page) so shared links restore the exact view.
    var params = readParams();
    input.value = params.get("q") || "";
    var page = paged ? Math.max(1, parseInt(params.get("page"), 10) || 1) : 1;

    function matches() {
      var q = input.value.trim().toLowerCase();
      return rows.filter(function (r) {
        return !q || r.textContent.toLowerCase().indexOf(q) >= 0;
      });
    }

    function syncUrl() {
      var p = readParams();
      var q = input.value.trim();
      if (q) p.set("q", q);
      else p.delete("q");
      if (paged && page > 1) p.set("page", String(page));
      else p.delete("page");
      writeParams(p);
    }

    function renderPager(totalPages) {
      if (!pager) return;
      pager.innerHTML = "";
      if (totalPages <= 1) return;

      function btn(label, target, opts) {
        opts = opts || {};
        var b = document.createElement("button");
        b.type = "button";
        b.className = "table-filter-page" + (opts.current ? " is-current" : "");
        b.textContent = label;
        if (opts.disabled) {
          b.disabled = true;
        } else {
          b.addEventListener("click", function () {
            page = target;
            render();
          });
        }
        pager.appendChild(b);
      }

      btn("‹", page - 1, { disabled: page <= 1 });
      // Windowed page numbers: first, last, and neighbours of current.
      var win = [];
      for (var i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || Math.abs(i - page) <= 1) win.push(i);
      }
      var prev = 0;
      win.forEach(function (i) {
        if (i - prev > 1) {
          var gap = document.createElement("span");
          gap.className = "table-filter-gap";
          gap.textContent = "…";
          pager.appendChild(gap);
        }
        btn(String(i), i, { current: i === page });
        prev = i;
      });
      btn("›", page + 1, { disabled: page >= totalPages });
    }

    function render() {
      var shown = matches();
      var total = shown.length;
      var totalPages = paged ? Math.max(1, Math.ceil(total / pageSize)) : 1;
      if (page > totalPages) page = totalPages;

      var start = paged ? (page - 1) * pageSize : 0;
      var end = paged ? start + pageSize : total;

      // Hide everything, then reveal only the current slice of matches.
      rows.forEach(function (r) {
        r.style.display = "none";
      });
      shown.slice(start, end).forEach(function (r) {
        r.style.display = "";
      });

      var q = input.value.trim();
      if (paged && total > 0) {
        count.textContent =
          "Showing " + (start + 1) + "–" + Math.min(end, total) + " of " +
          total + (q ? " (filtered from " + rows.length + ")" : "");
      } else {
        count.textContent = q ? total + " / " + rows.length : "";
      }

      renderPager(totalPages);
      syncUrl();
    }

    input.addEventListener("input", function () {
      page = 1; // new query → back to first page
      render();
    });

    if (paged) {
      window.addEventListener("popstate", function () {
        var p = readParams();
        input.value = p.get("q") || "";
        page = Math.max(1, parseInt(p.get("page"), 10) || 1);
        render();
      });
    }

    render();
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
