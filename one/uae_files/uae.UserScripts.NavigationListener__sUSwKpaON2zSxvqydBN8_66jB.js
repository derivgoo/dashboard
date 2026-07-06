// for testing
function navigate(path) {
    try {
        if (window.OutSystemsApp?.public?.BuiltinFunctions?.getAppName && window.OutSystemsApp?.public?.Navigation?.navigateTo) {
            const appName = window.OutSystemsApp.public.BuiltinFunctions.getAppName();
            window.OutSystemsApp.public.Navigation.navigateTo(`/${appName}/${path}${window.location.search}`, 1, true);
        }
    } catch (e) {
        console.error(e);
    }
}

function checkPath() {
    const auth = localStorage.getItem('auth');
    const hasToken = Boolean(auth);

    if (window.OutSystemsApp?.public?.BuiltinFunctions?.getAppName) {
        const appName = window.OutSystemsApp.public.BuiltinFunctions.getAppName();

        if (!hasToken) {
            if(!new RegExp(`^\/${appName}(?:\\/(?:login|signup|otp))?\\/?$`,"i").test(window.location.pathname)){
                navigate('login');
            }
        }
    }
}

// window.OutSystemsApp?.public?.Navigation?.registerNavigationHandler((url, transition, replace) => {
//     console.log('navigation', url, transition, replace);
//     return true;
// });


// setTimeout(checkPath, 1000);