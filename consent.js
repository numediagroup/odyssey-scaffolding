/* =================================================================
   Odyssey Scaffolding — cookie consent + Google Analytics 4

   Analytics cookies are "non-essential" under UK PECR, which means they
   need CONSENT BEFORE THEY ARE SET — not a notice, not an opt-out.
   So nothing from Google loads until the visitor presses Accept.

   Google Consent Mode v2 defaults are declared denied up front, so even
   after consent Google knows what it is and isn't allowed to do.
   ================================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------------------
     THE ONLY LINE YOU NEED TO CHANGE
     Paste the GA4 Measurement ID between the quotes. It looks like
     "G-XXXXXXXXXX" and comes from Google Analytics:
       Admin -> Data streams -> your web stream -> Measurement ID

     While this is empty, no analytics load and no banner is shown, so
     the site behaves exactly as it does today.
     --------------------------------------------------------------- */
  var GA_MEASUREMENT_ID = "";

  var STORE_KEY = "odyssey-cookie-consent";   // "granted" | "denied"

  /* ---- storage helpers (private mode / blocked storage can throw) ---- */
  function readChoice() {
    try { return window.localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }
  function saveChoice(v) {
    try { window.localStorage.setItem(STORE_KEY, v); } catch (e) { /* not fatal */ }
  }

  /* ---- Consent Mode v2: declare everything denied before anything loads ---- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "granted",
    security_storage: "granted"
  });

  /* ---- Load GA only once, and only after consent ---- */
  var gaLoaded = false;
  function loadAnalytics() {
    if (gaLoaded || !GA_MEASUREMENT_ID) return;
    gaLoaded = true;

    gtag("consent", "update", { analytics_storage: "granted" });

    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(s);

    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  /* ---- The banner ---- */
  function buildBanner() {
    var wrap = document.createElement("div");
    wrap.className = "cookie-bar";
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-live", "polite");
    wrap.setAttribute("aria-label", "Cookie choice");
    wrap.innerHTML =
      '<div class="container cookie-bar__inner">' +
        '<p class="cookie-bar__text">' +
          'We’d like to use Google Analytics to see how people find and use this site. ' +
          'It sets cookies in your browser, so we only turn it on if you say yes. ' +
          '<a href="privacy-policy.html">Read our privacy policy</a>.' +
        '</p>' +
        '<div class="cookie-bar__actions">' +
          '<button type="button" class="btn btn--ghost cookie-bar__reject">No thanks</button>' +
          '<button type="button" class="btn btn--amber cookie-bar__accept">Accept</button>' +
        '</div>' +
      '</div>';
    return wrap;
  }

  function showBanner() {
    if (document.querySelector(".cookie-bar")) return;
    var bar = buildBanner();
    document.body.appendChild(bar);
    // next frame so the transition runs
    window.requestAnimationFrame(function () { bar.classList.add("is-in"); });

    bar.querySelector(".cookie-bar__accept").addEventListener("click", function () {
      saveChoice("granted");
      loadAnalytics();
      dismiss(bar);
    });
    bar.querySelector(".cookie-bar__reject").addEventListener("click", function () {
      saveChoice("denied");
      dismiss(bar);
    });
  }

  function dismiss(bar) {
    bar.classList.remove("is-in");
    window.setTimeout(function () {
      if (bar.parentNode) bar.parentNode.removeChild(bar);
    }, 300);
  }

  /* ---- Let people change their mind (link lives on the privacy policy) ---- */
  function wireResetLink() {
    var link = document.getElementById("cookieSettings");
    if (!link) return;
    link.addEventListener("click", function (e) {
      e.preventDefault();
      saveChoice("");
      try { window.localStorage.removeItem(STORE_KEY); } catch (err) { /* ignore */ }
      showBanner();
    });
  }

  /* ---- Boot ---- */
  function init() {
    wireResetLink();
    if (!GA_MEASUREMENT_ID) return;        // nothing to consent to yet

    var choice = readChoice();
    if (choice === "granted") { loadAnalytics(); return; }
    if (choice === "denied") { return; }
    showBanner();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
