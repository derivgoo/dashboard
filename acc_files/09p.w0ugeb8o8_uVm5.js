(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,40167,e=>{"use strict";var t=e.i(271645);e.s(["BOTTOM_SHEET_CLOSE_FALLBACK_MS",0,560,"SHEET_ENTER_DEFER_MS",0,24,"bottomSheetEaseClass",0,"ease-[cubic-bezier(0.32,0.72,0,1)]","useBottomSheetMotion",0,function(e){let r=(0,t.useRef)(e);(0,t.useLayoutEffect)(()=>{r.current=e},[e]);let[i,s]=(0,t.useState)(!1),[o,n]=(0,t.useState)(!1),a=(0,t.useRef)(!1),l=(0,t.useRef)(null);(0,t.useEffect)(()=>{let e,t=0,r=requestAnimationFrame(()=>{t=requestAnimationFrame(()=>{e=setTimeout(()=>{s(!0)},24)})});return()=>{cancelAnimationFrame(r),cancelAnimationFrame(t),void 0!==e&&clearTimeout(e)}},[]);let u=i&&!o;(0,t.useEffect)(()=>{if(!i)return;let e=document.documentElement,t=document.body,r=e.style.overscrollBehavior,s=t.style.overscrollBehavior;return e.style.overscrollBehavior="none",t.style.overscrollBehavior="none",()=>{e.style.overscrollBehavior=r,t.style.overscrollBehavior=s}},[i]),(0,t.useEffect)(()=>{if(!i)return;let e=function(){if(!window.matchMedia("(max-width: 1023px)").matches)return()=>{};let e=document.documentElement,t=document.body,r=window.scrollY,i={htmlOverflow:e.style.overflow,bodyOverflow:t.style.overflow,bodyPosition:t.style.position,bodyTop:t.style.top,bodyLeft:t.style.left,bodyRight:t.style.right,bodyWidth:t.style.width};return e.style.overflow="hidden",t.style.overflow="hidden",t.style.position="fixed",t.style.top=`-${r}px`,t.style.left="0",t.style.right="0",t.style.width="100%",()=>{e.style.overflow=i.htmlOverflow,t.style.overflow=i.bodyOverflow,t.style.position=i.bodyPosition,t.style.top=i.bodyTop,t.style.left=i.bodyLeft,t.style.right=i.bodyRight,t.style.width=i.bodyWidth,window.scrollTo(0,r)}}();return l.current=e,()=>{e(),l.current=null}},[i]),(0,t.useEffect)(()=>()=>{l.current?.(),l.current=null},[]);let c=(0,t.useCallback)(()=>{a.current||(a.current=!0,r.current())},[]);(0,t.useEffect)(()=>{if(!o)return;let e=setTimeout(()=>c(),560);return()=>clearTimeout(e)},[o,c]);let d=(0,t.useCallback)(()=>{window.matchMedia("(min-width: 1024px)").matches?r.current():(a.current=!1,n(!0))},[]),p=(0,t.useCallback)(e=>{e.target!==e.currentTarget||o&&c()},[o,c]);return{showSheetOpen:u,sheetLeaving:o,requestClose:d,onSheetTransitionEnd:p}}])},135659,e=>{"use strict";var t=e.i(843476),r=e.i(174080),i=e.i(271645),s=e.i(549838),o=e.i(40167);let n="cubic-bezier(0.32, 0.72, 0, 1)";function a(e){let t=window.matchMedia("(prefers-reduced-motion: reduce)");return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}function l(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function u(){return!1}e.s(["MODAL_PORTAL_ABOVE_FULL_SCREEN_Z_INDEX",0,10001,"MODAL_PORTAL_STACKED_Z_INDEX",0,1e4,"MODAL_PORTAL_Z_INDEX",0,9999,"ModalPortal",0,function({children:e,onBackdropClick:c,backdropClassName:d="bg-black/40",backdropStyle:p,align:m="center",className:f,bottomInset:h,mobileBottomSheet:g,zIndex:y,open:v,onExitAnimationComplete:b,animate:w}){let[E,A]=(0,i.useState)(!1),[_,R]=(0,i.useState)(!1),[O,T]=(0,i.useState)(!1),S=(0,i.useRef)(!1),x=void 0!==v,N=(0,i.useSyncExternalStore)(a,l,u),C=!1!==w&&!N,L=C&&!g,I=C&&!g,M=C&&!!g;(0,i.useEffect)(()=>{let e=setTimeout(()=>A(!0),0);return()=>clearTimeout(e)},[]),(0,i.useEffect)(()=>{let e;if(!E||x&&!1===v)return;if(S.current=!1,!C)return void queueMicrotask(()=>{x&&!0===v&&T(!1),R(!0)});let t=0,r=requestAnimationFrame(()=>{x&&!0===v&&T(!1),R(!1),t=requestAnimationFrame(()=>{e=setTimeout(()=>{R(!0)},o.SHEET_ENTER_DEFER_MS)})});return()=>{cancelAnimationFrame(r),cancelAnimationFrame(t),void 0!==e&&clearTimeout(e)}},[E,x,v,C]),(0,i.useLayoutEffect)(()=>{x&&!1===v&&_&&((S.current=!1,!N&&(L||I))?queueMicrotask(()=>T(!0)):b?.())},[x,v,_,N,L,I,b]);let B=(0,i.useCallback)(()=>{O&&!S.current&&(S.current=!0,b?.())},[O,b]);(0,i.useEffect)(()=>{if(!O||!b)return;let e=setTimeout(()=>{B()},o.BOTTOM_SHEET_CLOSE_FALLBACK_MS);return()=>clearTimeout(e)},[O,b,B]);let D=(0,i.useCallback)(()=>{c?.()},[c]),P=(0,i.useCallback)(e=>{I&&O&&!L&&e.target===e.currentTarget&&"opacity"===e.propertyName&&B()},[I,O,L,B]),U=(0,i.useCallback)(e=>{L&&O&&e.target===e.currentTarget&&("transform"===e.propertyName||"opacity"===e.propertyName)&&B()},[L,O,B]);if(!E||"u"<typeof document||x&&!v&&!O&&!_)return null;let k=g&&"center"===m,F=_&&!O,$=I?`opacity 1000ms ${n}`:void 0,j={...p,...I?{opacity:+!!F,transition:$}:{}},W=O||!_?{transform:"translate3d(0, 16px, 0)",opacity:0}:{transform:"translate3d(0, 0, 0)",opacity:1},H=L?`transform 1000ms ${n}, opacity 1000ms ${n}`:void 0,G={...L?{...W,transition:H,willChange:"transform, opacity"}:{}},z=(0,t.jsxs)("div",{className:(0,s.cn)("fixed inset-0 min-h-dvh w-full flex",k&&"items-end justify-center p-0 lg:items-center lg:justify-center lg:p-4",!k&&"center"===m&&"p-4 items-center justify-center","bottom"===m&&"p-4 items-end justify-center sm:items-center","top-left"===m&&"p-0 items-start justify-start lg:pt-[72px] lg:pr-4 lg:pb-4 lg:pl-0","top-right"===m&&"p-0 items-start justify-end lg:pt-[72px] lg:pl-4 lg:pb-4 lg:pr-4",f),style:{zIndex:y??9999,...h?{bottom:h}:{}},children:[(0,t.jsx)("div",{className:(0,s.cn)("absolute inset-0",d),style:j,onClick:D,onKeyDown:e=>"Escape"===e.key&&D(),onTransitionEnd:P,role:"presentation","aria-hidden":!0}),(0,t.jsx)("div",{className:(0,s.cn)("relative z-10 max-w-full flex w-full",k&&"justify-center items-end lg:items-center lg:justify-center","top-left"===m&&"w-full max-w-[400px] justify-start items-start","top-right"===m&&"w-full max-w-[400px] justify-end items-start",!k&&"top-left"!==m&&"top-right"!==m&&"justify-center items-center"),style:{...G,...M?_?{opacity:1,transition:`opacity 1000ms ${n}`,pointerEvents:"auto"}:{opacity:0,transform:"translate3d(0, 16px, 0)",transition:`opacity 1000ms ${n}, transform 1000ms ${n}`,pointerEvents:"auto"}:{}},onTransitionEnd:U,children:e})]});return(0,r.createPortal)(z,document.body)}])},652987,e=>{"use strict";var t=e.i(247167);function r(e){return"trading.deriv.com"===e||"trading.deriv.be"===e||"trading.deriv.me"===e||"home.deriv.com"===e||"home.deriv.be"===e||"home.deriv.me"===e}function i(e){return r(e)}function s(e){if(!e)return!1;let t=e.toLowerCase();return t.endsWith(".test-home.deriv.com")||t.endsWith(".test-home.deriv.be")||t.endsWith(".test-home.deriv.me")||"test-home.deriv.com"===t||"test-home.deriv.be"===t||"test-home.deriv.me"===t}let o={com:{apiBase:"https://api-core.deriv.com",authBase:"https://auth.deriv.com",urlBase:t.default.env.NEXT_STAGING_PUBLIC_URL||"",returnToOrigin:t.default.env.NEXT_STAGING_PUBLIC_URL||""},be:{apiBase:"https://api-core.deriv.be",authBase:"https://auth.deriv.be",urlBase:t.default.env.NEXT_STAGING_PUBLIC_URL_BE||"",returnToOrigin:t.default.env.NEXT_STAGING_PUBLIC_URL_BE||""},me:{apiBase:"https://api-core.deriv.me",authBase:"https://auth.deriv.me",urlBase:t.default.env.NEXT_STAGING_PUBLIC_URL_ME||"",returnToOrigin:t.default.env.NEXT_STAGING_PUBLIC_URL_ME||""}},n={com:{apiBase:"https://api-core.deriv.com",authBase:"https://auth.deriv.com",urlBase:t.default.env.NEXT_PUBLIC_URL||"https://trading.deriv.com",returnToOrigin:"https://home.deriv.com"},be:{apiBase:"https://api-core.deriv.be",authBase:"https://auth.deriv.be",urlBase:t.default.env.NEXT_PUBLIC_URL_BE||"https://trading.deriv.be",returnToOrigin:"https://home.deriv.be"},me:{apiBase:"https://api-core.deriv.me",authBase:"https://auth.deriv.me",urlBase:t.default.env.NEXT_PUBLIC_URL_ME||"https://trading.deriv.me",returnToOrigin:"https://home.deriv.me"}};function a(e){return e.endsWith(".deriv.be")||"deriv.be"===e?"be":e.endsWith(".deriv.me")||"deriv.me"===e?"me":"com"}e.s(["derivParentCookieDomain",0,function(e){if(!e||"localhost"===e)return null;let t=a(e),r=`deriv.${t}`;return e===r||e.endsWith(`.${r}`)?`.${r}`:null},"getDerivAppUrl",0,function(e,t,r=""){return`https://${t}.deriv.${e}${r}`},"getDerivUrl",0,function(e,t){return`https://deriv.${e}${t}`},"getFlagsUrl",0,function(e){return r(e)?"https://flags.deriv.com":"https://flags.deriv.com/staging"},"getHubSignupUrl",0,function(e,t,r,i,o){let n=t.includes("staging-home")||s(t)||"localhost"===t?"staging-hub":"hub",a=new URL(`https://${n}.deriv.${e}/tradershub/signup/email-verification`);return a.searchParams.set("email",r),a.searchParams.set("country",i),a.searchParams.set("redirect","home"),a.searchParams.set("lang",o),a.toString()},"getHubUrl",0,function(e,t,r,i,o){let n=t.includes("staging-home")||s(t)?"staging-hub":t.includes("dev-home")?"dev-hub":"hub",a=new URL(`https://${n}.deriv.${e}/tradershub/login`);a.searchParams.set("redirect","home"),r&&a.searchParams.set("email",r);let l=i?.trim();l&&a.searchParams.set("email_masked",l);let u=o?.trim();return u&&a.searchParams.set("app_id",u),a.toString()},"getPartnersDashboardUrl",0,function(e){return i(e.trim().toLowerCase())?"https://home.deriv.com/partners-app/home":"https://staging-home.deriv.com/partners-app/home"},"getTldFromHostname",0,a,"getUaeBrandLoginRedirectUrl",0,function(e,t){let r,s=i(e)?"https://app.deriv.ae":"https://staging-app.deriv.ae",o="ar"===(r=t.trim().toLowerCase())||"ar-001"===r||r.startsWith("ar-")?"ar":"en";return`${s}/uae/login?lang=${o}`},"getUaeDclSignupRedirectUrl",0,function(e){return i(e.trim().toLowerCase())?"https://app.deriv.ae/uae/":"https://staging-app.deriv.ae/uae/"},"getUrlsForHostname",0,function(e){let t=a(e);return{...(r(e)?n:o)[t],tld:t}},"isDerivOrigin",0,function(e){return!(!e||"localhost"===e||e.startsWith("dev-")||e.endsWith(".workers.dev"))&&(e.endsWith(".deriv.com")||e.endsWith(".deriv.be")||e.endsWith(".deriv.me")||"deriv.com"===e||"deriv.be"===e||"deriv.me"===e)},"isDerivProductionHostname",0,i,"isStagingHostname",0,function(e){return!!(!e||"localhost"===e||e.toLowerCase().endsWith(".workers.dev")||s(e))||e.startsWith("staging-")},"isTestHomePreviewHostname",0,s,"shouldShowSocialSandboxOidcButton",0,function(e){if(!e||i(e))return!1;let t=e.toLowerCase();return!!("localhost"===t||"127.0.0.1"===t||t.endsWith(".localhost")||t.startsWith("staging-")||s(t)||t.includes("dev-home.")||t.includes("dev-trading.")||t.endsWith(".workers.dev")||t.endsWith(".vercel.app"))}])},90890,e=>{"use strict";let t=new Map;function r(e){let r=(t.get(e)??0)-Date.now();return r>0?r:0}function i(e){return 429===e||503===e}e.s(["clearRetryAfterCooldowns",0,function(){t.clear()},"getMaxRetryAfterCooldownRemainingMs",0,function(){let e=Date.now(),r=0;for(let i of t.values()){let t=i-e;t>r&&(r=t)}return r>0?r:0},"getRetryAfterCooldownRemainingMs",0,r,"isRetryAfterStatus",0,i,"registerRetryAfterFromHttpResponse",0,function(e,s,o){if(!i(e))return 0;let n=function(e){if(null==e)return null;let t=e.trim();if(!t)return null;let r=Number(t);if(Number.isFinite(r)&&r>=0)return Math.min(Math.round(1e3*r),3e5);let i=Date.parse(t);if(Number.isFinite(i)){let e=i-Date.now();return e<=0?0:Math.min(e,3e5)}return null}(function(e){if(!e)return null;if(e instanceof Headers)return e.get("Retry-After")??e.get("retry-after");let t=e["retry-after"]??e["Retry-After"]??e["RETRY-AFTER"];return null==t?null:Array.isArray(t)?null!=t[0]?String(t[0]):null:String(t)}(s));return null==n?0:(!function(e,r){if(!Number.isFinite(r)||r<=0)return;let i=Date.now()+r,s=t.get(e)??0;t.set(e,Math.max(s,i))}(o,function(e){if(!Number.isFinite(e)||e<=0)return 0;let t=Math.floor(Math.random()*(Math.min(.2*e,5e3)+1));return Math.min(e+t,3e5)}(n)),r(o))},"retryAfterMsToDisplaySeconds",0,function(e){return Math.max(1,Math.ceil(e/1e3))}])},768834,e=>{"use strict";var t=e.i(271645);let r=e=>{let t,r=new Set,i=(e,i)=>{let s="function"==typeof e?e(t):e;if(!Object.is(s,t)){let e=t;t=(null!=i?i:"object"!=typeof s||null===s)?s:Object.assign({},t,s),r.forEach(r=>r(t,e))}},s=()=>t,o={setState:i,getState:s,getInitialState:()=>n,subscribe:e=>(r.add(e),()=>r.delete(e))},n=t=e(i,s,o);return o},i=e=>{let i=e?r(e):r,s=e=>(function(e,r=e=>e){let i=t.default.useSyncExternalStore(e.subscribe,t.default.useCallback(()=>r(e.getState()),[e,r]),t.default.useCallback(()=>r(e.getInitialState()),[e,r]));return t.default.useDebugValue(i),i})(i,e);return Object.assign(s,i),s};e.s(["create",0,e=>e?i(e):i],768834)},996413,e=>{"use strict";let t=(0,e.i(768834).create)((e,t)=>({visible:!1,expiresAt:null,showForRetryAfterMs:r=>{if(r<=0)return;let i=Date.now()+r,s=t();if(s.visible){(null==s.expiresAt||i>s.expiresAt)&&e({expiresAt:i});return}e({visible:!0,expiresAt:i})},dismiss:()=>e({visible:!1,expiresAt:null}),resetForTests:()=>e({visible:!1,expiresAt:null})}));e.s(["dismissServiceBusyToast",0,function(){t.getState().dismiss()},"useServiceBusyToastStore",0,t])},988674,e=>{"use strict";var t=e.i(90890),r=e.i(996413);let i=new Map,s=new Map;e.s(["clearRetryAfterRefetchTimers",0,function(){for(let e of s.values())clearTimeout(e);s.clear()},"registerRetryAfterRefetchHandler",0,function(e,t){let r=i.get(e);return r||(r=new Set,i.set(e,r)),r.add(t),()=>{r?.delete(t),r?.size===0&&i.delete(e)}},"scheduleRetryAfterRefetch",0,function e(o,n){if(!Number.isFinite(n)||n<=0)return;let a=s.get(o);a&&clearTimeout(a),s.set(o,setTimeout(()=>{s.delete(o);let n=(0,t.getRetryAfterCooldownRemainingMs)(o);n>0?e(o,n):(i.get(o)?.forEach(e=>{try{e()}catch{}}),0>=(0,t.getMaxRetryAfterCooldownRemainingMs)()&&(0,r.dismissServiceBusyToast)())},n))}])},931178,e=>{"use strict";var t=e.i(367581),r=e.i(90890),i=e.i(996413);function s(e){if(!(0,t.isApiError)(e)||!(0,r.isRetryAfterStatus)(e.status)&&"RETRY_AFTER_COOLDOWN"!==e.code)return;let s=(0,r.getMaxRetryAfterCooldownRemainingMs)(),o=s>0?s:null!=e.retryAfterMs&&e.retryAfterMs>0?e.retryAfterMs:0;o<=0||i.useServiceBusyToastStore.getState().showForRetryAfterMs(o)}e.s(["reportServiceBusyApiError",0,s,"reportServiceBusyHttpStatus",0,function(e,i){(0,r.isRetryAfterStatus)(e)&&s(new t.ApiRequestError({status:e,code:429===e?"RATE_LIMITED":"SERVICE_UNAVAILABLE",message:"",retryAfterMs:i>0?i:void 0}))}])},79931,e=>{"use strict";var t=e.i(367581),r=e.i(90890),i=e.i(931178);function s(e){let t=e.split("?")[0].toLowerCase();if(t.startsWith("http://")||t.startsWith("https://"))try{t=new URL(t).pathname.toLowerCase()}catch{}return!!t.endsWith("/cashier-url")||t.includes("/cashier/url")}function o(e,t){if(!e?.url)return t;let r=e.url.trim();if(!r)return t;if(r.startsWith("http://")||r.startsWith("https://"))try{return new URL(r).pathname}catch{return r.split("?")[0]}let i=r.split("?")[0];if(i.startsWith("/"))return i;let s=(e.baseURL??"").replace(/\/$/,"");return`${s}/${i}`.replace(/\/+/g,"/").split("?")[0]||t}var n=e.i(988674);let a=new WeakSet;e.s(["installAxiosRetryAfterHandling",0,function(e,l){a.has(e)||(a.add(e),e.interceptors.request.use(e=>{let n=o(e,l);e.retryAfterCooldownKey=n;let a=(0,r.getRetryAfterCooldownRemainingMs)(n);if(a>0){let e=new t.ApiRequestError({status:429,code:"RETRY_AFTER_COOLDOWN",message:"",retryAfterMs:a});return s(n)||(0,i.reportServiceBusyApiError)(e),Promise.reject(e)}return e}),e.interceptors.response.use(e=>e,e=>{var a,u,c;let d,p;if(e instanceof t.ApiRequestError)return Promise.reject(e);let m=e.response,f=o(e.config,l);m&&(0,r.isRetryAfterStatus)(m.status)&&(a=m.status,u=m.headers,(d=(0,r.registerRetryAfterFromHttpResponse)(a,u,f))>0&&(0,n.scheduleRetryAfterRefetch)(f,d));let h=(c=(0,t.normalizeError)(e),(p=(0,r.getRetryAfterCooldownRemainingMs)(f))>0&&(c.retryAfterMs=p),429===c.status?c.code="RATE_LIMITED":503===c.status&&(c.code="SERVICE_UNAVAILABLE"),c);return(0,r.isRetryAfterStatus)(h.status)&&!s(f)&&(0,i.reportServiceBusyApiError)(h),Promise.reject(h)}))}],79931)},165933,e=>{"use strict";function t(e){let t=function(e){let t=e.trim().toLowerCase();if(!t)return"";if(t.startsWith("[")){let e=t.indexOf("]");return e>1?t.slice(1,e):t}return 1===(t.match(/:/g)??[]).length?t.split(":")[0]??t:t}(e);return!!(!t||"localhost"===t||"127.0.0.1"===t||"::1"===t||t.endsWith(".localhost")||t.endsWith(".local")||"binarycom.workers.dev"===t||t.endsWith(".binarycom.workers.dev"))||t.endsWith(".workers.dev")}function r(){return t(window.location.hostname)}let i="/dashboard";function s(e){let t=e.trim().replace(/\/+$/,"");return!t||!/^https?:\/\//i.test(t)||t.endsWith(i)?t:`${t}${i}`}e.s(["getAppBase",0,function(){return r()?i:s(window.location.origin)},"getBffApiPrefix",0,function(){return r()?i:s(window.location.origin)},"isLocalDevHostname",0,t,"withNextBasePath",0,s])},488512,e=>{"use strict";var t=e.i(652987);e.s(["canCallCoreDirect",0,function(){return(0,t.isDerivOrigin)(window.location.hostname)},"getBrowserCoreApiBase",0,function(){let e=window.location.hostname;return(0,t.isDerivOrigin)(e)?(0,t.getUrlsForHostname)(e).apiBase:"/api/proxy/api"}])},261238,e=>{"use strict";var t=e.i(581949),r=e.i(79931),i=e.i(165933),s=e.i(488512),o=e.i(652987);let n=new Map,a=new Map;function l(e,t){n.set(e,(n.get(e)??0)+1);let r=a.get(e);r||(r=new Map,a.set(e,r)),r.set(t,(r.get(t)??0)+1)}let u=t.default.create({baseURL:(0,s.getBrowserCoreApiBase)()||"/api/deriv",headers:{"Content-Type":"application/json"},timeout:3e4});(0,r.installAxiosRetryAfterHandling)(u,"core");let c=t.default.create({baseURL:(0,i.getBffApiPrefix)(),headers:{"Content-Type":"application/json"},timeout:3e4,withCredentials:!0});(0,r.installAxiosRetryAfterHandling)(c,"bff"),(0,r.installAxiosRetryAfterHandling)(t.default,"core"),!(0,o.isDerivProductionHostname)(window.location.hostname)&&(window.__apiCalls||(window.__apiCalls={summary:()=>Object.fromEntries(n),detail(){let e={};for(let[t,r]of a)e[t]=Object.fromEntries(r);return e},reset:()=>(n.clear(),a.clear(),"API call counts reset.")},console.info("[API Counter] Active on %s — use window.__apiCalls.summary() / .detail() / .reset()",window.location.hostname)),1)&&(c.interceptors.request.use(e=>{let t=e.url??"(unknown)";return l(window.location.pathname,t),e}),u.interceptors.request.use(e=>{let t=e.baseURL??"",r=e.url??"(unknown)",i=r.startsWith("http")?r:`${t}${r}`;return l(window.location.pathname,i),e}),t.default.interceptors.request.use(e=>{let t=e.url??"(unknown)";return l(window.location.pathname,t),e})),e.s(["apiClient",0,u,"bffClient",0,c],261238)},127479,e=>{"use strict";function t(e){return e?.cooldown_duration&&new Date(e.cooldown_duration).getTime()-Date.now()>0?e.cooldown_duration:null}e.s(["formatTradingAssessmentCooldownLabel",0,function(e,t){let r=new Date(e).getTime()-Date.now();if(r<=0)return"";let i=r<=0?0:Math.floor(r/36e5);return i>=1?t("cooldown_time",{hours:i}):t("cooldown_minutes",{minutes:r<=0?0:Math.max(1,Math.floor(r/6e4))})},"getActiveTradingAssessmentCooldownUntil",0,t,"parseTradingAssessmentResponse",0,function(e){return e&&"object"==typeof e?"is_completed"in e||"assessment_result"in e||"cooldown_duration"in e?e:e.data??null:null},"shouldRedirectToTradingAssessmentResultAfterFirstPost",0,function(e){return!(!e||t(e))&&!1!==e.is_suitable&&e?.assessment_result==="fail"},"shouldShowTradingAssessmentInProfile",0,function(e){return!!e&&(!0===e.is_completed||!!e.cooldown_duration?.trim())}])},795304,e=>{"use strict";e.s(["BASE_PATH",0,"/dashboard","UNOPTIMIZED_LOCAL_IMAGES",0,!1])},618566,(e,t,r)=>{t.exports=e.r(976562)},857581,e=>{"use strict";e.s(["ROUTES",0,{QA_ENDPOINT:"/endpoint",CONNECTED_APPS:"/connected-apps",API_TOKENS:"/api-tokens",OAUTH2_CONSENT:"/oauth2/consent",OAUTH2_CONSENT_ERROR:"/oauth2/consent/error",HOME:"/home",HOME_MORE:"/home/more",LOGIN:"/login",ENTER_PASSWORD:"/enter-password",SIGNUP:"/signup",SIGNUP_COUNTRY_SELECTION:"/signup/country-selection",SIGNUP_EMAIL:"/signup-email",VERIFY_EMAIL:"/verify-email",SET_PASSWORD:"/set-password",FORGOT_PASSWORD:"/forgot-password",RESET_PASSWORD:"/reset-password",LOGIN_OTP:"/login-otp",LOGIN_TOTP:"/login-totp",VERIFY_RESET_PASSWORD:"/login/verify-reset-password",CLOSE_ACCOUNT:"/profile/close-account",PROFILE_PERSONAL_DETAILS:"/profile/personal-details",PROFILE_PHONE_NUMBER:"/profile/phone-number",PROFILE_EMAIL_ADDRESS:"/profile/email-address",PROFILE_CHANGE_EMAIL:"/profile/change-email",PROFILE_REGULATORY_INFORMATION:"/profile/regulatory-information",ONBOARDING:"/onboarding",ONBOARDING_PERSONAL_DETAILS:"/onboarding/personal-details",ONBOARDING_VERIFY_USER:"/onboarding/verify-user",ONBOARDING_KYC_POI:"/onboarding/kyc-poi",ONBOARDING_KYC_POA:"/onboarding/kyc-poa",ONBOARDING_ADDRESS:"/onboarding/address",ONBOARDING_ACCOUNT_OPENING_REASON:"/onboarding/account-opening-reason",ONBOARDING_FA_EMPLOYMENT:"/onboarding/financial-assessment/employment",ONBOARDING_FA_QUESTION:"/onboarding/financial-assessment/question",ONBOARDING_TAX_ASSESSMENT:"/onboarding/tax-assessment",ONBOARDING_TERMS_OF_USE:"/onboarding/terms-of-use",ONBOARDING_SUCCESS:"/onboarding/success"}])},4971,e=>{"use strict";e.s(["sizes",0,{xs:{width:16,height:16},sm:{width:24,height:24},md:{width:32,height:32},lg:{width:48,height:48},xl:{width:64,height:64},"2xl":{width:96,height:96}}])},705766,e=>{"use strict";let t,r;var i,s=e.i(271645);let o={data:""},n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,u=(e,t)=>{let r="",i="",s="";for(let o in e){let n=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+n+";":i+="f"==o[1]?u(n,o):o+"{"+u(n,"k"==o[1]?"":t)+"}":"object"==typeof n?i+=u(n,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=n&&(o="-"==o[1]?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=u.p?u.p(o,n):o+":"+n+";")}return r+(t&&s?t+"{"+s+"}":s)+i},c={},d=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+d(e[r]);return t}return e};function p(e){let t,r,i=this||{},s=e.call?e(i.p):e;return((e,t,r,i,s)=>{var o;let p=d(e),m=c[p]||(c[p]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(p));if(!c[m]){let t=p!==e?e:(e=>{let t,r,i=[{}];for(;t=n.exec(e.replace(a,""));)t[4]?i.shift():t[3]?(r=t[3].replace(l," ").trim(),i.unshift(i[0][r]=i[0][r]||{})):i[0][t[1]]=t[2].replace(l," ").trim();return i[0]})(e);c[m]=u(s?{["@keyframes "+m]:t}:t,r?"":"."+m)}let f=r&&c.g;return r&&(c.g=c[m]),o=c[m],f?t.data=t.data.replace(f,o):-1===t.data.indexOf(o)&&(t.data=i?o+t.data:t.data+o),m})(s.unshift?s.raw?(t=[].slice.call(arguments,1),r=i.p,s.reduce((e,i,s)=>{let o=t[s];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+i+(null==o?"":o)},"")):s.reduce((e,t)=>Object.assign(e,t&&t.call?t(i.p):t),{}):s,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||o})(i.target),i.g,i.o,i.k)}p.bind({g:1});let m,f,h,g=p.bind({k:1});function y(e,t){let r=this||{};return function(){let i=arguments;function s(o,n){let a=Object.assign({},o),l=a.className||s.className;r.p=Object.assign({theme:f&&f()},a),r.o=/go\d/.test(l),a.className=p.apply(r,i)+(l?" "+l:""),t&&(a.ref=n);let u=e;return e[0]&&(u=a.as||e,delete a.as),h&&u[0]&&h(a),m(u,a)}return t?t(s):s}}var v=(e,t)=>"function"==typeof e?e(t):e,b=(t=0,()=>(++t).toString()),w=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},E="default",A=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:i}=t;return A(e,{type:+!!e.toasts.find(e=>e.id===i.id),toast:i});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},_=[],R={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},O={},T=(e,t=E)=>{O[t]=A(O[t]||R,e),_.forEach(([e,r])=>{e===t&&r(O[t])})},S=e=>Object.keys(O).forEach(t=>T(e,t)),x=(e=E)=>t=>{T(t,e)},N={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},C=e=>(t,r)=>{let i,s=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||b()}))(t,e,r);return x(s.toasterId||(i=s.id,Object.keys(O).find(e=>O[e].toasts.some(e=>e.id===i))))({type:2,toast:s}),s.id},L=(e,t)=>C("blank")(e,t);L.error=C("error"),L.success=C("success"),L.loading=C("loading"),L.custom=C("custom"),L.dismiss=(e,t)=>{let r={type:3,toastId:e};t?x(t)(r):S(r)},L.dismissAll=e=>L.dismiss(void 0,e),L.remove=(e,t)=>{let r={type:4,toastId:e};t?x(t)(r):S(r)},L.removeAll=e=>L.remove(void 0,e),L.promise=(e,t,r)=>{let i=L.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?v(t.success,e):void 0;return s?L.success(s,{id:i,...r,...null==r?void 0:r.success}):L.dismiss(i),e}).catch(e=>{let s=t.error?v(t.error,e):void 0;s?L.error(s,{id:i,...r,...null==r?void 0:r.error}):L.dismiss(i)}),e};var I=1e3,M=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,B=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,D=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,P=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${M} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${B} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${D} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,U=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,k=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${U} 1s linear infinite;
`,F=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,$=g`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,j=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${$} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,W=y("div")`
  position: absolute;
`,H=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,G=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,z=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${G} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,q=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return void 0!==t?"string"==typeof t?s.createElement(z,null,t):t:"blank"===r?null:s.createElement(H,null,s.createElement(k,{...i}),"loading"!==r&&s.createElement(W,null,"error"===r?s.createElement(P,{...i}):s.createElement(j,{...i})))},X=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Y=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,K=s.memo(({toast:e,position:t,style:r,children:i})=>{let o=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[i,s]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${g(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},n=s.createElement(q,{toast:e}),a=s.createElement(Y,{...e.ariaProps},v(e.message,e));return s.createElement(X,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof i?i({icon:n,message:a}):s.createElement(s.Fragment,null,n,a))});i=s.createElement,u.p=void 0,m=i,f=void 0,h=void 0;var V=({id:e,className:t,style:r,onHeightUpdate:i,children:o})=>{let n=s.useCallback(t=>{if(t){let r=()=>{i(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return s.createElement("div",{ref:n,className:t,style:r},o)},Z=p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;e.s(["Toaster",0,({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:o,toasterId:n,containerStyle:a,containerClassName:l})=>{let{toasts:u,handlers:c}=((e,t="default")=>{let{toasts:r,pausedAt:i}=((e={},t=E)=>{let[r,i]=(0,s.useState)(O[t]||R),o=(0,s.useRef)(O[t]);(0,s.useEffect)(()=>(o.current!==O[t]&&i(O[t]),_.push([t,i]),()=>{let e=_.findIndex(([e])=>e===t);e>-1&&_.splice(e,1)}),[t]);let n=r.toasts.map(t=>{var r,i,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(i=e[t.type])?void 0:i.duration)||(null==e?void 0:e.duration)||N[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...r,toasts:n}})(e,t),o=(0,s.useRef)(new Map).current,n=(0,s.useCallback)((e,t=I)=>{if(o.has(e))return;let r=setTimeout(()=>{o.delete(e),a({type:4,toastId:e})},t);o.set(e,r)},[]);(0,s.useEffect)(()=>{if(i)return;let e=Date.now(),s=r.map(r=>{if(r.duration===1/0)return;let i=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(i<0){r.visible&&L.dismiss(r.id);return}return setTimeout(()=>L.dismiss(r.id,t),i)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[r,i,t]);let a=(0,s.useCallback)(x(t),[t]),l=(0,s.useCallback)(()=>{a({type:5,time:Date.now()})},[a]),u=(0,s.useCallback)((e,t)=>{a({type:1,toast:{id:e,height:t}})},[a]),c=(0,s.useCallback)(()=>{i&&a({type:6,time:Date.now()})},[i,a]),d=(0,s.useCallback)((e,t)=>{let{reverseOrder:i=!1,gutter:s=8,defaultPosition:o}=t||{},n=r.filter(t=>(t.position||o)===(e.position||o)&&t.height),a=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<a&&e.visible).length;return n.filter(e=>e.visible).slice(...i?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[r]);return(0,s.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)n(e.id,e.removeDelay);else{let t=o.get(e.id);t&&(clearTimeout(t),o.delete(e.id))}})},[r,n]),{toasts:r,handlers:{updateHeight:u,startPause:l,endPause:c,calculateOffset:d}}})(r,n);return s.createElement("div",{"data-rht-toaster":n||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(r=>{let n,a,l=r.position||t,u=c.calculateOffset(r,{reverseOrder:e,gutter:i,defaultPosition:t}),d=(n=l.includes("top"),a=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${u*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...a});return s.createElement(V,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?Z:"",style:d},"custom"===r.type?v(r.message,r):o?o(r):s.createElement(K,{toast:r,position:l}))}))},"default",0,L],705766)}]);