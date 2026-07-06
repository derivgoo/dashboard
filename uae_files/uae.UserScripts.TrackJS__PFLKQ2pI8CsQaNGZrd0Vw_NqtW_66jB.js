function loadScript(url, callback) {
    var script = document.createElement('script')
    script.onload = function () {
        if (callback) callback()
    }
    script.src = url;
    script.async = true;
    document.head.appendChild(script)
}

// Usage to load the trackJS script
loadScript("https://cdn.trackjs.com/agent/v3/latest/t.js", function () {
    TrackJS && TrackJS.install({
        token: "346262e7ffef497d85874322fff3bbf8",
        application: "deriv-uae-app",
        dedupe: true,
        enabled: window.location.hostname === "app.deriv.ae"
  });
})
