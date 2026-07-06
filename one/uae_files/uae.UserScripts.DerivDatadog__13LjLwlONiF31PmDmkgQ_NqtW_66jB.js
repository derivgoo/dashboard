function loadScript(url, callback) {
    var script = document.createElement('script')
    script.onload = function () {
        if (callback) callback()
    }
    script.src = url
    script.async = true
    document.head.appendChild(script)
}
var environment_dd = window.location.host === 'app.deriv.ae' ? 'production' : 'staging'
// Usage to load the data-dog script
loadScript("https://www.datadoghq-browser-agent.com/us1/v5/datadog-rum.js", function () {
    window.DD_RUM && window.DD_RUM.init({
        clientToken: 'pub08554ab30284600af157441bfb0fa923',
        applicationId: '5c8975a3-ec86-4a64-8a3a-e6888fdde082',
        site: 'datadoghq.com',
        service: 'Deriv-UAE-App',
        env: environment_dd,
        version: '1.0.0', 
        sessionSampleRate: 10,
        trackUserInteractions: true,
        trackResources: true,
        trackLongTasks: true,
        defaultPrivacyLevel: 'mask-user-input',
        beforeSend: event => {
            if (event.type === 'resource') {
                // Mask Telegram token
                event.resource.url = event.resource.url.replace(
                    /^(https:\/\/api\.telegram\.org\/)[a-zA-Z0-9]+(\?[a-zA-Z0-9_=&]+)?$/,
                    '$1REDACTED$2'
                );
                // Mask acct{number}=, token{number}=, and token= values from any URL
                event.resource.url = event.resource.url.replace(/(acct\d+=|token\d+=|token=)[^&]+/g, '$1REDACTED');
            }
            return true;
        },
    });
})