(function () {
  "use strict";

  var params = new URLSearchParams(window.location.search);
  var isUpdateMode = params.get("update") === "true";
  if (!isUpdateMode) {
    return;
  }

  document.body.classList.add("update-mode");

  var legacySite = document.getElementById("legacy-site");
  var updatedSite = document.getElementById("updated-site");

  if (legacySite) {
    legacySite.hidden = true;
  }
  if (updatedSite) {
    updatedSite.hidden = false;
  }

  var metadata = {
    title: "Shantanu Deshmukh | Senior AI, Cloud & Distributed Systems Engineer",
    description: "Senior Software Engineer with 11+ years building secure, reliable, large-scale cloud and distributed systems with growing AI/ML platform depth.",
    url: "https://shantanuspark.github.io/?update=true"
  };

  document.title = metadata.title;

  function setAttribute(selector, attr, value) {
    var element = document.querySelector(selector);
    if (element) {
      element.setAttribute(attr, value);
    }
  }

  setAttribute("#meta-description", "content", metadata.description);
  setAttribute("#meta-og-title", "content", metadata.title);
  setAttribute("#meta-og-description", "content", metadata.description);
  setAttribute("#meta-og-url", "content", metadata.url);
  setAttribute("#meta-twitter-title", "content", metadata.title);
  setAttribute("#meta-twitter-description", "content", metadata.description);
  setAttribute("#canonical-link", "href", metadata.url);
})();
