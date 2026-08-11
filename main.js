/* =================================================================
   Odyssey Scaffolding — minimal vanilla JS
   1. Mobile nav toggle
   2. Header shadow on scroll
   3. Scroll-reveal (IntersectionObserver)
   4. Current year in footer
   ================================================================= */
(function () {
  "use strict";

  /* ---- 1. Mobile nav ---- */
  var toggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");

  function closeNav() {
    if (!toggle || !mobileNav) return;
    toggle.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
  }

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      mobileNav.hidden = open;
    });
    // Close the drawer after tapping any link inside it
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
  }

  /* ---- 2. Header shadow on scroll ---- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- 3. Scroll-reveal ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            // small stagger for grouped items
            var delay = (entry.target.dataset.delay || (i % 4) * 70);
            entry.target.style.transitionDelay = delay + "ms";
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: show everything
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- 4. Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---- 5. Enquiry form ----
     No backend on a static site, so on submit we build a pre-filled email to Odyssey and
     open the visitor's mail app. Native HTML5 validation (required) gates the submit.
     TO USE A REAL ENDPOINT WHEN HOSTED: give the <form> an action/method (Formspree /
     Netlify Forms / Web3Forms) and delete this handler. */
  var form = document.getElementById("enquiryForm");
  var status = document.getElementById("efStatus");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (typeof form.reportValidity === "function" && !form.reportValidity()) return;

      var val = function (id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : "";
      };
      var name = val("ef-name"),
          phone = val("ef-phone"),
          email = val("ef-email"),
          service = val("ef-service"),
          message = val("ef-message");

      var subject = "Website enquiry — " + service + (name ? " — " + name : "");
      var lines = [
        "Name: " + name,
        "Phone: " + phone,
        "Email: " + (email || "—"),
        "Enquiry type: " + service,
        "",
        "Message:",
        message || "—"
      ];
      var mailto =
        "mailto:info@odysseyscaffolding.co.uk" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(lines.join("\n"));

      window.location.href = mailto;

      if (status) {
        status.hidden = false;
        status.textContent =
          "Opening your email app to send this enquiry. If nothing opens, call us on 07351 009255.";
      }
    });
  }

  /* ---- 6. Swipeable showcase strip ----
     Touch devices already swipe natively; this adds click-and-drag on desktop (mouse only). */
  var strip = document.querySelector(".showcase__strip");
  if (strip) {
    var down = false, startX = 0, startScroll = 0;

    strip.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse") return; // let touch/pen use native scrolling
      down = true;
      startX = e.clientX;
      startScroll = strip.scrollLeft;
      strip.classList.add("is-dragging");
      strip.setPointerCapture(e.pointerId);
    });

    strip.addEventListener("pointermove", function (e) {
      if (!down) return;
      strip.scrollLeft = startScroll - (e.clientX - startX);
    });

    function endDrag(e) {
      if (!down) return;
      down = false;
      strip.classList.remove("is-dragging");
      try { strip.releasePointerCapture(e.pointerId); } catch (_) {}
    }
    strip.addEventListener("pointerup", endDrag);
    strip.addEventListener("pointercancel", endDrag);
    strip.addEventListener("pointerleave", endDrag);

    // prevent the browser's native image-drag from hijacking the swipe
    strip.addEventListener("dragstart", function (e) { e.preventDefault(); });
  }

  /* ---- 7. Testimonials slider (2 per view on desktop, 1 on mobile) ----
     Pages through the slides; auto-rotates, pauses on hover/focus, supports
     arrows, dots and drag/swipe, and re-lays-out on resize. */
  var testi = document.getElementById("testi");
  var track = document.getElementById("testiTrack");
  if (testi && track) {
    var slides = Array.prototype.slice.call(track.children);
    var dotsWrap = document.getElementById("testiDots");
    var viewport = document.getElementById("testiViewport");
    var n = slides.length;
    var page = 0, timer = null, dots = [];
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function perView() { return window.matchMedia("(max-width: 768px)").matches ? 1 : 2; }
    function gapPx() { return parseFloat(window.getComputedStyle(track).columnGap) || 0; }
    function pageCount() { return Math.max(1, Math.ceil(n / perView())); }
    function maxOffset() { return Math.max(0, track.scrollWidth - viewport.clientWidth); }
    function offsetFor(p) { return Math.min(p * (viewport.clientWidth + gapPx()), maxOffset()); }

    function setActive() {
      dots.forEach(function (d, di) { d.classList.toggle("is-active", di === page); });
    }
    function buildDots() {
      var pc = pageCount();
      if (dots.length === pc) { setActive(); return; }
      dotsWrap.innerHTML = ""; dots = [];
      for (var i = 0; i < pc; i++) {
        (function (i) {
          var b = document.createElement("button");
          b.type = "button";
          b.className = "testi__dot";
          b.setAttribute("aria-label", "Go to testimonials page " + (i + 1));
          b.addEventListener("click", function () { go(i); restart(); });
          dotsWrap.appendChild(b);
          dots.push(b);
        })(i);
      }
      setActive();
    }

    function apply() { track.style.transform = "translateX(" + (-offsetFor(page)) + "px)"; }
    function go(p) {
      var pc = pageCount();
      page = (p % pc + pc) % pc;
      apply(); setActive();
    }
    function next() { go(page + 1); }
    function render() {
      var pc = pageCount();
      if (page > pc - 1) page = pc - 1;
      buildDots(); apply();
    }

    testi.querySelectorAll(".testi__arrow").forEach(function (a) {
      a.addEventListener("click", function () {
        go(page + parseInt(a.getAttribute("data-dir"), 10));
        restart();
      });
    });

    function start() { if (reduce || pageCount() < 2) return; stop(); timer = window.setInterval(next, 6000); }
    function stop() { if (timer) { window.clearInterval(timer); timer = null; } }
    function restart() { stop(); start(); }
    testi.addEventListener("mouseenter", stop);
    testi.addEventListener("mouseleave", start);
    testi.addEventListener("focusin", stop);
    testi.addEventListener("focusout", start);

    // drag / swipe
    var down = false, sx = 0, dx = 0;
    viewport.addEventListener("pointerdown", function (e) {
      if (pageCount() < 2) return;
      down = true; sx = e.clientX; dx = 0;
      track.classList.add("no-anim");
      viewport.classList.add("is-dragging");
      viewport.setPointerCapture(e.pointerId);
      stop();
    });
    viewport.addEventListener("pointermove", function (e) {
      if (!down) return;
      dx = e.clientX - sx;
      track.style.transform = "translateX(" + (-offsetFor(page) + dx) + "px)";
    });
    function endDrag(e) {
      if (!down) return;
      down = false;
      track.classList.remove("no-anim");
      viewport.classList.remove("is-dragging");
      try { viewport.releasePointerCapture(e.pointerId); } catch (_) {}
      if (Math.abs(dx) > Math.min(80, viewport.clientWidth * 0.15)) go(page + (dx < 0 ? 1 : -1));
      else go(page);
      start();
    }
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);
    viewport.addEventListener("dragstart", function (e) { e.preventDefault(); });

    // re-layout on resize (perView / widths change)
    var rt = null;
    window.addEventListener("resize", function () {
      if (rt) window.clearTimeout(rt);
      rt = window.setTimeout(function () {
        track.classList.add("no-anim");
        render();
        window.requestAnimationFrame(function () { track.classList.remove("no-anim"); });
      }, 120);
    });

    render();
    start();
  }
})();
