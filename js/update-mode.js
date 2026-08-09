(function () {
  "use strict";

  var params = new URLSearchParams(window.location.search);
  if (params.get("update") !== "true") {
    return;
  }

  var currentSite = document.getElementById("updated-site");
  var v2Site = document.getElementById("v2-site");

  if (currentSite) {
    currentSite.hidden = true;
  }
  if (v2Site) {
    v2Site.hidden = false;
  }

  var metadata = {
    title: "Shantanu Deshmukh | Senior Software Engineer · AI, Distributed Systems & Cloud",
    description: "Senior Software Engineer at Microsoft with 11+ years designing large-scale distributed systems and cloud infrastructure — IEEE-published ML researcher with production AI engineering experience.",
    url: "https://shantanuspark.github.io/?update=true"
  };

  document.title = metadata.title;

  function setAttr(sel, attr, val) {
    var el = document.querySelector(sel);
    if (el) { el.setAttribute(attr, val); }
  }

  setAttr("#meta-description", "content", metadata.description);
  setAttr("#meta-og-title", "content", metadata.title);
  setAttr("#meta-og-description", "content", metadata.description);
  setAttr("#meta-og-url", "content", metadata.url);
  setAttr("#meta-twitter-title", "content", metadata.title);
  setAttr("#meta-twitter-description", "content", metadata.description);
  setAttr("#canonical-link", "href", metadata.url);
})();
