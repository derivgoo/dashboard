const hostname = window.location.hostname;
const isProductionHub = ["app.deriv.ae"].includes(hostname);

if (isProductionHub) {
    if (window.console?.log) {
        window.console.log = function () {};
    }
}
