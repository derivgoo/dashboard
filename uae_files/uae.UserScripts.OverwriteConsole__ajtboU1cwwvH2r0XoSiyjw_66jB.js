// if (window.location.hostname === 'app.deriv.ae') {
//     // if (window.console?.log) {
//     //     window.console.log = function(){};
//     // } 
//     // if (window.console?.error) {
//     //     window.console.error = function(){};
//     // }
//     // if (window.console?.warn) {
//     //     window.console.warn = function(){};
//     // }
//     console.log = console.error = console.warn = console.info = function() {};
// }

// const originalConsoleError = console.error;
// console.error = function() {
//   if (window.location.hostname === 'dev-hub.deriv.com' && 
//       Array.from(arguments).some(arg => 
//         String(arg).includes('getProviderConfig') || 
//         String(arg).includes('OutSystemsUI.UserScr_cVLN3FTrWKw'))) {
//     return; // Suppress only this specific error
//   }
//   originalConsoleError.apply(console, arguments);
// };

