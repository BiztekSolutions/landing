(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function q0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Y0={exports:{}},fl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b2=Symbol.for("react.transitional.element"),v2=Symbol.for("react.fragment");function X0(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:b2,type:t,key:i,ref:e!==void 0?e:null,props:n}}fl.Fragment=v2;fl.jsx=X0;fl.jsxs=X0;Y0.exports=fl;var c=Y0.exports,Z0={exports:{}},_={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf=Symbol.for("react.transitional.element"),S2=Symbol.for("react.portal"),w2=Symbol.for("react.fragment"),T2=Symbol.for("react.strict_mode"),j2=Symbol.for("react.profiler"),A2=Symbol.for("react.consumer"),C2=Symbol.for("react.context"),$2=Symbol.for("react.forward_ref"),E2=Symbol.for("react.suspense"),M2=Symbol.for("react.memo"),Q0=Symbol.for("react.lazy"),z2=Symbol.for("react.activity"),mh=Symbol.iterator;function D2(t){return t===null||typeof t!="object"?null:(t=mh&&t[mh]||t["@@iterator"],typeof t=="function"?t:null)}var K0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F0=Object.assign,P0={};function ja(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||K0}ja.prototype.isReactComponent={};ja.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ja.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function J0(){}J0.prototype=ja.prototype;function zf(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||K0}var Df=zf.prototype=new J0;Df.constructor=zf;F0(Df,ja.prototype);Df.isPureReactComponent=!0;var gh=Array.isArray;function Ic(){}var ut={H:null,A:null,T:null,S:null},W0=Object.prototype.hasOwnProperty;function Rf(t,e,n){var i=n.ref;return{$$typeof:Mf,type:t,key:e,ref:i!==void 0?i:null,props:n}}function R2(t,e){return Rf(t.type,e,t.props)}function Of(t){return typeof t=="object"&&t!==null&&t.$$typeof===Mf}function O2(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yh=/\/+/g;function Hl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?O2(""+t.key):e.toString(36)}function k2(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Ic,Ic):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Vi(t,e,n,i,a){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Mf:case S2:o=!0;break;case Q0:return o=t._init,Vi(o(t._payload),e,n,i,a)}}if(o)return a=a(t),o=i===""?"."+Hl(t,0):i,gh(a)?(n="",o!=null&&(n=o.replace(yh,"$&/")+"/"),Vi(a,e,n,"",function(u){return u})):a!=null&&(Of(a)&&(a=R2(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(yh,"$&/")+"/")+o)),e.push(a)),1;o=0;var r=i===""?".":i+":";if(gh(t))for(var l=0;l<t.length;l++)i=t[l],s=r+Hl(i,l),o+=Vi(i,e,n,s,a);else if(l=D2(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,s=r+Hl(i,l++),o+=Vi(i,e,n,s,a);else if(s==="object"){if(typeof t.then=="function")return Vi(k2(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return o}function yo(t,e,n){if(t==null)return t;var i=[],a=0;return Vi(t,i,"","",function(s){return e.call(n,s,a++)}),i}function V2(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xh=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},B2={map:yo,forEach:function(t,e,n){yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yo(t,function(){e++}),e},toArray:function(t){return yo(t,function(e){return e})||[]},only:function(t){if(!Of(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};_.Activity=z2;_.Children=B2;_.Component=ja;_.Fragment=w2;_.Profiler=j2;_.PureComponent=zf;_.StrictMode=T2;_.Suspense=E2;_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ut;_.__COMPILER_RUNTIME={__proto__:null,c:function(t){return ut.H.useMemoCache(t)}};_.cache=function(t){return function(){return t.apply(null,arguments)}};_.cacheSignal=function(){return null};_.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=F0({},t.props),a=t.key;if(e!=null)for(s in e.key!==void 0&&(a=""+e.key),e)!W0.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(i[s]=e[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var o=Array(s),r=0;r<s;r++)o[r]=arguments[r+2];i.children=o}return Rf(t.type,a,i)};_.createContext=function(t){return t={$$typeof:C2,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:A2,_context:t},t};_.createElement=function(t,e,n){var i,a={},s=null;if(e!=null)for(i in e.key!==void 0&&(s=""+e.key),e)W0.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var o=arguments.length-2;if(o===1)a.children=n;else if(1<o){for(var r=Array(o),l=0;l<o;l++)r[l]=arguments[l+2];a.children=r}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)a[i]===void 0&&(a[i]=o[i]);return Rf(t,s,a)};_.createRef=function(){return{current:null}};_.forwardRef=function(t){return{$$typeof:$2,render:t}};_.isValidElement=Of;_.lazy=function(t){return{$$typeof:Q0,_payload:{_status:-1,_result:t},_init:V2}};_.memo=function(t,e){return{$$typeof:M2,type:t,compare:e===void 0?null:e}};_.startTransition=function(t){var e=ut.T,n={};ut.T=n;try{var i=t(),a=ut.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Ic,xh)}catch(s){xh(s)}finally{e!==null&&n.types!==null&&(e.types=n.types),ut.T=e}};_.unstable_useCacheRefresh=function(){return ut.H.useCacheRefresh()};_.use=function(t){return ut.H.use(t)};_.useActionState=function(t,e,n){return ut.H.useActionState(t,e,n)};_.useCallback=function(t,e){return ut.H.useCallback(t,e)};_.useContext=function(t){return ut.H.useContext(t)};_.useDebugValue=function(){};_.useDeferredValue=function(t,e){return ut.H.useDeferredValue(t,e)};_.useEffect=function(t,e){return ut.H.useEffect(t,e)};_.useEffectEvent=function(t){return ut.H.useEffectEvent(t)};_.useId=function(){return ut.H.useId()};_.useImperativeHandle=function(t,e,n){return ut.H.useImperativeHandle(t,e,n)};_.useInsertionEffect=function(t,e){return ut.H.useInsertionEffect(t,e)};_.useLayoutEffect=function(t,e){return ut.H.useLayoutEffect(t,e)};_.useMemo=function(t,e){return ut.H.useMemo(t,e)};_.useOptimistic=function(t,e){return ut.H.useOptimistic(t,e)};_.useReducer=function(t,e,n){return ut.H.useReducer(t,e,n)};_.useRef=function(t){return ut.H.useRef(t)};_.useState=function(t){return ut.H.useState(t)};_.useSyncExternalStore=function(t,e,n){return ut.H.useSyncExternalStore(t,e,n)};_.useTransition=function(){return ut.H.useTransition()};_.version="19.2.6";Z0.exports=_;var $=Z0.exports;const ht=q0($);var I0={exports:{}},dl={},tg={exports:{}},eg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,N){var k=D.length;D.push(N);t:for(;0<k;){var L=k-1>>>1,G=D[L];if(0<a(G,N))D[L]=N,D[k]=G,k=L;else break t}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var N=D[0],k=D.pop();if(k!==N){D[0]=k;t:for(var L=0,G=D.length,kt=G>>>1;L<kt;){var wt=2*(L+1)-1,Vt=D[wt],pt=wt+1,bt=D[pt];if(0>a(Vt,k))pt<G&&0>a(bt,Vt)?(D[L]=bt,D[pt]=k,L=pt):(D[L]=Vt,D[wt]=k,L=wt);else if(pt<G&&0>a(bt,k))D[L]=bt,D[pt]=k,L=pt;else break t}}return N}function a(D,N){var k=D.sortIndex-N.sortIndex;return k!==0?k:D.id-N.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,r=o.now();t.unstable_now=function(){return o.now()-r}}var l=[],u=[],f=1,h=null,d=3,m=!1,b=!1,S=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;function v(D){for(var N=n(u);N!==null;){if(N.callback===null)i(u);else if(N.startTime<=D)i(u),N.sortIndex=N.expirationTime,e(l,N);else break;N=n(u)}}function T(D){if(S=!1,v(D),!b)if(n(l)!==null)b=!0,M||(M=!0,Q());else{var N=n(u);N!==null&&Mt(T,N.startTime-D)}}var M=!1,j=-1,A=5,z=-1;function E(){return w?!0:!(t.unstable_now()-z<A)}function V(){if(w=!1,M){var D=t.unstable_now();z=D;var N=!0;try{t:{b=!1,S&&(S=!1,p(j),j=-1),m=!0;var k=d;try{e:{for(v(D),h=n(l);h!==null&&!(h.expirationTime>D&&E());){var L=h.callback;if(typeof L=="function"){h.callback=null,d=h.priorityLevel;var G=L(h.expirationTime<=D);if(D=t.unstable_now(),typeof G=="function"){h.callback=G,v(D),N=!0;break e}h===n(l)&&i(l),v(D)}else i(l);h=n(l)}if(h!==null)N=!0;else{var kt=n(u);kt!==null&&Mt(T,kt.startTime-D),N=!1}}break t}finally{h=null,d=k,m=!1}N=void 0}}finally{N?Q():M=!1}}}var Q;if(typeof x=="function")Q=function(){x(V)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,xt=J.port2;J.port1.onmessage=V,Q=function(){xt.postMessage(null)}}else Q=function(){y(V,0)};function Mt(D,N){j=y(function(){D(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var N=3;break;default:N=d}var k=d;d=N;try{return D()}finally{d=k}},t.unstable_requestPaint=function(){w=!0},t.unstable_runWithPriority=function(D,N){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var k=d;d=D;try{return N()}finally{d=k}},t.unstable_scheduleCallback=function(D,N,k){var L=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?L+k:L):k=L,D){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=k+G,D={id:f++,callback:N,priorityLevel:D,startTime:k,expirationTime:G,sortIndex:-1},k>L?(D.sortIndex=k,e(u,D),n(l)===null&&D===n(u)&&(S?(p(j),j=-1):S=!0,Mt(T,k-L))):(D.sortIndex=G,e(l,D),b||m||(b=!0,M||(M=!0,Q()))),D},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(D){var N=d;return function(){var k=d;d=N;try{return D.apply(this,arguments)}finally{d=k}}}})(eg);tg.exports=eg;var L2=tg.exports,ng={exports:{}},Pt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _2=$;function ig(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function mn(){}var Qt={d:{f:mn,r:function(){throw Error(ig(522))},D:mn,C:mn,L:mn,m:mn,X:mn,S:mn,M:mn},p:0,findDOMNode:null},N2=Symbol.for("react.portal");function U2(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N2,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var us=_2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function hl(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Qt;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(ig(299));return U2(t,e,null,n)};Pt.flushSync=function(t){var e=us.T,n=Qt.p;try{if(us.T=null,Qt.p=2,t)return t()}finally{us.T=e,Qt.p=n,Qt.d.f()}};Pt.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Qt.d.C(t,e))};Pt.prefetchDNS=function(t){typeof t=="string"&&Qt.d.D(t)};Pt.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=hl(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?Qt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&Qt.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Pt.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=hl(e.as,e.crossOrigin);Qt.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Qt.d.M(t)};Pt.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=hl(n,e.crossOrigin);Qt.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Pt.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=hl(e.as,e.crossOrigin);Qt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Qt.d.m(t)};Pt.requestFormReset=function(t){Qt.d.r(t)};Pt.unstable_batchedUpdates=function(t,e){return t(e)};Pt.useFormState=function(t,e,n){return us.H.useFormState(t,e,n)};Pt.useFormStatus=function(){return us.H.useHostTransitionStatus()};Pt.version="19.2.6";function ag(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ag)}catch(t){console.error(t)}}ag(),ng.exports=Pt;var H2=ng.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ot=L2,sg=$,G2=H2;function C(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function og(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lg(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bh(t){if(Ws(t)!==t)throw Error(C(188))}function q2(t){var e=t.alternate;if(!e){if(e=Ws(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return bh(a),t;if(s===i)return bh(a),e;s=s.sibling}throw Error(C(188))}if(n.return!==i.return)n=a,i=s;else{for(var o=!1,r=a.child;r;){if(r===n){o=!0,n=a,i=s;break}if(r===i){o=!0,i=a,n=s;break}r=r.sibling}if(!o){for(r=s.child;r;){if(r===n){o=!0,n=s,i=a;break}if(r===i){o=!0,i=s,n=a;break}r=r.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==i)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function cg(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=cg(t),e!==null)return e;t=t.sibling}return null}var ft=Object.assign,Y2=Symbol.for("react.element"),xo=Symbol.for("react.transitional.element"),es=Symbol.for("react.portal"),Ni=Symbol.for("react.fragment"),ug=Symbol.for("react.strict_mode"),tu=Symbol.for("react.profiler"),fg=Symbol.for("react.consumer"),en=Symbol.for("react.context"),kf=Symbol.for("react.forward_ref"),eu=Symbol.for("react.suspense"),nu=Symbol.for("react.suspense_list"),Vf=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),iu=Symbol.for("react.activity"),X2=Symbol.for("react.memo_cache_sentinel"),vh=Symbol.iterator;function Xa(t){return t===null||typeof t!="object"?null:(t=vh&&t[vh]||t["@@iterator"],typeof t=="function"?t:null)}var Z2=Symbol.for("react.client.reference");function au(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Z2?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ni:return"Fragment";case tu:return"Profiler";case ug:return"StrictMode";case eu:return"Suspense";case nu:return"SuspenseList";case iu:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case es:return"Portal";case en:return t.displayName||"Context";case fg:return(t._context.displayName||"Context")+".Consumer";case kf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vf:return e=t.displayName||null,e!==null?e:au(t.type)||"Memo";case bn:e=t._payload,t=t._init;try{return au(t(e))}catch{}}return null}var ns=Array.isArray,B=sg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=G2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ci={pending:!1,data:null,method:null,action:null},su=[],Ui=-1;function Xe(t){return{current:t}}function _t(t){0>Ui||(t.current=su[Ui],su[Ui]=null,Ui--)}function st(t,e){Ui++,su[Ui]=t.current,t.current=e}var Ge=Xe(null),zs=Xe(null),Rn=Xe(null),br=Xe(null);function vr(t,e){switch(st(Rn,e),st(zs,t),st(Ge,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Cp(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Cp(e),t=Dy(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}_t(Ge),st(Ge,t)}function la(){_t(Ge),_t(zs),_t(Rn)}function ou(t){t.memoizedState!==null&&st(br,t);var e=Ge.current,n=Dy(e,t.type);e!==n&&(st(zs,t),st(Ge,n))}function Sr(t){zs.current===t&&(_t(Ge),_t(zs)),br.current===t&&(_t(br),Hs._currentValue=ci)}var Gl,Sh;function ei(t){if(Gl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gl=e&&e[1]||"",Sh=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gl+t+Sh}var ql=!1;function Yl(t,e){if(!t||ql)return"";ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(m){var d=m}Reflect.construct(t,[],h)}else{try{h.call()}catch(m){d=m}t.call(h.prototype)}}else{try{throw Error()}catch(m){d=m}(h=t())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(m){if(m&&d&&typeof m.stack=="string")return[m.stack,d.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),o=s[0],r=s[1];if(o&&r){var l=o.split(`
`),u=r.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===u.length)for(i=l.length-1,a=u.length-1;1<=i&&0<=a&&l[i]!==u[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==u[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==u[a]){var f=`
`+l[i].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=i&&0<=a);break}}}finally{ql=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?ei(n):""}function Q2(t,e){switch(t.tag){case 26:case 27:case 5:return ei(t.type);case 16:return ei("Lazy");case 13:return t.child!==e&&e!==null?ei("Suspense Fallback"):ei("Suspense");case 19:return ei("SuspenseList");case 0:case 15:return Yl(t.type,!1);case 11:return Yl(t.type.render,!1);case 1:return Yl(t.type,!0);case 31:return ei("Activity");default:return""}}function wh(t){try{var e="",n=null;do e+=Q2(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var ru=Object.prototype.hasOwnProperty,Bf=Ot.unstable_scheduleCallback,Xl=Ot.unstable_cancelCallback,K2=Ot.unstable_shouldYield,F2=Ot.unstable_requestPaint,le=Ot.unstable_now,P2=Ot.unstable_getCurrentPriorityLevel,dg=Ot.unstable_ImmediatePriority,hg=Ot.unstable_UserBlockingPriority,wr=Ot.unstable_NormalPriority,J2=Ot.unstable_LowPriority,pg=Ot.unstable_IdlePriority,W2=Ot.log,I2=Ot.unstable_setDisableYieldValue,Is=null,ce=null;function An(t){if(typeof W2=="function"&&I2(t),ce&&typeof ce.setStrictMode=="function")try{ce.setStrictMode(Is,t)}catch{}}var ue=Math.clz32?Math.clz32:nv,tv=Math.log,ev=Math.LN2;function nv(t){return t>>>=0,t===0?32:31-(tv(t)/ev|0)|0}var bo=256,vo=262144,So=4194304;function ni(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pl(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,s=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var r=i&134217727;return r!==0?(i=r&~s,i!==0?a=ni(i):(o&=r,o!==0?a=ni(o):n||(n=r&~t,n!==0&&(a=ni(n))))):(r=i&~s,r!==0?a=ni(r):o!==0?a=ni(o):n||(n=i&~t,n!==0&&(a=ni(n)))),a===0?0:e!==0&&e!==a&&!(e&s)&&(s=a&-a,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:a}function to(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function iv(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mg(){var t=So;return So<<=1,!(So&62914560)&&(So=4194304),t}function Zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function eo(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function av(t,e,n,i,a,s){var o=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var r=t.entanglements,l=t.expirationTimes,u=t.hiddenUpdates;for(n=o&~n;0<n;){var f=31-ue(n),h=1<<f;r[f]=0,l[f]=-1;var d=u[f];if(d!==null)for(u[f]=null,f=0;f<d.length;f++){var m=d[f];m!==null&&(m.lane&=-536870913)}n&=~h}i!==0&&gg(t,i,0),s!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=s&~(o&~e))}function gg(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-ue(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function yg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ue(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function xg(t,e){var n=e&-e;return n=n&42?1:Lf(n),n&(t.suspendedLanes|e)?0:n}function Lf(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function _f(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function bg(){var t=P.p;return t!==0?t:(t=window.event,t===void 0?32:Gy(t.type))}function Th(t,e){var n=P.p;try{return P.p=t,e()}finally{P.p=n}}var Kn=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Kn,ne="__reactProps$"+Kn,Aa="__reactContainer$"+Kn,lu="__reactEvents$"+Kn,sv="__reactListeners$"+Kn,ov="__reactHandles$"+Kn,jh="__reactResources$"+Kn,no="__reactMarker$"+Kn;function Nf(t){delete t[Ht],delete t[ne],delete t[lu],delete t[sv],delete t[ov]}function Hi(t){var e=t[Ht];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Aa]||n[Ht]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dp(t);t!==null;){if(n=t[Ht])return n;t=Dp(t)}return e}t=n,n=t.parentNode}return null}function Ca(t){if(t=t[Ht]||t[Aa]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function is(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(C(33))}function ta(t){var e=t[jh];return e||(e=t[jh]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Lt(t){t[no]=!0}var vg=new Set,Sg={};function $i(t,e){ca(t,e),ca(t+"Capture",e)}function ca(t,e){for(Sg[t]=e,t=0;t<e.length;t++)vg.add(e[t])}var rv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ah={},Ch={};function lv(t){return ru.call(Ch,t)?!0:ru.call(Ah,t)?!1:rv.test(t)?Ch[t]=!0:(Ah[t]=!0,!1)}function qo(t,e,n){if(lv(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function wo(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Qe(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function ge(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cv(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cu(t){if(!t._valueTracker){var e=wg(t)?"checked":"value";t._valueTracker=cv(t,e,""+t[e])}}function Tg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=wg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Tr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var uv=/[\n"\\]/g;function be(t){return t.replace(uv,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function uu(t,e,n,i,a,s,o,r){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),e!=null?o==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ge(e)):t.value!==""+ge(e)&&(t.value=""+ge(e)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),e!=null?fu(t,o,ge(e)):n!=null?fu(t,o,ge(n)):i!=null&&t.removeAttribute("value"),a==null&&s!=null&&(t.defaultChecked=!!s),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.name=""+ge(r):t.removeAttribute("name")}function jg(t,e,n,i,a,s,o,r){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){cu(t);return}n=n!=null?""+ge(n):"",e=e!=null?""+ge(e):n,r||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=r?t.checked:!!i,t.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),cu(t)}function fu(t,e,n){e==="number"&&Tr(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function ea(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ge(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function Ag(t,e,n){if(e!=null&&(e=""+ge(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+ge(n):""}function Cg(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(C(92));if(ns(i)){if(1<i.length)throw Error(C(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=ge(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),cu(t)}function ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $h(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||fv.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function $g(t,e,n){if(e!=null&&typeof e!="object")throw Error(C(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&$h(t,a,i)}else for(var s in e)e.hasOwnProperty(s)&&$h(t,s,e[s])}function Uf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(t){return hv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function nn(){}var du=null;function Hf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gi=null,na=null;function Eh(t){var e=Ca(t);if(e&&(t=e.stateNode)){var n=t[ne]||null;t:switch(t=e.stateNode,e.type){case"input":if(uu(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+be(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[ne]||null;if(!a)throw Error(C(90));uu(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&Tg(i)}break t;case"textarea":Ag(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&ea(t,!!n.multiple,e,!1)}}}var Ql=!1;function Eg(t,e,n){if(Ql)return t(e,n);Ql=!0;try{var i=t(e);return i}finally{if(Ql=!1,(Gi!==null||na!==null)&&(Cl(),Gi&&(e=Gi,t=na,na=Gi=null,Eh(e),t)))for(e=0;e<t.length;e++)Eh(t[e])}}function Ds(t,e){var n=t.stateNode;if(n===null)return null;var i=n[ne]||null;if(i===null)return null;n=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(ln)try{var Za={};Object.defineProperty(Za,"passive",{get:function(){hu=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{hu=!1}var Cn=null,Gf=null,Xo=null;function Mg(){if(Xo)return Xo;var t,e=Gf,n=e.length,i,a="value"in Cn?Cn.value:Cn.textContent,s=a.length;for(t=0;t<n&&e[t]===a[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===a[s-i];i++);return Xo=a.slice(t,1<i?1-i:void 0)}function Zo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function To(){return!0}function Mh(){return!1}function ie(t){function e(n,i,a,s,o){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var r in t)t.hasOwnProperty(r)&&(n=t[r],this[r]=n?n(s):s[r]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?To:Mh,this.isPropagationStopped=Mh,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),e}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=ie(Ei),io=ft({},Ei,{view:0,detail:0}),pv=ie(io),Kl,Fl,Qa,gl=ft({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qa&&(Qa&&t.type==="mousemove"?(Kl=t.screenX-Qa.screenX,Fl=t.screenY-Qa.screenY):Fl=Kl=0,Qa=t),Kl)},movementY:function(t){return"movementY"in t?t.movementY:Fl}}),zh=ie(gl),mv=ft({},gl,{dataTransfer:0}),gv=ie(mv),yv=ft({},io,{relatedTarget:0}),Pl=ie(yv),xv=ft({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),bv=ie(xv),vv=ft({},Ei,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sv=ie(vv),wv=ft({},Ei,{data:0}),Dh=ie(wv),Tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Av[t])?!!e[t]:!1}function qf(){return Cv}var $v=ft({},io,{key:function(t){if(t.key){var e=Tv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qf,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ev=ie($v),Mv=ft({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rh=ie(Mv),zv=ft({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qf}),Dv=ie(zv),Rv=ft({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ov=ie(Rv),kv=ft({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=ie(kv),Bv=ft({},Ei,{newState:0,oldState:0}),Lv=ie(Bv),_v=[9,13,27,32],Yf=ln&&"CompositionEvent"in window,fs=null;ln&&"documentMode"in document&&(fs=document.documentMode);var Nv=ln&&"TextEvent"in window&&!fs,zg=ln&&(!Yf||fs&&8<fs&&11>=fs),Oh=" ",kh=!1;function Dg(t,e){switch(t){case"keyup":return _v.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qi=!1;function Uv(t,e){switch(t){case"compositionend":return Rg(e);case"keypress":return e.which!==32?null:(kh=!0,Oh);case"textInput":return t=e.data,t===Oh&&kh?null:t;default:return null}}function Hv(t,e){if(qi)return t==="compositionend"||!Yf&&Dg(t,e)?(t=Mg(),Xo=Gf=Cn=null,qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zg&&e.locale!=="ko"?null:e.data;default:return null}}var Gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Gv[t.type]:e==="textarea"}function Og(t,e,n,i){Gi?na?na.push(i):na=[i]:Gi=i,e=Hr(e,"onChange"),0<e.length&&(n=new ml("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ds=null,Rs=null;function qv(t){Ey(t,0)}function yl(t){var e=is(t);if(Tg(e))return t}function Bh(t,e){if(t==="change")return e}var kg=!1;if(ln){var Jl;if(ln){var Wl="oninput"in document;if(!Wl){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),Wl=typeof Lh.oninput=="function"}Jl=Wl}else Jl=!1;kg=Jl&&(!document.documentMode||9<document.documentMode)}function _h(){ds&&(ds.detachEvent("onpropertychange",Vg),Rs=ds=null)}function Vg(t){if(t.propertyName==="value"&&yl(Rs)){var e=[];Og(e,Rs,t,Hf(t)),Eg(qv,e)}}function Yv(t,e,n){t==="focusin"?(_h(),ds=e,Rs=n,ds.attachEvent("onpropertychange",Vg)):t==="focusout"&&_h()}function Xv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yl(Rs)}function Zv(t,e){if(t==="click")return yl(e)}function Qv(t,e){if(t==="input"||t==="change")return yl(e)}function Kv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var he=typeof Object.is=="function"?Object.is:Kv;function Os(t,e){if(he(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!ru.call(e,a)||!he(t[a],e[a]))return!1}return!0}function Nh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uh(t,e){var n=Nh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Nh(n)}}function Bg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Tr(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tr(t.document)}return e}function Xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Fv=ln&&"documentMode"in document&&11>=document.documentMode,Yi=null,pu=null,hs=null,mu=!1;function Hh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mu||Yi==null||Yi!==Tr(i)||(i=Yi,"selectionStart"in i&&Xf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),hs&&Os(hs,i)||(hs=i,i=Hr(pu,"onSelect"),0<i.length&&(e=new ml("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Yi)))}function Wn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xi={animationend:Wn("Animation","AnimationEnd"),animationiteration:Wn("Animation","AnimationIteration"),animationstart:Wn("Animation","AnimationStart"),transitionrun:Wn("Transition","TransitionRun"),transitionstart:Wn("Transition","TransitionStart"),transitioncancel:Wn("Transition","TransitionCancel"),transitionend:Wn("Transition","TransitionEnd")},Il={},_g={};ln&&(_g=document.createElement("div").style,"AnimationEvent"in window||(delete Xi.animationend.animation,delete Xi.animationiteration.animation,delete Xi.animationstart.animation),"TransitionEvent"in window||delete Xi.transitionend.transition);function Mi(t){if(Il[t])return Il[t];if(!Xi[t])return t;var e=Xi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _g)return Il[t]=e[n];return t}var Ng=Mi("animationend"),Ug=Mi("animationiteration"),Hg=Mi("animationstart"),Pv=Mi("transitionrun"),Jv=Mi("transitionstart"),Wv=Mi("transitioncancel"),Gg=Mi("transitionend"),qg=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function Ve(t,e){qg.set(t,e),$i(e,[t])}var jr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},me=[],Zi=0,Zf=0;function xl(){for(var t=Zi,e=Zf=Zi=0;e<t;){var n=me[e];me[e++]=null;var i=me[e];me[e++]=null;var a=me[e];me[e++]=null;var s=me[e];if(me[e++]=null,i!==null&&a!==null){var o=i.pending;o===null?a.next=a:(a.next=o.next,o.next=a),i.pending=a}s!==0&&Yg(n,a,s)}}function bl(t,e,n,i){me[Zi++]=t,me[Zi++]=e,me[Zi++]=n,me[Zi++]=i,Zf|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Qf(t,e,n,i){return bl(t,e,n,i),Ar(t)}function zi(t,e){return bl(t,null,null,e),Ar(t)}function Yg(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=t.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(a=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,a&&e!==null&&(a=31-ue(n),t=s.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),s):null}function Ar(t){if(50<ws)throw ws=0,Lu=null,Error(C(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Qi={};function Iv(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oe(t,e,n,i){return new Iv(t,e,n,i)}function Kf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sn(t,e){var n=t.alternate;return n===null?(n=oe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Xg(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Qo(t,e,n,i,a,s){var o=0;if(i=t,typeof t=="function")Kf(t)&&(o=1);else if(typeof t=="string")o=a4(t,n,Ge.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case iu:return t=oe(31,n,e,a),t.elementType=iu,t.lanes=s,t;case Ni:return ui(n.children,a,s,e);case ug:o=8,a|=24;break;case tu:return t=oe(12,n,e,a|2),t.elementType=tu,t.lanes=s,t;case eu:return t=oe(13,n,e,a),t.elementType=eu,t.lanes=s,t;case nu:return t=oe(19,n,e,a),t.elementType=nu,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case en:o=10;break t;case fg:o=9;break t;case kf:o=11;break t;case Vf:o=14;break t;case bn:o=16,i=null;break t}o=29,n=Error(C(130,t===null?"null":typeof t,"")),i=null}return e=oe(o,n,e,a),e.elementType=t,e.type=i,e.lanes=s,e}function ui(t,e,n,i){return t=oe(7,t,i,e),t.lanes=n,t}function tc(t,e,n){return t=oe(6,t,null,e),t.lanes=n,t}function Zg(t){var e=oe(18,null,null,0);return e.stateNode=t,e}function ec(t,e,n){return e=oe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Gh=new WeakMap;function ve(t,e){if(typeof t=="object"&&t!==null){var n=Gh.get(t);return n!==void 0?n:(e={value:t,source:e,stack:wh(e)},Gh.set(t,e),e)}return{value:t,source:e,stack:wh(e)}}var Ki=[],Fi=0,Cr=null,ks=0,ye=[],xe=0,Gn=null,Ne=1,Ue="";function Ie(t,e){Ki[Fi++]=ks,Ki[Fi++]=Cr,Cr=t,ks=e}function Qg(t,e,n){ye[xe++]=Ne,ye[xe++]=Ue,ye[xe++]=Gn,Gn=t;var i=Ne;t=Ue;var a=32-ue(i)-1;i&=~(1<<a),n+=1;var s=32-ue(e)+a;if(30<s){var o=a-a%5;s=(i&(1<<o)-1).toString(32),i>>=o,a-=o,Ne=1<<32-ue(e)+a|n<<a|i,Ue=s+t}else Ne=1<<s|n<<a|i,Ue=t}function Ff(t){t.return!==null&&(Ie(t,1),Qg(t,1,0))}function Pf(t){for(;t===Cr;)Cr=Ki[--Fi],Ki[Fi]=null,ks=Ki[--Fi],Ki[Fi]=null;for(;t===Gn;)Gn=ye[--xe],ye[xe]=null,Ue=ye[--xe],ye[xe]=null,Ne=ye[--xe],ye[xe]=null}function Kg(t,e){ye[xe++]=Ne,ye[xe++]=Ue,ye[xe++]=Gn,Ne=e.id,Ue=e.overflow,Gn=t}var Gt=null,lt=null,Z=!1,On=null,Se=!1,yu=Error(C(519));function qn(t){var e=Error(C(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vs(ve(e,t)),yu}function qh(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[Ht]=t,e[ne]=i,n){case"dialog":q("cancel",e),q("close",e);break;case"iframe":case"object":case"embed":q("load",e);break;case"video":case"audio":for(n=0;n<Ns.length;n++)q(Ns[n],e);break;case"source":q("error",e);break;case"img":case"image":case"link":q("error",e),q("load",e);break;case"details":q("toggle",e);break;case"input":q("invalid",e),jg(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":q("invalid",e);break;case"textarea":q("invalid",e),Cg(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||zy(e.textContent,n)?(i.popover!=null&&(q("beforetoggle",e),q("toggle",e)),i.onScroll!=null&&q("scroll",e),i.onScrollEnd!=null&&q("scrollend",e),i.onClick!=null&&(e.onclick=nn),e=!0):e=!1,e||qn(t,!0)}function Yh(t){for(Gt=t.return;Gt;)switch(Gt.tag){case 5:case 31:case 13:Se=!1;return;case 27:case 3:Se=!0;return;default:Gt=Gt.return}}function Ri(t){if(t!==Gt)return!1;if(!Z)return Yh(t),Z=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Gu(t.type,t.memoizedProps)),n=!n),n&&lt&&qn(t),Yh(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));lt=zp(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));lt=zp(t)}else e===27?(e=lt,Fn(t.type)?(t=Zu,Zu=null,lt=t):lt=e):lt=Gt?je(t.stateNode.nextSibling):null;return!0}function xi(){lt=Gt=null,Z=!1}function nc(){var t=On;return t!==null&&(te===null?te=t:te.push.apply(te,t),On=null),t}function Vs(t){On===null?On=[t]:On.push(t)}var xu=Xe(null),Di=null,an=null;function Sn(t,e,n){st(xu,e._currentValue),e._currentValue=n}function on(t){t._currentValue=xu.current,_t(xu)}function bu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function vu(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){var o=a.child;s=s.firstContext;t:for(;s!==null;){var r=s;s=a;for(var l=0;l<e.length;l++)if(r.context===e[l]){s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),bu(s.return,n,t),i||(o=null);break t}s=r.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(C(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),bu(o,n,t),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function $a(t,e,n,i){t=null;for(var a=e,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(C(387));if(o=o.memoizedProps,o!==null){var r=a.type;he(a.pendingProps.value,o.value)||(t!==null?t.push(r):t=[r])}}else if(a===br.current){if(o=a.alternate,o===null)throw Error(C(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Hs):t=[Hs])}a=a.return}t!==null&&vu(e,t,n,i),e.flags|=262144}function $r(t){for(t=t.firstContext;t!==null;){if(!he(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function bi(t){Di=t,an=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qt(t){return Fg(Di,t)}function jo(t,e){return Di===null&&bi(t),Fg(t,e)}function Fg(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},an===null){if(t===null)throw Error(C(308));an=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else an=an.next=e;return n}var t5=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},e5=Ot.unstable_scheduleCallback,n5=Ot.unstable_NormalPriority,Ct={$$typeof:en,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jf(){return{controller:new t5,data:new Map,refCount:0}}function ao(t){t.refCount--,t.refCount===0&&e5(n5,function(){t.controller.abort()})}var ps=null,Su=0,fa=0,ia=null;function i5(t,e){if(ps===null){var n=ps=[];Su=0,fa=wd(),ia={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Su++,e.then(Xh,Xh),e}function Xh(){if(--Su===0&&ps!==null){ia!==null&&(ia.status="fulfilled");var t=ps;ps=null,fa=0,ia=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function a5(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Zh=B.S;B.S=function(t,e){cy=le(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&i5(t,e),Zh!==null&&Zh(t,e)};var fi=Xe(null);function Wf(){var t=fi.current;return t!==null?t:at.pooledCache}function Ko(t,e){e===null?st(fi,fi.current):st(fi,e.pool)}function Pg(){var t=Wf();return t===null?null:{parent:Ct._currentValue,pool:t}}var Ea=Error(C(460)),If=Error(C(474)),vl=Error(C(542)),Er={then:function(){}};function Qh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jg(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(nn,nn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Fh(t),t;default:if(typeof e.status=="string")e.then(nn,nn);else{if(t=at,t!==null&&100<t.shellSuspendCounter)throw Error(C(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Fh(t),t}throw di=e,Ea}}function ii(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(di=n,Ea):n}}var di=null;function Kh(){if(di===null)throw Error(C(459));var t=di;return di=null,t}function Fh(t){if(t===Ea||t===vl)throw Error(C(483))}var aa=null,Bs=0;function Ao(t){var e=Bs;return Bs+=1,aa===null&&(aa=[]),Jg(aa,t,e)}function Ka(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Co(t,e){throw e.$$typeof===Y2?Error(C(525)):(t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Wg(t){function e(y,p){if(t){var x=y.deletions;x===null?(y.deletions=[p],y.flags|=16):x.push(p)}}function n(y,p){if(!t)return null;for(;p!==null;)e(y,p),p=p.sibling;return null}function i(y){for(var p=new Map;y!==null;)y.key!==null?p.set(y.key,y):p.set(y.index,y),y=y.sibling;return p}function a(y,p){return y=sn(y,p),y.index=0,y.sibling=null,y}function s(y,p,x){return y.index=x,t?(x=y.alternate,x!==null?(x=x.index,x<p?(y.flags|=67108866,p):x):(y.flags|=67108866,p)):(y.flags|=1048576,p)}function o(y){return t&&y.alternate===null&&(y.flags|=67108866),y}function r(y,p,x,v){return p===null||p.tag!==6?(p=tc(x,y.mode,v),p.return=y,p):(p=a(p,x),p.return=y,p)}function l(y,p,x,v){var T=x.type;return T===Ni?f(y,p,x.props.children,v,x.key):p!==null&&(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===bn&&ii(T)===p.type)?(p=a(p,x.props),Ka(p,x),p.return=y,p):(p=Qo(x.type,x.key,x.props,null,y.mode,v),Ka(p,x),p.return=y,p)}function u(y,p,x,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=ec(x,y.mode,v),p.return=y,p):(p=a(p,x.children||[]),p.return=y,p)}function f(y,p,x,v,T){return p===null||p.tag!==7?(p=ui(x,y.mode,v,T),p.return=y,p):(p=a(p,x),p.return=y,p)}function h(y,p,x){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=tc(""+p,y.mode,x),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xo:return x=Qo(p.type,p.key,p.props,null,y.mode,x),Ka(x,p),x.return=y,x;case es:return p=ec(p,y.mode,x),p.return=y,p;case bn:return p=ii(p),h(y,p,x)}if(ns(p)||Xa(p))return p=ui(p,y.mode,x,null),p.return=y,p;if(typeof p.then=="function")return h(y,Ao(p),x);if(p.$$typeof===en)return h(y,jo(y,p),x);Co(y,p)}return null}function d(y,p,x,v){var T=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return T!==null?null:r(y,p,""+x,v);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case xo:return x.key===T?l(y,p,x,v):null;case es:return x.key===T?u(y,p,x,v):null;case bn:return x=ii(x),d(y,p,x,v)}if(ns(x)||Xa(x))return T!==null?null:f(y,p,x,v,null);if(typeof x.then=="function")return d(y,p,Ao(x),v);if(x.$$typeof===en)return d(y,p,jo(y,x),v);Co(y,x)}return null}function m(y,p,x,v,T){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return y=y.get(x)||null,r(p,y,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xo:return y=y.get(v.key===null?x:v.key)||null,l(p,y,v,T);case es:return y=y.get(v.key===null?x:v.key)||null,u(p,y,v,T);case bn:return v=ii(v),m(y,p,x,v,T)}if(ns(v)||Xa(v))return y=y.get(x)||null,f(p,y,v,T,null);if(typeof v.then=="function")return m(y,p,x,Ao(v),T);if(v.$$typeof===en)return m(y,p,x,jo(p,v),T);Co(p,v)}return null}function b(y,p,x,v){for(var T=null,M=null,j=p,A=p=0,z=null;j!==null&&A<x.length;A++){j.index>A?(z=j,j=null):z=j.sibling;var E=d(y,j,x[A],v);if(E===null){j===null&&(j=z);break}t&&j&&E.alternate===null&&e(y,j),p=s(E,p,A),M===null?T=E:M.sibling=E,M=E,j=z}if(A===x.length)return n(y,j),Z&&Ie(y,A),T;if(j===null){for(;A<x.length;A++)j=h(y,x[A],v),j!==null&&(p=s(j,p,A),M===null?T=j:M.sibling=j,M=j);return Z&&Ie(y,A),T}for(j=i(j);A<x.length;A++)z=m(j,y,A,x[A],v),z!==null&&(t&&z.alternate!==null&&j.delete(z.key===null?A:z.key),p=s(z,p,A),M===null?T=z:M.sibling=z,M=z);return t&&j.forEach(function(V){return e(y,V)}),Z&&Ie(y,A),T}function S(y,p,x,v){if(x==null)throw Error(C(151));for(var T=null,M=null,j=p,A=p=0,z=null,E=x.next();j!==null&&!E.done;A++,E=x.next()){j.index>A?(z=j,j=null):z=j.sibling;var V=d(y,j,E.value,v);if(V===null){j===null&&(j=z);break}t&&j&&V.alternate===null&&e(y,j),p=s(V,p,A),M===null?T=V:M.sibling=V,M=V,j=z}if(E.done)return n(y,j),Z&&Ie(y,A),T;if(j===null){for(;!E.done;A++,E=x.next())E=h(y,E.value,v),E!==null&&(p=s(E,p,A),M===null?T=E:M.sibling=E,M=E);return Z&&Ie(y,A),T}for(j=i(j);!E.done;A++,E=x.next())E=m(j,y,A,E.value,v),E!==null&&(t&&E.alternate!==null&&j.delete(E.key===null?A:E.key),p=s(E,p,A),M===null?T=E:M.sibling=E,M=E);return t&&j.forEach(function(Q){return e(y,Q)}),Z&&Ie(y,A),T}function w(y,p,x,v){if(typeof x=="object"&&x!==null&&x.type===Ni&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case xo:t:{for(var T=x.key;p!==null;){if(p.key===T){if(T=x.type,T===Ni){if(p.tag===7){n(y,p.sibling),v=a(p,x.props.children),v.return=y,y=v;break t}}else if(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===bn&&ii(T)===p.type){n(y,p.sibling),v=a(p,x.props),Ka(v,x),v.return=y,y=v;break t}n(y,p);break}else e(y,p);p=p.sibling}x.type===Ni?(v=ui(x.props.children,y.mode,v,x.key),v.return=y,y=v):(v=Qo(x.type,x.key,x.props,null,y.mode,v),Ka(v,x),v.return=y,y=v)}return o(y);case es:t:{for(T=x.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){n(y,p.sibling),v=a(p,x.children||[]),v.return=y,y=v;break t}else{n(y,p);break}else e(y,p);p=p.sibling}v=ec(x,y.mode,v),v.return=y,y=v}return o(y);case bn:return x=ii(x),w(y,p,x,v)}if(ns(x))return b(y,p,x,v);if(Xa(x)){if(T=Xa(x),typeof T!="function")throw Error(C(150));return x=T.call(x),S(y,p,x,v)}if(typeof x.then=="function")return w(y,p,Ao(x),v);if(x.$$typeof===en)return w(y,p,jo(y,x),v);Co(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,p!==null&&p.tag===6?(n(y,p.sibling),v=a(p,x),v.return=y,y=v):(n(y,p),v=tc(x,y.mode,v),v.return=y,y=v),o(y)):n(y,p)}return function(y,p,x,v){try{Bs=0;var T=w(y,p,x,v);return aa=null,T}catch(j){if(j===Ea||j===vl)throw j;var M=oe(29,j,null,y.mode);return M.lanes=v,M.return=y,M}finally{}}}var vi=Wg(!0),Ig=Wg(!1),vn=!1;function td(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function kn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Vn(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,F&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=Ar(t),Yg(t,null,n),e}return bl(t,i,e,n),Ar(t)}function ms(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yg(t,n)}}function ic(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?a=s=e:s=s.next=e}else a=s=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Tu=!1;function gs(){if(Tu){var t=ia;if(t!==null)throw t}}function ys(t,e,n,i){Tu=!1;var a=t.updateQueue;vn=!1;var s=a.firstBaseUpdate,o=a.lastBaseUpdate,r=a.shared.pending;if(r!==null){a.shared.pending=null;var l=r,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,r=f.lastBaseUpdate,r!==o&&(r===null?f.firstBaseUpdate=u:r.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=a.baseState;o=0,f=u=l=null,r=s;do{var d=r.lane&-536870913,m=d!==r.lane;if(m?(X&d)===d:(i&d)===d){d!==0&&d===fa&&(Tu=!0),f!==null&&(f=f.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});t:{var b=t,S=r;d=e;var w=n;switch(S.tag){case 1:if(b=S.payload,typeof b=="function"){h=b.call(w,h,d);break t}h=b;break t;case 3:b.flags=b.flags&-65537|128;case 0:if(b=S.payload,d=typeof b=="function"?b.call(w,h,d):b,d==null)break t;h=ft({},h,d);break t;case 2:vn=!0}}d=r.callback,d!==null&&(t.flags|=64,m&&(t.flags|=8192),m=a.callbacks,m===null?a.callbacks=[d]:m.push(d))}else m={lane:d,tag:r.tag,payload:r.payload,callback:r.callback,next:null},f===null?(u=f=m,l=h):f=f.next=m,o|=d;if(r=r.next,r===null){if(r=a.shared.pending,r===null)break;m=r,r=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);f===null&&(l=h),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=f,s===null&&(a.shared.lanes=0),Xn|=o,t.lanes=o,t.memoizedState=h}}function t1(t,e){if(typeof t!="function")throw Error(C(191,t));t.call(e)}function e1(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)t1(n[t],e)}var da=Xe(null),Mr=Xe(0);function Ph(t,e){t=dn,st(Mr,t),st(da,e),dn=t|e.baseLanes}function ju(){st(Mr,dn),st(da,da.current)}function ed(){dn=Mr.current,_t(da),_t(Mr)}var pe=Xe(null),Te=null;function wn(t){var e=t.alternate;st(vt,vt.current&1),st(pe,t),Te===null&&(e===null||da.current!==null||e.memoizedState!==null)&&(Te=t)}function Au(t){st(vt,vt.current),st(pe,t),Te===null&&(Te=t)}function n1(t){t.tag===22?(st(vt,vt.current),st(pe,t),Te===null&&(Te=t)):Tn()}function Tn(){st(vt,vt.current),st(pe,pe.current)}function se(t){_t(pe),Te===t&&(Te=null),_t(vt)}var vt=Xe(0);function zr(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Yu(n)||Xu(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cn=0,U=null,et=null,jt=null,Dr=!1,sa=!1,Si=!1,Rr=0,Ls=0,oa=null,s5=0;function mt(){throw Error(C(321))}function nd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!he(t[n],e[n]))return!1;return!0}function id(t,e,n,i,a,s){return cn=s,U=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,B.H=t===null||t.memoizedState===null?O1:pd,Si=!1,s=n(i,a),Si=!1,sa&&(s=a1(e,n,i,a)),i1(t),s}function i1(t){B.H=_s;var e=et!==null&&et.next!==null;if(cn=0,jt=et=U=null,Dr=!1,Ls=0,oa=null,e)throw Error(C(300));t===null||Et||(t=t.dependencies,t!==null&&$r(t)&&(Et=!0))}function a1(t,e,n,i){U=t;var a=0;do{if(sa&&(oa=null),Ls=0,sa=!1,25<=a)throw Error(C(301));if(a+=1,jt=et=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}B.H=k1,s=e(n,i)}while(sa);return s}function o5(){var t=B.H,e=t.useState()[0];return e=typeof e.then=="function"?so(e):e,t=t.useState()[0],(et!==null?et.memoizedState:null)!==t&&(U.flags|=1024),e}function ad(){var t=Rr!==0;return Rr=0,t}function sd(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function od(t){if(Dr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Dr=!1}cn=0,jt=et=U=null,sa=!1,Ls=Rr=0,oa=null}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?U.memoizedState=jt=t:jt=jt.next=t,jt}function St(){if(et===null){var t=U.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=jt===null?U.memoizedState:jt.next;if(e!==null)jt=e,et=t;else{if(t===null)throw U.alternate===null?Error(C(467)):Error(C(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},jt===null?U.memoizedState=jt=t:jt=jt.next=t}return jt}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(t){var e=Ls;return Ls+=1,oa===null&&(oa=[]),t=Jg(oa,t,e),e=U,(jt===null?e.memoizedState:jt.next)===null&&(e=e.alternate,B.H=e===null||e.memoizedState===null?O1:pd),t}function wl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return so(t);if(t.$$typeof===en)return qt(t)}throw Error(C(438,String(t)))}function rd(t){var e=null,n=U.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=U.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Sl(),U.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=X2;return e.index++,n}function un(t,e){return typeof e=="function"?e(t):e}function Fo(t){var e=St();return ld(e,et,t)}function ld(t,e,n){var i=t.queue;if(i===null)throw Error(C(311));i.lastRenderedReducer=n;var a=t.baseQueue,s=i.pending;if(s!==null){if(a!==null){var o=a.next;a.next=s.next,s.next=o}e.baseQueue=a=s,i.pending=null}if(s=t.baseState,a===null)t.memoizedState=s;else{e=a.next;var r=o=null,l=null,u=e,f=!1;do{var h=u.lane&-536870913;if(h!==u.lane?(X&h)===h:(cn&h)===h){var d=u.revertLane;if(d===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),h===fa&&(f=!0);else if((cn&d)===d){u=u.next,d===fa&&(f=!0);continue}else h={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(r=l=h,o=s):l=l.next=h,U.lanes|=d,Xn|=d;h=u.action,Si&&n(s,h),s=u.hasEagerState?u.eagerState:n(s,h)}else d={lane:h,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(r=l=d,o=s):l=l.next=d,U.lanes|=h,Xn|=h;u=u.next}while(u!==null&&u!==e);if(l===null?o=s:l.next=r,!he(s,t.memoizedState)&&(Et=!0,f&&(n=ia,n!==null)))throw n;t.memoizedState=s,t.baseState=o,t.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function ac(t){var e=St(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,s=e.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do s=t(s,o.action),o=o.next;while(o!==a);he(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function s1(t,e,n){var i=U,a=St(),s=Z;if(s){if(n===void 0)throw Error(C(407));n=n()}else n=e();var o=!he((et||a).memoizedState,n);if(o&&(a.memoizedState=n,Et=!0),a=a.queue,cd(l1.bind(null,i,a,t),[t]),a.getSnapshot!==e||o||jt!==null&&jt.memoizedState.tag&1){if(i.flags|=2048,ha(9,{destroy:void 0},r1.bind(null,i,a,n,e),null),at===null)throw Error(C(349));s||cn&127||o1(i,e,n)}return n}function o1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=U.updateQueue,e===null?(e=Sl(),U.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function r1(t,e,n,i){e.value=n,e.getSnapshot=i,c1(e)&&u1(t)}function l1(t,e,n){return n(function(){c1(e)&&u1(t)})}function c1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!he(t,n)}catch{return!0}}function u1(t){var e=zi(t,2);e!==null&&ee(e,t,2)}function Cu(t){var e=Zt();if(typeof t=="function"){var n=t;if(t=n(),Si){An(!0);try{n()}finally{An(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:t},e}function f1(t,e,n,i){return t.baseState=n,ld(t,et,typeof i=="function"?i:un)}function r5(t,e,n,i,a){if(jl(t))throw Error(C(485));if(t=e.action,t!==null){var s={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){s.listeners.push(o)}};B.T!==null?n(!0):s.isTransition=!1,i(s),n=e.pending,n===null?(s.next=e.pending=s,d1(e,s)):(s.next=n.next,e.pending=n.next=s)}}function d1(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var s=B.T,o={};B.T=o;try{var r=n(a,i),l=B.S;l!==null&&l(o,r),Jh(t,e,r)}catch(u){$u(t,e,u)}finally{s!==null&&o.types!==null&&(s.types=o.types),B.T=s}}else try{s=n(a,i),Jh(t,e,s)}catch(u){$u(t,e,u)}}function Jh(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Wh(t,e,i)},function(i){return $u(t,e,i)}):Wh(t,e,n)}function Wh(t,e,n){e.status="fulfilled",e.value=n,h1(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,d1(t,n)))}function $u(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,h1(e),e=e.next;while(e!==i)}t.action=null}function h1(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function p1(t,e){return e}function Ih(t,e){if(Z){var n=at.formState;if(n!==null){t:{var i=U;if(Z){if(lt){e:{for(var a=lt,s=Se;a.nodeType!==8;){if(!s){a=null;break e}if(a=je(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){lt=je(a.nextSibling),i=a.data==="F!";break t}}qn(i)}i=!1}i&&(e=n[0])}}return n=Zt(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:p1,lastRenderedState:e},n.queue=i,n=z1.bind(null,U,i),i.dispatch=n,i=Cu(!1),s=hd.bind(null,U,!1,i.queue),i=Zt(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=r5.bind(null,U,a,s,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function tp(t){var e=St();return m1(e,et,t)}function m1(t,e,n){if(e=ld(t,e,p1)[0],t=Fo(un)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=so(e)}catch(o){throw o===Ea?vl:o}else i=e;e=St();var a=e.queue,s=a.dispatch;return n!==e.memoizedState&&(U.flags|=2048,ha(9,{destroy:void 0},l5.bind(null,a,n),null)),[i,s,t]}function l5(t,e){t.action=e}function ep(t){var e=St(),n=et;if(n!==null)return m1(e,n,t);St(),e=e.memoizedState,n=St();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function ha(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=U.updateQueue,e===null&&(e=Sl(),U.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function g1(){return St().memoizedState}function Po(t,e,n,i){var a=Zt();U.flags|=t,a.memoizedState=ha(1|e,{destroy:void 0},n,i===void 0?null:i)}function Tl(t,e,n,i){var a=St();i=i===void 0?null:i;var s=a.memoizedState.inst;et!==null&&i!==null&&nd(i,et.memoizedState.deps)?a.memoizedState=ha(e,s,n,i):(U.flags|=t,a.memoizedState=ha(1|e,s,n,i))}function np(t,e){Po(8390656,8,t,e)}function cd(t,e){Tl(2048,8,t,e)}function c5(t){U.flags|=4;var e=U.updateQueue;if(e===null)e=Sl(),U.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function y1(t){var e=St().memoizedState;return c5({ref:e,nextImpl:t}),function(){if(F&2)throw Error(C(440));return e.impl.apply(void 0,arguments)}}function x1(t,e){return Tl(4,2,t,e)}function b1(t,e){return Tl(4,4,t,e)}function v1(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function S1(t,e,n){n=n!=null?n.concat([t]):null,Tl(4,4,v1.bind(null,e,t),n)}function ud(){}function w1(t,e){var n=St();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&nd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function T1(t,e){var n=St();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&nd(e,i[1]))return i[0];if(i=t(),Si){An(!0);try{t()}finally{An(!1)}}return n.memoizedState=[i,e],i}function fd(t,e,n){return n===void 0||cn&1073741824&&!(X&261930)?t.memoizedState=e:(t.memoizedState=n,t=fy(),U.lanes|=t,Xn|=t,n)}function j1(t,e,n,i){return he(n,e)?n:da.current!==null?(t=fd(t,n,i),he(t,e)||(Et=!0),t):!(cn&42)||cn&1073741824&&!(X&261930)?(Et=!0,t.memoizedState=n):(t=fy(),U.lanes|=t,Xn|=t,e)}function A1(t,e,n,i,a){var s=P.p;P.p=s!==0&&8>s?s:8;var o=B.T,r={};B.T=r,hd(t,!1,e,n);try{var l=a(),u=B.S;if(u!==null&&u(r,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=a5(l,i);xs(t,e,f,fe(t))}else xs(t,e,i,fe(t))}catch(h){xs(t,e,{then:function(){},status:"rejected",reason:h},fe())}finally{P.p=s,o!==null&&r.types!==null&&(o.types=r.types),B.T=o}}function u5(){}function Eu(t,e,n,i){if(t.tag!==5)throw Error(C(476));var a=C1(t).queue;A1(t,a,e,ci,n===null?u5:function(){return $1(t),n(i)})}function C1(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ci,baseState:ci,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:ci},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function $1(t){var e=C1(t);e.next===null&&(e=t.alternate.memoizedState),xs(t,e.next.queue,{},fe())}function dd(){return qt(Hs)}function E1(){return St().memoizedState}function M1(){return St().memoizedState}function f5(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=fe();t=kn(n);var i=Vn(e,t,n);i!==null&&(ee(i,e,n),ms(i,e,n)),e={cache:Jf()},t.payload=e;return}e=e.return}}function d5(t,e,n){var i=fe();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},jl(t)?D1(e,n):(n=Qf(t,e,n,i),n!==null&&(ee(n,t,i),R1(n,e,i)))}function z1(t,e,n){var i=fe();xs(t,e,n,i)}function xs(t,e,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(jl(t))D1(e,a);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,r=s(o,n);if(a.hasEagerState=!0,a.eagerState=r,he(r,o))return bl(t,e,a,0),at===null&&xl(),!1}catch{}finally{}if(n=Qf(t,e,a,i),n!==null)return ee(n,t,i),R1(n,e,i),!0}return!1}function hd(t,e,n,i){if(i={lane:2,revertLane:wd(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},jl(t)){if(e)throw Error(C(479))}else e=Qf(t,n,i,2),e!==null&&ee(e,t,2)}function jl(t){var e=t.alternate;return t===U||e!==null&&e===U}function D1(t,e){sa=Dr=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function R1(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yg(t,n)}}var _s={readContext:qt,use:wl,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useLayoutEffect:mt,useInsertionEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useSyncExternalStore:mt,useId:mt,useHostTransitionStatus:mt,useFormState:mt,useActionState:mt,useOptimistic:mt,useMemoCache:mt,useCacheRefresh:mt};_s.useEffectEvent=mt;var O1={readContext:qt,use:wl,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:qt,useEffect:np,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Po(4194308,4,v1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Po(4194308,4,t,e)},useInsertionEffect:function(t,e){Po(4,2,t,e)},useMemo:function(t,e){var n=Zt();e=e===void 0?null:e;var i=t();if(Si){An(!0);try{t()}finally{An(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=Zt();if(n!==void 0){var a=n(e);if(Si){An(!0);try{n(e)}finally{An(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=d5.bind(null,U,t),[i.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:function(t){t=Cu(t);var e=t.queue,n=z1.bind(null,U,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:ud,useDeferredValue:function(t,e){var n=Zt();return fd(n,t,e)},useTransition:function(){var t=Cu(!1);return t=A1.bind(null,U,t.queue,!0,!1),Zt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=U,a=Zt();if(Z){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),at===null)throw Error(C(349));X&127||o1(i,e,n)}a.memoizedState=n;var s={value:n,getSnapshot:e};return a.queue=s,np(l1.bind(null,i,s,t),[t]),i.flags|=2048,ha(9,{destroy:void 0},r1.bind(null,i,s,n,e),null),n},useId:function(){var t=Zt(),e=at.identifierPrefix;if(Z){var n=Ue,i=Ne;n=(i&~(1<<32-ue(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Rr++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=s5++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:dd,useFormState:Ih,useActionState:Ih,useOptimistic:function(t){var e=Zt();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=hd.bind(null,U,!0,n),n.dispatch=e,[t,e]},useMemoCache:rd,useCacheRefresh:function(){return Zt().memoizedState=f5.bind(null,U)},useEffectEvent:function(t){var e=Zt(),n={impl:t};return e.memoizedState=n,function(){if(F&2)throw Error(C(440));return n.impl.apply(void 0,arguments)}}},pd={readContext:qt,use:wl,useCallback:w1,useContext:qt,useEffect:cd,useImperativeHandle:S1,useInsertionEffect:x1,useLayoutEffect:b1,useMemo:T1,useReducer:Fo,useRef:g1,useState:function(){return Fo(un)},useDebugValue:ud,useDeferredValue:function(t,e){var n=St();return j1(n,et.memoizedState,t,e)},useTransition:function(){var t=Fo(un)[0],e=St().memoizedState;return[typeof t=="boolean"?t:so(t),e]},useSyncExternalStore:s1,useId:E1,useHostTransitionStatus:dd,useFormState:tp,useActionState:tp,useOptimistic:function(t,e){var n=St();return f1(n,et,t,e)},useMemoCache:rd,useCacheRefresh:M1};pd.useEffectEvent=y1;var k1={readContext:qt,use:wl,useCallback:w1,useContext:qt,useEffect:cd,useImperativeHandle:S1,useInsertionEffect:x1,useLayoutEffect:b1,useMemo:T1,useReducer:ac,useRef:g1,useState:function(){return ac(un)},useDebugValue:ud,useDeferredValue:function(t,e){var n=St();return et===null?fd(n,t,e):j1(n,et.memoizedState,t,e)},useTransition:function(){var t=ac(un)[0],e=St().memoizedState;return[typeof t=="boolean"?t:so(t),e]},useSyncExternalStore:s1,useId:E1,useHostTransitionStatus:dd,useFormState:ep,useActionState:ep,useOptimistic:function(t,e){var n=St();return et!==null?f1(n,et,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:rd,useCacheRefresh:M1};k1.useEffectEvent=y1;function sc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mu={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fe(),a=kn(i);a.payload=e,n!=null&&(a.callback=n),e=Vn(t,a,i),e!==null&&(ee(e,t,i),ms(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fe(),a=kn(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Vn(t,a,i),e!==null&&(ee(e,t,i),ms(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fe(),i=kn(n);i.tag=2,e!=null&&(i.callback=e),e=Vn(t,i,n),e!==null&&(ee(e,t,n),ms(e,t,n))}};function ip(t,e,n,i,a,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Os(n,i)||!Os(a,s):!0}function ap(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Mu.enqueueReplaceState(e,e.state,null)}function wi(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=ft({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function V1(t){jr(t)}function B1(t){console.error(t)}function L1(t){jr(t)}function Or(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function sp(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function zu(t,e,n){return n=kn(n),n.tag=3,n.payload={element:null},n.callback=function(){Or(t,e)},n}function _1(t){return t=kn(t),t.tag=3,t}function N1(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;t.payload=function(){return a(s)},t.callback=function(){sp(e,n,i)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){sp(e,n,i),typeof a!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var r=i.stack;this.componentDidCatch(i.value,{componentStack:r!==null?r:""})})}function h5(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&$a(e,n,a,!0),n=pe.current,n!==null){switch(n.tag){case 31:case 13:return Te===null?_r():n.alternate===null&&yt===0&&(yt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Er?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),gc(t,i,a)),!1;case 22:return n.flags|=65536,i===Er?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),gc(t,i,a)),!1}throw Error(C(435,n.tag))}return gc(t,i,a),_r(),!1}if(Z)return e=pe.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==yu&&(t=Error(C(422),{cause:i}),Vs(ve(t,n)))):(i!==yu&&(e=Error(C(423),{cause:i}),Vs(ve(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=ve(i,n),a=zu(t.stateNode,i,a),ic(t,a),yt!==4&&(yt=2)),!1;var s=Error(C(520),{cause:i});if(s=ve(s,n),Ss===null?Ss=[s]:Ss.push(s),yt!==4&&(yt=2),e===null)return!0;i=ve(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=zu(n.stateNode,i,t),ic(n,t),!1;case 1:if(e=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Bn===null||!Bn.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=_1(a),N1(a,t,n,i),ic(n,a),!1}n=n.return}while(n!==null);return!1}var md=Error(C(461)),Et=!1;function Ut(t,e,n,i){e.child=t===null?Ig(e,null,n,i):vi(e,t.child,n,i)}function op(t,e,n,i,a){n=n.render;var s=e.ref;if("ref"in i){var o={};for(var r in i)r!=="ref"&&(o[r]=i[r])}else o=i;return bi(e),i=id(t,e,n,o,s,a),r=ad(),t!==null&&!Et?(sd(t,e,a),fn(t,e,a)):(Z&&r&&Ff(e),e.flags|=1,Ut(t,e,i,a),e.child)}function rp(t,e,n,i,a){if(t===null){var s=n.type;return typeof s=="function"&&!Kf(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,U1(t,e,s,i,a)):(t=Qo(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!gd(t,a)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Os,n(o,i)&&t.ref===e.ref)return fn(t,e,a)}return e.flags|=1,t=sn(s,i),t.ref=e.ref,t.return=e,e.child=t}function U1(t,e,n,i,a){if(t!==null){var s=t.memoizedProps;if(Os(s,i)&&t.ref===e.ref)if(Et=!1,e.pendingProps=i=s,gd(t,a))t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,fn(t,e,a)}return Du(t,e,n,i,a)}function H1(t,e,n,i){var a=i.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(s=s!==null?s.baseLanes|n:n,t!==null){for(i=e.child=t.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,e.child=null;return lp(t,e,s,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ko(e,s!==null?s.cachePool:null),s!==null?Ph(e,s):ju(),n1(e);else return i=e.lanes=536870912,lp(t,e,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Ko(e,s.cachePool),Ph(e,s),Tn(),e.memoizedState=null):(t!==null&&Ko(e,null),ju(),Tn());return Ut(t,e,a,n),e.child}function as(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function lp(t,e,n,i,a){var s=Wf();return s=s===null?null:{parent:Ct._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&Ko(e,null),ju(),n1(e),t!==null&&$a(t,e,i,!0),e.childLanes=a,null}function Jo(t,e){return e=kr({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function cp(t,e,n){return vi(e,t.child,null,n),t=Jo(e,e.pendingProps),t.flags|=2,se(e),e.memoizedState=null,t}function p5(t,e,n){var i=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Z){if(i.mode==="hidden")return t=Jo(e,i),e.lanes=536870912,as(null,t);if(Au(e),(t=lt)?(t=Oy(t,Se),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Gn!==null?{id:Ne,overflow:Ue}:null,retryLane:536870912,hydrationErrors:null},n=Zg(t),n.return=e,e.child=n,Gt=e,lt=null)):t=null,t===null)throw qn(e);return e.lanes=536870912,null}return Jo(e,i)}var s=t.memoizedState;if(s!==null){var o=s.dehydrated;if(Au(e),a)if(e.flags&256)e.flags&=-257,e=cp(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(C(558));else if(Et||$a(t,e,n,!1),a=(n&t.childLanes)!==0,Et||a){if(i=at,i!==null&&(o=xg(i,n),o!==0&&o!==s.retryLane))throw s.retryLane=o,zi(t,o),ee(i,t,o),md;_r(),e=cp(t,e,n)}else t=s.treeContext,lt=je(o.nextSibling),Gt=e,Z=!0,On=null,Se=!1,t!==null&&Kg(e,t),e=Jo(e,i),e.flags|=4096;return e}return t=sn(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Wo(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(C(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Du(t,e,n,i,a){return bi(e),n=id(t,e,n,i,void 0,a),i=ad(),t!==null&&!Et?(sd(t,e,a),fn(t,e,a)):(Z&&i&&Ff(e),e.flags|=1,Ut(t,e,n,a),e.child)}function up(t,e,n,i,a,s){return bi(e),e.updateQueue=null,n=a1(e,i,n,a),i1(t),i=ad(),t!==null&&!Et?(sd(t,e,s),fn(t,e,s)):(Z&&i&&Ff(e),e.flags|=1,Ut(t,e,n,s),e.child)}function fp(t,e,n,i,a){if(bi(e),e.stateNode===null){var s=Qi,o=n.contextType;typeof o=="object"&&o!==null&&(s=qt(o)),s=new n(i,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Mu,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=i,s.state=e.memoizedState,s.refs={},td(e),o=n.contextType,s.context=typeof o=="object"&&o!==null?qt(o):Qi,s.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(sc(e,n,o,i),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(o=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),o!==s.state&&Mu.enqueueReplaceState(s,s.state,null),ys(e,i,s,a),gs(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){s=e.stateNode;var r=e.memoizedProps,l=wi(n,r);s.props=l;var u=s.context,f=n.contextType;o=Qi,typeof f=="object"&&f!==null&&(o=qt(f));var h=n.getDerivedStateFromProps;f=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function",r=e.pendingProps!==r,f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r||u!==o)&&ap(e,s,i,o),vn=!1;var d=e.memoizedState;s.state=d,ys(e,i,s,a),gs(),u=e.memoizedState,r||d!==u||vn?(typeof h=="function"&&(sc(e,n,h,i),u=e.memoizedState),(l=vn||ip(e,n,l,i,d,u,o))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),s.props=i,s.state=u,s.context=o,i=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,wu(t,e),o=e.memoizedProps,f=wi(n,o),s.props=f,h=e.pendingProps,d=s.context,u=n.contextType,l=Qi,typeof u=="object"&&u!==null&&(l=qt(u)),r=n.getDerivedStateFromProps,(u=typeof r=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==h||d!==l)&&ap(e,s,i,l),vn=!1,d=e.memoizedState,s.state=d,ys(e,i,s,a),gs();var m=e.memoizedState;o!==h||d!==m||vn||t!==null&&t.dependencies!==null&&$r(t.dependencies)?(typeof r=="function"&&(sc(e,n,r,i),m=e.memoizedState),(f=vn||ip(e,n,f,i,d,m,l)||t!==null&&t.dependencies!==null&&$r(t.dependencies))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,m,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),s.props=i,s.state=m,s.context=l,i=f):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return s=i,Wo(t,e),i=(e.flags&128)!==0,s||i?(s=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&i?(e.child=vi(e,t.child,null,a),e.child=vi(e,null,n,a)):Ut(t,e,n,a),e.memoizedState=s.state,t=e.child):t=fn(t,e,a),t}function dp(t,e,n,i){return xi(),e.flags|=256,Ut(t,e,n,i),e.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rc(t){return{baseLanes:t,cachePool:Pg()}}function lc(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=re),t}function G1(t,e,n){var i=e.pendingProps,a=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(vt.current&2)!==0),o&&(a=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,t===null){if(Z){if(a?wn(e):Tn(),(t=lt)?(t=Oy(t,Se),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Gn!==null?{id:Ne,overflow:Ue}:null,retryLane:536870912,hydrationErrors:null},n=Zg(t),n.return=e,e.child=n,Gt=e,lt=null)):t=null,t===null)throw qn(e);return Xu(t)?e.lanes=32:e.lanes=536870912,null}var r=i.children;return i=i.fallback,a?(Tn(),a=e.mode,r=kr({mode:"hidden",children:r},a),i=ui(i,a,n,null),r.return=e,i.return=e,r.sibling=i,e.child=r,i=e.child,i.memoizedState=rc(n),i.childLanes=lc(t,o,n),e.memoizedState=oc,as(null,i)):(wn(e),Ru(e,r))}var l=t.memoizedState;if(l!==null&&(r=l.dehydrated,r!==null)){if(s)e.flags&256?(wn(e),e.flags&=-257,e=cc(t,e,n)):e.memoizedState!==null?(Tn(),e.child=t.child,e.flags|=128,e=null):(Tn(),r=i.fallback,a=e.mode,i=kr({mode:"visible",children:i.children},a),r=ui(r,a,n,null),r.flags|=2,i.return=e,r.return=e,i.sibling=r,e.child=i,vi(e,t.child,null,n),i=e.child,i.memoizedState=rc(n),i.childLanes=lc(t,o,n),e.memoizedState=oc,e=as(null,i));else if(wn(e),Xu(r)){if(o=r.nextSibling&&r.nextSibling.dataset,o)var u=o.dgst;o=u,i=Error(C(419)),i.stack="",i.digest=o,Vs({value:i,source:null,stack:null}),e=cc(t,e,n)}else if(Et||$a(t,e,n,!1),o=(n&t.childLanes)!==0,Et||o){if(o=at,o!==null&&(i=xg(o,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,zi(t,i),ee(o,t,i),md;Yu(r)||_r(),e=cc(t,e,n)}else Yu(r)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,lt=je(r.nextSibling),Gt=e,Z=!0,On=null,Se=!1,t!==null&&Kg(e,t),e=Ru(e,i.children),e.flags|=4096);return e}return a?(Tn(),r=i.fallback,a=e.mode,l=t.child,u=l.sibling,i=sn(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,u!==null?r=sn(u,r):(r=ui(r,a,n,null),r.flags|=2),r.return=e,i.return=e,i.sibling=r,e.child=i,as(null,i),i=e.child,r=t.child.memoizedState,r===null?r=rc(n):(a=r.cachePool,a!==null?(l=Ct._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=Pg(),r={baseLanes:r.baseLanes|n,cachePool:a}),i.memoizedState=r,i.childLanes=lc(t,o,n),e.memoizedState=oc,as(t.child,i)):(wn(e),n=t.child,t=n.sibling,n=sn(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(o=e.deletions,o===null?(e.deletions=[t],e.flags|=16):o.push(t)),e.child=n,e.memoizedState=null,n)}function Ru(t,e){return e=kr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function kr(t,e){return t=oe(22,t,null,e),t.lanes=0,t}function cc(t,e,n){return vi(e,t.child,null,n),t=Ru(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),bu(t.return,e,n)}function uc(t,e,n,i,a,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=a,o.treeForkCount=s)}function q1(t,e,n){var i=e.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var o=vt.current,r=(o&2)!==0;if(r?(o=o&1|2,e.flags|=128):o&=1,st(vt,o),Ut(t,e,i,n),i=Z?ks:0,!r&&t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hp(t,n,e);else if(t.tag===19)hp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&zr(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),uc(e,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&zr(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}uc(e,!0,n,null,s,i);break;case"together":uc(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xn|=e.lanes,!(n&e.childLanes))if(t!==null){if($a(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=sn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gd(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&$r(t)))}function m5(t,e,n){switch(e.tag){case 3:vr(e,e.stateNode.containerInfo),Sn(e,Ct,t.memoizedState.cache),xi();break;case 27:case 5:ou(e);break;case 4:vr(e,e.stateNode.containerInfo);break;case 10:Sn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Au(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(wn(e),e.flags|=128,null):n&e.child.childLanes?G1(t,e,n):(wn(e),t=fn(t,e,n),t!==null?t.sibling:null);wn(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||($a(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return q1(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),st(vt,vt.current),i)break;return null;case 22:return e.lanes=0,H1(t,e,n,e.pendingProps);case 24:Sn(e,Ct,t.memoizedState.cache)}return fn(t,e,n)}function Y1(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Et=!0;else{if(!gd(t,n)&&!(e.flags&128))return Et=!1,m5(t,e,n);Et=!!(t.flags&131072)}else Et=!1,Z&&e.flags&1048576&&Qg(e,ks,e.index);switch(e.lanes=0,e.tag){case 16:t:{var i=e.pendingProps;if(t=ii(e.elementType),e.type=t,typeof t=="function")Kf(t)?(i=wi(t,i),e.tag=1,e=fp(null,e,t,i,n)):(e.tag=0,e=Du(null,e,t,i,n));else{if(t!=null){var a=t.$$typeof;if(a===kf){e.tag=11,e=op(null,e,t,i,n);break t}else if(a===Vf){e.tag=14,e=rp(null,e,t,i,n);break t}}throw e=au(t)||t,Error(C(306,e,""))}}return e;case 0:return Du(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=wi(i,e.pendingProps),fp(t,e,i,a,n);case 3:t:{if(vr(e,e.stateNode.containerInfo),t===null)throw Error(C(387));i=e.pendingProps;var s=e.memoizedState;a=s.element,wu(t,e),ys(e,i,null,n);var o=e.memoizedState;if(i=o.cache,Sn(e,Ct,i),i!==s.cache&&vu(e,[Ct],n,!0),gs(),i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=dp(t,e,i,n);break t}else if(i!==a){a=ve(Error(C(424)),e),Vs(a),e=dp(t,e,i,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(lt=je(t.firstChild),Gt=e,Z=!0,On=null,Se=!0,n=Ig(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(xi(),i===a){e=fn(t,e,n);break t}Ut(t,e,i,n)}e=e.child}return e;case 26:return Wo(t,e),t===null?(n=Op(e.type,null,e.pendingProps,null))?e.memoizedState=n:Z||(n=e.type,t=e.pendingProps,i=Gr(Rn.current).createElement(n),i[Ht]=e,i[ne]=t,Xt(i,n,t),Lt(i),e.stateNode=i):e.memoizedState=Op(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ou(e),t===null&&Z&&(i=e.stateNode=ky(e.type,e.pendingProps,Rn.current),Gt=e,Se=!0,a=lt,Fn(e.type)?(Zu=a,lt=je(i.firstChild)):lt=a),Ut(t,e,e.pendingProps.children,n),Wo(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Z&&((a=i=lt)&&(i=X5(i,e.type,e.pendingProps,Se),i!==null?(e.stateNode=i,Gt=e,lt=je(i.firstChild),Se=!1,a=!0):a=!1),a||qn(e)),ou(e),a=e.type,s=e.pendingProps,o=t!==null?t.memoizedProps:null,i=s.children,Gu(a,s)?i=null:o!==null&&Gu(a,o)&&(e.flags|=32),e.memoizedState!==null&&(a=id(t,e,o5,null,null,n),Hs._currentValue=a),Wo(t,e),Ut(t,e,i,n),e.child;case 6:return t===null&&Z&&((t=n=lt)&&(n=Z5(n,e.pendingProps,Se),n!==null?(e.stateNode=n,Gt=e,lt=null,t=!0):t=!1),t||qn(e)),null;case 13:return G1(t,e,n);case 4:return vr(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=vi(e,null,i,n):Ut(t,e,i,n),e.child;case 11:return op(t,e,e.type,e.pendingProps,n);case 7:return Ut(t,e,e.pendingProps,n),e.child;case 8:return Ut(t,e,e.pendingProps.children,n),e.child;case 12:return Ut(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,Sn(e,e.type,i.value),Ut(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,bi(e),a=qt(a),i=i(a),e.flags|=1,Ut(t,e,i,n),e.child;case 14:return rp(t,e,e.type,e.pendingProps,n);case 15:return U1(t,e,e.type,e.pendingProps,n);case 19:return q1(t,e,n);case 31:return p5(t,e,n);case 22:return H1(t,e,n,e.pendingProps);case 24:return bi(e),i=qt(Ct),t===null?(a=Wf(),a===null&&(a=at,s=Jf(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),e.memoizedState={parent:i,cache:a},td(e),Sn(e,Ct,a)):(t.lanes&n&&(wu(t,e),ys(e,null,null,n),gs()),a=t.memoizedState,s=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),Sn(e,Ct,i)):(i=s.cache,Sn(e,Ct,i),i!==a.cache&&vu(e,[Ct],n,!0))),Ut(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(C(156,e.tag))}function Ke(t){t.flags|=4}function fc(t,e,n,i,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(py())t.flags|=8192;else throw di=Er,If}else t.flags&=-16777217}function pp(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Ly(e))if(py())t.flags|=8192;else throw di=Er,If}function $o(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?mg():536870912,t.lanes|=e,pa|=e)}function Fa(t,e){if(!Z)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function g5(t,e,n){var i=e.pendingProps;switch(Pf(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return ot(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),on(Ct),la(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Ri(e)?Ke(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,nc())),ot(e),null;case 26:var a=e.type,s=e.memoizedState;return t===null?(Ke(e),s!==null?(ot(e),pp(e,s)):(ot(e),fc(e,a,null,i,n))):s?s!==t.memoizedState?(Ke(e),ot(e),pp(e,s)):(ot(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Ke(e),ot(e),fc(e,a,t,i,n)),null;case 27:if(Sr(e),n=Rn.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ke(e);else{if(!i){if(e.stateNode===null)throw Error(C(166));return ot(e),null}t=Ge.current,Ri(e)?qh(e):(t=ky(a,i,n),e.stateNode=t,Ke(e))}return ot(e),null;case 5:if(Sr(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ke(e);else{if(!i){if(e.stateNode===null)throw Error(C(166));return ot(e),null}if(s=Ge.current,Ri(e))qh(e);else{var o=Gr(Rn.current);switch(s){case 1:s=o.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=o.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=o.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?o.createElement(a,{is:i.is}):o.createElement(a)}}s[Ht]=e,s[ne]=i;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)s.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=s;t:switch(Xt(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ke(e)}}return ot(e),fc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Ke(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(C(166));if(t=Rn.current,Ri(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=Gt,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[Ht]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||zy(t.nodeValue,n)),t||qn(e,!0)}else t=Gr(t).createTextNode(i),t[Ht]=e,e.stateNode=t}return ot(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=Ri(e),n!==null){if(t===null){if(!i)throw Error(C(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(557));t[Ht]=e}else xi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),t=!1}else n=nc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(se(e),e):(se(e),null);if(e.flags&128)throw Error(C(558))}return ot(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Ri(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(C(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(C(317));a[Ht]=e}else xi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),a=!1}else a=nc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(se(e),e):(se(e),null)}return se(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),$o(e,e.updateQueue),ot(e),null);case 4:return la(),t===null&&Td(e.stateNode.containerInfo),ot(e),null;case 10:return on(e.type),ot(e),null;case 19:if(_t(vt),i=e.memoizedState,i===null)return ot(e),null;if(a=(e.flags&128)!==0,s=i.rendering,s===null)if(a)Fa(i,!1);else{if(yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=zr(t),s!==null){for(e.flags|=128,Fa(i,!1),t=s.updateQueue,e.updateQueue=t,$o(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Xg(n,t),n=n.sibling;return st(vt,vt.current&1|2),Z&&Ie(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&le()>Br&&(e.flags|=128,a=!0,Fa(i,!1),e.lanes=4194304)}else{if(!a)if(t=zr(s),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,$o(e,t),Fa(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Z)return ot(e),null}else 2*le()-i.renderingStartTime>Br&&n!==536870912&&(e.flags|=128,a=!0,Fa(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(t=i.last,t!==null?t.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=le(),t.sibling=null,n=vt.current,st(vt,a?n&1|2:n&1),Z&&Ie(e,i.treeForkCount),t):(ot(e),null);case 22:case 23:return se(e),ed(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),n=e.updateQueue,n!==null&&$o(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&_t(fi),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),on(Ct),ot(e),null;case 25:return null;case 30:return null}throw Error(C(156,e.tag))}function y5(t,e){switch(Pf(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return on(Ct),la(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Sr(e),null;case 31:if(e.memoizedState!==null){if(se(e),e.alternate===null)throw Error(C(340));xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(se(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(vt),null;case 4:return la(),null;case 10:return on(e.type),null;case 22:case 23:return se(e),ed(),t!==null&&_t(fi),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return on(Ct),null;case 25:return null;default:return null}}function X1(t,e){switch(Pf(e),e.tag){case 3:on(Ct),la();break;case 26:case 27:case 5:Sr(e);break;case 4:la();break;case 31:e.memoizedState!==null&&se(e);break;case 13:se(e);break;case 19:_t(vt);break;case 10:on(e.type);break;case 22:case 23:se(e),ed(),t!==null&&_t(fi);break;case 24:on(Ct)}}function oo(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var s=n.create,o=n.inst;i=s(),o.destroy=i}n=n.next}while(n!==a)}}catch(r){I(e,e.return,r)}}function Yn(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&t)===t){var o=i.inst,r=o.destroy;if(r!==void 0){o.destroy=void 0,a=e;var l=n,u=r;try{u()}catch(f){I(a,l,f)}}}i=i.next}while(i!==s)}}catch(f){I(e,e.return,f)}}function Z1(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{e1(e,n)}catch(i){I(t,t.return,i)}}}function Q1(t,e,n){n.props=wi(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){I(t,e,i)}}function bs(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(a){I(t,e,a)}}function He(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){I(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){I(t,e,a)}else n.current=null}function K1(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){I(t,t.return,a)}}function dc(t,e,n){try{var i=t.stateNode;N5(i,t.type,n,e),i[ne]=e}catch(a){I(t,t.return,a)}}function F1(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fn(t.type)||t.tag===4}function hc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||F1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ou(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nn));else if(i!==4&&(i===27&&Fn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Ou(t,e,n),t=t.sibling;t!==null;)Ou(t,e,n),t=t.sibling}function Vr(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&Fn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Vr(t,e,n),t=t.sibling;t!==null;)Vr(t,e,n),t=t.sibling}function P1(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Xt(e,i,n),e[Ht]=t,e[ne]=n}catch(s){I(t,t.return,s)}}var tn=!1,At=!1,pc=!1,mp=typeof WeakSet=="function"?WeakSet:Set,Bt=null;function x5(t,e){if(t=t.containerInfo,Uu=Zr,t=Lg(t),Xf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var o=0,r=-1,l=-1,u=0,f=0,h=t,d=null;e:for(;;){for(var m;h!==n||a!==0&&h.nodeType!==3||(r=o+a),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break e;if(d===n&&++u===a&&(r=o),d===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=r===-1||l===-1?null:{start:r,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hu={focusedElem:t,selectionRange:n},Zr=!1,Bt=e;Bt!==null;)if(e=Bt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Bt=t;else for(;Bt!==null;){switch(e=Bt,s=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&s!==null){t=void 0,n=e,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var b=wi(n.type,a);t=i.getSnapshotBeforeUpdate(b,s),i.__reactInternalSnapshotBeforeUpdate=t}catch(S){I(n,n.return,S)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)qu(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":qu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(C(163))}if(t=e.sibling,t!==null){t.return=e.return,Bt=t;break}Bt=e.return}}function J1(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Pe(t,n),i&4&&oo(5,n);break;case 1:if(Pe(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(o){I(n,n.return,o)}else{var a=wi(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(o){I(n,n.return,o)}}i&64&&Z1(n),i&512&&bs(n,n.return);break;case 3:if(Pe(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{e1(t,e)}catch(o){I(n,n.return,o)}}break;case 27:e===null&&i&4&&P1(n);case 26:case 5:Pe(t,n),e===null&&i&4&&K1(n),i&512&&bs(n,n.return);break;case 12:Pe(t,n);break;case 31:Pe(t,n),i&4&&ty(t,n);break;case 13:Pe(t,n),i&4&&ey(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=$5.bind(null,n),Q5(t,n))));break;case 22:if(i=n.memoizedState!==null||tn,!i){e=e!==null&&e.memoizedState!==null||At,a=tn;var s=At;tn=i,(At=e)&&!s?Je(t,n,(n.subtreeFlags&8772)!==0):Pe(t,n),tn=a,At=s}break;case 30:break;default:Pe(t,n)}}function W1(t){var e=t.alternate;e!==null&&(t.alternate=null,W1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Nf(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var dt=null,It=!1;function Fe(t,e,n){for(n=n.child;n!==null;)I1(t,e,n),n=n.sibling}function I1(t,e,n){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(Is,n)}catch{}switch(n.tag){case 26:At||He(n,e),Fe(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:At||He(n,e);var i=dt,a=It;Fn(n.type)&&(dt=n.stateNode,It=!1),Fe(t,e,n),Ts(n.stateNode),dt=i,It=a;break;case 5:At||He(n,e);case 6:if(i=dt,a=It,dt=null,Fe(t,e,n),dt=i,It=a,dt!==null)if(It)try{(dt.nodeType===9?dt.body:dt.nodeName==="HTML"?dt.ownerDocument.body:dt).removeChild(n.stateNode)}catch(s){I(n,e,s)}else try{dt.removeChild(n.stateNode)}catch(s){I(n,e,s)}break;case 18:dt!==null&&(It?(t=dt,Ep(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),xa(t)):Ep(dt,n.stateNode));break;case 4:i=dt,a=It,dt=n.stateNode.containerInfo,It=!0,Fe(t,e,n),dt=i,It=a;break;case 0:case 11:case 14:case 15:Yn(2,n,e),At||Yn(4,n,e),Fe(t,e,n);break;case 1:At||(He(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Q1(n,e,i)),Fe(t,e,n);break;case 21:Fe(t,e,n);break;case 22:At=(i=At)||n.memoizedState!==null,Fe(t,e,n),At=i;break;default:Fe(t,e,n)}}function ty(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{xa(t)}catch(n){I(e,e.return,n)}}}function ey(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xa(t)}catch(n){I(e,e.return,n)}}function b5(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new mp),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new mp),e;default:throw Error(C(435,t.tag))}}function Eo(t,e){var n=b5(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var a=E5.bind(null,t,i);i.then(a,a)}})}function Jt(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=t,o=e,r=o;t:for(;r!==null;){switch(r.tag){case 27:if(Fn(r.type)){dt=r.stateNode,It=!1;break t}break;case 5:dt=r.stateNode,It=!1;break t;case 3:case 4:dt=r.stateNode.containerInfo,It=!0;break t}r=r.return}if(dt===null)throw Error(C(160));I1(s,o,a),dt=null,It=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)ny(e,t),e=e.sibling}var De=null;function ny(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Jt(e,t),Wt(t),i&4&&(Yn(3,t,t.return),oo(3,t),Yn(5,t,t.return));break;case 1:Jt(e,t),Wt(t),i&512&&(At||n===null||He(n,n.return)),i&64&&tn&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=De;if(Jt(e,t),Wt(t),i&512&&(At||n===null||He(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){t:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[no]||s[Ht]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),Xt(s,i,n),s[Ht]=t,Lt(s),i=s;break t;case"link":var o=Vp("link","href",a).get(i+(n.href||""));if(o){for(var r=0;r<o.length;r++)if(s=o[r],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(r,1);break e}}s=a.createElement(i),Xt(s,i,n),a.head.appendChild(s);break;case"meta":if(o=Vp("meta","content",a).get(i+(n.content||""))){for(r=0;r<o.length;r++)if(s=o[r],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(r,1);break e}}s=a.createElement(i),Xt(s,i,n),a.head.appendChild(s);break;default:throw Error(C(468,i))}s[Ht]=t,Lt(s),i=s}t.stateNode=i}else Bp(a,t.type,t.stateNode);else t.stateNode=kp(a,i,t.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?Bp(a,t.type,t.stateNode):kp(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&dc(t,t.memoizedProps,n.memoizedProps)}break;case 27:Jt(e,t),Wt(t),i&512&&(At||n===null||He(n,n.return)),n!==null&&i&4&&dc(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Jt(e,t),Wt(t),i&512&&(At||n===null||He(n,n.return)),t.flags&32){a=t.stateNode;try{ua(a,"")}catch(b){I(t,t.return,b)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,dc(t,a,n!==null?n.memoizedProps:a)),i&1024&&(pc=!0);break;case 6:if(Jt(e,t),Wt(t),i&4){if(t.stateNode===null)throw Error(C(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(b){I(t,t.return,b)}}break;case 3:if(er=null,a=De,De=qr(e.containerInfo),Jt(e,t),De=a,Wt(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{xa(e.containerInfo)}catch(b){I(t,t.return,b)}pc&&(pc=!1,iy(t));break;case 4:i=De,De=qr(t.stateNode.containerInfo),Jt(e,t),Wt(t),De=i;break;case 12:Jt(e,t),Wt(t);break;case 31:Jt(e,t),Wt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Eo(t,i)));break;case 13:Jt(e,t),Wt(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Al=le()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Eo(t,i)));break;case 22:a=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tn,f=At;if(tn=u||a,At=f||l,Jt(e,t),At=f,tn=u,Wt(t),i&8192)t:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||l||tn||At||ai(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(s=l.stateNode,a)o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{r=l.stateNode;var h=l.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null;r.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(b){I(l,l.return,b)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(b){I(l,l.return,b)}}}else if(e.tag===18){if(n===null){l=e;try{var m=l.stateNode;a?Mp(m,!0):Mp(l.stateNode,!1)}catch(b){I(l,l.return,b)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Eo(t,n))));break;case 19:Jt(e,t),Wt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Eo(t,i)));break;case 30:break;case 21:break;default:Jt(e,t),Wt(t)}}function Wt(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(F1(i)){n=i;break}i=i.return}if(n==null)throw Error(C(160));switch(n.tag){case 27:var a=n.stateNode,s=hc(t);Vr(t,s,a);break;case 5:var o=n.stateNode;n.flags&32&&(ua(o,""),n.flags&=-33);var r=hc(t);Vr(t,r,o);break;case 3:case 4:var l=n.stateNode.containerInfo,u=hc(t);Ou(t,u,l);break;default:throw Error(C(161))}}catch(f){I(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;iy(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Pe(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)J1(t,e.alternate,e),e=e.sibling}function ai(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Yn(4,e,e.return),ai(e);break;case 1:He(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Q1(e,e.return,n),ai(e);break;case 27:Ts(e.stateNode);case 26:case 5:He(e,e.return),ai(e);break;case 22:e.memoizedState===null&&ai(e);break;case 30:ai(e);break;default:ai(e)}t=t.sibling}}function Je(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,s=e,o=s.flags;switch(s.tag){case 0:case 11:case 15:Je(a,s,n),oo(4,s);break;case 1:if(Je(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(u){I(i,i.return,u)}if(i=s,a=i.updateQueue,a!==null){var r=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)t1(l[a],r)}catch(u){I(i,i.return,u)}}n&&o&64&&Z1(s),bs(s,s.return);break;case 27:P1(s);case 26:case 5:Je(a,s,n),n&&i===null&&o&4&&K1(s),bs(s,s.return);break;case 12:Je(a,s,n);break;case 31:Je(a,s,n),n&&o&4&&ty(a,s);break;case 13:Je(a,s,n),n&&o&4&&ey(a,s);break;case 22:s.memoizedState===null&&Je(a,s,n),bs(s,s.return);break;case 30:break;default:Je(a,s,n)}e=e.sibling}}function yd(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&ao(n))}function xd(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ao(t))}function Ee(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ay(t,e,n,i),e=e.sibling}function ay(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Ee(t,e,n,i),a&2048&&oo(9,e);break;case 1:Ee(t,e,n,i);break;case 3:Ee(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ao(t)));break;case 12:if(a&2048){Ee(t,e,n,i),t=e.stateNode;try{var s=e.memoizedProps,o=s.id,r=s.onPostCommit;typeof r=="function"&&r(o,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){I(e,e.return,l)}}else Ee(t,e,n,i);break;case 31:Ee(t,e,n,i);break;case 13:Ee(t,e,n,i);break;case 23:break;case 22:s=e.stateNode,o=e.alternate,e.memoizedState!==null?s._visibility&2?Ee(t,e,n,i):vs(t,e):s._visibility&2?Ee(t,e,n,i):(s._visibility|=2,Bi(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),a&2048&&yd(o,e);break;case 24:Ee(t,e,n,i),a&2048&&xd(e.alternate,e);break;default:Ee(t,e,n,i)}}function Bi(t,e,n,i,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,o=e,r=n,l=i,u=o.flags;switch(o.tag){case 0:case 11:case 15:Bi(s,o,r,l,a),oo(8,o);break;case 23:break;case 22:var f=o.stateNode;o.memoizedState!==null?f._visibility&2?Bi(s,o,r,l,a):vs(s,o):(f._visibility|=2,Bi(s,o,r,l,a)),a&&u&2048&&yd(o.alternate,o);break;case 24:Bi(s,o,r,l,a),a&&u&2048&&xd(o.alternate,o);break;default:Bi(s,o,r,l,a)}e=e.sibling}}function vs(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:vs(n,i),a&2048&&yd(i.alternate,i);break;case 24:vs(n,i),a&2048&&xd(i.alternate,i);break;default:vs(n,i)}e=e.sibling}}var ss=8192;function Oi(t,e,n){if(t.subtreeFlags&ss)for(t=t.child;t!==null;)sy(t,e,n),t=t.sibling}function sy(t,e,n){switch(t.tag){case 26:Oi(t,e,n),t.flags&ss&&t.memoizedState!==null&&s4(n,De,t.memoizedState,t.memoizedProps);break;case 5:Oi(t,e,n);break;case 3:case 4:var i=De;De=qr(t.stateNode.containerInfo),Oi(t,e,n),De=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=ss,ss=16777216,Oi(t,e,n),ss=i):Oi(t,e,n));break;default:Oi(t,e,n)}}function oy(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Pa(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Bt=i,ly(i,t)}oy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ry(t),t=t.sibling}function ry(t){switch(t.tag){case 0:case 11:case 15:Pa(t),t.flags&2048&&Yn(9,t,t.return);break;case 3:Pa(t);break;case 12:Pa(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Io(t)):Pa(t);break;default:Pa(t)}}function Io(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Bt=i,ly(i,t)}oy(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Yn(8,e,e.return),Io(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Io(e));break;default:Io(e)}t=t.sibling}}function ly(t,e){for(;Bt!==null;){var n=Bt;switch(n.tag){case 0:case 11:case 15:Yn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ao(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Bt=i;else t:for(n=t;Bt!==null;){i=Bt;var a=i.sibling,s=i.return;if(W1(i),i===n){Bt=null;break t}if(a!==null){a.return=s,Bt=a;break t}Bt=s}}}var v5={getCacheForType:function(t){var e=qt(Ct),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return qt(Ct).controller.signal}},S5=typeof WeakMap=="function"?WeakMap:Map,F=0,at=null,Y=null,X=0,W=0,ae=null,$n=!1,Ma=!1,bd=!1,dn=0,yt=0,Xn=0,hi=0,vd=0,re=0,pa=0,Ss=null,te=null,ku=!1,Al=0,cy=0,Br=1/0,Lr=null,Bn=null,Rt=0,Ln=null,ma=null,rn=0,Vu=0,Bu=null,uy=null,ws=0,Lu=null;function fe(){return F&2&&X!==0?X&-X:B.T!==null?wd():bg()}function fy(){if(re===0)if(!(X&536870912)||Z){var t=vo;vo<<=1,!(vo&3932160)&&(vo=262144),re=t}else re=536870912;return t=pe.current,t!==null&&(t.flags|=32),re}function ee(t,e,n){(t===at&&(W===2||W===9)||t.cancelPendingCommit!==null)&&(ga(t,0),En(t,X,re,!1)),eo(t,n),(!(F&2)||t!==at)&&(t===at&&(!(F&2)&&(hi|=n),yt===4&&En(t,X,re,!1)),Ze(t))}function dy(t,e,n){if(F&6)throw Error(C(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||to(t,e),a=i?j5(t,e):mc(t,e,!0),s=i;do{if(a===0){Ma&&!i&&En(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!w5(n)){a=mc(t,e,!1),s=!1;continue}if(a===2){if(s=e,t.errorRecoveryDisabledLanes&s)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;t:{var r=t;a=Ss;var l=r.current.memoizedState.isDehydrated;if(l&&(ga(r,o).flags|=256),o=mc(r,o,!1),o!==2){if(bd&&!l){r.errorRecoveryDisabledLanes|=s,hi|=s,a=4;break t}s=te,te=a,s!==null&&(te===null?te=s:te.push.apply(te,s))}a=o}if(s=!1,a!==2)continue}}if(a===1){ga(t,0),En(t,e,0,!0);break}t:{switch(i=t,s=a,s){case 0:case 1:throw Error(C(345));case 4:if((e&4194048)!==e)break;case 6:En(i,e,re,!$n);break t;case 2:te=null;break;case 3:case 5:break;default:throw Error(C(329))}if((e&62914560)===e&&(a=Al+300-le(),10<a)){if(En(i,e,re,!$n),pl(i,0,!0)!==0)break t;rn=e,i.timeoutHandle=Ry(gp.bind(null,i,n,te,Lr,ku,e,re,hi,pa,$n,s,"Throttled",-0,0),a);break t}gp(i,n,te,Lr,ku,e,re,hi,pa,$n,s,null,-0,0)}}break}while(!0);Ze(t)}function gp(t,e,n,i,a,s,o,r,l,u,f,h,d,m){if(t.timeoutHandle=-1,h=e.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},sy(e,s,h);var b=(s&62914560)===s?Al-le():(s&4194048)===s?cy-le():0;if(b=o4(h,b),b!==null){rn=s,t.cancelPendingCommit=b(xp.bind(null,t,e,s,n,i,a,o,r,l,f,h,null,d,m)),En(t,s,o,!u);return}}xp(t,e,s,n,i,a,o,r,l)}function w5(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!he(s(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function En(t,e,n,i){e&=~vd,e&=~hi,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var s=31-ue(a),o=1<<s;i[s]=-1,a&=~o}n!==0&&gg(t,n,e)}function Cl(){return F&6?!0:(ro(0),!1)}function Sd(){if(Y!==null){if(W===0)var t=Y.return;else t=Y,an=Di=null,od(t),aa=null,Bs=0,t=Y;for(;t!==null;)X1(t.alternate,t),t=t.return;Y=null}}function ga(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,G5(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),rn=0,Sd(),at=t,Y=n=sn(t.current,null),X=e,W=0,ae=null,$n=!1,Ma=to(t,e),bd=!1,pa=re=vd=hi=Xn=yt=0,te=Ss=null,ku=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-ue(i),s=1<<a;e|=t[a],i&=~s}return dn=e,xl(),n}function hy(t,e){U=null,B.H=_s,e===Ea||e===vl?(e=Kh(),W=3):e===If?(e=Kh(),W=4):W=e===md?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ae=e,Y===null&&(yt=1,Or(t,ve(e,t.current)))}function py(){var t=pe.current;return t===null?!0:(X&4194048)===X?Te===null:(X&62914560)===X||X&536870912?t===Te:!1}function my(){var t=B.H;return B.H=_s,t===null?_s:t}function gy(){var t=B.A;return B.A=v5,t}function _r(){yt=4,$n||(X&4194048)!==X&&pe.current!==null||(Ma=!0),!(Xn&134217727)&&!(hi&134217727)||at===null||En(at,X,re,!1)}function mc(t,e,n){var i=F;F|=2;var a=my(),s=gy();(at!==t||X!==e)&&(Lr=null,ga(t,e)),e=!1;var o=yt;t:do try{if(W!==0&&Y!==null){var r=Y,l=ae;switch(W){case 8:Sd(),o=6;break t;case 3:case 2:case 9:case 6:pe.current===null&&(e=!0);var u=W;if(W=0,ae=null,Pi(t,r,l,u),n&&Ma){o=0;break t}break;default:u=W,W=0,ae=null,Pi(t,r,l,u)}}T5(),o=yt;break}catch(f){hy(t,f)}while(!0);return e&&t.shellSuspendCounter++,an=Di=null,F=i,B.H=a,B.A=s,Y===null&&(at=null,X=0,xl()),o}function T5(){for(;Y!==null;)yy(Y)}function j5(t,e){var n=F;F|=2;var i=my(),a=gy();at!==t||X!==e?(Lr=null,Br=le()+500,ga(t,e)):Ma=to(t,e);t:do try{if(W!==0&&Y!==null){e=Y;var s=ae;e:switch(W){case 1:W=0,ae=null,Pi(t,e,s,1);break;case 2:case 9:if(Qh(s)){W=0,ae=null,yp(e);break}e=function(){W!==2&&W!==9||at!==t||(W=7),Ze(t)},s.then(e,e);break t;case 3:W=7;break t;case 4:W=5;break t;case 7:Qh(s)?(W=0,ae=null,yp(e)):(W=0,ae=null,Pi(t,e,s,7));break;case 5:var o=null;switch(Y.tag){case 26:o=Y.memoizedState;case 5:case 27:var r=Y;if(o?Ly(o):r.stateNode.complete){W=0,ae=null;var l=r.sibling;if(l!==null)Y=l;else{var u=r.return;u!==null?(Y=u,$l(u)):Y=null}break e}}W=0,ae=null,Pi(t,e,s,5);break;case 6:W=0,ae=null,Pi(t,e,s,6);break;case 8:Sd(),yt=6;break t;default:throw Error(C(462))}}A5();break}catch(f){hy(t,f)}while(!0);return an=Di=null,B.H=i,B.A=a,F=n,Y!==null?0:(at=null,X=0,xl(),yt)}function A5(){for(;Y!==null&&!K2();)yy(Y)}function yy(t){var e=Y1(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?$l(t):Y=e}function yp(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=up(n,e,e.pendingProps,e.type,void 0,X);break;case 11:e=up(n,e,e.pendingProps,e.type.render,e.ref,X);break;case 5:od(e);default:X1(n,e),e=Y=Xg(e,dn),e=Y1(n,e,dn)}t.memoizedProps=t.pendingProps,e===null?$l(t):Y=e}function Pi(t,e,n,i){an=Di=null,od(e),aa=null,Bs=0;var a=e.return;try{if(h5(t,a,e,n,X)){yt=1,Or(t,ve(n,t.current)),Y=null;return}}catch(s){if(a!==null)throw Y=a,s;yt=1,Or(t,ve(n,t.current)),Y=null;return}e.flags&32768?(Z||i===1?t=!0:Ma||X&536870912?t=!1:($n=t=!0,(i===2||i===9||i===3||i===6)&&(i=pe.current,i!==null&&i.tag===13&&(i.flags|=16384))),xy(e,t)):$l(e)}function $l(t){var e=t;do{if(e.flags&32768){xy(e,$n);return}t=e.return;var n=g5(e.alternate,e,dn);if(n!==null){Y=n;return}if(e=e.sibling,e!==null){Y=e;return}Y=e=t}while(e!==null);yt===0&&(yt=5)}function xy(t,e){do{var n=y5(t.alternate,t);if(n!==null){n.flags&=32767,Y=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){Y=t;return}Y=t=n}while(t!==null);yt=6,Y=null}function xp(t,e,n,i,a,s,o,r,l){t.cancelPendingCommit=null;do El();while(Rt!==0);if(F&6)throw Error(C(327));if(e!==null){if(e===t.current)throw Error(C(177));if(s=e.lanes|e.childLanes,s|=Zf,av(t,n,s,o,r,l),t===at&&(Y=at=null,X=0),ma=e,Ln=t,rn=n,Vu=s,Bu=a,uy=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,M5(wr,function(){return Ty(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=B.T,B.T=null,a=P.p,P.p=2,o=F,F|=4;try{x5(t,e,n)}finally{F=o,P.p=a,B.T=i}}Rt=1,by(),vy(),Sy()}}function by(){if(Rt===1){Rt=0;var t=Ln,e=ma,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=B.T,B.T=null;var i=P.p;P.p=2;var a=F;F|=4;try{ny(e,t);var s=Hu,o=Lg(t.containerInfo),r=s.focusedElem,l=s.selectionRange;if(o!==r&&r&&r.ownerDocument&&Bg(r.ownerDocument.documentElement,r)){if(l!==null&&Xf(r)){var u=l.start,f=l.end;if(f===void 0&&(f=u),"selectionStart"in r)r.selectionStart=u,r.selectionEnd=Math.min(f,r.value.length);else{var h=r.ownerDocument||document,d=h&&h.defaultView||window;if(d.getSelection){var m=d.getSelection(),b=r.textContent.length,S=Math.min(l.start,b),w=l.end===void 0?S:Math.min(l.end,b);!m.extend&&S>w&&(o=w,w=S,S=o);var y=Uh(r,S),p=Uh(r,w);if(y&&p&&(m.rangeCount!==1||m.anchorNode!==y.node||m.anchorOffset!==y.offset||m.focusNode!==p.node||m.focusOffset!==p.offset)){var x=h.createRange();x.setStart(y.node,y.offset),m.removeAllRanges(),S>w?(m.addRange(x),m.extend(p.node,p.offset)):(x.setEnd(p.node,p.offset),m.addRange(x))}}}}for(h=[],m=r;m=m.parentNode;)m.nodeType===1&&h.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<h.length;r++){var v=h[r];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Zr=!!Uu,Hu=Uu=null}finally{F=a,P.p=i,B.T=n}}t.current=e,Rt=2}}function vy(){if(Rt===2){Rt=0;var t=Ln,e=ma,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=B.T,B.T=null;var i=P.p;P.p=2;var a=F;F|=4;try{J1(t,e.alternate,e)}finally{F=a,P.p=i,B.T=n}}Rt=3}}function Sy(){if(Rt===4||Rt===3){Rt=0,F2();var t=Ln,e=ma,n=rn,i=uy;e.subtreeFlags&10256||e.flags&10256?Rt=5:(Rt=0,ma=Ln=null,wy(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Bn=null),_f(n),e=e.stateNode,ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(Is,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=B.T,a=P.p,P.p=2,B.T=null;try{for(var s=t.onRecoverableError,o=0;o<i.length;o++){var r=i[o];s(r.value,{componentStack:r.stack})}}finally{B.T=e,P.p=a}}rn&3&&El(),Ze(t),a=t.pendingLanes,n&261930&&a&42?t===Lu?ws++:(ws=0,Lu=t):ws=0,ro(0)}}function wy(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ao(e)))}function El(){return by(),vy(),Sy(),Ty()}function Ty(){if(Rt!==5)return!1;var t=Ln,e=Vu;Vu=0;var n=_f(rn),i=B.T,a=P.p;try{P.p=32>n?32:n,B.T=null,n=Bu,Bu=null;var s=Ln,o=rn;if(Rt=0,ma=Ln=null,rn=0,F&6)throw Error(C(331));var r=F;if(F|=4,ry(s.current),ay(s,s.current,o,n),F=r,ro(0,!1),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(Is,s)}catch{}return!0}finally{P.p=a,B.T=i,wy(t,e)}}function bp(t,e,n){e=ve(n,e),e=zu(t.stateNode,e,2),t=Vn(t,e,2),t!==null&&(eo(t,2),Ze(t))}function I(t,e,n){if(t.tag===3)bp(t,t,n);else for(;e!==null;){if(e.tag===3){bp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Bn===null||!Bn.has(i))){t=ve(n,t),n=_1(2),i=Vn(e,n,2),i!==null&&(N1(n,i,e,t),eo(i,2),Ze(i));break}}e=e.return}}function gc(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new S5;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(bd=!0,a.add(n),t=C5.bind(null,t,e,n),e.then(t,t))}function C5(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,at===t&&(X&n)===n&&(yt===4||yt===3&&(X&62914560)===X&&300>le()-Al?!(F&2)&&ga(t,0):vd|=n,pa===X&&(pa=0)),Ze(t)}function jy(t,e){e===0&&(e=mg()),t=zi(t,e),t!==null&&(eo(t,e),Ze(t))}function $5(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jy(t,n)}function E5(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(C(314))}i!==null&&i.delete(e),jy(t,n)}function M5(t,e){return Bf(t,e)}var Nr=null,Li=null,_u=!1,Ur=!1,yc=!1,Mn=0;function Ze(t){t!==Li&&t.next===null&&(Li===null?Nr=Li=t:Li=Li.next=t),Ur=!0,_u||(_u=!0,D5())}function ro(t,e){if(!yc&&Ur){yc=!0;do for(var n=!1,i=Nr;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var o=i.suspendedLanes,r=i.pingedLanes;s=(1<<31-ue(42|t)+1)-1,s&=a&~(o&~r),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,vp(i,s))}else s=X,s=pl(i,i===at?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||to(i,s)||(n=!0,vp(i,s));i=i.next}while(n);yc=!1}}function z5(){Ay()}function Ay(){Ur=_u=!1;var t=0;Mn!==0&&H5()&&(t=Mn);for(var e=le(),n=null,i=Nr;i!==null;){var a=i.next,s=Cy(i,e);s===0?(i.next=null,n===null?Nr=a:n.next=a,a===null&&(Li=n)):(n=i,(t!==0||s&3)&&(Ur=!0)),i=a}Rt!==0&&Rt!==5||ro(t),Mn!==0&&(Mn=0)}function Cy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var o=31-ue(s),r=1<<o,l=a[o];l===-1?(!(r&n)||r&i)&&(a[o]=iv(r,e)):l<=e&&(t.expiredLanes|=r),s&=~r}if(e=at,n=X,n=pl(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(W===2||W===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Xl(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||to(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Xl(i),_f(n)){case 2:case 8:n=hg;break;case 32:n=wr;break;case 268435456:n=pg;break;default:n=wr}return i=$y.bind(null,t),n=Bf(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Xl(i),t.callbackPriority=2,t.callbackNode=null,2}function $y(t,e){if(Rt!==0&&Rt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(El()&&t.callbackNode!==n)return null;var i=X;return i=pl(t,t===at?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(dy(t,i,e),Cy(t,le()),t.callbackNode!=null&&t.callbackNode===n?$y.bind(null,t):null)}function vp(t,e){if(El())return null;dy(t,e,!0)}function D5(){q5(function(){F&6?Bf(dg,z5):Ay()})}function wd(){if(Mn===0){var t=fa;t===0&&(t=bo,bo<<=1,!(bo&261888)&&(bo=256)),Mn=t}return Mn}function Sp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yo(""+t)}function wp(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function R5(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var s=Sp((a[ne]||null).action),o=i.submitter;o&&(e=(e=o[ne]||null)?Sp(e.formAction):o.getAttribute("formAction"),e!==null&&(s=e,o=null));var r=new ml("action","action",null,i,a);t.push({event:r,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Mn!==0){var l=o?wp(a,o):new FormData(a);Eu(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(r.preventDefault(),l=o?wp(a,o):new FormData(a),Eu(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var xc=0;xc<gu.length;xc++){var bc=gu[xc],O5=bc.toLowerCase(),k5=bc[0].toUpperCase()+bc.slice(1);Ve(O5,"on"+k5)}Ve(Ng,"onAnimationEnd");Ve(Ug,"onAnimationIteration");Ve(Hg,"onAnimationStart");Ve("dblclick","onDoubleClick");Ve("focusin","onFocus");Ve("focusout","onBlur");Ve(Pv,"onTransitionRun");Ve(Jv,"onTransitionStart");Ve(Wv,"onTransitionCancel");Ve(Gg,"onTransitionEnd");ca("onMouseEnter",["mouseout","mouseover"]);ca("onMouseLeave",["mouseout","mouseover"]);ca("onPointerEnter",["pointerout","pointerover"]);ca("onPointerLeave",["pointerout","pointerover"]);$i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$i("onBeforeInput",["compositionend","keypress","textInput","paste"]);$i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ns));function Ey(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;t:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var r=i[o],l=r.instance,u=r.currentTarget;if(r=r.listener,l!==s&&a.isPropagationStopped())break t;s=r,a.currentTarget=u;try{s(a)}catch(f){jr(f)}a.currentTarget=null,s=l}else for(o=0;o<i.length;o++){if(r=i[o],l=r.instance,u=r.currentTarget,r=r.listener,l!==s&&a.isPropagationStopped())break t;s=r,a.currentTarget=u;try{s(a)}catch(f){jr(f)}a.currentTarget=null,s=l}}}}function q(t,e){var n=e[lu];n===void 0&&(n=e[lu]=new Set);var i=t+"__bubble";n.has(i)||(My(e,t,2,!1),n.add(i))}function vc(t,e,n){var i=0;e&&(i|=4),My(n,t,i,e)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function Td(t){if(!t[Mo]){t[Mo]=!0,vg.forEach(function(n){n!=="selectionchange"&&(V5.has(n)||vc(n,!1,t),vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mo]||(e[Mo]=!0,vc("selectionchange",!1,e))}}function My(t,e,n,i){switch(Gy(e)){case 2:var a=c4;break;case 8:a=u4;break;default:a=$d}n=a.bind(null,e,n,t),a=void 0,!hu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Sc(t,e,n,i,a){var s=i;if(!(e&1)&&!(e&2)&&i!==null)t:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var r=i.stateNode.containerInfo;if(r===a)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;r!==null;){if(o=Hi(r),o===null)return;if(l=o.tag,l===5||l===6||l===26||l===27){i=s=o;continue t}r=r.parentNode}}i=i.return}Eg(function(){var u=s,f=Hf(n),h=[];t:{var d=qg.get(t);if(d!==void 0){var m=ml,b=t;switch(t){case"keypress":if(Zo(n)===0)break t;case"keydown":case"keyup":m=Ev;break;case"focusin":b="focus",m=Pl;break;case"focusout":b="blur",m=Pl;break;case"beforeblur":case"afterblur":m=Pl;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Dv;break;case Ng:case Ug:case Hg:m=bv;break;case Gg:m=Ov;break;case"scroll":case"scrollend":m=pv;break;case"wheel":m=Vv;break;case"copy":case"cut":case"paste":m=Sv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Rh;break;case"toggle":case"beforetoggle":m=Lv}var S=(e&4)!==0,w=!S&&(t==="scroll"||t==="scrollend"),y=S?d!==null?d+"Capture":null:d;S=[];for(var p=u,x;p!==null;){var v=p;if(x=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||x===null||y===null||(v=Ds(p,y),v!=null&&S.push(Us(p,v,x))),w)break;p=p.return}0<S.length&&(d=new m(d,b,null,n,f),h.push({event:d,listeners:S}))}}if(!(e&7)){t:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==du&&(b=n.relatedTarget||n.fromElement)&&(Hi(b)||b[Aa]))break t;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(b=n.relatedTarget||n.toElement,m=u,b=b?Hi(b):null,b!==null&&(w=Ws(b),S=b.tag,b!==w||S!==5&&S!==27&&S!==6)&&(b=null)):(m=null,b=u),m!==b)){if(S=zh,v="onMouseLeave",y="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(S=Rh,v="onPointerLeave",y="onPointerEnter",p="pointer"),w=m==null?d:is(m),x=b==null?d:is(b),d=new S(v,p+"leave",m,n,f),d.target=w,d.relatedTarget=x,v=null,Hi(f)===u&&(S=new S(y,p+"enter",b,n,f),S.target=x,S.relatedTarget=w,v=S),w=v,m&&b)e:{for(S=B5,y=m,p=b,x=0,v=y;v;v=S(v))x++;v=0;for(var T=p;T;T=S(T))v++;for(;0<x-v;)y=S(y),x--;for(;0<v-x;)p=S(p),v--;for(;x--;){if(y===p||p!==null&&y===p.alternate){S=y;break e}y=S(y),p=S(p)}S=null}else S=null;m!==null&&Tp(h,d,m,S,!1),b!==null&&w!==null&&Tp(h,w,b,S,!0)}}t:{if(d=u?is(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var M=Bh;else if(Vh(d))if(kg)M=Qv;else{M=Xv;var j=Yv}else m=d.nodeName,!m||m.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?u&&Uf(u.elementType)&&(M=Bh):M=Zv;if(M&&(M=M(t,u))){Og(h,M,n,f);break t}j&&j(t,d,u),t==="focusout"&&u&&d.type==="number"&&u.memoizedProps.value!=null&&fu(d,"number",d.value)}switch(j=u?is(u):window,t){case"focusin":(Vh(j)||j.contentEditable==="true")&&(Yi=j,pu=u,hs=null);break;case"focusout":hs=pu=Yi=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,Hh(h,n,f);break;case"selectionchange":if(Fv)break;case"keydown":case"keyup":Hh(h,n,f)}var A;if(Yf)t:{switch(t){case"compositionstart":var z="onCompositionStart";break t;case"compositionend":z="onCompositionEnd";break t;case"compositionupdate":z="onCompositionUpdate";break t}z=void 0}else qi?Dg(t,n)&&(z="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(zg&&n.locale!=="ko"&&(qi||z!=="onCompositionStart"?z==="onCompositionEnd"&&qi&&(A=Mg()):(Cn=f,Gf="value"in Cn?Cn.value:Cn.textContent,qi=!0)),j=Hr(u,z),0<j.length&&(z=new Dh(z,t,null,n,f),h.push({event:z,listeners:j}),A?z.data=A:(A=Rg(n),A!==null&&(z.data=A)))),(A=Nv?Uv(t,n):Hv(t,n))&&(z=Hr(u,"onBeforeInput"),0<z.length&&(j=new Dh("onBeforeInput","beforeinput",null,n,f),h.push({event:j,listeners:z}),j.data=A)),R5(h,t,u,n,f)}Ey(h,e)})}function Us(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hr(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Ds(t,n),a!=null&&i.unshift(Us(t,a,s)),a=Ds(t,e),a!=null&&i.push(Us(t,a,s))),t.tag===3)return i;t=t.return}return[]}function B5(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Tp(t,e,n,i,a){for(var s=e._reactName,o=[];n!==null&&n!==i;){var r=n,l=r.alternate,u=r.stateNode;if(r=r.tag,l!==null&&l===i)break;r!==5&&r!==26&&r!==27||u===null||(l=u,a?(u=Ds(n,s),u!=null&&o.unshift(Us(n,u,l))):a||(u=Ds(n,s),u!=null&&o.push(Us(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var L5=/\r\n?/g,_5=/\u0000|\uFFFD/g;function jp(t){return(typeof t=="string"?t:""+t).replace(L5,`
`).replace(_5,"")}function zy(t,e){return e=jp(e),jp(t)===e}function tt(t,e,n,i,a,s){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||ua(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&ua(t,""+i);break;case"className":wo(t,"class",i);break;case"tabIndex":wo(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":wo(t,n,i);break;case"style":$g(t,i,s);break;case"data":if(e!=="object"){wo(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Yo(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&tt(t,e,"name",a.name,a,null),tt(t,e,"formEncType",a.formEncType,a,null),tt(t,e,"formMethod",a.formMethod,a,null),tt(t,e,"formTarget",a.formTarget,a,null)):(tt(t,e,"encType",a.encType,a,null),tt(t,e,"method",a.method,a,null),tt(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Yo(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=nn);break;case"onScroll":i!=null&&q("scroll",t);break;case"onScrollEnd":i!=null&&q("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(C(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(C(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Yo(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":q("beforetoggle",t),q("toggle",t),qo(t,"popover",i);break;case"xlinkActuate":Qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Qe(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Qe(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Qe(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Qe(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":qo(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=dv.get(n)||n,qo(t,n,i))}}function Nu(t,e,n,i,a,s){switch(n){case"style":$g(t,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(C(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(C(60));t.innerHTML=n}}break;case"children":typeof i=="string"?ua(t,i):(typeof i=="number"||typeof i=="bigint")&&ua(t,""+i);break;case"onScroll":i!=null&&q("scroll",t);break;case"onScrollEnd":i!=null&&q("scrollend",t);break;case"onClick":i!=null&&(t.onclick=nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sg.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),s=t[ne]||null,s=s!=null?s[n]:null,typeof s=="function"&&t.removeEventListener(e,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break t}n in t?t[n]=i:i===!0?t.setAttribute(n,""):qo(t,n,i)}}}function Xt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":q("error",t),q("load",t);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var o=n[s];if(o!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(C(137,e));default:tt(t,e,s,o,n,null)}}a&&tt(t,e,"srcSet",n.srcSet,n,null),i&&tt(t,e,"src",n.src,n,null);return;case"input":q("invalid",t);var r=s=o=a=null,l=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":a=f;break;case"type":o=f;break;case"checked":l=f;break;case"defaultChecked":u=f;break;case"value":s=f;break;case"defaultValue":r=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(C(137,e));break;default:tt(t,e,i,f,n,null)}}jg(t,s,r,l,u,o,a,!1);return;case"select":q("invalid",t),i=o=s=null;for(a in n)if(n.hasOwnProperty(a)&&(r=n[a],r!=null))switch(a){case"value":s=r;break;case"defaultValue":o=r;break;case"multiple":i=r;default:tt(t,e,a,r,n,null)}e=s,n=o,t.multiple=!!i,e!=null?ea(t,!!i,e,!1):n!=null&&ea(t,!!i,n,!0);return;case"textarea":q("invalid",t),s=a=i=null;for(o in n)if(n.hasOwnProperty(o)&&(r=n[o],r!=null))switch(o){case"value":i=r;break;case"defaultValue":a=r;break;case"children":s=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(C(91));break;default:tt(t,e,o,r,n,null)}Cg(t,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:tt(t,e,l,i,n,null)}return;case"dialog":q("beforetoggle",t),q("toggle",t),q("cancel",t),q("close",t);break;case"iframe":case"object":q("load",t);break;case"video":case"audio":for(i=0;i<Ns.length;i++)q(Ns[i],t);break;case"image":q("error",t),q("load",t);break;case"details":q("toggle",t);break;case"embed":case"source":case"link":q("error",t),q("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(C(137,e));default:tt(t,e,u,i,n,null)}return;default:if(Uf(e)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&Nu(t,e,f,i,n,void 0));return}}for(r in n)n.hasOwnProperty(r)&&(i=n[r],i!=null&&tt(t,e,r,i,n,null))}function N5(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,o=null,r=null,l=null,u=null,f=null;for(m in n){var h=n[m];if(n.hasOwnProperty(m)&&h!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":l=h;default:i.hasOwnProperty(m)||tt(t,e,m,null,i,h)}}for(var d in i){var m=i[d];if(h=n[d],i.hasOwnProperty(d)&&(m!=null||h!=null))switch(d){case"type":s=m;break;case"name":a=m;break;case"checked":u=m;break;case"defaultChecked":f=m;break;case"value":o=m;break;case"defaultValue":r=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(C(137,e));break;default:m!==h&&tt(t,e,d,m,i,h)}}uu(t,o,r,l,u,f,s,a);return;case"select":m=o=r=d=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":m=l;default:i.hasOwnProperty(s)||tt(t,e,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":d=s;break;case"defaultValue":r=s;break;case"multiple":o=s;default:s!==l&&tt(t,e,a,s,i,l)}e=r,n=o,i=m,d!=null?ea(t,!!n,d,!1):!!i!=!!n&&(e!=null?ea(t,!!n,e,!0):ea(t,!!n,n?[]:"",!1));return;case"textarea":m=d=null;for(r in n)if(a=n[r],n.hasOwnProperty(r)&&a!=null&&!i.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:tt(t,e,r,null,i,a)}for(o in i)if(a=i[o],s=n[o],i.hasOwnProperty(o)&&(a!=null||s!=null))switch(o){case"value":d=a;break;case"defaultValue":m=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(C(91));break;default:a!==s&&tt(t,e,o,a,i,s)}Ag(t,d,m);return;case"option":for(var b in n)if(d=n[b],n.hasOwnProperty(b)&&d!=null&&!i.hasOwnProperty(b))switch(b){case"selected":t.selected=!1;break;default:tt(t,e,b,null,i,d)}for(l in i)if(d=i[l],m=n[l],i.hasOwnProperty(l)&&d!==m&&(d!=null||m!=null))switch(l){case"selected":t.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:tt(t,e,l,d,i,m)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)d=n[S],n.hasOwnProperty(S)&&d!=null&&!i.hasOwnProperty(S)&&tt(t,e,S,null,i,d);for(u in i)if(d=i[u],m=n[u],i.hasOwnProperty(u)&&d!==m&&(d!=null||m!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(C(137,e));break;default:tt(t,e,u,d,i,m)}return;default:if(Uf(e)){for(var w in n)d=n[w],n.hasOwnProperty(w)&&d!==void 0&&!i.hasOwnProperty(w)&&Nu(t,e,w,void 0,i,d);for(f in i)d=i[f],m=n[f],!i.hasOwnProperty(f)||d===m||d===void 0&&m===void 0||Nu(t,e,f,d,i,m);return}}for(var y in n)d=n[y],n.hasOwnProperty(y)&&d!=null&&!i.hasOwnProperty(y)&&tt(t,e,y,null,i,d);for(h in i)d=i[h],m=n[h],!i.hasOwnProperty(h)||d===m||d==null&&m==null||tt(t,e,h,d,i,m)}function Ap(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function U5(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,o=a.initiatorType,r=a.duration;if(s&&r&&Ap(o)){for(o=0,r=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],u=l.startTime;if(u>r)break;var f=l.transferSize,h=l.initiatorType;f&&Ap(h)&&(l=l.responseEnd,o+=f*(l<r?1:(r-u)/(l-u)))}if(--i,e+=8*(s+o)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Uu=null,Hu=null;function Gr(t){return t.nodeType===9?t:t.ownerDocument}function Cp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dy(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Gu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wc=null;function H5(){var t=window.event;return t&&t.type==="popstate"?t===wc?!1:(wc=t,!0):(wc=null,!1)}var Ry=typeof setTimeout=="function"?setTimeout:void 0,G5=typeof clearTimeout=="function"?clearTimeout:void 0,$p=typeof Promise=="function"?Promise:void 0,q5=typeof queueMicrotask=="function"?queueMicrotask:typeof $p<"u"?function(t){return $p.resolve(null).then(t).catch(Y5)}:Ry;function Y5(t){setTimeout(function(){throw t})}function Fn(t){return t==="head"}function Ep(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(a),xa(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ts(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Ts(n);for(var s=n.firstChild;s;){var o=s.nextSibling,r=s.nodeName;s[no]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=o}}else n==="body"&&Ts(t.ownerDocument.body);n=a}while(n);xa(e)}function Mp(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function qu(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qu(n),Nf(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function X5(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[no])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=je(t.nextSibling),t===null)break}return null}function Z5(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=je(t.nextSibling),t===null))return null;return t}function Oy(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=je(t.nextSibling),t===null))return null;return t}function Yu(t){return t.data==="$?"||t.data==="$~"}function Xu(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Q5(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function je(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Zu=null;function zp(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return je(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function ky(t,e,n){switch(e=Gr(n),t){case"html":if(t=e.documentElement,!t)throw Error(C(452));return t;case"head":if(t=e.head,!t)throw Error(C(453));return t;case"body":if(t=e.body,!t)throw Error(C(454));return t;default:throw Error(C(451))}}function Ts(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Nf(t)}var Ce=new Map,Rp=new Set;function qr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var hn=P.d;P.d={f:K5,r:F5,D:P5,C:J5,L:W5,m:I5,X:e4,S:t4,M:n4};function K5(){var t=hn.f(),e=Cl();return t||e}function F5(t){var e=Ca(t);e!==null&&e.tag===5&&e.type==="form"?$1(e):hn.r(t)}var za=typeof document>"u"?null:document;function Vy(t,e,n){var i=za;if(i&&typeof e=="string"&&e){var a=be(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Rp.has(a)||(Rp.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),Xt(e,"link",t),Lt(e),i.head.appendChild(e)))}}function P5(t){hn.D(t),Vy("dns-prefetch",t,null)}function J5(t,e){hn.C(t,e),Vy("preconnect",t,e)}function W5(t,e,n){hn.L(t,e,n);var i=za;if(i&&t&&e){var a='link[rel="preload"][as="'+be(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+be(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+be(n.imageSizes)+'"]')):a+='[href="'+be(t)+'"]';var s=a;switch(e){case"style":s=ya(t);break;case"script":s=Da(t)}Ce.has(s)||(t=ft({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Ce.set(s,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(lo(s))||e==="script"&&i.querySelector(co(s))||(e=i.createElement("link"),Xt(e,"link",t),Lt(e),i.head.appendChild(e)))}}function I5(t,e){hn.m(t,e);var n=za;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+be(i)+'"][href="'+be(t)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Da(t)}if(!Ce.has(s)&&(t=ft({rel:"modulepreload",href:t},e),Ce.set(s,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(co(s)))return}i=n.createElement("link"),Xt(i,"link",t),Lt(i),n.head.appendChild(i)}}}function t4(t,e,n){hn.S(t,e,n);var i=za;if(i&&t){var a=ta(i).hoistableStyles,s=ya(t);e=e||"default";var o=a.get(s);if(!o){var r={loading:0,preload:null};if(o=i.querySelector(lo(s)))r.loading=5;else{t=ft({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Ce.get(s))&&jd(t,n);var l=o=i.createElement("link");Lt(l),Xt(l,"link",t),l._p=new Promise(function(u,f){l.onload=u,l.onerror=f}),l.addEventListener("load",function(){r.loading|=1}),l.addEventListener("error",function(){r.loading|=2}),r.loading|=4,tr(o,e,i)}o={type:"stylesheet",instance:o,count:1,state:r},a.set(s,o)}}}function e4(t,e){hn.X(t,e);var n=za;if(n&&t){var i=ta(n).hoistableScripts,a=Da(t),s=i.get(a);s||(s=n.querySelector(co(a)),s||(t=ft({src:t,async:!0},e),(e=Ce.get(a))&&Ad(t,e),s=n.createElement("script"),Lt(s),Xt(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function n4(t,e){hn.M(t,e);var n=za;if(n&&t){var i=ta(n).hoistableScripts,a=Da(t),s=i.get(a);s||(s=n.querySelector(co(a)),s||(t=ft({src:t,async:!0,type:"module"},e),(e=Ce.get(a))&&Ad(t,e),s=n.createElement("script"),Lt(s),Xt(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function Op(t,e,n,i){var a=(a=Rn.current)?qr(a):null;if(!a)throw Error(C(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=ya(n.href),n=ta(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=ya(n.href);var s=ta(a).hoistableStyles,o=s.get(t);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,o),(s=a.querySelector(lo(t)))&&!s._p&&(o.instance=s,o.state.loading=5),Ce.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ce.set(t,n),s||i4(a,t,n,o.state))),e&&i===null)throw Error(C(528,""));return o}if(e&&i!==null)throw Error(C(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Da(n),n=ta(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(C(444,t))}}function ya(t){return'href="'+be(t)+'"'}function lo(t){return'link[rel="stylesheet"]['+t+"]"}function By(t){return ft({},t,{"data-precedence":t.precedence,precedence:null})}function i4(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),Xt(e,"link",n),Lt(e),t.head.appendChild(e))}function Da(t){return'[src="'+be(t)+'"]'}function co(t){return"script[async]"+t}function kp(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+be(n.href)+'"]');if(i)return e.instance=i,Lt(i),i;var a=ft({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Lt(i),Xt(i,"style",a),tr(i,n.precedence,t),e.instance=i;case"stylesheet":a=ya(n.href);var s=t.querySelector(lo(a));if(s)return e.state.loading|=4,e.instance=s,Lt(s),s;i=By(n),(a=Ce.get(a))&&jd(i,a),s=(t.ownerDocument||t).createElement("link"),Lt(s);var o=s;return o._p=new Promise(function(r,l){o.onload=r,o.onerror=l}),Xt(s,"link",i),e.state.loading|=4,tr(s,n.precedence,t),e.instance=s;case"script":return s=Da(n.src),(a=t.querySelector(co(s)))?(e.instance=a,Lt(a),a):(i=n,(a=Ce.get(s))&&(i=ft({},n),Ad(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),Lt(a),Xt(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(C(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,tr(i,n.precedence,t));return e.instance}function tr(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,o=0;o<i.length;o++){var r=i[o];if(r.dataset.precedence===e)s=r;else if(s!==a)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function jd(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ad(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var er=null;function Vp(t,e,n){if(er===null){var i=new Map,a=er=new Map;a.set(n,i)}else a=er,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var s=n[a];if(!(s[no]||s[Ht]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var o=s.getAttribute(e)||"";o=t+o;var r=i.get(o);r?r.push(s):i.set(o,[s])}}return i}function Bp(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function a4(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Ly(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function s4(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=ya(i.href),s=e.querySelector(lo(a));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Yr.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=s,Lt(s);return}s=e.ownerDocument||e,i=By(i),(a=Ce.get(a))&&jd(i,a),s=s.createElement("link"),Lt(s);var o=s;o._p=new Promise(function(r,l){o.onload=r,o.onerror=l}),Xt(s,"link",i),n.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=Yr.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Tc=0;function o4(t,e){return t.stylesheets&&t.count===0&&nr(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&nr(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&Tc===0&&(Tc=62500*U5());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&nr(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>Tc?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Yr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nr(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Xr=null;function nr(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Xr=new Map,e.forEach(r4,t),Xr=null,Yr.call(t))}function r4(t,e){if(!(e.state.loading&4)){var n=Xr.get(t);if(n)var i=n.get(null);else{n=new Map,Xr.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var o=a[s];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),i=o)}i&&n.set(null,i)}a=e.instance,o=a.getAttribute("data-precedence"),s=n.get(o)||i,s===i&&n.set(null,a),n.set(o,a),this.count++,i=Yr.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Hs={$$typeof:en,Provider:null,Consumer:null,_currentValue:ci,_currentValue2:ci,_threadCount:0};function l4(t,e,n,i,a,s,o,r,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.hiddenUpdates=Zl(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function _y(t,e,n,i,a,s,o,r,l,u,f,h){return t=new l4(t,e,n,o,l,u,f,h,r),e=1,s===!0&&(e|=24),s=oe(3,null,null,e),t.current=s,s.stateNode=t,e=Jf(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:e},td(s),t}function Ny(t){return t?(t=Qi,t):Qi}function Uy(t,e,n,i,a,s){a=Ny(a),i.context===null?i.context=a:i.pendingContext=a,i=kn(e),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Vn(t,i,e),n!==null&&(ee(n,t,e),ms(n,t,e))}function Lp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cd(t,e){Lp(t,e),(t=t.alternate)&&Lp(t,e)}function Hy(t){if(t.tag===13||t.tag===31){var e=zi(t,67108864);e!==null&&ee(e,t,67108864),Cd(t,67108864)}}function _p(t){if(t.tag===13||t.tag===31){var e=fe();e=Lf(e);var n=zi(t,e);n!==null&&ee(n,t,e),Cd(t,e)}}var Zr=!0;function c4(t,e,n,i){var a=B.T;B.T=null;var s=P.p;try{P.p=2,$d(t,e,n,i)}finally{P.p=s,B.T=a}}function u4(t,e,n,i){var a=B.T;B.T=null;var s=P.p;try{P.p=8,$d(t,e,n,i)}finally{P.p=s,B.T=a}}function $d(t,e,n,i){if(Zr){var a=Qu(i);if(a===null)Sc(t,e,i,Qr,n),Np(t,i);else if(d4(a,t,e,n,i))i.stopPropagation();else if(Np(t,i),e&4&&-1<f4.indexOf(t)){for(;a!==null;){var s=Ca(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var o=ni(s.pendingLanes);if(o!==0){var r=s;for(r.pendingLanes|=2,r.entangledLanes|=2;o;){var l=1<<31-ue(o);r.entanglements[1]|=l,o&=~l}Ze(s),!(F&6)&&(Br=le()+500,ro(0))}}break;case 31:case 13:r=zi(s,2),r!==null&&ee(r,s,2),Cl(),Cd(s,2)}if(s=Qu(i),s===null&&Sc(t,e,i,Qr,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else Sc(t,e,i,null,n)}}function Qu(t){return t=Hf(t),Ed(t)}var Qr=null;function Ed(t){if(Qr=null,t=Hi(t),t!==null){var e=Ws(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=rg(e),t!==null)return t;t=null}else if(n===31){if(t=lg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Qr=t,null}function Gy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(P2()){case dg:return 2;case hg:return 8;case wr:case J2:return 32;case pg:return 268435456;default:return 32}default:return 32}}var Ku=!1,_n=null,Nn=null,Un=null,Gs=new Map,qs=new Map,jn=[],f4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Np(t,e){switch(t){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":Gs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(e.pointerId)}}function Ja(t,e,n,i,a,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},e!==null&&(e=Ca(e),e!==null&&Hy(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function d4(t,e,n,i,a){switch(e){case"focusin":return _n=Ja(_n,t,e,n,i,a),!0;case"dragenter":return Nn=Ja(Nn,t,e,n,i,a),!0;case"mouseover":return Un=Ja(Un,t,e,n,i,a),!0;case"pointerover":var s=a.pointerId;return Gs.set(s,Ja(Gs.get(s)||null,t,e,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,qs.set(s,Ja(qs.get(s)||null,t,e,n,i,a)),!0}return!1}function qy(t){var e=Hi(t.target);if(e!==null){var n=Ws(e);if(n!==null){if(e=n.tag,e===13){if(e=rg(n),e!==null){t.blockedOn=e,Th(t.priority,function(){_p(n)});return}}else if(e===31){if(e=lg(n),e!==null){t.blockedOn=e,Th(t.priority,function(){_p(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ir(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qu(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);du=i,n.target.dispatchEvent(i),du=null}else return e=Ca(n),e!==null&&Hy(e),t.blockedOn=n,!1;e.shift()}return!0}function Up(t,e,n){ir(t)&&n.delete(e)}function h4(){Ku=!1,_n!==null&&ir(_n)&&(_n=null),Nn!==null&&ir(Nn)&&(Nn=null),Un!==null&&ir(Un)&&(Un=null),Gs.forEach(Up),qs.forEach(Up)}function zo(t,e){t.blockedOn===e&&(t.blockedOn=null,Ku||(Ku=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,h4)))}var Do=null;function Hp(t){Do!==t&&(Do=t,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,function(){Do===t&&(Do=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(Ed(i||n)===null)continue;break}var s=Ca(n);s!==null&&(t.splice(e,3),e-=3,Eu(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function xa(t){function e(l){return zo(l,t)}_n!==null&&zo(_n,t),Nn!==null&&zo(Nn,t),Un!==null&&zo(Un,t),Gs.forEach(e),qs.forEach(e);for(var n=0;n<jn.length;n++){var i=jn[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)qy(n),n.blockedOn===null&&jn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],o=a[ne]||null;if(typeof s=="function")o||Hp(n);else if(o){var r=null;if(s&&s.hasAttribute("formAction")){if(a=s,o=s[ne]||null)r=o.formAction;else if(Ed(a)!==null)continue}else r=o.action;typeof r=="function"?n[i+1]=r:(n.splice(i,3),i-=3),Hp(n)}}}function Yy(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(o){return a=o})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Md(t){this._internalRoot=t}Ml.prototype.render=Md.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));var n=e.current,i=fe();Uy(n,i,t,e,null,null)};Ml.prototype.unmount=Md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Uy(t.current,2,null,t,null,null),Cl(),e[Aa]=null}};function Ml(t){this._internalRoot=t}Ml.prototype.unstable_scheduleHydration=function(t){if(t){var e=bg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jn.length&&e!==0&&e<jn[n].priority;n++);jn.splice(n,0,t),n===0&&qy(t)}};var Gp=sg.version;if(Gp!=="19.2.6")throw Error(C(527,Gp,"19.2.6"));P.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=q2(e),t=t!==null?cg(t):null,t=t===null?null:t.stateNode,t};var p4={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{Is=Ro.inject(p4),ce=Ro}catch{}}dl.createRoot=function(t,e){if(!og(t))throw Error(C(299));var n=!1,i="",a=V1,s=B1,o=L1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=_y(t,1,!1,null,null,n,i,null,a,s,o,Yy),t[Aa]=e.current,Td(t),new Md(e)};dl.hydrateRoot=function(t,e,n){if(!og(t))throw Error(C(299));var i=!1,a="",s=V1,o=B1,r=L1,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(r=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=_y(t,1,!0,e,n??null,i,a,l,s,o,r,Yy),e.context=Ny(null),n=e.current,i=fe(),i=Lf(i),a=kn(i),a.callback=null,Vn(n,a,i),n=i,e.current.lanes=n,eo(e,n),Ze(e),t[Aa]=e.current,Td(t),new Ml(e)};dl.version="19.2.6";function Xy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xy)}catch(t){console.error(t)}}Xy(),I0.exports=dl;var m4=I0.exports;const g4=q0(m4);var rt="-ms-",js="-moz-",K="-webkit-",Zy="comm",zl="rule",zd="decl",y4="@import",x4="@namespace",Qy="@keyframes",b4="@layer",Ky=Math.abs,Dd=String.fromCharCode,Fu=Object.assign;function v4(t,e){return Dt(t,0)^45?(((e<<2^Dt(t,0))<<2^Dt(t,1))<<2^Dt(t,2))<<2^Dt(t,3):0}function Fy(t){return t.trim()}function We(t,e){return(t=e.exec(t))?t[0]:t}function H(t,e,n){return t.replace(e,n)}function ar(t,e,n){return t.indexOf(e,n)}function Dt(t,e){return t.charCodeAt(e)|0}function Ti(t,e,n){return t.slice(e,n)}function Re(t){return t.length}function Py(t){return t.length}function os(t,e){return e.push(t),t}function S4(t,e){return t.map(e).join("")}function qp(t,e){return t.filter(function(n){return!We(n,e)})}var Dl=1,ba=1,Jy=0,$e=0,$t=0,Ra="";function Rl(t,e,n,i,a,s,o,r){return{value:t,root:e,parent:n,type:i,props:a,children:s,line:Dl,column:ba,length:o,return:"",siblings:r}}function gn(t,e){return Fu(Rl("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ki(t){for(;t.root;)t=gn(t.root,{children:[t]});os(t,t.siblings)}function w4(){return $t}function T4(){return $t=$e>0?Dt(Ra,--$e):0,ba--,$t===10&&(ba=1,Dl--),$t}function Oe(){return $t=$e<Jy?Dt(Ra,$e++):0,ba++,$t===10&&(ba=1,Dl++),$t}function zn(){return Dt(Ra,$e)}function sr(){return $e}function Ol(t,e){return Ti(Ra,t,e)}function Ys(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function j4(t){return Dl=ba=1,Jy=Re(Ra=t),$e=0,[]}function A4(t){return Ra="",t}function jc(t){return Fy(Ol($e-1,Pu(t===91?t+2:t===40?t+1:t)))}function C4(t){for(;($t=zn())&&$t<33;)Oe();return Ys(t)>2||Ys($t)>3?"":" "}function $4(t,e){for(;--e&&Oe()&&!($t<48||$t>102||$t>57&&$t<65||$t>70&&$t<97););return Ol(t,sr()+(e<6&&zn()==32&&Oe()==32))}function Pu(t){for(;Oe();)switch($t){case t:return $e;case 34:case 39:t!==34&&t!==39&&Pu($t);break;case 40:t===41&&Pu(t);break;case 92:Oe();break}return $e}function E4(t,e){for(;Oe()&&t+$t!==57;)if(t+$t===84&&zn()===47)break;return"/*"+Ol(e,$e-1)+"*"+Dd(t===47?t:Oe())}function M4(t){for(;!Ys(zn());)Oe();return Ol(t,$e)}function z4(t){return A4(or("",null,null,null,[""],t=j4(t),0,[0],t))}function or(t,e,n,i,a,s,o,r,l){for(var u=0,f=0,h=o,d=0,m=0,b=0,S=1,w=1,y=1,p=0,x="",v=a,T=s,M=i,j=x;w;)switch(b=p,p=Oe()){case 40:if(b!=108&&Dt(j,h-1)==58){ar(j+=H(jc(p),"&","&\f"),"&\f",Ky(u?r[u-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:j+=jc(p);break;case 9:case 10:case 13:case 32:j+=C4(b);break;case 92:j+=$4(sr()-1,7);continue;case 47:switch(zn()){case 42:case 47:os(D4(E4(Oe(),sr()),e,n,l),l),(Ys(b||1)==5||Ys(zn()||1)==5)&&Re(j)&&Ti(j,-1,void 0)!==" "&&(j+=" ");break;default:j+="/"}break;case 123*S:r[u++]=Re(j)*y;case 125*S:case 59:case 0:switch(p){case 0:case 125:w=0;case 59+f:y==-1&&(j=H(j,/\f/g,"")),m>0&&(Re(j)-h||S===0&&b===47)&&os(m>32?Xp(j+";",i,n,h-1,l):Xp(H(j," ","")+";",i,n,h-2,l),l);break;case 59:j+=";";default:if(os(M=Yp(j,e,n,u,f,a,r,x,v=[],T=[],h,s),s),p===123)if(f===0)or(j,e,M,M,v,s,h,r,T);else{switch(d){case 99:if(Dt(j,3)===110)break;case 108:if(Dt(j,2)===97)break;default:f=0;case 100:case 109:case 115:}f?or(t,M,M,i&&os(Yp(t,M,M,0,0,a,r,x,a,v=[],h,T),T),a,T,h,r,i?v:T):or(j,M,M,M,[""],T,0,r,T)}}u=f=m=0,S=y=1,x=j="",h=o;break;case 58:h=1+Re(j),m=b;default:if(S<1){if(p==123)--S;else if(p==125&&S++==0&&T4()==125)continue}switch(j+=Dd(p),p*S){case 38:y=f>0?1:(j+="\f",-1);break;case 44:r[u++]=(Re(j)-1)*y,y=1;break;case 64:zn()===45&&(j+=jc(Oe())),d=zn(),f=h=Re(x=j+=M4(sr())),p++;break;case 45:b===45&&Re(j)==2&&(S=0)}}return s}function Yp(t,e,n,i,a,s,o,r,l,u,f,h){for(var d=a-1,m=a===0?s:[""],b=Py(m),S=0,w=0,y=0;S<i;++S)for(var p=0,x=Ti(t,d+1,d=Ky(w=o[S])),v=t;p<b;++p)(v=Fy(w>0?m[p]+" "+x:H(x,/&\f/g,m[p])))&&(l[y++]=v);return Rl(t,e,n,a===0?zl:r,l,u,f,h)}function D4(t,e,n,i){return Rl(t,e,n,Zy,Dd(w4()),Ti(t,2,-2),0,i)}function Xp(t,e,n,i,a){return Rl(t,e,n,zd,Ti(t,0,i),Ti(t,i+1,-1),i,a)}function Wy(t,e,n){switch(v4(t,e)){case 5103:return K+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return K+t+t;case 4855:return K+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return js+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return K+t+js+t+rt+t+t;case 5936:switch(Dt(t,e+11)){case 114:return K+t+rt+H(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return K+t+rt+H(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return K+t+rt+H(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return K+t+rt+t+t;case 6165:return K+t+rt+"flex-"+t+t;case 5187:return K+t+H(t,/(\w+).+(:[^]+)/,K+"box-$1$2"+rt+"flex-$1$2")+t;case 5443:return K+t+rt+"flex-item-"+H(t,/flex-|-self/g,"")+(We(t,/flex-|baseline/)?"":rt+"grid-row-"+H(t,/flex-|-self/g,""))+t;case 4675:return K+t+rt+"flex-line-pack"+H(t,/align-content|flex-|-self/g,"")+t;case 5548:return K+t+rt+H(t,"shrink","negative")+t;case 5292:return K+t+rt+H(t,"basis","preferred-size")+t;case 6060:return K+"box-"+H(t,"-grow","")+K+t+rt+H(t,"grow","positive")+t;case 4554:return K+H(t,/([^-])(transform)/g,"$1"+K+"$2")+t;case 6187:return H(H(H(t,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),t,"")+t;case 5495:case 3959:return H(t,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return H(H(t,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+rt+"flex-pack:$3"),/space-between/,"justify")+K+t+t;case 4200:if(!We(t,/flex-|baseline/))return rt+"grid-column-align"+Ti(t,e)+t;break;case 2592:case 3360:return rt+H(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,a){return e=a,We(i.props,/grid-\w+-end/)})?~ar(t+(n=n[e].value),"span",0)?t:rt+H(t,"-start","")+t+rt+"grid-row-span:"+(~ar(n,"span",0)?We(n,/\d+/):+We(n,/\d+/)-+We(t,/\d+/))+";":rt+H(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return We(i.props,/grid-\w+-start/)})?t:rt+H(H(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return H(t,/(.+)-inline(.+)/,K+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Re(t)-1-e>6)switch(Dt(t,e+1)){case 109:if(Dt(t,e+4)!==45)break;case 102:return H(t,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+js+(Dt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~ar(t,"stretch",0)?Wy(H(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return H(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,s,o,r,l,u){return rt+a+":"+s+u+(o?rt+a+"-span:"+(r?l:+l-+s)+u:"")+t});case 4949:if(Dt(t,e+6)===121)return H(t,":",":"+K)+t;break;case 6444:switch(Dt(t,Dt(t,14)===45?18:11)){case 120:return H(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(Dt(t,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+rt+"$2box$3")+t;case 100:return H(t,":",":"+rt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return H(t,"scroll-","scroll-snap-")+t}return t}function Kr(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function R4(t,e,n,i){switch(t.type){case b4:if(t.children.length)break;case y4:case x4:case zd:return t.return=t.return||t.value;case Zy:return"";case Qy:return t.return=t.value+"{"+Kr(t.children,i)+"}";case zl:if(!Re(t.value=t.props.join(",")))return""}return Re(n=Kr(t.children,i))?t.return=t.value+"{"+n+"}":""}function O4(t){var e=Py(t);return function(n,i,a,s){for(var o="",r=0;r<e;r++)o+=t[r](n,i,a,s)||"";return o}}function k4(t){return function(e){e.root||(e=e.return)&&t(e)}}function V4(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case zd:t.return=Wy(t.value,t.length,n);return;case Qy:return Kr([gn(t,{value:H(t.value,"@","@"+K)})],i);case zl:if(t.length)return S4(n=t.props,function(a){switch(We(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ki(gn(t,{props:[H(a,/:(read-\w+)/,":"+js+"$1")]})),ki(gn(t,{props:[a]})),Fu(t,{props:qp(n,i)});break;case"::placeholder":ki(gn(t,{props:[H(a,/:(plac\w+)/,":"+K+"input-$1")]})),ki(gn(t,{props:[H(a,/:(plac\w+)/,":"+js+"$1")]})),ki(gn(t,{props:[H(a,/:(plac\w+)/,rt+"input-$1")]})),ki(gn(t,{props:[a]})),Fu(t,{props:qp(n,i)});break}return""})}}var ra={},Ac,Cc;const va=typeof process<"u"&&ra!==void 0&&(ra.REACT_APP_SC_ATTR||ra.SC_ATTR)||"data-styled",Iy="active",tx="data-styled-version",kl="6.4.1",Rd=`/*!sc*/
`,As=typeof window<"u"&&typeof document<"u";function Zp(t){if(typeof process<"u"&&ra!==void 0){const e=ra[t];if(e!==void 0&&e!=="")return e!=="false"}}const B4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Cc=(Ac=Zp("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Ac!==void 0?Ac:Zp("SC_DISABLE_SPEEDY"))!==null&&Cc!==void 0?Cc:typeof process>"u"||ra===void 0),ex="sc-keyframes-",L4={};function ji(t,...e){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${t} for more information.${e.length>0?` Args: ${e.join(", ")}`:""}`)}let rr=new Map,Fr=new Map,lr=1;const rs=t=>{if(rr.has(t))return rr.get(t);for(;Fr.has(lr);)lr++;const e=lr++;return rr.set(t,e),Fr.set(e,t),e},_4=t=>Fr.get(t),N4=(t,e)=>{lr=e+1,rr.set(t,e),Fr.set(e,t)},Od=Object.freeze([]),Sa=Object.freeze({});function nx(t,e,n=Sa){return t.theme!==n.theme&&t.theme||e||n.theme}const U4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,H4=/(^-|-$)/g;function ix(t){return t.replace(U4,"-").replace(H4,"")}const G4=/(a)(d)/gi,Qp=t=>String.fromCharCode(t+(t>25?39:97));function kd(t){let e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Qp(e%52)+n;return(Qp(e%52)+n).replace(G4,"$1-$2")}const Ju=5381,pi=(t,e)=>{let n=e.length;for(;n;)t=33*t^e.charCodeAt(--n);return t},ax=t=>pi(Ju,t);function Vd(t){return kd(ax(t)>>>0)}function q4(t){return t.displayName||t.name||"Component"}function Wu(t){return typeof t=="string"&&!0}function Y4(t){return Wu(t)?`styled.${t}`:`Styled(${q4(t)})`}const sx=Symbol.for("react.memo"),X4=Symbol.for("react.forward_ref"),Z4={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Q4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ox={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},K4={[X4]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[sx]:ox};function Kp(t){return("type"in(e=t)&&e.type.$$typeof)===sx?ox:"$$typeof"in t?K4[t.$$typeof]:Z4;var e}const F4=Object.defineProperty,P4=Object.getOwnPropertyNames,J4=Object.getOwnPropertySymbols,W4=Object.getOwnPropertyDescriptor,I4=Object.getPrototypeOf,t3=Object.prototype;function rx(t,e,n){if(typeof e!="string"){const i=I4(e);i&&i!==t3&&rx(t,i,n);const a=P4(e).concat(J4(e)),s=Kp(t),o=Kp(e);for(let r=0;r<a.length;++r){const l=a[r];if(!(l in Q4||n&&n[l]||o&&l in o||s&&l in s)){const u=W4(e,l);try{F4(t,l,u)}catch{}}}}return t}function Oa(t){return typeof t=="function"}function Bd(t){return typeof t=="object"&&"styledComponentId"in t}function ls(t,e){return t&&e?t+" "+e:t||e||""}function Pr(t,e){return t.join("")}function Xs(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Iu(t,e,n=!1){if(!n&&!Xs(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(let i=0;i<e.length;i++)t[i]=Iu(t[i],e[i]);else if(Xs(e))for(const i in e)t[i]=Iu(t[i],e[i]);return t}function Ld(t,e){Object.defineProperty(t,"toString",{value:e})}const e3=class{constructor(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}indexOfGroup(t){if(t===this._cGroup)return this._cIndex;let e=this._cIndex;if(t>this._cGroup)for(let n=this._cGroup;n<t;n++)e+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=t;n--)e-=this.groupSizes[n];return this._cGroup=t,this._cIndex=e,e}insertRules(t,e){if(t>=this.groupSizes.length){const a=this.groupSizes,s=a.length;let o=s;for(;t>=o;)if(o<<=1,o<0)throw ji(16,`${t}`);this.groupSizes=new Uint32Array(o),this.groupSizes.set(a),this.length=o;for(let r=s;r<o;r++)this.groupSizes[r]=0}let n=this.indexOfGroup(t+1),i=0;for(let a=0,s=e.length;a<s;a++)this.tag.insertRule(n,e[a])&&(this.groupSizes[t]++,n++,i++);i>0&&this._cGroup>t&&(this._cIndex+=i)}clearGroup(t){if(t<this.length){const e=this.groupSizes[t],n=this.indexOfGroup(t),i=n+e;this.groupSizes[t]=0;for(let a=n;a<i;a++)this.tag.deleteRule(n);e>0&&this._cGroup>t&&(this._cIndex-=e)}}getGroup(t){let e="";if(t>=this.length||this.groupSizes[t]===0)return e;const n=this.groupSizes[t],i=this.indexOfGroup(t),a=i+n;for(let s=i;s<a;s++)e+=this.tag.getRule(s)+Rd;return e}},n3=`style[${va}][${tx}="${kl}"]`,i3=new RegExp(`^${va}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Fp=t=>typeof ShadowRoot<"u"&&t instanceof ShadowRoot||"host"in t&&t.nodeType===11,tf=t=>{if(!t)return document;if(Fp(t))return t;if("getRootNode"in t){const e=t.getRootNode();if(Fp(e))return e}return document},a3=(t,e,n)=>{const i=n.split(",");let a;for(let s=0,o=i.length;s<o;s++)(a=i[s])&&t.registerName(e,a)},s3=(t,e)=>{var n;const i=((n=e.textContent)!==null&&n!==void 0?n:"").split(Rd),a=[];for(let s=0,o=i.length;s<o;s++){const r=i[s].trim();if(!r)continue;const l=r.match(i3);if(l){const u=0|parseInt(l[1],10),f=l[2];u!==0&&(N4(f,u),a3(t,f,l[3]),t.getTag().insertRules(u,a)),a.length=0}else a.push(r)}},$c=t=>{const e=tf(t.options.target).querySelectorAll(n3);for(let n=0,i=e.length;n<i;n++){const a=e[n];a&&a.getAttribute(va)!==Iy&&(s3(t,a),a.parentNode&&a.parentNode.removeChild(a))}};let Wa=!1;function o3(){if(Wa!==!1)return Wa;if(typeof document<"u"){const t=document.head.querySelector('meta[property="csp-nonce"]');if(t)return Wa=t.nonce||t.getAttribute("content")||void 0;const e=document.head.querySelector('meta[name="sc-nonce"]');if(e)return Wa=e.getAttribute("content")||void 0}return Wa=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const lx=(t,e)=>{const n=document.head,i=t||n,a=document.createElement("style"),s=(l=>{const u=Array.from(l.querySelectorAll(`style[${va}]`));return u[u.length-1]})(i),o=s!==void 0?s.nextSibling:null;a.setAttribute(va,Iy),a.setAttribute(tx,kl);const r=e||o3();return r&&a.setAttribute("nonce",r),i.insertBefore(a,o),a},r3=class{constructor(t,e){this.element=lx(t,e),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var i;if(n.sheet)return n.sheet;const a=(i=n.getRootNode().styleSheets)!==null&&i!==void 0?i:document.styleSheets;for(let s=0,o=a.length;s<o;s++){const r=a[s];if(r.ownerNode===n)return r}throw ji(17)})(this.element),this.length=0}insertRule(t,e){try{return this.sheet.insertRule(e,t),this.length++,!0}catch{return!1}}deleteRule(t){this.sheet.deleteRule(t),this.length--}getRule(t){const e=this.sheet.cssRules[t];return e&&e.cssText?e.cssText:""}},l3=class{constructor(t,e){this.element=lx(t,e),this.nodes=this.element.childNodes,this.length=0}insertRule(t,e){if(t<=this.length&&t>=0){const n=document.createTextNode(e);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1}deleteRule(t){this.element.removeChild(this.nodes[t]),this.length--}getRule(t){return t<this.length?this.nodes[t].textContent:""}};let Pp=As;const c3={isServer:!As,useCSSOMInjection:!B4};class uo{static registerId(e){return rs(e)}constructor(e=Sa,n={},i){this.options=Object.assign(Object.assign({},c3),e),this.gs=n,this.keyframeIds=new Set,this.names=new Map(i),this.server=!!e.isServer,!this.server&&As&&Pp&&(Pp=!1,$c(this)),Ld(this,()=>(a=>{const s=a.getTag(),{length:o}=s;let r="";for(let l=0;l<o;l++){const u=_4(l);if(u===void 0)continue;const f=a.names.get(u);if(f===void 0||!f.size)continue;const h=s.getGroup(l);if(h.length===0)continue;const d=va+".g"+l+'[id="'+u+'"]';let m="";for(const b of f)b.length>0&&(m+=b+",");r+=h+d+'{content:"'+m+'"}'+Rd}return r})(this))}rehydrate(){!this.server&&As&&$c(this)}reconstructWithOptions(e,n=!0){const i=new uo(Object.assign(Object.assign({},this.options),e),this.gs,n&&this.names||void 0);return i.keyframeIds=new Set(this.keyframeIds),!this.server&&As&&e.target!==this.options.target&&tf(this.options.target)!==tf(e.target)&&$c(i),i}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=(e=(({useCSSOMInjection:n,target:i,nonce:a})=>n?new r3(i,a):new l3(i,a))(this.options),new e3(e)));var e}hasNameForId(e,n){var i,a;return(a=(i=this.names.get(e))===null||i===void 0?void 0:i.has(n))!==null&&a!==void 0&&a}registerName(e,n){rs(e),e.startsWith(ex)&&this.keyframeIds.add(e);const i=this.names.get(e);i?i.add(n):this.names.set(e,new Set([n]))}insertRules(e,n,i){this.registerName(e,n),this.getTag().insertRules(rs(e),i)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(rs(e)),this.clearNames(e)}clearTag(){this.tag=void 0}}const cx=new WeakSet,u3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function f3(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e!="number"||e===0||t in u3||t.startsWith("--")?String(e).trim():e+"px"}const oi=47;function Jp(t){if(t.charCodeAt(0)===45&&t.charCodeAt(1)===45)return t;let e="";for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);e+=i>=65&&i<=90?"-"+String.fromCharCode(i+32):t[n]}return e.startsWith("ms-")?"-"+e:e}const ux=Symbol.for("sc-keyframes");function d3(t){return typeof t=="object"&&t!==null&&ux in t}function fx(t){return Oa(t)&&!(t.prototype&&t.prototype.isReactComponent)}const dx=t=>t==null||t===!1||t==="",h3=Symbol.for("react.client.reference");function Wp(t){return t.$$typeof===h3}function hx(t,e){for(const n in t){const i=t[n];t.hasOwnProperty(n)&&!dx(i)&&(Array.isArray(i)&&cx.has(i)||Oa(i)?e.push(Jp(n)+":",i,";"):Xs(i)?(e.push(n+" {"),hx(i,e),e.push("}")):e.push(Jp(n)+": "+f3(n,i)+";"))}}function Hn(t,e,n,i,a=[]){if(dx(t))return a;const s=typeof t;if(s==="string")return a.push(t),a;if(s==="function"){if(Wp(t))return a;if(fx(t)&&e){const o=t(e);return Hn(o,e,n,i,a)}return a.push(t),a}if(Array.isArray(t)){for(let o=0;o<t.length;o++)Hn(t[o],e,n,i,a);return a}return Bd(t)?(a.push(`.${t.styledComponentId}`),a):d3(t)?(n?(t.inject(n,i),a.push(t.getName(i))):a.push(t),a):Wp(t)?a:Xs(t)?(hx(t,a),a):(a.push(t.toString()),a)}const p3=ax(kl);class m3{constructor(e,n,i){this.rules=e,this.componentId=n,this.baseHash=pi(p3,n),this.baseStyle=i,uo.registerId(n)}generateAndInjectStyles(e,n,i){let a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";{let s="";for(let o=0;o<this.rules.length;o++){const r=this.rules[o];if(typeof r=="string")s+=r;else if(r)if(fx(r)){const l=r(e);typeof l=="string"?s+=l:l!=null&&l!==!1&&(s+=Pr(Hn(l,e,n,i)))}else s+=Pr(Hn(r,e,n,i))}if(s){this.dynamicNameCache||(this.dynamicNameCache=new Map);const o=i.hash?i.hash+s:s;let r=this.dynamicNameCache.get(o);if(!r){if(r=kd(pi(pi(this.baseHash,i.hash),s)>>>0),this.dynamicNameCache.size>=200){const l=this.dynamicNameCache.keys().next().value;l!==void 0&&this.dynamicNameCache.delete(l)}this.dynamicNameCache.set(o,r)}if(!n.hasNameForId(this.componentId,r)){const l=i(s,"."+r,void 0,this.componentId);n.insertRules(this.componentId,r,l)}a=ls(a,r)}}return a}}const g3=/&/g;function px(t,e){let n=0;for(;--e>=0&&t.charCodeAt(e)===92;)n++;return!(1&~n)}function Ec(t){const e=t.length;let n="",i=0,a=0,s=0,o=!1,r=!1;for(let l=0;l<e;l++){const u=t.charCodeAt(l);if(s!==0||o||u!==oi||t.charCodeAt(l+1)!==42)if(o)u===42&&t.charCodeAt(l+1)===oi&&(o=!1,l++);else if(u!==34&&u!==39||px(t,l)){if(s===0)if(u===123)a++;else if(u===125){if(a--,a<0){r=!0;let f=l+1;for(;f<e;){const h=t.charCodeAt(f);if(h===59||h===10)break;f++}f<e&&t.charCodeAt(f)===59&&f++,a=0,l=f-1,i=f;continue}a===0&&(n+=t.substring(i,l+1),i=l+1)}else u===59&&a===0&&(n+=t.substring(i,l+1),i=l+1)}else s===0?s=u:s===u&&(s=0);else o=!0,l++}return r||a!==0||s!==0?(i<e&&a===0&&s===0&&(n+=t.substring(i)),n):t}function mx(t,e){const n=e+" ",i=","+n;for(let a=0;a<t.length;a++){const s=t[a];if(s.type==="rule"){s.value=(n+s.value).replaceAll(",",i);const o=s.props,r=[];for(let l=0;l<o.length;l++)r[l]=n+o[l];s.props=r}Array.isArray(s.children)&&s.type!=="@keyframes"&&mx(s.children,e)}return t}function y3({options:t=Sa,plugins:e=Od}=Sa){let n,i,a;const s=(d,m,b)=>b.startsWith(i)&&b.endsWith(i)&&b.replaceAll(i,"").length>0?`.${n}`:d,o=e.slice();o.push(d=>{d.type===zl&&d.value.includes("&")&&(a||(a=new RegExp(`\\${i}\\b`,"g")),d.props[0]=d.props[0].replace(g3,i).replace(a,s))}),t.prefix&&o.push(V4),o.push(R4);let r=[];const l=O4(o.concat(k4(d=>r.push(d)))),u=(d,m="",b="",S="&")=>{n=S,i=m,a=void 0;const w=function(p){const x=p.indexOf("//")!==-1,v=p.indexOf("}")!==-1;if(!x&&!v)return p;if(!x)return Ec(p);const T=p.length;let M="",j=0,A=0,z=0,E=0,V=0,Q=!1;for(;A<T;){const J=p.charCodeAt(A);if(J!==34&&J!==39||px(p,A))if(z===0)if(J===oi&&A+1<T&&p.charCodeAt(A+1)===42){for(A+=2;A+1<T&&(p.charCodeAt(A)!==42||p.charCodeAt(A+1)!==oi);)A++;A+=2}else if(J!==40)if(J!==41)if(E>0)A++;else if(J===42&&A+1<T&&p.charCodeAt(A+1)===oi)M+=p.substring(j,A),A+=2,j=A,Q=!0;else if(J===oi&&A+1<T&&p.charCodeAt(A+1)===oi){for(M+=p.substring(j,A);A<T&&p.charCodeAt(A)!==10;)A++;j=A,Q=!0}else J===123?V++:J===125&&V--,A++;else E>0&&E--,A++;else E++,A++;else A++;else z===0?z=J:z===J&&(z=0),A++}return Q?(j<T&&(M+=p.substring(j)),V===0?M:Ec(M)):V===0?p:Ec(p)}(d);let y=z4(b||m?b+" "+m+" { "+w+" }":w);return t.namespace&&(y=mx(y,t.namespace)),r=[],Kr(y,l),r},f=t;let h=Ju;for(let d=0;d<e.length;d++)e[d].name||ji(15),h=pi(h,e[d].name);return f!=null&&f.namespace&&(h=pi(h,f.namespace)),f!=null&&f.prefix&&(h=pi(h,"p")),u.hash=h!==Ju?h.toString():"",u}const x3=new uo,ef=y3(),gx=ht.createContext({shouldForwardProp:void 0,styleSheet:x3,stylis:ef,stylisPlugins:void 0});gx.Consumer;function yx(){return ht.useContext(gx)}const Zs=ht.createContext(void 0);Zs.Consumer;function b3(t){const e=ht.useContext(Zs),n=ht.useMemo(()=>function(i,a){if(!i)throw ji(14);if(Oa(i))return i(a);if(Array.isArray(i)||typeof i!="object")throw ji(8);return a?Object.assign(Object.assign({},a),i):i}(t.theme,e),[t.theme,e]);return t.children?ht.createElement(Zs.Provider,{value:n},t.children):null}const Ip=Object.prototype.hasOwnProperty,Mc={};function v3(t,e){const n=typeof t!="string"?"sc":ix(t);Mc[n]=(Mc[n]||0)+1;const i=n+"-"+Vd(kl+n+Mc[n]);return e?e+"-"+i:i}function S3(t,e,n){const i=Bd(t),a=t,s=!Wu(t),{attrs:o=Od,componentId:r=v3(e.displayName,e.parentComponentId),displayName:l=Y4(t)}=e,u=e.displayName&&e.componentId?ix(e.displayName)+"-"+e.componentId:e.componentId||r,f=i&&a.attrs?a.attrs.concat(o).filter(Boolean):o;let{shouldForwardProp:h}=e;if(i&&a.shouldForwardProp){const S=a.shouldForwardProp;if(e.shouldForwardProp){const w=e.shouldForwardProp;h=(y,p)=>S(y,p)&&w(y,p)}else h=S}const d=new m3(n,u,i?a.componentStyle:void 0);function m(S,w){return function(y,p,x){const{attrs:v,componentStyle:T,defaultProps:M,foldedComponentIds:j,styledComponentId:A,target:z}=y,E=ht.useContext(Zs),V=yx(),Q=y.shouldForwardProp||V.shouldForwardProp,J=nx(p,E,M)||Sa;let xt,Mt;{const L=ht.useRef(null),G=L.current;if(G!==null&&G[1]===J&&G[2]===V.styleSheet&&G[3]===V.stylis&&G[7]===T&&function(kt,wt,Vt){const pt=kt,bt=wt;let Ya=0;for(const Jn in bt)if(Ip.call(bt,Jn)&&(Ya++,pt[Jn]!==bt[Jn]))return!1;return Ya===Vt}(G[0],p,G[4]))xt=G[5],Mt=G[6];else{xt=function(wt,Vt,pt){const bt=Object.assign(Object.assign({},Vt),{className:void 0,theme:pt}),Ya=wt.length>1;for(let Jn=0;Jn<wt.length;Jn++){const Ul=wt[Jn],go=Oa(Ul)?Ul(Ya?Object.assign({},bt):bt):Ul;for(const pn in go)pn==="className"?bt.className=ls(bt.className,go[pn]):pn==="style"?bt.style=Object.assign(Object.assign({},bt.style),go[pn]):pn in Vt&&Vt[pn]===void 0||(bt[pn]=go[pn])}return"className"in Vt&&typeof Vt.className=="string"&&(bt.className=ls(bt.className,Vt.className)),bt}(v,p,J),Mt=function(wt,Vt,pt,bt){return wt.generateAndInjectStyles(Vt,pt,bt)}(T,xt,V.styleSheet,V.stylis);let kt=0;for(const wt in p)Ip.call(p,wt)&&kt++;L.current=[p,J,V.styleSheet,V.stylis,kt,xt,Mt,T]}}const D=xt.as||z,N=function(L,G,kt,wt){const Vt={};for(const pt in L)L[pt]===void 0||pt[0]==="$"||pt==="as"||pt==="theme"&&L.theme===kt||(pt==="forwardedAs"?Vt.as=L.forwardedAs:wt&&!wt(pt,G)||(Vt[pt]=L[pt]));return Vt}(xt,D,J,Q);let k=ls(j,A);return Mt&&(k+=" "+Mt),xt.className&&(k+=" "+xt.className),N[Wu(D)&&D.includes("-")?"class":"className"]=k,x&&(N.ref=x),$.createElement(D,N)}(b,S,w)}m.displayName=l;let b=ht.forwardRef(m);return b.attrs=f,b.componentStyle=d,b.displayName=l,b.shouldForwardProp=h,b.foldedComponentIds=i?ls(a.foldedComponentIds,a.styledComponentId):"",b.styledComponentId=u,b.target=i?a.target:t,Object.defineProperty(b,"defaultProps",{get(){return this._foldedDefaultProps},set(S){this._foldedDefaultProps=i?function(w,...y){for(const p of y)Iu(w,p,!0);return w}({},a.defaultProps,S):S}}),Ld(b,()=>`.${b.styledComponentId}`),s&&rx(b,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}var w3=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function tm(t,e){const n=[t[0]];for(let i=0,a=e.length;i<a;i+=1)n.push(e[i],t[i+1]);return n}const em=t=>(cx.add(t),t);function Ai(t,...e){if(Oa(t)||Xs(t))return em(Hn(tm(Od,[t,...e])));const n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?Hn(n):em(Hn(tm(n,e)))}function nf(t,e,n=Sa){if(!e)throw ji(1,e);const i=(a,...s)=>t(e,n,Ai(a,...s));return i.attrs=a=>nf(t,e,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)})),i.withConfig=a=>nf(t,e,Object.assign(Object.assign({},n),a)),i}const xx=t=>nf(S3,t),g=xx;w3.forEach(t=>{g[t]=xx(t)});class T3{constructor(e,n){this.instanceRules=new Map,this.rules=e,this.componentId=n,this.isStatic=function(i){for(let a=0;a<i.length;a+=1){const s=i[a];if(Oa(s)&&!Bd(s))return!1}return!0}(e),uo.registerId(this.componentId)}removeStyles(e,n){this.instanceRules.delete(e),this.rebuildGroup(n)}renderStyles(e,n,i,a){const s=this.componentId;if(this.isStatic){if(i.hasNameForId(s,s+e))this.instanceRules.has(e)||this.computeRules(e,n,i,a);else{const r=this.computeRules(e,n,i,a);i.insertRules(s,r.name,r.rules)}return}const o=this.instanceRules.get(e);if(this.computeRules(e,n,i,a),!i.server&&o){const r=o.rules,l=this.instanceRules.get(e).rules;if(r.length===l.length){let u=!0;for(let f=0;f<r.length;f++)if(r[f]!==l[f]){u=!1;break}if(u)return}}this.rebuildGroup(i)}computeRules(e,n,i,a){const s=Pr(Hn(this.rules,n,i,a)),o={name:this.componentId+e,rules:a(s,"")};return this.instanceRules.set(e,o),o}rebuildGroup(e){const n=this.componentId;e.clearRules(n);for(const i of this.instanceRules.values())e.insertRules(n,i.name,i.rules)}}function j3(t,...e){const n=Ai(t,...e),i=`sc-global-${Vd(JSON.stringify(n))}`,a=new T3(n,i),s=r=>{const l=yx(),u=ht.useContext(Zs);let f;{const h=ht.useRef(null);h.current===null&&(h.current=l.styleSheet.allocateGSInstance(i)),f=h.current}l.styleSheet.server&&o(f,r,l.styleSheet,u,l.stylis);{const h=a.isStatic?[f,l.styleSheet,a]:[f,r,l.styleSheet,u,l.stylis,a],d=ht.useRef(a);ht.useLayoutEffect(()=>{l.styleSheet.server||(d.current!==a&&(l.styleSheet.clearRules(i),d.current=a),o(f,r,l.styleSheet,u,l.stylis))},h),ht.useLayoutEffect(()=>()=>{l.styleSheet.server||a.removeStyles(f,l.styleSheet)},[f,l.styleSheet,a])}return l.styleSheet.server&&a.instanceRules.delete(f),null};function o(r,l,u,f,h){if(a.isStatic)a.renderStyles(r,L4,u,h);else{const d=Object.assign(Object.assign({},l),{theme:nx(l,f,s.defaultProps)});a.renderStyles(r,d,u,h)}}return ht.memo(s)}var bx;class A3{constructor(e,n){this[bx]=!0,this.inject=(i,a=ef)=>{const s=this.getName(a);if(!i.hasNameForId(this.id,s)){const o=a(this.rules,s,"@keyframes");i.insertRules(this.id,s,o)}},this.name=e,this.id=ex+e,this.rules=n,rs(this.id),Ld(this,()=>{throw ji(12,String(this.name))})}getName(e=ef){return e.hash?this.name+kd(+e.hash>>>0):this.name}}function ka(t,...e){const n=Pr(Ai(t,...e)),i=Vd(n);return new A3(i,n)}bx=ux;const C3=j3`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    color-scheme: dark;
  }

  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: ${({theme:t})=>t.fonts.body};
    background-color: ${({theme:t})=>t.colors.bg};
    color: ${({theme:t})=>t.colors.text};
    font-weight: 400;
    line-height: 1.6;
    overflow-x: clip;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Ambient noise texture overlay for depth */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
    pointer-events: none;
    z-index: 1;
    opacity: 0.7;
    mix-blend-mode: overlay;
  }

  /* Custom selection */
  ::selection {
    background: ${({theme:t})=>t.colors.accent};
    color: ${({theme:t})=>t.colors.bg};
  }

  img, svg {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme:t})=>t.fonts.display};
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${({theme:t})=>t.colors.bg};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({theme:t})=>t.colors.border};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme:t})=>t.colors.borderHover};
  }

  /* Containers */
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 ${({theme:t})=>t.spacing.lg};

    @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
      padding: 0 ${({theme:t})=>t.spacing.md};
    }
  }

  .section {
    padding: ${({theme:t})=>t.spacing.xxxl} 0;
    position: relative;

    @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
      padding: ${({theme:t})=>t.spacing.xxl} 0;
    }
  }

  /* Utility — gradient text */
  .gradient-text {
    background: ${({theme:t})=>t.gradients.brand};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  /* Utility — eyebrow label */
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: ${({theme:t})=>t.fonts.mono};
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: ${({theme:t})=>t.colors.accent};
  }
  .eyebrow::before {
    content: '';
    width: 24px;
    height: 1px;
    background: ${({theme:t})=>t.colors.accent};
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  *:focus-visible {
    outline: 2px solid ${({theme:t})=>t.colors.accent};
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* Reduce motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`,$3={colors:{bg:"#08080C",bgAlt:"#0E0E14",bgElevated:"#13131B",bgCard:"rgba(255, 255, 255, 0.03)",bgCardHover:"rgba(255, 255, 255, 0.05)",bgGlass:"rgba(15, 15, 22, 0.6)",text:"#FAFAFA",textSecondary:"#A1A1AA",textTertiary:"#71717A",textMuted:"#52525B",accent:"#06D7FF",accentAlt:"#9333EA",accentWarm:"#FF7A1A",accentGlow:"rgba(6, 215, 255, 0.4)",accentAltGlow:"rgba(147, 51, 234, 0.4)",border:"rgba(255, 255, 255, 0.08)",borderHover:"rgba(255, 255, 255, 0.16)",borderAccent:"rgba(6, 215, 255, 0.3)",success:"#10B981",error:"#EF4444",primary:"#06D7FF",secondary:"#9333EA"},gradients:{brand:"linear-gradient(135deg, #06D7FF 0%, #9333EA 100%)",brandSoft:"linear-gradient(135deg, rgba(6, 215, 255, 0.15) 0%, rgba(147, 51, 234, 0.15) 100%)",radial:"radial-gradient(circle at 20% 0%, rgba(6, 215, 255, 0.15), transparent 50%), radial-gradient(circle at 80% 100%, rgba(147, 51, 234, 0.12), transparent 50%)",text:"linear-gradient(135deg, #FAFAFA 0%, #A1A1AA 100%)",accent:"linear-gradient(90deg, #06D7FF, #9333EA, #06D7FF)"},fonts:{display:"'IBM Plex Serif', 'Space Grotesk', Georgia, ui-serif, serif",displaySans:"'Space Grotesk', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",body:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",mono:"'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace"},breakpoints:{mobile:"480px",tablet:"768px",desktop:"1024px",wide:"1280px"},spacing:{xs:"0.5rem",sm:"1rem",md:"1.5rem",lg:"2rem",xl:"3rem",xxl:"5rem",xxxl:"8rem"},borderRadius:{sm:"8px",md:"12px",lg:"18px",xl:"24px",full:"9999px"},shadows:{sm:"0 1px 2px rgba(0, 0, 0, 0.4)",md:"0 8px 24px rgba(0, 0, 0, 0.5)",lg:"0 24px 48px rgba(0, 0, 0, 0.6)",glow:"0 0 60px rgba(6, 215, 255, 0.25)",glowAlt:"0 0 60px rgba(147, 51, 234, 0.25)"},transitions:{fast:"0.18s cubic-bezier(0.4, 0, 0.2, 1)",normal:"0.32s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.6s cubic-bezier(0.4, 0, 0.2, 1)",spring:"0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"},motion:{fadeUp:{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:[.22,1,.36,1]}},fadeUpDelayed:(t=0)=>({initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:[.22,1,.36,1],delay:t}})}},_d=$.createContext({});function Nd(t){const e=$.useRef(null);return e.current===null&&(e.current=t()),e.current}const E3=typeof window<"u",vx=E3?$.useLayoutEffect:$.useEffect,Vl=$.createContext(null);function Ud(t,e){t.indexOf(e)===-1&&t.push(e)}function Jr(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Ye=(t,e,n)=>n>e?e:n<t?t:n;let Hd=()=>{};const Zn={},Sx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function wx(t){return typeof t=="object"&&t!==null}const Tx=t=>/^0[^.\s]+$/u.test(t);function jx(t){let e;return()=>(e===void 0&&(e=t()),e)}const Ae=t=>t,M3=(t,e)=>n=>e(t(n)),fo=(...t)=>t.reduce(M3),Qs=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class Gd{constructor(){this.subscriptions=[]}add(e){return Ud(this.subscriptions,e),()=>Jr(this.subscriptions,e)}notify(e,n,i){const a=this.subscriptions.length;if(a)if(a===1)this.subscriptions[0](e,n,i);else for(let s=0;s<a;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const de=t=>t*1e3,we=t=>t/1e3;function Ax(t,e){return e?t*(1e3/e):0}const Cx=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,z3=1e-7,D3=12;function R3(t,e,n,i,a){let s,o,r=0;do o=e+(n-e)/2,s=Cx(o,i,a)-t,s>0?n=o:e=o;while(Math.abs(s)>z3&&++r<D3);return o}function ho(t,e,n,i){if(t===e&&n===i)return Ae;const a=s=>R3(s,0,1,t,n);return s=>s===0||s===1?s:Cx(a(s),e,i)}const $x=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Ex=t=>e=>1-t(1-e),Mx=ho(.33,1.53,.69,.99),qd=Ex(Mx),zx=$x(qd),Dx=t=>t>=1?1:(t*=2)<1?.5*qd(t):.5*(2-Math.pow(2,-10*(t-1))),Yd=t=>1-Math.sin(Math.acos(t)),Rx=Ex(Yd),Ox=$x(Yd),O3=ho(.42,0,1,1),k3=ho(0,0,.58,1),kx=ho(.42,0,.58,1),V3=t=>Array.isArray(t)&&typeof t[0]!="number",Vx=t=>Array.isArray(t)&&typeof t[0]=="number",B3={linear:Ae,easeIn:O3,easeInOut:kx,easeOut:k3,circIn:Yd,circInOut:Ox,circOut:Rx,backIn:qd,backInOut:zx,backOut:Mx,anticipate:Dx},L3=t=>typeof t=="string",nm=t=>{if(Vx(t)){Hd(t.length===4);const[e,n,i,a]=t;return ho(e,n,i,a)}else if(L3(t))return B3[t];return t},Oo=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function _3(t,e){let n=new Set,i=new Set,a=!1,s=!1;const o=new WeakSet;let r={delta:0,timestamp:0,isProcessing:!1};function l(f){o.has(f)&&(u.schedule(f),t()),f(r)}const u={schedule:(f,h=!1,d=!1)=>{const b=d&&a?n:i;return h&&o.add(f),b.add(f),f},cancel:f=>{i.delete(f),o.delete(f)},process:f=>{if(r=f,a){s=!0;return}a=!0;const h=n;n=i,i=h,n.forEach(l),n.clear(),a=!1,s&&(s=!1,u.process(f))}};return u}const N3=40;function Bx(t,e){let n=!1,i=!0;const a={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Oo.reduce((x,v)=>(x[v]=_3(s),x),{}),{setup:r,read:l,resolveKeyframes:u,preUpdate:f,update:h,preRender:d,render:m,postRender:b}=o,S=()=>{const x=Zn.useManualTiming,v=x?a.timestamp:performance.now();n=!1,x||(a.delta=i?1e3/60:Math.max(Math.min(v-a.timestamp,N3),1)),a.timestamp=v,a.isProcessing=!0,r.process(a),l.process(a),u.process(a),f.process(a),h.process(a),d.process(a),m.process(a),b.process(a),a.isProcessing=!1,n&&e&&(i=!1,t(S))},w=()=>{n=!0,i=!0,a.isProcessing||t(S)};return{schedule:Oo.reduce((x,v)=>{const T=o[v];return x[v]=(M,j=!1,A=!1)=>(n||w(),T.schedule(M,j,A)),x},{}),cancel:x=>{for(let v=0;v<Oo.length;v++)o[Oo[v]].cancel(x)},state:a,steps:o}}const{schedule:it,cancel:Qn,state:Nt,steps:zc}=Bx(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ae,!0);let cr;function U3(){cr=void 0}const Kt={now:()=>(cr===void 0&&Kt.set(Nt.isProcessing||Zn.useManualTiming?Nt.timestamp:performance.now()),cr),set:t=>{cr=t,queueMicrotask(U3)}},Lx=t=>e=>typeof e=="string"&&e.startsWith(t),_x=Lx("--"),H3=Lx("var(--"),Xd=t=>H3(t)?G3.test(t.split("/*")[0].trim()):!1,G3=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function im(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Va={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ks={...Va,transform:t=>Ye(0,1,t)},ko={...Va,default:1},Cs=t=>Math.round(t*1e5)/1e5,Zd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function q3(t){return t==null}const Y3=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Qd=(t,e)=>n=>!!(typeof n=="string"&&Y3.test(n)&&n.startsWith(t)||e&&!q3(n)&&Object.prototype.hasOwnProperty.call(n,e)),Nx=(t,e,n)=>i=>{if(typeof i!="string")return i;const[a,s,o,r]=i.match(Zd);return{[t]:parseFloat(a),[e]:parseFloat(s),[n]:parseFloat(o),alpha:r!==void 0?parseFloat(r):1}},X3=t=>Ye(0,255,t),Dc={...Va,transform:t=>Math.round(X3(t))},ri={test:Qd("rgb","red"),parse:Nx("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Dc.transform(t)+", "+Dc.transform(e)+", "+Dc.transform(n)+", "+Cs(Ks.transform(i))+")"};function Z3(t){let e="",n="",i="",a="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),a=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),a=t.substring(4,5),e+=e,n+=n,i+=i,a+=a),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:a?parseInt(a,16)/255:1}}const af={test:Qd("#"),parse:Z3,transform:ri.transform},po=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),yn=po("deg"),qe=po("%"),O=po("px"),Q3=po("vh"),K3=po("vw"),am={...qe,parse:t=>qe.parse(t)/100,transform:t=>qe.transform(t*100)},Ji={test:Qd("hsl","hue"),parse:Nx("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+qe.transform(Cs(e))+", "+qe.transform(Cs(n))+", "+Cs(Ks.transform(i))+")"},Tt={test:t=>ri.test(t)||af.test(t)||Ji.test(t),parse:t=>ri.test(t)?ri.parse(t):Ji.test(t)?Ji.parse(t):af.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ri.transform(t):Ji.transform(t),getAnimatableNone:t=>{const e=Tt.parse(t);return e.alpha=0,Tt.transform(e)}},F3=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function P3(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Zd))==null?void 0:e.length)||0)+(((n=t.match(F3))==null?void 0:n.length)||0)>0}const Ux="number",Hx="color",J3="var",W3="var(",sm="${}",I3=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function wa(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},a=[];let s=0;const r=e.replace(I3,l=>(Tt.test(l)?(i.color.push(s),a.push(Hx),n.push(Tt.parse(l))):l.startsWith(W3)?(i.var.push(s),a.push(J3),n.push(l)):(i.number.push(s),a.push(Ux),n.push(parseFloat(l))),++s,sm)).split(sm);return{values:n,split:r,indexes:i,types:a}}function tS(t){return wa(t).values}function Gx({split:t,types:e}){const n=t.length;return i=>{let a="";for(let s=0;s<n;s++)if(a+=t[s],i[s]!==void 0){const o=e[s];o===Ux?a+=Cs(i[s]):o===Hx?a+=Tt.transform(i[s]):a+=i[s]}return a}}function eS(t){return Gx(wa(t))}const nS=t=>typeof t=="number"?0:Tt.test(t)?Tt.getAnimatableNone(t):t,iS=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:nS(t);function aS(t){const e=wa(t);return Gx(e)(e.values.map((i,a)=>iS(i,e.split[a])))}const ke={test:P3,parse:tS,createTransformer:eS,getAnimatableNone:aS};function Rc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function sS({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let a=0,s=0,o=0;if(!e)a=s=o=n;else{const r=n<.5?n*(1+e):n+e-n*e,l=2*n-r;a=Rc(l,r,t+1/3),s=Rc(l,r,t),o=Rc(l,r,t-1/3)}return{red:Math.round(a*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Wr(t,e){return n=>n>0?e:t}const ct=(t,e,n)=>t+(e-t)*n,Oc=(t,e,n)=>{const i=t*t,a=n*(e*e-i)+i;return a<0?0:Math.sqrt(a)},oS=[af,ri,Ji],rS=t=>oS.find(e=>e.test(t));function om(t){const e=rS(t);if(!e)return!1;let n=e.parse(t);return e===Ji&&(n=sS(n)),n}const rm=(t,e)=>{const n=om(t),i=om(e);if(!n||!i)return Wr(t,e);const a={...n};return s=>(a.red=Oc(n.red,i.red,s),a.green=Oc(n.green,i.green,s),a.blue=Oc(n.blue,i.blue,s),a.alpha=ct(n.alpha,i.alpha,s),ri.transform(a))},sf=new Set(["none","hidden"]);function lS(t,e){return sf.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function cS(t,e){return n=>ct(t,e,n)}function Kd(t){return typeof t=="number"?cS:typeof t=="string"?Xd(t)?Wr:Tt.test(t)?rm:dS:Array.isArray(t)?qx:typeof t=="object"?Tt.test(t)?rm:uS:Wr}function qx(t,e){const n=[...t],i=n.length,a=t.map((s,o)=>Kd(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=a[o](s);return n}}function uS(t,e){const n={...t,...e},i={};for(const a in n)t[a]!==void 0&&e[a]!==void 0&&(i[a]=Kd(t[a])(t[a],e[a]));return a=>{for(const s in i)n[s]=i[s](a);return n}}function fS(t,e){const n=[],i={color:0,var:0,number:0};for(let a=0;a<e.values.length;a++){const s=e.types[a],o=t.indexes[s][i[s]],r=t.values[o]??0;n[a]=r,i[s]++}return n}const dS=(t,e)=>{const n=ke.createTransformer(e),i=wa(t),a=wa(e);return i.indexes.var.length===a.indexes.var.length&&i.indexes.color.length===a.indexes.color.length&&i.indexes.number.length>=a.indexes.number.length?sf.has(t)&&!a.values.length||sf.has(e)&&!i.values.length?lS(t,e):fo(qx(fS(i,a),a.values),n):Wr(t,e)};function Yx(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ct(t,e,n):Kd(t)(t,e)}const hS=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>it.update(e,n),stop:()=>Qn(e),now:()=>Nt.isProcessing?Nt.timestamp:Kt.now()}},Xx=(t,e,n=10)=>{let i="";const a=Math.max(Math.round(e/n),2);for(let s=0;s<a;s++)i+=Math.round(t(s/(a-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Ir=2e4;function Fd(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Ir;)e+=n,i=t.next(e);return e>=Ir?1/0:e}function pS(t,e=100,n){const i=n({...t,keyframes:[0,e]}),a=Math.min(Fd(i),Ir);return{type:"keyframes",ease:s=>i.next(a*s).value/e,duration:we(a)}}const gt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function of(t,e){return t*Math.sqrt(1-e*e)}const mS=12;function gS(t,e,n){let i=n;for(let a=1;a<mS;a++)i=i-t(i)/e(i);return i}const kc=.001;function yS({duration:t=gt.duration,bounce:e=gt.bounce,velocity:n=gt.velocity,mass:i=gt.mass}){let a,s,o=1-e;o=Ye(gt.minDamping,gt.maxDamping,o),t=Ye(gt.minDuration,gt.maxDuration,we(t)),o<1?(a=u=>{const f=u*o,h=f*t,d=f-n,m=of(u,o),b=Math.exp(-h);return kc-d/m*b},s=u=>{const h=u*o*t,d=h*n+n,m=Math.pow(o,2)*Math.pow(u,2)*t,b=Math.exp(-h),S=of(Math.pow(u,2),o);return(-a(u)+kc>0?-1:1)*((d-m)*b)/S}):(a=u=>{const f=Math.exp(-u*t),h=(u-n)*t+1;return-kc+f*h},s=u=>{const f=Math.exp(-u*t),h=(n-u)*(t*t);return f*h});const r=5/t,l=gS(a,s,r);if(t=de(t),isNaN(l))return{stiffness:gt.stiffness,damping:gt.damping,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:t}}}const xS=["duration","bounce"],bS=["stiffness","damping","mass"];function lm(t,e){return e.some(n=>t[n]!==void 0)}function vS(t){let e={velocity:gt.velocity,stiffness:gt.stiffness,damping:gt.damping,mass:gt.mass,isResolvedFromDuration:!1,...t};if(!lm(t,bS)&&lm(t,xS))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),a=i*i,s=2*Ye(.05,1,1-(t.bounce||0))*Math.sqrt(a);e={...e,mass:gt.mass,stiffness:a,damping:s}}else{const n=yS({...t,velocity:0});e={...e,...n,mass:gt.mass},e.isResolvedFromDuration=!0}return e}function tl(t=gt.visualDuration,e=gt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:a}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],r={done:!1,value:s},{stiffness:l,damping:u,mass:f,duration:h,velocity:d,isResolvedFromDuration:m}=vS({...n,velocity:-we(n.velocity||0)}),b=d||0,S=u/(2*Math.sqrt(l*f)),w=o-s,y=we(Math.sqrt(l/f)),p=Math.abs(w)<5;i||(i=p?gt.restSpeed.granular:gt.restSpeed.default),a||(a=p?gt.restDelta.granular:gt.restDelta.default);let x,v,T,M,j,A;if(S<1)T=of(y,S),M=(b+S*y*w)/T,x=E=>{const V=Math.exp(-S*y*E);return o-V*(M*Math.sin(T*E)+w*Math.cos(T*E))},j=S*y*M+w*T,A=S*y*w-M*T,v=E=>Math.exp(-S*y*E)*(j*Math.sin(T*E)+A*Math.cos(T*E));else if(S===1){x=V=>o-Math.exp(-y*V)*(w+(b+y*w)*V);const E=b+y*w;v=V=>Math.exp(-y*V)*(y*E*V-b)}else{const E=y*Math.sqrt(S*S-1);x=xt=>{const Mt=Math.exp(-S*y*xt),D=Math.min(E*xt,300);return o-Mt*((b+S*y*w)*Math.sinh(D)+E*w*Math.cosh(D))/E};const V=(b+S*y*w)/E,Q=S*y*V-w*E,J=S*y*w-V*E;v=xt=>{const Mt=Math.exp(-S*y*xt),D=Math.min(E*xt,300);return Mt*(Q*Math.sinh(D)+J*Math.cosh(D))}}const z={calculatedDuration:m&&h||null,velocity:E=>de(v(E)),next:E=>{if(!m&&S<1){const Q=Math.exp(-S*y*E),J=Math.sin(T*E),xt=Math.cos(T*E),Mt=o-Q*(M*J+w*xt),D=de(Q*(j*J+A*xt));return r.done=Math.abs(D)<=i&&Math.abs(o-Mt)<=a,r.value=r.done?o:Mt,r}const V=x(E);if(m)r.done=E>=h;else{const Q=de(v(E));r.done=Math.abs(Q)<=i&&Math.abs(o-V)<=a}return r.value=r.done?o:V,r},toString:()=>{const E=Math.min(Fd(z),Ir),V=Xx(Q=>z.next(E*Q).value,E,30);return E+"ms "+V},toTransition:()=>{}};return z}tl.applyToOptions=t=>{const e=pS(t,100,tl);return t.ease=e.ease,t.duration=de(e.duration),t.type="keyframes",t};const SS=5;function Zx(t,e,n){const i=Math.max(e-SS,0);return Ax(n-t(i),e-i)}function rf({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:a=10,bounceStiffness:s=500,modifyTarget:o,min:r,max:l,restDelta:u=.5,restSpeed:f}){const h=t[0],d={done:!1,value:h},m=A=>r!==void 0&&A<r||l!==void 0&&A>l,b=A=>r===void 0?l:l===void 0||Math.abs(r-A)<Math.abs(l-A)?r:l;let S=n*e;const w=h+S,y=o===void 0?w:o(w);y!==w&&(S=y-h);const p=A=>-S*Math.exp(-A/i),x=A=>y+p(A),v=A=>{const z=p(A),E=x(A);d.done=Math.abs(z)<=u,d.value=d.done?y:E};let T,M;const j=A=>{m(d.value)&&(T=A,M=tl({keyframes:[d.value,b(d.value)],velocity:Zx(x,A,d.value),damping:a,stiffness:s,restDelta:u,restSpeed:f}))};return j(0),{calculatedDuration:null,next:A=>{let z=!1;return!M&&T===void 0&&(z=!0,v(A),j(A)),T!==void 0&&A>=T?M.next(A-T):(!z&&v(A),d)}}}function wS(t,e,n){const i=[],a=n||Zn.mix||Yx,s=t.length-1;for(let o=0;o<s;o++){let r=a(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Ae:e;r=fo(l,r)}i.push(r)}return i}function TS(t,e,{clamp:n=!0,ease:i,mixer:a}={}){const s=t.length;if(Hd(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const r=wS(e,i,a),l=r.length,u=f=>{if(o&&f<t[0])return e[0];let h=0;if(l>1)for(;h<t.length-2&&!(f<t[h+1]);h++);const d=Qs(t[h],t[h+1],f);return r[h](d)};return n?f=>u(Ye(t[0],t[s-1],f)):u}function jS(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const a=Qs(0,e,i);t.push(ct(n,1,a))}}function AS(t){const e=[0];return jS(e,t.length-1),e}function CS(t,e){return t.map(n=>n*e)}function $S(t,e){return t.map(()=>e||kx).splice(0,t.length-1)}function $s({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const a=V3(i)?i.map(nm):nm(i),s={done:!1,value:e[0]},o=CS(n&&n.length===e.length?n:AS(e),t),r=TS(o,e,{ease:Array.isArray(a)?a:$S(e,a)});return{calculatedDuration:t,next:l=>(s.value=r(l),s.done=l>=t,s)}}const ES=t=>t!==null;function Bl(t,{repeat:e,repeatType:n="loop"},i,a=1){const s=t.filter(ES),r=a<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!r||i===void 0?s[r]:i}const MS={decay:rf,inertia:rf,tween:$s,keyframes:$s,spring:tl};function Qx(t){typeof t.type=="string"&&(t.type=MS[t.type])}class Pd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const zS=t=>t/100;class el extends Pd{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,a;const{motionValue:n}=this.options;n&&n.updatedAt!==Kt.now()&&this.tick(Kt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(a=(i=this.options).onStop)==null||a.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Qx(e);const{type:n=$s,repeat:i=0,repeatDelay:a=0,repeatType:s,velocity:o=0}=e;let{keyframes:r}=e;const l=n||$s;l!==$s&&typeof r[0]!="number"&&(this.mixKeyframes=fo(zS,Yx(r[0],r[1])),r=[0,100]);const u=l({...e,keyframes:r});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...r].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=Fd(u));const{calculatedDuration:f}=u;this.calculatedDuration=f,this.resolvedDuration=f+a,this.totalDuration=this.resolvedDuration*(i+1)-a,this.generator=u}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:a,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:r,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:u=0,keyframes:f,repeat:h,repeatType:d,repeatDelay:m,type:b,onUpdate:S,finalKeyframe:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-a/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const y=this.currentTime-u*(this.playbackSpeed>=0?1:-1),p=this.playbackSpeed>=0?y<0:y>a;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=a);let x=this.currentTime,v=i;if(h){const A=Math.min(this.currentTime,a)/r;let z=Math.floor(A),E=A%1;!E&&A>=1&&(E=1),E===1&&z--,z=Math.min(z,h+1),!!(z%2)&&(d==="reverse"?(E=1-E,m&&(E-=m/r)):d==="mirror"&&(v=o)),x=Ye(0,1,E)*r}let T;p?(this.delayState.value=f[0],T=this.delayState):T=v.next(x),s&&!p&&(T.value=s(T.value));let{done:M}=T;!p&&l!==null&&(M=this.playbackSpeed>=0?this.currentTime>=a:this.currentTime<=0);const j=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&M);return j&&b!==rf&&(T.value=Bl(f,this.options,w,this.speed)),S&&S(T.value),j&&this.finish(),T}then(e,n){return this.finished.then(e,n)}get duration(){return we(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+we(e)}get time(){return we(this.currentTime)}set time(e){e=de(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return Zx(i=>this.generator.next(i).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(Kt.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=we(this.currentTime))}play(){var a,s;if(this.isStopped)return;const{driver:e=hS,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(a=this.options).onPlay)==null||s.call(a);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Kt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function DS(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const li=t=>t*180/Math.PI,lf=t=>{const e=li(Math.atan2(t[1],t[0]));return cf(e)},RS={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:lf,rotateZ:lf,skewX:t=>li(Math.atan(t[1])),skewY:t=>li(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},cf=t=>(t=t%360,t<0&&(t+=360),t),cm=lf,um=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),fm=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),OS={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:um,scaleY:fm,scale:t=>(um(t)+fm(t))/2,rotateX:t=>cf(li(Math.atan2(t[6],t[5]))),rotateY:t=>cf(li(Math.atan2(-t[2],t[0]))),rotateZ:cm,rotate:cm,skewX:t=>li(Math.atan(t[4])),skewY:t=>li(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function uf(t){return t.includes("scale")?1:0}function ff(t,e){if(!t||t==="none")return uf(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,a;if(n)i=OS,a=n;else{const r=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=RS,a=r}if(!a)return uf(e);const s=i[e],o=a[1].split(",").map(VS);return typeof s=="function"?s(o):o[s]}const kS=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return ff(n,e)};function VS(t){return parseFloat(t.trim())}const Ba=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],La=new Set(Ba),dm=t=>t===Va||t===O,BS=new Set(["x","y","z"]),LS=Ba.filter(t=>!BS.has(t));function _S(t){const e=[];return LS.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Dn={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:i})=>{const a=t.max-t.min;return i==="border-box"?a:a-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:i})=>{const a=t.max-t.min;return i==="border-box"?a:a-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>ff(e,"x"),y:(t,{transform:e})=>ff(e,"y")};Dn.translateX=Dn.x;Dn.translateY=Dn.y;const mi=new Set;let df=!1,hf=!1,pf=!1;function Kx(){if(hf){const t=Array.from(mi).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const a=_S(i);a.length&&(n.set(i,a),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const a=n.get(i);a&&a.forEach(([s,o])=>{var r;(r=i.getValue(s))==null||r.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}hf=!1,df=!1,mi.forEach(t=>t.complete(pf)),mi.clear()}function Fx(){mi.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(hf=!0)})}function NS(){pf=!0,Fx(),Kx(),pf=!1}class Jd{constructor(e,n,i,a,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=a,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(mi.add(this),df||(df=!0,it.read(Fx),it.resolveKeyframes(Kx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:a}=this;if(e[0]===null){const s=a==null?void 0:a.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const r=i.readValue(n,o);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=o),a&&s===void 0&&a.set(e[0])}DS(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),mi.delete(this)}cancel(){this.state==="scheduled"&&(mi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const US=t=>t.startsWith("--");function Px(t,e,n){US(e)?t.style.setProperty(e,n):t.style[e]=n}const HS={};function Jx(t,e){const n=jx(t);return()=>HS[e]??n()}const GS=Jx(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Wx=Jx(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),cs=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,hm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:cs([0,.65,.55,1]),circOut:cs([.55,0,1,.45]),backIn:cs([.31,.01,.66,-.59]),backOut:cs([.33,1.53,.69,.99])};function Ix(t,e){if(t)return typeof t=="function"?Wx()?Xx(t,e):"ease-out":Vx(t)?cs(t):Array.isArray(t)?t.map(n=>Ix(n,e)||hm.easeOut):hm[t]}function qS(t,e,n,{delay:i=0,duration:a=300,repeat:s=0,repeatType:o="loop",ease:r="easeOut",times:l}={},u=void 0){const f={[e]:n};l&&(f.offset=l);const h=Ix(r,a);Array.isArray(h)&&(f.easing=h);const d={delay:i,duration:a,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return u&&(d.pseudoElement=u),t.animate(f,d)}function tb(t){return typeof t=="function"&&"applyToOptions"in t}function YS({type:t,...e}){return tb(t)&&Wx()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class eb extends Pd{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:a,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:r,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,Hd(typeof e.type!="string");const u=YS(e);this.animation=qS(n,i,a,u,s),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const f=Bl(a,this.options,r,this.speed);this.updateMotionValue&&this.updateMotionValue(f),Px(n,i,f),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i,a;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((a=(i=this.animation).commitStyles)==null||a.call(i))}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return we(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+we(e)}get time(){return we(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=de(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:i,observe:a}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&GS()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),i&&(this.animation.rangeEnd=i),Ae):a(this)}}const nb={anticipate:Dx,backInOut:zx,circInOut:Ox};function XS(t){return t in nb}function ZS(t){typeof t.ease=="string"&&XS(t.ease)&&(t.ease=nb[t.ease])}const Vc=10;class QS extends eb{constructor(e){ZS(e),Qx(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:a,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const r=new el({...o,autoplay:!1}),l=Math.max(Vc,Kt.now()-this.startTime),u=Ye(0,Vc,l-Vc),f=r.sample(l).value,{name:h}=this.options;s&&h&&Px(s,h,f),n.setWithVelocity(r.sample(Math.max(0,l-u)).value,f,u),r.stop()}}const pm=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ke.test(t)||t==="0")&&!t.startsWith("url("));function KS(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function FS(t,e,n,i){const a=t[0];if(a===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=pm(a,e),r=pm(s,e);return!o||!r?!1:KS(t)||(n==="spring"||tb(n))&&i}function mf(t){t.duration=0,t.type="keyframes"}const ib=new Set(["opacity","clipPath","filter","transform"]),PS=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function JS(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&PS.test(t[e]))return!0;return!1}const WS=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),IS=jx(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function t6(t){var h;const{motionValue:e,name:n,repeatDelay:i,repeatType:a,damping:s,type:o,keyframes:r}=t;if(!(((h=e==null?void 0:e.owner)==null?void 0:h.current)instanceof HTMLElement))return!1;const{onUpdate:u,transformTemplate:f}=e.owner.getProps();return IS()&&n&&(ib.has(n)||WS.has(n)&&JS(r))&&(n!=="transform"||!f)&&!u&&!i&&a!=="mirror"&&s!==0&&o!=="inertia"}const e6=40;class n6 extends Pd{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:a=0,repeatDelay:s=0,repeatType:o="loop",keyframes:r,name:l,motionValue:u,element:f,...h}){var b;super(),this.stop=()=>{var S,w;this._animation&&(this._animation.stop(),(S=this.stopTimeline)==null||S.call(this)),(w=this.keyframeResolver)==null||w.cancel()},this.createdAt=Kt.now();const d={autoplay:e,delay:n,type:i,repeat:a,repeatDelay:s,repeatType:o,name:l,motionValue:u,element:f,...h},m=(f==null?void 0:f.KeyframeResolver)||Jd;this.keyframeResolver=new m(r,(S,w,y)=>this.onKeyframesResolved(S,w,d,!y),l,u,f),(b=this.keyframeResolver)==null||b.scheduleResolve()}onKeyframesResolved(e,n,i,a){var y,p;this.keyframeResolver=void 0;const{name:s,type:o,velocity:r,delay:l,isHandoff:u,onUpdate:f}=i;this.resolvedAt=Kt.now();let h=!0;FS(e,s,o,r)||(h=!1,(Zn.instantAnimations||!l)&&(f==null||f(Bl(e,i,n))),e[0]=e[e.length-1],mf(i),i.repeat=0);const m={startTime:a?this.resolvedAt?this.resolvedAt-this.createdAt>e6?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},b=h&&!u&&t6(m),S=(p=(y=m.motionValue)==null?void 0:y.owner)==null?void 0:p.current;let w;if(b)try{w=new QS({...m,element:S})}catch{w=new el(m)}else w=new el(m);w.finished.then(()=>{this.notifyFinished()}).catch(Ae),this.pendingTimeline&&(this.stopTimeline=w.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=w}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),NS()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function ab(t,e,n,i=0,a=1){const s=Array.from(t).sort((u,f)=>u.sortNodePosition(f)).indexOf(e),o=t.size,r=(o-1)*i;return typeof n=="function"?n(s,o):a===1?s*i:r-s*i}const i6=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function a6(t){const e=i6.exec(t);if(!e)return[,];const[,n,i,a]=e;return[`--${n??i}`,a]}function sb(t,e,n=1){const[i,a]=a6(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return Sx(o)?parseFloat(o):o}return Xd(a)?sb(a,e,n+1):a}const s6={type:"spring",stiffness:500,damping:25,restSpeed:10},o6=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),r6={type:"keyframes",duration:.8},l6={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},c6=(t,{keyframes:e})=>e.length>2?r6:La.has(t)?t.startsWith("scale")?o6(e[1]):s6:l6;function ob(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function Wd(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?ob(n,t):n}const u6=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function f6(t){for(const e in t)if(!u6.has(e))return!0;return!1}const Id=(t,e,n,i={},a,s)=>o=>{const r=Wd(i,t)||{},l=r.delay||i.delay||0;let{elapsed:u=0}=i;u=u-de(l);const f={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...r,delay:-u,onUpdate:d=>{e.set(d),r.onUpdate&&r.onUpdate(d)},onComplete:()=>{o(),r.onComplete&&r.onComplete()},name:t,motionValue:e,element:s?void 0:a};f6(r)||Object.assign(f,c6(t,f)),f.duration&&(f.duration=de(f.duration)),f.repeatDelay&&(f.repeatDelay=de(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let h=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(mf(f),f.delay===0&&(h=!0)),(Zn.instantAnimations||Zn.skipAnimations||a!=null&&a.shouldSkipAnimations)&&(h=!0,mf(f),f.delay=0),f.allowFlatten=!r.type&&!r.ease,h&&!s&&e.get()!==void 0){const d=Bl(f.keyframes,r);if(d!==void 0){it.update(()=>{f.onUpdate(d),f.onComplete()});return}}return r.isSync?new el(f):new n6(f)};function mm(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function th(t,e,n,i){if(typeof e=="function"){const[a,s]=mm(i);e=e(n!==void 0?n:t.custom,a,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[a,s]=mm(i);e=e(n!==void 0?n:t.custom,a,s)}return e}function gi(t,e,n){const i=t.getProps();return th(i,e,n!==void 0?n:i.custom,t)}const rb=new Set(["width","height","top","left","right","bottom",...Ba]),gm=30,d6=t=>!isNaN(parseFloat(t));class h6{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const a=Kt.now();if(this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Kt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=d6(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Gd);const i=this.events[e].add(n);return e==="change"?()=>{i(),it.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Kt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>gm)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,gm);return Ax(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ta(t,e){return new h6(t,e)}const gf=t=>Array.isArray(t);function p6(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ta(n))}function m6(t){return gf(t)?t[t.length-1]||0:t}function g6(t,e){const n=gi(t,e);let{transitionEnd:i={},transition:a={},...s}=n||{};s={...s,...i};for(const o in s){const r=m6(s[o]);p6(t,o,r)}}const Yt=t=>!!(t&&t.getVelocity);function y6(t){return!!(Yt(t)&&t.add)}function yf(t,e){const n=t.getValue("willChange");if(y6(n))return n.add(e);if(!n&&Zn.WillChange){const i=new Zn.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function eh(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const x6="framerAppearId",lb="data-"+eh(x6);function cb(t){return t.props[lb]}function b6({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function ub(t,e,{delay:n=0,transitionOverride:i,type:a}={}){let{transition:s,transitionEnd:o,...r}=e;const l=t.getDefaultTransition();s=s?ob(s,l):l;const u=s==null?void 0:s.reduceMotion;i&&(s=i);const f=[],h=a&&t.animationState&&t.animationState.getState()[a];for(const d in r){const m=t.getValue(d,t.latestValues[d]??null),b=r[d];if(b===void 0||h&&b6(h,d))continue;const S={delay:n,...Wd(s||{},d)},w=m.get();if(w!==void 0&&!m.isAnimating()&&!Array.isArray(b)&&b===w&&!S.velocity){it.update(()=>m.set(b));continue}let y=!1;if(window.MotionHandoffAnimation){const v=cb(t);if(v){const T=window.MotionHandoffAnimation(v,d,it);T!==null&&(S.startTime=T,y=!0)}}yf(t,d);const p=u??t.shouldReduceMotion;m.start(Id(d,m,b,p&&rb.has(d)?{type:!1}:S,t,y));const x=m.animation;x&&f.push(x)}if(o){const d=()=>it.update(()=>{o&&g6(t,o)});f.length?Promise.all(f).then(d):d()}return f}function xf(t,e,n={}){var l;const i=gi(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:a=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(a=n.transitionOverride);const s=i?()=>Promise.all(ub(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:f=0,staggerChildren:h,staggerDirection:d}=a;return v6(t,e,u,f,h,d,n)}:()=>Promise.resolve(),{when:r}=a;if(r){const[u,f]=r==="beforeChildren"?[s,o]:[o,s];return u().then(()=>f())}else return Promise.all([s(),o(n.delay)])}function v6(t,e,n=0,i=0,a=0,s=1,o){const r=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),r.push(xf(l,e,{...o,delay:n+(typeof i=="function"?0:i)+ab(t.variantChildren,l,i,a,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(r)}function S6(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const a=e.map(s=>xf(t,s,n));i=Promise.all(a)}else if(typeof e=="string")i=xf(t,e,n);else{const a=typeof e=="function"?gi(t,e,n.custom):e;i=Promise.all(ub(t,a,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const w6={test:t=>t==="auto",parse:t=>t},fb=t=>e=>e.test(t),db=[Va,O,qe,yn,K3,Q3,w6],ym=t=>db.find(fb(t));function T6(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Tx(t):!0}const j6=new Set(["brightness","contrast","saturate","opacity"]);function A6(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Zd)||[];if(!i)return t;const a=n.replace(i,"");let s=j6.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+a+")"}const C6=/\b([a-z-]*)\(.*?\)/gu,bf={...ke,getAnimatableNone:t=>{const e=t.match(C6);return e?e.map(A6).join(" "):t}},vf={...ke,getAnimatableNone:t=>{const e=ke.parse(t);return ke.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},xm={...Va,transform:Math.round},$6={rotate:yn,rotateX:yn,rotateY:yn,rotateZ:yn,scale:ko,scaleX:ko,scaleY:ko,scaleZ:ko,skew:yn,skewX:yn,skewY:yn,distance:O,translateX:O,translateY:O,translateZ:O,x:O,y:O,z:O,perspective:O,transformPerspective:O,opacity:Ks,originX:am,originY:am,originZ:O},nh={borderWidth:O,borderTopWidth:O,borderRightWidth:O,borderBottomWidth:O,borderLeftWidth:O,borderRadius:O,borderTopLeftRadius:O,borderTopRightRadius:O,borderBottomRightRadius:O,borderBottomLeftRadius:O,width:O,maxWidth:O,height:O,maxHeight:O,top:O,right:O,bottom:O,left:O,inset:O,insetBlock:O,insetBlockStart:O,insetBlockEnd:O,insetInline:O,insetInlineStart:O,insetInlineEnd:O,padding:O,paddingTop:O,paddingRight:O,paddingBottom:O,paddingLeft:O,paddingBlock:O,paddingBlockStart:O,paddingBlockEnd:O,paddingInline:O,paddingInlineStart:O,paddingInlineEnd:O,margin:O,marginTop:O,marginRight:O,marginBottom:O,marginLeft:O,marginBlock:O,marginBlockStart:O,marginBlockEnd:O,marginInline:O,marginInlineStart:O,marginInlineEnd:O,fontSize:O,backgroundPositionX:O,backgroundPositionY:O,...$6,zIndex:xm,fillOpacity:Ks,strokeOpacity:Ks,numOctaves:xm},E6={...nh,color:Tt,backgroundColor:Tt,outlineColor:Tt,fill:Tt,stroke:Tt,borderColor:Tt,borderTopColor:Tt,borderRightColor:Tt,borderBottomColor:Tt,borderLeftColor:Tt,filter:bf,WebkitFilter:bf,mask:vf,WebkitMask:vf},hb=t=>E6[t],M6=new Set([bf,vf]);function pb(t,e){let n=hb(t);return M6.has(n)||(n=ke),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const z6=new Set(["auto","none","0"]);function D6(t,e,n){let i=0,a;for(;i<t.length&&!a;){const s=t[i];typeof s=="string"&&!z6.has(s)&&wa(s).values.length&&(a=t[i]),i++}if(a&&n)for(const s of e)t[s]=pb(n,a)}class R6 extends Jd{constructor(e,n,i,a,s){super(e,n,i,a,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let h=e[f];if(typeof h=="string"&&(h=h.trim(),Xd(h))){const d=sb(h,n.current);d!==void 0&&(e[f]=d),f===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!rb.has(i)||e.length!==2)return;const[a,s]=e,o=ym(a),r=ym(s),l=im(a),u=im(s);if(l!==u&&Dn[i]){this.needsMeasurement=!0;return}if(o!==r)if(dm(o)&&dm(r))for(let f=0;f<e.length;f++){const h=e[f];typeof h=="string"&&(e[f]=parseFloat(h))}else Dn[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let a=0;a<e.length;a++)(e[a]===null||T6(e[a]))&&i.push(a);i.length&&D6(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Dn[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const a=n[n.length-1];a!==void 0&&e.getValue(i,a).jump(a,!1)}measureEndState(){var r;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const a=e.getValue(n);a&&a.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=Dn[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(r=this.removedTransforms)!=null&&r.length&&this.removedTransforms.forEach(([l,u])=>{e.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function ih(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){const a=document.querySelectorAll(t);return a?Array.from(a):[]}return Array.from(t).filter(i=>i!=null)}const mb=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function ur(t){return wx(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:ah}=Bx(queueMicrotask,!1),ze={x:!1,y:!1};function gb(){return ze.x||ze.y}function O6(t){return t==="x"||t==="y"?ze[t]?null:(ze[t]=!0,()=>{ze[t]=!1}):ze.x||ze.y?null:(ze.x=ze.y=!0,()=>{ze.x=ze.y=!1})}function yb(t,e){const n=ih(t),i=new AbortController,a={passive:!0,...e,signal:i.signal};return[n,a,()=>i.abort()]}function k6(t){return!(t.pointerType==="touch"||gb())}function V6(t,e,n={}){const[i,a,s]=yb(t,n);return i.forEach(o=>{let r=!1,l=!1,u;const f=()=>{o.removeEventListener("pointerleave",b)},h=w=>{u&&(u(w),u=void 0),f()},d=w=>{r=!1,window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d),l&&(l=!1,h(w))},m=()=>{r=!0,window.addEventListener("pointerup",d,a),window.addEventListener("pointercancel",d,a)},b=w=>{if(w.pointerType!=="touch"){if(r){l=!0;return}h(w)}},S=w=>{if(!k6(w))return;l=!1;const y=e(o,w);typeof y=="function"&&(u=y,o.addEventListener("pointerleave",b,a))};o.addEventListener("pointerenter",S,a),o.addEventListener("pointerdown",m,a)}),s}const xb=(t,e)=>e?t===e?!0:xb(t,e.parentElement):!1,sh=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,B6=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function L6(t){return B6.has(t.tagName)||t.isContentEditable===!0}const _6=new Set(["INPUT","SELECT","TEXTAREA"]);function N6(t){return _6.has(t.tagName)||t.isContentEditable===!0}const fr=new WeakSet;function bm(t){return e=>{e.key==="Enter"&&t(e)}}function Bc(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const U6=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=bm(()=>{if(fr.has(n))return;Bc(n,"down");const a=bm(()=>{Bc(n,"up")}),s=()=>Bc(n,"cancel");n.addEventListener("keyup",a,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function vm(t){return sh(t)&&!gb()}const Sm=new WeakSet;function H6(t,e,n={}){const[i,a,s]=yb(t,n),o=r=>{const l=r.currentTarget;if(!vm(r)||Sm.has(r))return;fr.add(l),n.stopPropagation&&Sm.add(r);const u=e(l,r),f=(m,b)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",d),fr.has(l)&&fr.delete(l),vm(m)&&typeof u=="function"&&u(m,{success:b})},h=m=>{f(m,l===window||l===document||n.useGlobalTarget||xb(l,m.target))},d=m=>{f(m,!1)};window.addEventListener("pointerup",h,a),window.addEventListener("pointercancel",d,a)};return i.forEach(r=>{(n.useGlobalTarget?window:r).addEventListener("pointerdown",o,a),ur(r)&&(r.addEventListener("focus",u=>U6(u,a)),!L6(r)&&!r.hasAttribute("tabindex")&&(r.tabIndex=0))}),s}function oh(t){return wx(t)&&"ownerSVGElement"in t}const dr=new WeakMap;let xn;const bb=(t,e,n)=>(i,a)=>a&&a[0]?a[0][t+"Size"]:oh(i)&&"getBBox"in i?i.getBBox()[e]:i[n],G6=bb("inline","width","offsetWidth"),q6=bb("block","height","offsetHeight");function Y6({target:t,borderBoxSize:e}){var n;(n=dr.get(t))==null||n.forEach(i=>{i(t,{get width(){return G6(t,e)},get height(){return q6(t,e)}})})}function X6(t){t.forEach(Y6)}function Z6(){typeof ResizeObserver>"u"||(xn=new ResizeObserver(X6))}function Q6(t,e){xn||Z6();const n=ih(t);return n.forEach(i=>{let a=dr.get(i);a||(a=new Set,dr.set(i,a)),a.add(e),xn==null||xn.observe(i)}),()=>{n.forEach(i=>{const a=dr.get(i);a==null||a.delete(e),a!=null&&a.size||xn==null||xn.unobserve(i)})}}const hr=new Set;let Wi;function K6(){Wi=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};hr.forEach(e=>e(t))},window.addEventListener("resize",Wi)}function F6(t){return hr.add(t),Wi||K6(),()=>{hr.delete(t),!hr.size&&typeof Wi=="function"&&(window.removeEventListener("resize",Wi),Wi=void 0)}}function wm(t,e){return typeof t=="function"?F6(t):Q6(t,e)}function P6(t){return oh(t)&&t.tagName==="svg"}const J6=[...db,Tt,ke],W6=t=>J6.find(fb(t)),Tm=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ii=()=>({x:Tm(),y:Tm()}),jm=()=>({min:0,max:0}),zt=()=>({x:jm(),y:jm()}),I6=new WeakMap;function Ll(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Fs(t){return typeof t=="string"||Array.isArray(t)}const rh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],lh=["initial",...rh];function _l(t){return Ll(t.animate)||lh.some(e=>Fs(t[e]))}function vb(t){return!!(_l(t)||t.variants)}function t8(t,e,n){for(const i in e){const a=e[i],s=n[i];if(Yt(a))t.addValue(i,a);else if(Yt(s))t.addValue(i,Ta(a,{owner:t}));else if(s!==a)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(a):o.hasAnimated||o.set(a)}else{const o=t.getStaticValue(i);t.addValue(i,Ta(o!==void 0?o:a,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Sf={current:null},Sb={current:!1},e8=typeof window<"u";function n8(){if(Sb.current=!0,!!e8)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Sf.current=t.matches;t.addEventListener("change",e),e()}else Sf.current=!1}const Am=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let nl={};function wb(t){nl=t}function i8(){return nl}class a8{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:a,skipAnimations:s,blockInitialAnimation:o,visualState:r},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Jd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=Kt.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,it.render(this.render,!1,!0))};const{latestValues:u,renderState:f}=r;this.latestValues=u,this.baseTarget={...u},this.initialValues=n.initial?{...u}:{},this.renderState=f,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=a,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=_l(n),this.isVariantNode=vb(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in d){const b=d[m];u[m]!==void 0&&Yt(b)&&b.set(u[m])}}mount(e){var n,i;if(this.hasBeenMounted)for(const a in this.initialValues)(n=this.values.get(a))==null||n.jump(this.initialValues[a]),this.latestValues[a]=this.initialValues[a];this.current=e,I6.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,s)=>this.bindToMotionValue(s,a)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Sb.current||n8(),this.shouldReduceMotion=Sf.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Qn(this.notifyUpdate),Qn(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&ib.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:r,times:l,ease:u,duration:f}=n.accelerate,h=new eb({element:this.current,name:e,keyframes:r,times:l,ease:u,duration:de(f)}),d=o(h);this.valueSubscriptions.set(e,()=>{d(),h.cancel()});return}const i=La.has(e);i&&this.onBindTransform&&this.onBindTransform();const a=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&it.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{a(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in nl){const n=nl[e];if(!n)continue;const{isEnabled:i,Feature:a}=n;if(!this.features[e]&&a&&i(this.props)&&(this.features[e]=new a(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):zt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Am.length;i++){const a=Am[i];this.propEventSubscriptions[a]&&(this.propEventSubscriptions[a](),delete this.propEventSubscriptions[a]);const s="on"+a,o=e[s];o&&(this.propEventSubscriptions[a]=this.on(a,o))}this.prevMotionValues=t8(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Ta(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(Sx(i)||Tx(i))?i=parseFloat(i):!W6(i)&&ke.test(n)&&(i=pb(e,n)),this.setBaseTarget(e,Yt(i)?i.get():i)),Yt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=th(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!Yt(a)?a:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Gd),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){ah.render(this.render)}}class Tb extends a8{constructor(){super(...arguments),this.KeyframeResolver=R6}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Yt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Pn{constructor(e){this.isMounted=!1,this.node=e}update(){}}function jb({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function s8({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function o8(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Lc(t){return t===void 0||t===1}function wf({scale:t,scaleX:e,scaleY:n}){return!Lc(t)||!Lc(e)||!Lc(n)}function si(t){return wf(t)||Ab(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Ab(t){return Cm(t.x)||Cm(t.y)}function Cm(t){return t&&t!=="0%"}function il(t,e,n){const i=t-n,a=e*i;return n+a}function $m(t,e,n,i,a){return a!==void 0&&(t=il(t,a,i)),il(t,n,i)+e}function Tf(t,e=0,n=1,i,a){t.min=$m(t.min,e,n,i,a),t.max=$m(t.max,e,n,i,a)}function Cb(t,{x:e,y:n}){Tf(t.x,e.translate,e.scale,e.originPoint),Tf(t.y,n.translate,n.scale,n.originPoint)}const Em=.999999999999,Mm=1.0000000000001;function r8(t,e,n,i=!1){var r;const a=n.length;if(!a)return;e.x=e.y=1;let s,o;for(let l=0;l<a;l++){s=n[l],o=s.projectionDelta;const{visualElement:u}=s.options;u&&u.props.style&&u.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(_e(t.x,-s.scroll.offset.x),_e(t.y,-s.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Cb(t,o)),i&&si(s.latestValues)&&pr(t,s.latestValues,(r=s.layout)==null?void 0:r.layoutBox))}e.x<Mm&&e.x>Em&&(e.x=1),e.y<Mm&&e.y>Em&&(e.y=1)}function _e(t,e){t.min+=e,t.max+=e}function zm(t,e,n,i,a=.5){const s=ct(t.min,t.max,a);Tf(t,e,n,s,i)}function Dm(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function pr(t,e,n){const i=n??t;zm(t.x,Dm(e.x,i.x),e.scaleX,e.scale,e.originX),zm(t.y,Dm(e.y,i.y),e.scaleY,e.scale,e.originY)}function $b(t,e){return jb(o8(t.getBoundingClientRect(),e))}function l8(t,e,n){const i=$b(t,n),{scroll:a}=e;return a&&(_e(i.x,a.offset.x),_e(i.y,a.offset.y)),i}const c8={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},u8=Ba.length;function f8(t,e,n){let i="",a=!0;for(let s=0;s<u8;s++){const o=Ba[s],r=t[o];if(r===void 0)continue;let l=!0;if(typeof r=="number")l=r===(o.startsWith("scale")?1:0);else{const u=parseFloat(r);l=o.startsWith("scale")?u===1:u===0}if(!l||n){const u=mb(r,nh[o]);if(!l){a=!1;const f=c8[o]||o;i+=`${f}(${u}) `}n&&(e[o]=u)}}return i=i.trim(),n?i=n(e,a?"":i):a&&(i="none"),i}function ch(t,e,n){const{style:i,vars:a,transformOrigin:s}=t;let o=!1,r=!1;for(const l in e){const u=e[l];if(La.has(l)){o=!0;continue}else if(_x(l)){a[l]=u;continue}else{const f=mb(u,nh[l]);l.startsWith("origin")?(r=!0,s[l]=f):i[l]=f}}if(e.transform||(o||n?i.transform=f8(e,t.transform,n):i.transform&&(i.transform="none")),r){const{originX:l="50%",originY:u="50%",originZ:f=0}=s;i.transformOrigin=`${l} ${u} ${f}`}}function Eb(t,{style:e,vars:n},i,a){const s=t.style;let o;for(o in e)s[o]=e[o];a==null||a.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function Rm(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ia={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(O.test(t))t=parseFloat(t);else return t;const n=Rm(t,e.target.x),i=Rm(t,e.target.y);return`${n}% ${i}%`}},d8={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,a=ke.parse(t);if(a.length>5)return i;const s=ke.createTransformer(t),o=typeof a[0]!="number"?1:0,r=n.x.scale*e.x,l=n.y.scale*e.y;a[0+o]/=r,a[1+o]/=l;const u=ct(r,l,.5);return typeof a[2+o]=="number"&&(a[2+o]/=u),typeof a[3+o]=="number"&&(a[3+o]/=u),s(a)}},jf={borderRadius:{...Ia,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ia,borderTopRightRadius:Ia,borderBottomLeftRadius:Ia,borderBottomRightRadius:Ia,boxShadow:d8};function Mb(t,{layout:e,layoutId:n}){return La.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!jf[t]||t==="opacity")}function uh(t,e,n){var o;const i=t.style,a=e==null?void 0:e.style,s={};if(!i)return s;for(const r in i)(Yt(i[r])||a&&Yt(a[r])||Mb(r,t)||((o=n==null?void 0:n.getValue(r))==null?void 0:o.liveStyle)!==void 0)&&(s[r]=i[r]);return s}function h8(t){return window.getComputedStyle(t)}class p8 extends Tb{constructor(){super(...arguments),this.type="html",this.renderInstance=Eb}readValueFromInstance(e,n){var i;if(La.has(n))return(i=this.projection)!=null&&i.isProjecting?uf(n):kS(e,n);{const a=h8(e),s=(_x(n)?a.getPropertyValue(n):a[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return $b(e,n)}build(e,n,i){ch(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return uh(e,n,i)}}const m8={offset:"stroke-dashoffset",array:"stroke-dasharray"},g8={offset:"strokeDashoffset",array:"strokeDasharray"};function y8(t,e,n=1,i=0,a=!0){t.pathLength=1;const s=a?m8:g8;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}const x8=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function zb(t,{attrX:e,attrY:n,attrScale:i,pathLength:a,pathSpacing:s=1,pathOffset:o=0,...r},l,u,f){if(ch(t,r,u),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:d}=t;h.transform&&(d.transform=h.transform,delete h.transform),(d.transform||h.transformOrigin)&&(d.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),d.transform&&(d.transformBox=(f==null?void 0:f.transformBox)??"fill-box",delete h.transformBox);for(const m of x8)h[m]!==void 0&&(d[m]=h[m],delete h[m]);e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),i!==void 0&&(h.scale=i),a!==void 0&&y8(h,a,s,o,!1)}const Db=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Rb=t=>typeof t=="string"&&t.toLowerCase()==="svg";function b8(t,e,n,i){Eb(t,e,void 0,i);for(const a in e.attrs)t.setAttribute(Db.has(a)?a:eh(a),e.attrs[a])}function Ob(t,e,n){const i=uh(t,e,n);for(const a in t)if(Yt(t[a])||Yt(e[a])){const s=Ba.indexOf(a)!==-1?"attr"+a.charAt(0).toUpperCase()+a.substring(1):a;i[s]=t[a]}return i}class v8 extends Tb{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=zt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(La.has(n)){const i=hb(n);return i&&i.default||0}return n=Db.has(n)?n:eh(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return Ob(e,n,i)}build(e,n,i){zb(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,a){b8(e,n,i,a)}mount(e){this.isSVGTag=Rb(e.tagName),super.mount(e)}}const S8=lh.length;function kb(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?kb(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<S8;n++){const i=lh[n],a=t.props[i];(Fs(a)||a===!1)&&(e[i]=a)}return e}function Vb(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const w8=[...rh].reverse(),T8=rh.length;function j8(t){return e=>Promise.all(e.map(({animation:n,options:i})=>S6(t,n,i)))}function A8(t){let e=j8(t),n=Om(),i=!0,a=!1;const s=u=>(f,h)=>{var m;const d=gi(t,h,u==="exit"?(m=t.presenceContext)==null?void 0:m.custom:void 0);if(d){const{transition:b,transitionEnd:S,...w}=d;f={...f,...w,...S}}return f};function o(u){e=u(t)}function r(u){const{props:f}=t,h=kb(t.parent)||{},d=[],m=new Set;let b={},S=1/0;for(let y=0;y<T8;y++){const p=w8[y],x=n[p],v=f[p]!==void 0?f[p]:h[p],T=Fs(v),M=p===u?x.isActive:null;M===!1&&(S=y);let j=v===h[p]&&v!==f[p]&&T;if(j&&(i||a)&&t.manuallyAnimateOnMount&&(j=!1),x.protectedKeys={...b},!x.isActive&&M===null||!v&&!x.prevProp||Ll(v)||typeof v=="boolean")continue;if(p==="exit"&&x.isActive&&M!==!0){x.prevResolvedValues&&(b={...b,...x.prevResolvedValues});continue}const A=C8(x.prevProp,v);let z=A||p===u&&x.isActive&&!j&&T||y>S&&T,E=!1;const V=Array.isArray(v)?v:[v];let Q=V.reduce(s(p),{});M===!1&&(Q={});const{prevResolvedValues:J={}}=x,xt={...J,...Q},Mt=k=>{z=!0,m.has(k)&&(E=!0,m.delete(k)),x.needsAnimating[k]=!0;const L=t.getValue(k);L&&(L.liveStyle=!1)};for(const k in xt){const L=Q[k],G=J[k];if(b.hasOwnProperty(k))continue;let kt=!1;gf(L)&&gf(G)?kt=!Vb(L,G):kt=L!==G,kt?L!=null?Mt(k):m.add(k):L!==void 0&&m.has(k)?Mt(k):x.protectedKeys[k]=!0}x.prevProp=v,x.prevResolvedValues=Q,x.isActive&&(b={...b,...Q}),(i||a)&&t.blockInitialAnimation&&(z=!1);const D=j&&A;z&&(!D||E)&&d.push(...V.map(k=>{const L={type:p};if(typeof k=="string"&&(i||a)&&!D&&t.manuallyAnimateOnMount&&t.parent){const{parent:G}=t,kt=gi(G,k);if(G.enteringChildren&&kt){const{delayChildren:wt}=kt.transition||{};L.delay=ab(G.enteringChildren,t,wt)}}return{animation:k,options:L}}))}if(m.size){const y={};if(typeof f.initial!="boolean"){const p=gi(t,Array.isArray(f.initial)?f.initial[0]:f.initial);p&&p.transition&&(y.transition=p.transition)}m.forEach(p=>{const x=t.getBaseTarget(p),v=t.getValue(p);v&&(v.liveStyle=!0),y[p]=x??null}),d.push({animation:y})}let w=!!d.length;return i&&(f.initial===!1||f.initial===f.animate)&&!t.manuallyAnimateOnMount&&(w=!1),i=!1,a=!1,w?e(d):Promise.resolve()}function l(u,f){var d;if(n[u].isActive===f)return Promise.resolve();(d=t.variantChildren)==null||d.forEach(m=>{var b;return(b=m.animationState)==null?void 0:b.setActive(u,f)}),n[u].isActive=f;const h=r(u);for(const m in n)n[m].protectedKeys={};return h}return{animateChanges:r,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Om(),a=!0}}}function C8(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Vb(e,t):!1}function In(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Om(){return{animate:In(!0),whileInView:In(),whileHover:In(),whileTap:In(),whileDrag:In(),whileFocus:In(),exit:In()}}function Af(t,e){t.min=e.min,t.max=e.max}function Me(t,e){Af(t.x,e.x),Af(t.y,e.y)}function km(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const Bb=1e-4,$8=1-Bb,E8=1+Bb,Lb=.01,M8=0-Lb,z8=0+Lb;function Ft(t){return t.max-t.min}function D8(t,e,n){return Math.abs(t-e)<=n}function Vm(t,e,n,i=.5){t.origin=i,t.originPoint=ct(e.min,e.max,t.origin),t.scale=Ft(n)/Ft(e),t.translate=ct(n.min,n.max,t.origin)-t.originPoint,(t.scale>=$8&&t.scale<=E8||isNaN(t.scale))&&(t.scale=1),(t.translate>=M8&&t.translate<=z8||isNaN(t.translate))&&(t.translate=0)}function Es(t,e,n,i){Vm(t.x,e.x,n.x,i?i.originX:void 0),Vm(t.y,e.y,n.y,i?i.originY:void 0)}function Bm(t,e,n,i=0){const a=i?ct(n.min,n.max,i):n.min;t.min=a+e.min,t.max=t.min+Ft(e)}function R8(t,e,n,i){Bm(t.x,e.x,n.x,i==null?void 0:i.x),Bm(t.y,e.y,n.y,i==null?void 0:i.y)}function Lm(t,e,n,i=0){const a=i?ct(n.min,n.max,i):n.min;t.min=e.min-a,t.max=t.min+Ft(e)}function al(t,e,n,i){Lm(t.x,e.x,n.x,i==null?void 0:i.x),Lm(t.y,e.y,n.y,i==null?void 0:i.y)}function _m(t,e,n,i,a){return t-=e,t=il(t,1/n,i),a!==void 0&&(t=il(t,1/a,i)),t}function O8(t,e=0,n=1,i=.5,a,s=t,o=t){if(qe.test(e)&&(e=parseFloat(e),e=ct(o.min,o.max,e/100)-o.min),typeof e!="number")return;let r=ct(s.min,s.max,i);t===s&&(r-=e),t.min=_m(t.min,e,n,r,a),t.max=_m(t.max,e,n,r,a)}function Nm(t,e,[n,i,a],s,o){O8(t,e[n],e[i],e[a],e.scale,s,o)}const k8=["x","scaleX","originX"],V8=["y","scaleY","originY"];function Um(t,e,n,i){Nm(t.x,e,k8,n?n.x:void 0,i?i.x:void 0),Nm(t.y,e,V8,n?n.y:void 0,i?i.y:void 0)}function Hm(t){return t.translate===0&&t.scale===1}function _b(t){return Hm(t.x)&&Hm(t.y)}function Gm(t,e){return t.min===e.min&&t.max===e.max}function B8(t,e){return Gm(t.x,e.x)&&Gm(t.y,e.y)}function qm(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function Nb(t,e){return qm(t.x,e.x)&&qm(t.y,e.y)}function Ym(t){return Ft(t.x)/Ft(t.y)}function Xm(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function Le(t){return[t("x"),t("y")]}function L8(t,e,n){let i="";const a=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((a||s||o)&&(i=`translate3d(${a}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:u,rotate:f,rotateX:h,rotateY:d,skewX:m,skewY:b}=n;u&&(i=`perspective(${u}px) ${i}`),f&&(i+=`rotate(${f}deg) `),h&&(i+=`rotateX(${h}deg) `),d&&(i+=`rotateY(${d}deg) `),m&&(i+=`skewX(${m}deg) `),b&&(i+=`skewY(${b}deg) `)}const r=t.x.scale*e.x,l=t.y.scale*e.y;return(r!==1||l!==1)&&(i+=`scale(${r}, ${l})`),i||"none"}const Ub=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],_8=Ub.length,Zm=t=>typeof t=="string"?parseFloat(t):t,Qm=t=>typeof t=="number"||O.test(t);function N8(t,e,n,i,a,s){a?(t.opacity=ct(0,n.opacity??1,U8(i)),t.opacityExit=ct(e.opacity??1,0,H8(i))):s&&(t.opacity=ct(e.opacity??1,n.opacity??1,i));for(let o=0;o<_8;o++){const r=Ub[o];let l=Km(e,r),u=Km(n,r);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Qm(l)===Qm(u)?(t[r]=Math.max(ct(Zm(l),Zm(u),i),0),(qe.test(u)||qe.test(l))&&(t[r]+="%")):t[r]=u}(e.rotate||n.rotate)&&(t.rotate=ct(e.rotate||0,n.rotate||0,i))}function Km(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const U8=Hb(0,.5,Rx),H8=Hb(.5,.95,Ae);function Hb(t,e,n){return i=>i<t?0:i>e?1:n(Qs(t,e,i))}function G8(t,e,n){const i=Yt(t)?t:Ta(t);return i.start(Id("",i,e,n)),i.animation}function Ps(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const q8=(t,e)=>t.depth-e.depth;class Y8{constructor(){this.children=[],this.isDirty=!1}add(e){Ud(this.children,e),this.isDirty=!0}remove(e){Jr(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(q8),this.isDirty=!1,this.children.forEach(e)}}function X8(t,e){const n=Kt.now(),i=({timestamp:a})=>{const s=a-n;s>=e&&(Qn(i),t(s-e))};return it.setup(i,!0),()=>Qn(i)}function mr(t){return Yt(t)?t.get():t}class Z8{constructor(){this.members=[]}add(e){Ud(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const a=i.instance;(!a||a.isConnected===!1)&&!i.snapshot&&(Jr(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(Jr(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let i=this.members.indexOf(e)-1;i>=0;i--){const a=this.members[i];if(a.isPresent!==!1&&((n=a.instance)==null?void 0:n.isConnected)!==!1)return this.promote(a),!0}return!1}promote(e,n){var a;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:s}=i.options,{layoutDependency:o}=e.options;(s===void 0||s!==o)&&(e.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(a=e.root)!=null&&a.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,i,a,s,o;(i=(n=e.options).onExitComplete)==null||i.call(n),(o=(a=e.resumingFrom)==null?void 0:(s=a.options).onExitComplete)==null||o.call(s)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const gr={hasAnimatedSinceResize:!0,hasEverUpdated:!1},_c=["","X","Y","Z"],Q8=1e3;let K8=0;function Nc(t,e,n,i){const{latestValues:a}=e;a[t]&&(n[t]=a[t],e.setStaticValue(t,0),i&&(i[t]=0))}function Gb(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=cb(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:a,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",it,!(a||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&Gb(i)}function qb({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:a}){return class{constructor(o={},r=e==null?void 0:e()){this.id=K8++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(J8),this.nodes.forEach(iw),this.nodes.forEach(aw),this.nodes.forEach(W8)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=r?r.root||r:this,this.path=r?[...r.path,r]:[],this.parent=r,this.depth=r?r.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Y8)}addEventListener(o,r){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Gd),this.eventHandlers.get(o).add(r)}notifyListeners(o,...r){const l=this.eventHandlers.get(o);l&&l.notify(...r)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=oh(o)&&!P6(o),this.instance=o;const{layoutId:r,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||r)&&(this.isLayoutDirty=!0),t){let f,h=0;const d=()=>this.root.updateBlockedByResize=!1;it.read(()=>{h=window.innerWidth}),t(o,()=>{const m=window.innerWidth;m!==h&&(h=m,this.root.updateBlockedByResize=!0,f&&f(),f=X8(d,250),gr.hasAnimatedSinceResize&&(gr.hasAnimatedSinceResize=!1,this.nodes.forEach(Jm)))})}r&&this.root.registerSharedNode(r,this),this.options.animate!==!1&&u&&(r||l)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeLayoutChanged:d,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||u.getDefaultTransition()||cw,{onLayoutAnimationStart:S,onLayoutAnimationComplete:w}=u.getProps(),y=!this.targetLayout||!Nb(this.targetLayout,m),p=!h&&d;if(this.options.layoutRoot||this.resumeFrom||p||h&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const x={...Wd(b,"layout"),onPlay:S,onComplete:w};(u.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x),this.setAnimationOrigin(f,p)}else h||Jm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Qn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(sw),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Gb(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const h=this.path[f];h.shouldResetTransform=!0,(typeof h.latestValues.x=="string"||typeof h.latestValues.y=="string")&&(h.isLayoutDirty=!0),h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:r,layout:l}=this.options;if(r===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(tw),this.nodes.forEach(Fm);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Pm);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(ew),this.nodes.forEach(nw),this.nodes.forEach(F8),this.nodes.forEach(P8)):this.nodes.forEach(Pm),this.clearAllSnapshots();const r=Kt.now();Nt.delta=Ye(0,1e3/60,r-Nt.timestamp),Nt.timestamp=r,Nt.isProcessing=!0,zc.update.process(Nt),zc.preRender.process(Nt),zc.render.process(Nt),Nt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ah.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(I8),this.sharedNodes.forEach(ow)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,it.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){it.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ft(this.snapshot.measuredBox.x)&&!Ft(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=zt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:r}=this.options;r&&r.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let r=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(r=!1),r&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!a)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,r=this.projectionDelta&&!_b(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,f=u!==this.prevTransformTemplateValue;o&&this.instance&&(r||si(this.latestValues)||f)&&(a(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const r=this.measurePageBox();let l=this.removeElementScroll(r);return o&&(l=this.removeTransform(l)),uw(l),{animationId:this.root.animationId,measuredBox:r,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:o}=this.options;if(!o)return zt();const r=o.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(fw))){const{scroll:f}=this.root;f&&(_e(r.x,f.offset.x),_e(r.y,f.offset.y))}return r}removeElementScroll(o){var l;const r=zt();if(Me(r,o),(l=this.scroll)!=null&&l.wasRoot)return r;for(let u=0;u<this.path.length;u++){const f=this.path[u],{scroll:h,options:d}=f;f!==this.root&&h&&d.layoutScroll&&(h.wasRoot&&Me(r,o),_e(r.x,h.offset.x),_e(r.y,h.offset.y))}return r}applyTransform(o,r=!1,l){var f,h;const u=l||zt();Me(u,o);for(let d=0;d<this.path.length;d++){const m=this.path[d];!r&&m.options.layoutScroll&&m.scroll&&m!==m.root&&(_e(u.x,-m.scroll.offset.x),_e(u.y,-m.scroll.offset.y)),si(m.latestValues)&&pr(u,m.latestValues,(f=m.layout)==null?void 0:f.layoutBox)}return si(this.latestValues)&&pr(u,this.latestValues,(h=this.layout)==null?void 0:h.layoutBox),u}removeTransform(o){var l;const r=zt();Me(r,o);for(let u=0;u<this.path.length;u++){const f=this.path[u];if(!si(f.latestValues))continue;let h;f.instance&&(wf(f.latestValues)&&f.updateSnapshot(),h=zt(),Me(h,f.measurePageBox())),Um(r,f.latestValues,(l=f.snapshot)==null?void 0:l.layoutBox,h)}return si(this.latestValues)&&Um(r,this.latestValues),r}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Nt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var m;const r=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=r.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=r.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=r.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==r;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:h}=this.options;if(!this.layout||!(f||h))return;this.resolvedRelativeTargetAt=Nt.timestamp;const d=this.getClosestProjectingParent();d&&this.linkedParentVersion!==d.layoutVersion&&!d.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&d&&d.layout?this.createRelativeTarget(d,this.layout.layoutBox,d.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=zt(),this.targetWithTransforms=zt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),R8(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Me(this.target,this.layout.layoutBox),Cb(this.target,this.targetDelta)):Me(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?this.createRelativeTarget(d,this.target,d.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||wf(this.parent.latestValues)||Ab(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,r,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=zt(),this.relativeTargetOrigin=zt(),al(this.relativeTargetOrigin,r,l,this.options.layoutAnchor||void 0),Me(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var b;const o=this.getLead(),r=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty)&&(l=!1),r&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Nt.timestamp&&(l=!1),l)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;Me(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,d=this.treeScale.y;r8(this.layoutCorrected,this.treeScale,this.path,r),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=zt());const{target:m}=o;if(!m){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(km(this.prevProjectionDelta.x,this.projectionDelta.x),km(this.prevProjectionDelta.y,this.projectionDelta.y)),Es(this.projectionDelta,this.layoutCorrected,m,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==d||!Xm(this.projectionDelta.x,this.prevProjectionDelta.x)||!Xm(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var r;if((r=this.options.visualElement)==null||r.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ii(),this.projectionDelta=Ii(),this.projectionDeltaWithTransform=Ii()}setAnimationOrigin(o,r=!1){const l=this.snapshot,u=l?l.latestValues:{},f={...this.latestValues},h=Ii();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!r;const d=zt(),m=l?l.source:void 0,b=this.layout?this.layout.source:void 0,S=m!==b,w=this.getStack(),y=!w||w.members.length<=1,p=!!(S&&!y&&this.options.crossfade===!0&&!this.path.some(lw));this.animationProgress=0;let x;this.mixTargetDelta=v=>{const T=v/1e3;Wm(h.x,o.x,T),Wm(h.y,o.y,T),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(al(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),rw(this.relativeTarget,this.relativeTargetOrigin,d,T),x&&B8(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=zt()),Me(x,this.relativeTarget)),S&&(this.animationValues=f,N8(f,u,this.latestValues,T,p,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var r,l,u;this.notifyListeners("animationStart"),(r=this.currentAnimation)==null||r.stop(),(u=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||u.stop(),this.pendingAnimation&&(Qn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=it.update(()=>{gr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ta(0)),this.motionValue.jump(0,!1),this.currentAnimation=G8(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),o.onUpdate&&o.onUpdate(f)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Q8),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:r,target:l,layout:u,latestValues:f}=o;if(!(!r||!l||!u)){if(this!==o&&this.layout&&u&&Yb(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||zt();const h=Ft(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const d=Ft(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}Me(r,l),pr(r,f),Es(this.projectionDeltaWithTransform,this.layoutCorrected,r,f)}}registerSharedNode(o,r){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Z8),this.sharedNodes.get(o).add(r);const u=r.options.initialPromotionConfig;r.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(r):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var r;const{layoutId:o}=this.options;return o?((r=this.getStack())==null?void 0:r.lead)||this:this}getPrevLead(){var r;const{layoutId:o}=this.options;return o?(r=this.getStack())==null?void 0:r.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:r,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),r&&this.setOptions({transition:r})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let r=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(r=!0),!r)return;const u={};l.z&&Nc("z",o,u,this.animationValues);for(let f=0;f<_c.length;f++)Nc(`rotate${_c[f]}`,o,u,this.animationValues),Nc(`skew${_c[f]}`,o,u,this.animationValues);o.render();for(const f in u)o.setStaticValue(f,u[f]),this.animationValues&&(this.animationValues[f]=u[f]);o.scheduleRender()}applyProjectionStyles(o,r){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=mr(r==null?void 0:r.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=mr(r==null?void 0:r.pointerEvents)||""),this.hasProjected&&!si(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const f=u.animationValues||u.latestValues;this.applyTransformsToTarget();let h=L8(this.projectionDeltaWithTransform,this.treeScale,f);l&&(h=l(f,h)),o.transform=h;const{x:d,y:m}=this.projectionDelta;o.transformOrigin=`${d.origin*100}% ${m.origin*100}% 0`,u.animationValues?o.opacity=u===this?f.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:o.opacity=u===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const b in jf){if(f[b]===void 0)continue;const{correct:S,applyTo:w,isCSSVariable:y}=jf[b],p=h==="none"?f[b]:S(f[b],u);if(w){const x=w.length;for(let v=0;v<x;v++)o[w[v]]=p}else y?this.options.visualElement.renderState.vars[b]=p:o[b]=p}this.options.layoutId&&(o.pointerEvents=u===this?mr(r==null?void 0:r.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var r;return(r=o.currentAnimation)==null?void 0:r.stop()}),this.root.nodes.forEach(Fm),this.root.sharedNodes.clear()}}}function F8(t){t.updateLayout()}function P8(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:a}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;if(s==="size")Le(h=>{const d=o?e.measuredBox[h]:e.layoutBox[h],m=Ft(d);d.min=i[h].min,d.max=d.min+m});else if(s==="x"||s==="y"){const h=s==="x"?"y":"x";Af(o?e.measuredBox[h]:e.layoutBox[h],i[h])}else Yb(s,e.layoutBox,i)&&Le(h=>{const d=o?e.measuredBox[h]:e.layoutBox[h],m=Ft(i[h]);d.max=d.min+m,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+m)});const r=Ii();Es(r,i,e.layoutBox);const l=Ii();o?Es(l,t.applyTransform(a,!0),e.measuredBox):Es(l,i,e.layoutBox);const u=!_b(r);let f=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:d,layout:m}=h;if(d&&m){const b=t.options.layoutAnchor||void 0,S=zt();al(S,e.layoutBox,d.layoutBox,b);const w=zt();al(w,i,m.layoutBox,b),Nb(S,w)||(f=!0),h.options.layoutRoot&&(t.relativeTarget=w,t.relativeTargetOrigin=S,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:r,hasLayoutChanged:u,hasRelativeLayoutChanged:f})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function J8(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function W8(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function I8(t){t.clearSnapshot()}function Fm(t){t.clearMeasurements()}function tw(t){t.isLayoutDirty=!0,t.updateLayout()}function Pm(t){t.isLayoutDirty=!1}function ew(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function nw(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Jm(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function iw(t){t.resolveTargetDelta()}function aw(t){t.calcProjection()}function sw(t){t.resetSkewAndRotation()}function ow(t){t.removeLeadSnapshot()}function Wm(t,e,n){t.translate=ct(e.translate,0,n),t.scale=ct(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Im(t,e,n,i){t.min=ct(e.min,n.min,i),t.max=ct(e.max,n.max,i)}function rw(t,e,n,i){Im(t.x,e.x,n.x,i),Im(t.y,e.y,n.y,i)}function lw(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const cw={duration:.45,ease:[.4,0,.1,1]},t0=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),e0=t0("applewebkit/")&&!t0("chrome/")?Math.round:Ae;function n0(t){t.min=e0(t.min),t.max=e0(t.max)}function uw(t){n0(t.x),n0(t.y)}function Yb(t,e,n){return t==="position"||t==="preserve-aspect"&&!D8(Ym(e),Ym(n),.2)}function fw(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const dw=qb({attachResizeListener:(t,e)=>Ps(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Uc={current:void 0},Xb=qb({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Uc.current){const t=new dw({});t.mount(window),t.setOptions({layoutScroll:!0}),Uc.current=t}return Uc.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),fh=$.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function i0(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function hw(...t){return e=>{let n=!1;const i=t.map(a=>{const s=i0(a,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let a=0;a<i.length;a++){const s=i[a];typeof s=="function"?s():i0(t[a],null)}}}}function pw(...t){return $.useCallback(hw(...t),t)}class mw extends $.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(ur(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=n.offsetParent,a=ur(i)&&i.offsetWidth||0,s=ur(i)&&i.offsetHeight||0,o=getComputedStyle(n),r=this.props.sizeRef.current;r.height=parseFloat(o.height),r.width=parseFloat(o.width),r.top=n.offsetTop,r.left=n.offsetLeft,r.right=a-r.width-r.left,r.bottom=s-r.height-r.top}return null}componentDidUpdate(){}render(){return this.props.children}}function gw({children:t,isPresent:e,anchorX:n,anchorY:i,root:a,pop:s}){var d;const o=$.useId(),r=$.useRef(null),l=$.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:u}=$.useContext(fh),f=((d=t.props)==null?void 0:d.ref)??(t==null?void 0:t.ref),h=pw(r,f);return $.useInsertionEffect(()=>{const{width:m,height:b,top:S,left:w,right:y,bottom:p}=l.current;if(e||s===!1||!r.current||!m||!b)return;const x=n==="left"?`left: ${w}`:`right: ${y}`,v=i==="bottom"?`bottom: ${p}`:`top: ${S}`;r.current.dataset.motionPopId=o;const T=document.createElement("style");u&&(T.nonce=u);const M=a??document.head;return M.appendChild(T),T.sheet&&T.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${b}px !important;
            ${x}px !important;
            ${v}px !important;
          }
        `),()=>{var j;(j=r.current)==null||j.removeAttribute("data-motion-pop-id"),M.contains(T)&&M.removeChild(T)}},[e]),c.jsx(mw,{isPresent:e,childRef:r,sizeRef:l,pop:s,children:s===!1?t:$.cloneElement(t,{ref:h})})}const yw=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:a,presenceAffectsLayout:s,mode:o,anchorX:r,anchorY:l,root:u})=>{const f=Nd(xw),h=$.useId();let d=!0,m=$.useMemo(()=>(d=!1,{id:h,initial:e,isPresent:n,custom:a,onExitComplete:b=>{f.set(b,!0);for(const S of f.values())if(!S)return;i&&i()},register:b=>(f.set(b,!1),()=>f.delete(b))}),[n,f,i]);return s&&d&&(m={...m}),$.useMemo(()=>{f.forEach((b,S)=>f.set(S,!1))},[n]),$.useEffect(()=>{!n&&!f.size&&i&&i()},[n]),t=c.jsx(gw,{pop:o==="popLayout",isPresent:n,anchorX:r,anchorY:l,root:u,children:t}),c.jsx(Vl.Provider,{value:m,children:t})};function xw(){return new Map}function Zb(t=!0){const e=$.useContext(Vl);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:a}=e,s=$.useId();$.useEffect(()=>{if(t)return a(s)},[t]);const o=$.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const Vo=t=>t.key||"";function a0(t){const e=[];return $.Children.forEach(t,n=>{$.isValidElement(n)&&e.push(n)}),e}const Ci=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:a=!0,mode:s="sync",propagate:o=!1,anchorX:r="left",anchorY:l="top",root:u})=>{const[f,h]=Zb(o),d=$.useMemo(()=>a0(t),[t]),m=o&&!f?[]:d.map(Vo),b=$.useRef(!0),S=$.useRef(d),w=Nd(()=>new Map),y=$.useRef(new Set),[p,x]=$.useState(d),[v,T]=$.useState(d);vx(()=>{b.current=!1,S.current=d;for(let A=0;A<v.length;A++){const z=Vo(v[A]);m.includes(z)?(w.delete(z),y.current.delete(z)):w.get(z)!==!0&&w.set(z,!1)}},[v,m.length,m.join("-")]);const M=[];if(d!==p){let A=[...d];for(let z=0;z<v.length;z++){const E=v[z],V=Vo(E);m.includes(V)||(A.splice(z,0,E),M.push(E))}return s==="wait"&&M.length&&(A=M),T(a0(A)),x(d),null}const{forceRender:j}=$.useContext(_d);return c.jsx(c.Fragment,{children:v.map(A=>{const z=Vo(A),E=o&&!f?!1:d===v||m.includes(z),V=()=>{if(y.current.has(z))return;if(w.has(z))y.current.add(z),w.set(z,!0);else return;let Q=!0;w.forEach(J=>{J||(Q=!1)}),Q&&(j==null||j(),T(S.current),o&&(h==null||h()),i&&i())};return c.jsx(yw,{isPresent:E,initial:!b.current||n?void 0:!1,custom:e,presenceAffectsLayout:a,mode:s,root:u,onExitComplete:E?void 0:V,anchorX:r,anchorY:l,children:A},z)})})},Qb=$.createContext({strict:!1}),s0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let o0=!1;function bw(){if(o0)return;const t={};for(const e in s0)t[e]={isEnabled:n=>s0[e].some(i=>!!n[i])};wb(t),o0=!0}function Kb(){return bw(),i8()}function vw(t){const e=Kb();for(const n in t)e[n]={...e[n],...t[n]};wb(e)}const Sw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function sl(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Sw.has(t)}let Fb=t=>!sl(t);function ww(t){typeof t=="function"&&(Fb=e=>e.startsWith("on")?!sl(e):t(e))}try{ww(require("@emotion/is-prop-valid").default)}catch{}function Tw(t,e,n){const i={};for(const a in t)a==="values"&&typeof t.values=="object"||Yt(t[a])||(Fb(a)||n===!0&&sl(a)||!e&&!sl(a)||t.draggable&&a.startsWith("onDrag"))&&(i[a]=t[a]);return i}const Nl=$.createContext({});function jw(t,e){if(_l(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Fs(n)?n:void 0,animate:Fs(i)?i:void 0}}return t.inherit!==!1?e:{}}function Aw(t){const{initial:e,animate:n}=jw(t,$.useContext(Nl));return $.useMemo(()=>({initial:e,animate:n}),[r0(e),r0(n)])}function r0(t){return Array.isArray(t)?t.join(" "):t}const dh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Pb(t,e,n){for(const i in e)!Yt(e[i])&&!Mb(i,n)&&(t[i]=e[i])}function Cw({transformTemplate:t},e){return $.useMemo(()=>{const n=dh();return ch(n,e,t),Object.assign({},n.vars,n.style)},[e])}function $w(t,e){const n=t.style||{},i={};return Pb(i,n,t),Object.assign(i,Cw(t,e)),i}function Ew(t,e){const n={},i=$w(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const Jb=()=>({...dh(),attrs:{}});function Mw(t,e,n,i){const a=$.useMemo(()=>{const s=Jb();return zb(s,e,Rb(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};Pb(s,t.style,t),a.style={...s,...a.style}}return a}const zw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function hh(t){return typeof t!="string"||t.includes("-")?!1:!!(zw.indexOf(t)>-1||/[A-Z]/u.test(t))}function Dw(t,e,n,{latestValues:i},a,s=!1,o){const l=(o??hh(t)?Mw:Ew)(e,i,a,t),u=Tw(e,typeof t=="string",s),f=t!==$.Fragment?{...u,...l,ref:n}:{},{children:h}=e,d=$.useMemo(()=>Yt(h)?h.get():h,[h]);return $.createElement(t,{...f,children:d})}function Rw({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,a){return{latestValues:Ow(n,i,a,t),renderState:e()}}function Ow(t,e,n,i){const a={},s=i(t,{});for(const d in s)a[d]=mr(s[d]);let{initial:o,animate:r}=t;const l=_l(t),u=vb(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),r===void 0&&(r=e.animate));let f=n?n.initial===!1:!1;f=f||o===!1;const h=f?r:o;if(h&&typeof h!="boolean"&&!Ll(h)){const d=Array.isArray(h)?h:[h];for(let m=0;m<d.length;m++){const b=th(t,d[m]);if(b){const{transitionEnd:S,transition:w,...y}=b;for(const p in y){let x=y[p];if(Array.isArray(x)){const v=f?x.length-1:0;x=x[v]}x!==null&&(a[p]=x)}for(const p in S)a[p]=S[p]}}}return a}const Wb=t=>(e,n)=>{const i=$.useContext(Nl),a=$.useContext(Vl),s=()=>Rw(t,e,i,a);return n?s():Nd(s)},kw=Wb({scrapeMotionValuesFromProps:uh,createRenderState:dh}),Vw=Wb({scrapeMotionValuesFromProps:Ob,createRenderState:Jb}),Bw=Symbol.for("motionComponentSymbol");function Lw(t,e,n){const i=$.useRef(n);$.useInsertionEffect(()=>{i.current=n});const a=$.useRef(null);return $.useCallback(s=>{var r;s&&((r=t.onMount)==null||r.call(t,s));const o=i.current;if(typeof o=="function")if(s){const l=o(s);typeof l=="function"&&(a.current=l)}else a.current?(a.current(),a.current=null):o(s);else o&&(o.current=s);e&&(s?e.mount(s):e.unmount())},[e])}const Ib=$.createContext({});function _i(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function _w(t,e,n,i,a,s){var x,v;const{visualElement:o}=$.useContext(Nl),r=$.useContext(Qb),l=$.useContext(Vl),u=$.useContext(fh),f=u.reducedMotion,h=u.skipAnimations,d=$.useRef(null),m=$.useRef(!1);i=i||r.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:f,skipAnimations:h,isSVG:s}),m.current&&d.current&&(d.current.manuallyAnimateOnMount=!0));const b=d.current,S=$.useContext(Ib);b&&!b.projection&&a&&(b.type==="html"||b.type==="svg")&&Nw(d.current,n,a,S);const w=$.useRef(!1);$.useInsertionEffect(()=>{b&&w.current&&b.update(n,l)});const y=n[lb],p=$.useRef(!!y&&typeof window<"u"&&!((x=window.MotionHandoffIsComplete)!=null&&x.call(window,y))&&((v=window.MotionHasOptimisedAnimation)==null?void 0:v.call(window,y)));return vx(()=>{m.current=!0,b&&(w.current=!0,window.MotionIsMounted=!0,b.updateFeatures(),b.scheduleRenderMicrotask(),p.current&&b.animationState&&b.animationState.animateChanges())}),$.useEffect(()=>{b&&(!p.current&&b.animationState&&b.animationState.animateChanges(),p.current&&(queueMicrotask(()=>{var T;(T=window.MotionHandoffMarkAsComplete)==null||T.call(window,y)}),p.current=!1),b.enteringChildren=void 0)}),b}function Nw(t,e,n,i){const{layoutId:a,layout:s,drag:o,dragConstraints:r,layoutScroll:l,layoutRoot:u,layoutAnchor:f,layoutCrossfade:h}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:t2(t.parent)),t.projection.setOptions({layoutId:a,layout:s,alwaysMeasureLayout:!!o||r&&_i(r),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:h,layoutScroll:l,layoutRoot:u,layoutAnchor:f})}function t2(t){if(t)return t.options.allowProjection!==!1?t.projection:t2(t.parent)}function Hc(t,{forwardMotionProps:e=!1,type:n}={},i,a){i&&vw(i);const s=n?n==="svg":hh(t),o=s?Vw:kw;function r(u,f){let h;const d={...$.useContext(fh),...u,layoutId:Uw(u)},{isStatic:m}=d,b=Aw(u),S=o(u,m);if(!m&&typeof window<"u"){Hw();const w=Gw(d);h=w.MeasureLayout,b.visualElement=_w(t,S,d,a,w.ProjectionNode,s)}return c.jsxs(Nl.Provider,{value:b,children:[h&&b.visualElement?c.jsx(h,{visualElement:b.visualElement,...d}):null,Dw(t,u,Lw(S,b.visualElement,f),S,m,e,s)]})}r.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=$.forwardRef(r);return l[Bw]=t,l}function Uw({layoutId:t}){const e=$.useContext(_d).id;return e&&t!==void 0?e+"-"+t:t}function Hw(t,e){$.useContext(Qb).strict}function Gw(t){const e=Kb(),{drag:n,layout:i}=e;if(!n&&!i)return{};const a={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(t)||i!=null&&i.isEnabled(t)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}function qw(t,e){if(typeof Proxy>"u")return Hc;const n=new Map,i=(s,o)=>Hc(s,o,t,e),a=(s,o)=>i(s,o);return new Proxy(a,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,Hc(o,void 0,t,e)),n.get(o))})}const Yw=(t,e)=>e.isSVG??hh(t)?new v8(e):new p8(e,{allowProjection:t!==$.Fragment});class Xw extends Pn{constructor(e){super(e),e.animationState||(e.animationState=A8(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Ll(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let Zw=0;class Qw extends Pn{constructor(){super(...arguments),this.id=Zw++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:o,custom:r}=this.node.getProps();if(typeof o=="string"){const l=gi(this.node,o,r);if(l){const{transition:u,transitionEnd:f,...h}=l;for(const d in h)(s=this.node.getValue(d))==null||s.jump(h[d])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const a=this.node.animationState.setActive("exit",!e);n&&!e&&a.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const Kw={animation:{Feature:Xw},exit:{Feature:Qw}};function mo(t){return{point:{x:t.pageX,y:t.pageY}}}const Fw=t=>e=>sh(e)&&t(e,mo(e));function Ms(t,e,n,i){return Ps(t,e,Fw(n),i)}const e2=({current:t})=>t?t.ownerDocument.defaultView:null,l0=(t,e)=>Math.abs(t-e);function Pw(t,e){const n=l0(t.x,e.x),i=l0(t.y,e.y);return Math.sqrt(n**2+i**2)}const c0=new Set(["auto","scroll"]);class n2{constructor(e,n,{transformPagePoint:i,contextWindow:a=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=m=>{this.handleScroll(m.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Bo(this.lastRawMoveEventInfo,this.transformPagePoint));const m=Gc(this.lastMoveEventInfo,this.history),b=this.startEvent!==null,S=Pw(m.offset,{x:0,y:0})>=this.distanceThreshold;if(!b&&!S)return;const{point:w}=m,{timestamp:y}=Nt;this.history.push({...w,timestamp:y});const{onStart:p,onMove:x}=this.handlers;b||(p&&p(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,m)},this.handlePointerMove=(m,b)=>{this.lastMoveEvent=m,this.lastRawMoveEventInfo=b,this.lastMoveEventInfo=Bo(b,this.transformPagePoint),it.update(this.updatePoint,!0)},this.handlePointerUp=(m,b)=>{this.end();const{onEnd:S,onSessionEnd:w,resumeAnimation:y}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=Gc(m.type==="pointercancel"?this.lastMoveEventInfo:Bo(b,this.transformPagePoint),this.history);this.startEvent&&S&&S(m,p),w&&w(m,p)},!sh(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=a||window;const l=mo(e),u=Bo(l,this.transformPagePoint),{point:f}=u,{timestamp:h}=Nt;this.history=[{...f,timestamp:h}];const{onSessionStart:d}=n;d&&d(e,Gc(u,this.history)),this.removeListeners=fo(Ms(this.contextWindow,"pointermove",this.handlePointerMove),Ms(this.contextWindow,"pointerup",this.handlePointerUp),Ms(this.contextWindow,"pointercancel",this.handlePointerUp)),r&&this.startScrollTracking(r)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(c0.has(i.overflowX)||c0.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,a=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:a.x-n.x,y:a.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,a),it.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Qn(this.updatePoint)}}function Bo(t,e){return e?{point:e(t.point)}:t}function u0(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Gc({point:t},e){return{point:t,delta:u0(t,i2(e)),offset:u0(t,Jw(e)),velocity:Ww(e,.1)}}function Jw(t){return t[0]}function i2(t){return t[t.length-1]}function Ww(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const a=i2(t);for(;n>=0&&(i=t[n],!(a.timestamp-i.timestamp>de(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&a.timestamp-i.timestamp>de(e)*2&&(i=t[1]);const s=we(a.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(a.x-i.x)/s,y:(a.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Iw(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?ct(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?ct(n,t,i.max):Math.min(t,n)),t}function f0(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function t7(t,{top:e,left:n,bottom:i,right:a}){return{x:f0(t.x,n,a),y:f0(t.y,e,i)}}function d0(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function e7(t,e){return{x:d0(t.x,e.x),y:d0(t.y,e.y)}}function n7(t,e){let n=.5;const i=Ft(t),a=Ft(e);return a>i?n=Qs(e.min,e.max-i,t.min):i>a&&(n=Qs(t.min,t.max-a,e.min)),Ye(0,1,n)}function i7(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Cf=.35;function a7(t=Cf){return t===!1?t=0:t===!0&&(t=Cf),{x:h0(t,"left","right"),y:h0(t,"top","bottom")}}function h0(t,e,n){return{min:p0(t,e),max:p0(t,n)}}function p0(t,e){return typeof t=="number"?t:t[e]||0}const s7=new WeakMap;class o7{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=zt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const s=h=>{n&&this.snapToCursor(mo(h).point),this.stopAnimation()},o=(h,d)=>{const{drag:m,dragPropagation:b,onDragStart:S}=this.getProps();if(m&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=O6(m),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=d,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Le(y=>{let p=this.getAxisMotionValue(y).get()||0;if(qe.test(p)){const{projection:x}=this.visualElement;if(x&&x.layout){const v=x.layout.layoutBox[y];v&&(p=Ft(v)*(parseFloat(p)/100))}}this.originPoint[y]=p}),S&&it.update(()=>S(h,d),!1,!0),yf(this.visualElement,"transform");const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},r=(h,d)=>{this.latestPointerEvent=h,this.latestPanInfo=d;const{dragPropagation:m,dragDirectionLock:b,onDirectionLock:S,onDrag:w}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:y}=d;if(b&&this.currentDirection===null){this.currentDirection=l7(y),this.currentDirection!==null&&S&&S(this.currentDirection);return}this.updateAxis("x",d.point,y),this.updateAxis("y",d.point,y),this.visualElement.render(),w&&it.update(()=>w(h,d),!1,!0)},l=(h,d)=>{this.latestPointerEvent=h,this.latestPanInfo=d,this.stop(h,d),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>{const{dragSnapToOrigin:h}=this.getProps();(h||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:f}=this.getProps();this.panSession=new n2(e,{onSessionStart:s,onStart:o,onMove:r,onSessionEnd:l,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,distanceThreshold:i,contextWindow:e2(this.visualElement),element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,a=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!a||!i)return;const{velocity:o}=a;this.startAnimation(o);const{onDragEnd:r}=this.getProps();r&&it.postRender(()=>r(i,a))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:a}=this.getProps();if(!i||!Lo(e,a,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=Iw(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,a=this.constraints;e&&_i(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=t7(i.layoutBox,e):this.constraints=!1,this.elastic=a7(n),a!==this.constraints&&!_i(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&Le(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=i7(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!_i(e))return!1;const i=e.current,{projection:a}=this.visualElement;if(!a||!a.layout)return!1;const s=l8(i,a.root,this.visualElement.getTransformPagePoint());let o=e7(a.layout.layoutBox,s);if(n){const r=n(s8(o));this.hasMutatedConstraints=!!r,r&&(o=jb(r))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:a,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:r}=this.getProps(),l=this.constraints||{},u=Le(f=>{if(!Lo(f,n,this.currentDirection))return;let h=l&&l[f]||{};(o===!0||o===f)&&(h={min:0,max:0});const d=a?200:1e6,m=a?40:1e7,b={type:"inertia",velocity:i?e[f]:0,bounceStiffness:d,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...s,...h};return this.startAxisValueAnimation(f,b)});return Promise.all(u).then(r)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return yf(this.visualElement,e),i.start(Id(e,i,0,n,this.visualElement,!1))}stopAnimation(){Le(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),a=i[n];return a||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Le(n=>{const{drag:i}=this.getProps();if(!Lo(n,i,this.currentDirection))return;const{projection:a}=this.visualElement,s=this.getAxisMotionValue(n);if(a&&a.layout){const{min:o,max:r}=a.layout.layoutBox[n],l=s.get()||0;s.set(e[n]-ct(o,r,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!_i(n)||!i||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};Le(o=>{const r=this.getAxisMotionValue(o);if(r&&this.constraints!==!1){const l=r.get();a[o]=n7({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),Le(o=>{if(!Lo(o,e,null))return;const r=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];r.set(ct(l,u,a[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;s7.set(this.visualElement,this);const e=this.visualElement.current,n=Ms(e,"pointerdown",u=>{const{drag:f,dragListener:h=!0}=this.getProps(),d=u.target,m=d!==e&&N6(d);f&&h&&!m&&this.start(u)});let i;const a=()=>{const{dragConstraints:u}=this.getProps();_i(u)&&u.current&&(this.constraints=this.resolveRefConstraints(),i||(i=r7(e,u.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",a);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),it.read(a);const r=Ps(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:u,hasLayoutChanged:f})=>{this.isDragging&&f&&(Le(h=>{const d=this.getAxisMotionValue(h);d&&(this.originPoint[h]+=u[h].translate,d.set(d.get()+u[h].translate))}),this.visualElement.render())});return()=>{r(),n(),o(),l&&l(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:a=!1,dragConstraints:s=!1,dragElastic:o=Cf,dragMomentum:r=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:a,dragConstraints:s,dragElastic:o,dragMomentum:r}}}function m0(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function r7(t,e,n){const i=wm(t,m0(n)),a=wm(e,m0(n));return()=>{i(),a()}}function Lo(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function l7(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class c7 extends Pn{constructor(e){super(e),this.removeGroupControls=Ae,this.removeListeners=Ae,this.controls=new o7(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ae}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const qc=t=>(e,n)=>{t&&it.update(()=>t(e,n),!1,!0)};class u7 extends Pn{constructor(){super(...arguments),this.removePointerDownListener=Ae}onPointerDown(e){this.session=new n2(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:e2(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:a}=this.node.getProps();return{onSessionStart:qc(e),onStart:qc(n),onMove:qc(i),onEnd:(s,o)=>{delete this.session,a&&it.postRender(()=>a(s,o))}}}mount(){this.removePointerDownListener=Ms(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Yc=!1;class f7 extends $.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:a}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&a&&i.register(s),Yc&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),gr.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:a,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),Yc=!0,a||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||it.postRender(()=>{const r=o.getStack();(!r||!r.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=n,i.root.didUpdate(),ah.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:a}=e;Yc=!0,a&&(a.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(a),i&&i.deregister&&i.deregister(a))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function a2(t){const[e,n]=Zb(),i=$.useContext(_d);return c.jsx(f7,{...t,layoutGroup:i,switchLayoutGroup:$.useContext(Ib),isPresent:e,safeToRemove:n})}const d7={pan:{Feature:u7},drag:{Feature:c7,ProjectionNode:Xb,MeasureLayout:a2}};function g0(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const a="onHover"+n,s=i[a];s&&it.postRender(()=>s(e,mo(e)))}class h7 extends Pn{mount(){const{current:e}=this.node;e&&(this.unmount=V6(e,(n,i)=>(g0(this.node,i,"Start"),a=>g0(this.node,a,"End"))))}unmount(){}}class p7 extends Pn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=fo(Ps(this.node.current,"focus",()=>this.onFocus()),Ps(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function y0(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const a="onTap"+(n==="End"?"":n),s=i[a];s&&it.postRender(()=>s(e,mo(e)))}class m7 extends Pn{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=H6(e,(a,s)=>(y0(this.node,s,"Start"),(o,{success:r})=>y0(this.node,o,r?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const $f=new WeakMap,Xc=new WeakMap,g7=t=>{const e=$f.get(t.target);e&&e(t)},y7=t=>{t.forEach(g7)};function x7({root:t,...e}){const n=t||document;Xc.has(n)||Xc.set(n,{});const i=Xc.get(n),a=JSON.stringify(e);return i[a]||(i[a]=new IntersectionObserver(y7,{root:t,...e})),i[a]}function b7(t,e,n){const i=x7(e);return $f.set(t,n),i.observe(t),()=>{$f.delete(t),i.unobserve(t)}}const v7={some:0,all:1};class S7 extends Pn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:a="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof a=="number"?a:v7[a]},r=u=>{const{isIntersecting:f}=u;if(this.isInView===f||(this.isInView=f,s&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:h,onViewportLeave:d}=this.node.getProps(),m=f?h:d;m&&m(u)};this.stopObserver=b7(this.node.current,o,r)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(w7(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function w7({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const T7={inView:{Feature:S7},tap:{Feature:m7},focus:{Feature:p7},hover:{Feature:h7}},j7={layout:{ProjectionNode:Xb,MeasureLayout:a2}},A7={...Kw,...T7,...d7,...j7},R=qw(A7,Yw),C7={some:0,all:1};function $7(t,e,{root:n,margin:i,amount:a="some"}={}){const s=ih(t),o=new WeakMap,r=u=>{u.forEach(f=>{const h=o.get(f.target);if(f.isIntersecting!==!!h)if(f.isIntersecting){const d=e(f.target,f);typeof d=="function"?o.set(f.target,d):l.unobserve(f.target)}else typeof h=="function"&&(h(f),o.delete(f.target))})},l=new IntersectionObserver(r,{root:n,rootMargin:i,threshold:typeof a=="number"?a:C7[a]});return s.forEach(u=>l.observe(u)),()=>l.disconnect()}function E7(t,{root:e,margin:n,amount:i,once:a=!1,initial:s=!1}={}){const[o,r]=$.useState(s);return $.useEffect(()=>{if(!t.current||a&&o)return;const l=()=>(r(!0),a?void 0:()=>r(!1)),u={root:e&&e.current||void 0,margin:n,amount:i};return $7(t.current,l,u)},[e,t,n,a,i]),o}const nt={company:{name:"Biztek Solutions",tagline:"Software que mueve negocios",description:"Creamos software a medida para que dejes atrás las planillas, conectes tus sistemas y tu equipo recupere horas. De la idea al lanzamiento en semanas, no en meses."},contact:{email:"solutionsbiztek@gmail.com",whatsapp:"+5492345659559"},social:{linkedin:"https://linkedin.com/company/biztek-solutions",instagram:"https://instagram.com/bizteksolutions"},heroRotator:["distribuidoras","e-commerce","logística","PyMEs","tu negocio"],services:[{id:"web-mobile",title:"Aplicaciones web y mobile",description:"Una plataforma a medida para tu negocio, que abre rápido y crece con vos. Pensada para que la usen tus clientes y tu equipo desde la compu o el celular.",icon:"code",size:"wide"},{id:"integraciones",title:"Conexión entre sistemas",description:"Hacemos que tus herramientas hablen entre sí: facturación, ventas, pagos, WhatsApp, mapas. Sin cargar lo mismo dos veces ni copiar datos a mano.",icon:"integration",size:"square"},{id:"automatizacion",title:"Automatización de tareas",description:"Sacamos del medio el trabajo manual y repetitivo: pedidos, facturas, avisos, reportes. Tu equipo dedica el tiempo a lo que de verdad importa.",icon:"automation",size:"square"},{id:"cloud-devops",title:"Infraestructura y puesta online",description:"Tu sistema online, seguro y disponible 24/7. Nos encargamos del hosting, los respaldos, el certificado de seguridad y el monitoreo para que vos no pienses en eso.",icon:"cloud",size:"tall"},{id:"data-iot",title:"Datos y trazabilidad",description:"Tableros en vivo para ver cómo va tu negocio, seguimiento de envíos en el mapa y reportes claros para tomar mejores decisiones.",icon:"iot",size:"wide"},{id:"consultoria",title:"Acompañamiento técnico",description:"¿Ya tenés un sistema y no sabés si está bien? Lo revisamos, te decimos qué conviene mejorar y sumamos experiencia a tu equipo.",icon:"consulting",size:"square"}],process:[{step:"01",title:"Conocer tu negocio",description:"Antes de proponer nada, escuchamos. Entendemos cómo trabajás hoy, dónde se pierde tiempo y qué te haría la diferencia."},{step:"02",title:"Diseñar la solución",description:"Te mostramos cómo va a verse y funcionar antes de empezar a construir. Si algo no convence, lo cambiamos ahí, sin costo."},{step:"03",title:"Construir paso a paso",description:"Cada semana o dos te mostramos el avance y vos decidís el rumbo. Ves cosas reales funcionando, no diapositivas."},{step:"04",title:"Probar y lanzar",description:"Revisamos que todo funcione bien y lo ponemos online sin interrumpir tu operación. Quedan los respaldos y el monitoreo activos desde el día uno."},{step:"05",title:"Acompañarte después",description:"No desaparecemos al entregar. Seguimos cerca para resolver dudas, mejorar lo que haga falta y crecer con tu negocio."}],projects:[{id:"abastolink",slug:"abastolink",eyebrow:"Caso real · Plataforma entre empresas",title:"AbastoLink",subtitle:"Plataforma para conectar distribuidoras con sus compradores",problem:"Las distribuidoras manejaban todo entre mensajes de WhatsApp, planillas de Excel y llamados. No sabían qué stock tenían, dónde estaba cada pedido ni cuánto vendían. Cada jornada terminaba siendo un rompecabezas hecho a mano.",solution:"Armamos un solo lugar donde distribuidoras y compradores se encuentran: catálogo online, pedidos en vivo, mapa con el recorrido de cada entrega, números claros de venta y descuentos personalizados por cliente. Todo el día a día ordenado en una sola pantalla.",highlights:[{label:"Tiempo del pedido",value:"↓ 70%"},{label:"Errores en entregas",value:"↓ 85%"},{label:"Trazabilidad",value:"100%"}],stack:["React 19","Redux Toolkit","Node.js","PostgreSQL","Mapbox GL","Recharts"],image:"/images/abastolink-dashboard.png",url:null}],faq:[{q:"¿Cuánto tarda un proyecto?",a:"Una primera versión funcionando en 4 a 8 semanas. Un producto completo entre 3 y 6 meses, según el alcance. Cada una o dos semanas te mostramos el avance para que veas resultados reales."},{q:"¿Pueden trabajar sobre un sistema viejo que ya tengo?",a:"Sí. Podemos conectar tu sistema actual con uno nuevo y migrar de a poco, sin que dejes de operar. Cambiamos lo que conviene y conservamos lo que funciona."},{q:"¿Pueden seguir atendiendo el sistema después del lanzamiento?",a:"Sí. Ofrecemos planes mensuales de soporte con tiempos de respuesta garantizados, monitoreo activo y horas para mejoras continuas."},{q:"¿Trabajan con clientes fuera de Argentina?",a:"Sí. Facturamos en dólares al exterior y atendemos en español e inglés. Ya trabajamos con clientes de Latinoamérica y Europa."}]},s2="/assets/logo-inverted-BGIN7i0r.png",M7=g(R.nav)`
  position: fixed;
  top: 18px;
  left: 0;
  right: 0;
  z-index: 1000;
  pointer-events: none;
  padding: 0 ${({theme:t})=>t.spacing.lg};
  transition: top ${({theme:t})=>t.transitions.normal};

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    top: 12px;
    padding: 0 ${({theme:t})=>t.spacing.md};
  }
`,z7=g.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: all;
  min-height: 60px;
  padding: 0.5rem 0.75rem 0.5rem 1.25rem;
  background: ${({theme:t})=>t.colors.bgGlass};
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  box-shadow: ${({theme:t})=>t.shadows.md};
  transition: border-color ${({theme:t})=>t.transitions.normal},
    box-shadow ${({theme:t})=>t.transitions.normal};

  ${({$scrolled:t,theme:e})=>t&&Ai`
      border-color: ${e.colors.borderHover};
      box-shadow: ${e.shadows.lg};
    `}

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: 0.4rem 0.5rem 0.4rem 0.9rem;
    min-height: 52px;
  }
`,D7=g.a`
  display: flex;
  align-items: center;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  transition: opacity ${({theme:t})=>t.transitions.fast};

  img {
    height: 36px;
    width: auto;
    object-fit: contain;
    display: block;
    transition: height ${({theme:t})=>t.transitions.fast};
  }

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    img {
      height: 30px;
    }
  }
`,R7=g.ul`
  display: flex;
  gap: ${({theme:t})=>t.spacing.lg};
  list-style: none;
  align-items: center;

  @media (max-width: ${({theme:t})=>t.breakpoints.desktop}) {
    display: none;
  }
`,O7=g.a`
  color: ${({theme:t})=>t.colors.textSecondary};
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: -0.005em;
  transition: color ${({theme:t})=>t.transitions.fast};
  position: relative;

  &:hover {
    color: ${({theme:t})=>t.colors.text};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({theme:t})=>t.gradients.brand};
    border-radius: 1px;
    transition: width 0.32s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  &:hover::after {
    width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }
  }
`,k7=g.a`
  padding: 0.55rem 1.1rem;
  background: ${({theme:t})=>t.gradients.brand};
  color: ${({theme:t})=>t.colors.bg};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: -0.005em;
  transition: transform ${({theme:t})=>t.transitions.fast},
    box-shadow ${({theme:t})=>t.transitions.normal};
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06) inset;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({theme:t})=>t.shadows.glow},
      0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  }

  @media (max-width: ${({theme:t})=>t.breakpoints.desktop}) {
    display: none;
  }
`,V7=g.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: ${({theme:t})=>t.breakpoints.desktop}) {
    display: flex;
  }

  span {
    width: 22px;
    height: 2px;
    background-color: ${({theme:t})=>t.colors.text};
    border-radius: 2px;
    transition: all ${({theme:t})=>t.transitions.fast};
    transform-origin: center;

    &:nth-child(1) {
      transform: ${({$isOpen:t})=>t?"rotate(45deg) translateY(6px)":"none"};
    }

    &:nth-child(2) {
      opacity: ${({$isOpen:t})=>t?"0":"1"};
    }

    &:nth-child(3) {
      transform: ${({$isOpen:t})=>t?"rotate(-45deg) translateY(-6px)":"none"};
    }
  }
`,B7=g(R.div)`
  position: fixed;
  top: 84px;
  left: ${({theme:t})=>t.spacing.md};
  right: ${({theme:t})=>t.spacing.md};
  pointer-events: all;
  background: ${({theme:t})=>t.colors.bgGlass};
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.lg};
  padding: ${({theme:t})=>t.spacing.md};
  box-shadow: ${({theme:t})=>t.shadows.lg};
  display: none;

  @media (max-width: ${({theme:t})=>t.breakpoints.desktop}) {
    display: block;
  }
`,L7=g.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,_7=g.a`
  display: block;
  color: ${({theme:t})=>t.colors.textSecondary};
  font-weight: 500;
  font-size: 1rem;
  padding: 0.75rem 0.9rem;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  transition: all ${({theme:t})=>t.transitions.fast};

  &:hover {
    background-color: ${({theme:t})=>t.colors.bgCardHover};
    color: ${({theme:t})=>t.colors.text};
  }
`,N7=g.a`
  display: block;
  margin-top: ${({theme:t})=>t.spacing.sm};
  padding: 0.85rem 1rem;
  background: ${({theme:t})=>t.gradients.brand};
  color: ${({theme:t})=>t.colors.bg};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-weight: 600;
  text-align: center;
  font-size: 0.95rem;
`;function U7(){const[t,e]=$.useState(!1),[n,i]=$.useState(!1);$.useEffect(()=>{const o=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[]);const a=[{label:"Servicios",href:"#servicios"},{label:"Cómo trabajamos",href:"#proceso"},{label:"Tecnologías",href:"#tecnologias"},{label:"Clientes",href:"#clientes"},{label:"Contacto",href:"#contacto"}],s=()=>{i(!1)};return c.jsxs(M7,{initial:{y:-100},animate:{y:0},transition:{duration:.5},children:[c.jsxs(z7,{$scrolled:t,children:[c.jsx(D7,{href:"#hero","aria-label":`${(nt==null?void 0:nt.name)??"Biztek"} - Inicio`,children:c.jsx("img",{src:s2,alt:"Logo"})}),c.jsx(R7,{children:a.map(o=>c.jsx("li",{children:c.jsx(O7,{href:o.href,children:o.label})},o.href))}),c.jsx(k7,{href:"#contacto",children:"Contactanos"}),c.jsxs(V7,{onClick:()=>i(!n),$isOpen:n,"aria-label":"Menú de navegación","aria-expanded":n,children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]})]}),c.jsx(Ci,{children:n&&c.jsxs(B7,{initial:{opacity:0,y:-12},animate:{opacity:1,y:0},exit:{opacity:0,y:-12},transition:{duration:.2},children:[c.jsx(L7,{children:a.map(o=>c.jsx("li",{children:c.jsx(_7,{href:o.href,onClick:s,children:o.label})},o.href))}),c.jsx(N7,{href:"#contacto",onClick:s,children:"Contactanos"})]})})]})}const _o=[{step:"01",label:"Charlamos",title:"Entendemos tu negocio",desc:"Te escuchamos a vos y a tu equipo. Identificamos qué te frena hoy y dónde se pierde tiempo.",items:[{kind:"done",text:"Reunión con tu equipo"},{kind:"done",text:"Mapeamos cómo trabajás hoy"},{kind:"doing",text:"Detectamos cuellos de botella"}],progress:22},{step:"02",label:"Diseño",title:"Te mostramos cómo va a ser",desc:"Antes de construir, ves cada pantalla en una versión interactiva. Ajustamos hasta que quede como querés.",items:[{kind:"done",text:"Pantallas listas para revisar"},{kind:"done",text:"Probás el flujo desde tu compu"},{kind:"doing",text:"Aprobás antes de construir"}],progress:41},{step:"03",label:"Construcción",title:"Construimos en partes chicas",desc:"Cada 1 o 2 semanas te mostramos el avance. Ves cómo crece tu producto en tiempo real.",items:[{kind:"done",text:"Demo en vivo cada semana"},{kind:"done",text:"Tu feedback aplicado al día siguiente"},{kind:"doing",text:"Sin sorpresas al final"}],progress:64},{step:"04",label:"Lanzamiento",title:"Lanzamos tu producto",desc:"Probamos cada función, blindamos la seguridad y lo subimos sin que tus usuarios noten nada.",items:[{kind:"done",text:"Todo probado antes de salir"},{kind:"done",text:"Conexión segura punta a punta"},{kind:"doing",text:"Cero tiempo fuera de servicio"}],progress:86},{step:"05",label:"En vivo",title:"Te acompañamos después",desc:"Vigilamos que todo funcione, escuchamos a tus usuarios y vamos sumando mejoras.",items:[{kind:"done",text:"Funcionando el 99,98% del tiempo"},{kind:"done",text:"Soporte cuando lo necesites"},{kind:"doing",text:"Mejoras nuevas cada mes"}],progress:100}],H7=ka`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(40px, -30px); }
`,G7=ka`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-50px, 40px); }
`,q7=ka`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`,Y7=g.section`
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 8rem 0 4rem;
  isolation: isolate;
`,X7=g.div`
  position: absolute;
  inset: 0;
  background: ${({theme:t})=>t.gradients.radial};
  z-index: -2;
`,o2=g.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: -1;
  pointer-events: none;
  will-change: transform;
`,Z7=g(o2)`
  width: 480px;
  height: 480px;
  background: radial-gradient(circle, rgba(6, 215, 255, 0.35), transparent 70%);
  top: -120px;
  left: -100px;
  animation: ${H7} 16s ease-in-out infinite;
`,Q7=g(o2)`
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, rgba(147, 51, 234, 0.3), transparent 70%);
  bottom: -160px;
  right: -120px;
  animation: ${G7} 18s ease-in-out infinite;
`,K7=g.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
  z-index: -1;
`,F7=g.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({theme:t})=>t.spacing.lg};
  z-index: 2;

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: 0 ${({theme:t})=>t.spacing.md};
  }
`,P7=g.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:t})=>t.spacing.xl};
  text-align: center;
  max-width: 920px;
  margin: 0 auto;
`,J7=g(R.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0 auto;
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  background: ${({theme:t})=>t.colors.bgCard};
  backdrop-filter: blur(12px);
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.78rem;
  font-weight: 500;
  color: ${({theme:t})=>t.colors.textSecondary};
  letter-spacing: 0.08em;
  width: fit-content;
`,W7=g.span`
  position: relative;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({theme:t})=>t.colors.accent};
  box-shadow: 0 0 0 0 ${({theme:t})=>t.colors.accentGlow};
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 ${({theme:t})=>t.colors.accentGlow}; }
    70% { box-shadow: 0 0 0 10px transparent; }
    100% { box-shadow: 0 0 0 0 transparent; }
  }
`,I7=g(R.h1)`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: clamp(2.75rem, 7vw, 5.5rem);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: ${({theme:t})=>t.colors.text};
  min-height: 2.15em;

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    min-height: 3.2em;
  }
`,tT=g.span`
  position: relative;
  display: inline-block;
  vertical-align: bottom;
  background: ${({theme:t})=>t.gradients.accent};
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${q7} 6s linear infinite;
  padding-right: 0.1em;
`,eT=g.span`
  display: inline-block;
  position: relative;
  min-width: 4ch;
`,nT=g(R.p)`
  font-size: clamp(1.05rem, 1.6vw, 1.25rem);
  color: ${({theme:t})=>t.colors.textSecondary};
  font-weight: 400;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
`,iT=g(R.div)`
  display: flex;
  justify-content: center;
  gap: ${({theme:t})=>t.spacing.md};
  flex-wrap: wrap;
  margin-top: ${({theme:t})=>t.spacing.sm};
`,aT=g.a`
  position: relative;
  padding: 0.95rem 1.75rem;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-weight: 500;
  font-size: 0.98rem;
  color: ${({theme:t})=>t.colors.bg};
  background: ${({theme:t})=>t.colors.accent};
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  transition: all ${({theme:t})=>t.transitions.normal};
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({theme:t})=>t.gradients.brand};
    opacity: 0;
    transition: opacity ${({theme:t})=>t.transitions.normal};
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px ${({theme:t})=>t.colors.accentGlow};
    color: ${({theme:t})=>t.colors.text};
  }

  &:hover::before {
    opacity: 1;
  }

  svg {
    transition: transform ${({theme:t})=>t.transitions.normal};
  }

  &:hover svg {
    transform: translateX(3px);
  }
`,sT=g.a`
  padding: 0.95rem 1.75rem;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-weight: 500;
  font-size: 0.98rem;
  color: ${({theme:t})=>t.colors.text};
  border: 1px solid ${({theme:t})=>t.colors.border};
  background: ${({theme:t})=>t.colors.bgCard};
  backdrop-filter: blur(8px);
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  transition: all ${({theme:t})=>t.transitions.normal};

  &:hover {
    border-color: ${({theme:t})=>t.colors.borderHover};
    transform: translateY(-2px);
    background: ${({theme:t})=>t.colors.bgCardHover};
  }
`,oT=g(R.div)`
  position: absolute;
  bottom: ${({theme:t})=>t.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${({theme:t})=>t.colors.textTertiary};
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  z-index: 2;

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    display: none;
  }
`,rT=g.div`
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, ${({theme:t})=>t.colors.accent}, transparent);
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({theme:t})=>t.colors.accent};
    animation: scrollDown 2s ease-in-out infinite;
  }

  @keyframes scrollDown {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
`;g(R.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme:t})=>t.spacing.md};
  margin-top: ${({theme:t})=>t.spacing.xl};
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${({theme:t})=>t.spacing.xl};
  border-top: 1px solid ${({theme:t})=>t.colors.border};

  @media (max-width: ${({theme:t})=>t.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;g.span`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 600;
  background: ${({theme:t})=>t.gradients.brand};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;g.span`
  font-size: 0.78rem;
  color: ${({theme:t})=>t.colors.textTertiary};
  font-family: ${({theme:t})=>t.fonts.mono};
  letter-spacing: 0.05em;
`;const lT=g(R.div)`
  position: relative;
  width: 100%;
  max-width: 920px;
  margin: ${({theme:t})=>t.spacing.xl} auto 0;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: ${({theme:t})=>t.borderRadius.lg};
    background: ${({theme:t})=>t.gradients.brand};
    opacity: 0.18;
    filter: blur(40px);
    z-index: -1;
  }
`,cT=g.div`
  position: relative;
  background: linear-gradient(180deg, rgba(20, 20, 28, 0.95), rgba(14, 14, 20, 0.95));
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.lg};
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.02) inset;
`,uT=g.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};
  background: rgba(255, 255, 255, 0.015);
`,fT=g.div`
  display: flex;
  gap: 0.4rem;

  span {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
  }
  span:nth-child(1) { background: rgba(255, 95, 86, 0.55); }
  span:nth-child(2) { background: rgba(255, 189, 46, 0.55); }
  span:nth-child(3) { background: rgba(39, 201, 63, 0.55); }
`,dT=g.div`
  flex: 1;
  text-align: center;
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.78rem;
  color: ${({theme:t})=>t.colors.textTertiary};
  letter-spacing: 0.04em;

  strong {
    color: ${({theme:t})=>t.colors.textSecondary};
    font-weight: 500;
  }
`,hT=g.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({theme:t})=>t.colors.success};
  box-shadow: 0 0 10px ${({theme:t})=>t.colors.success};
  animation: pulseDot 1.6s ease-in-out infinite;

  @keyframes pulseDot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.55; transform: scale(0.85); }
  }
`,pT=g.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar { display: none; }
`,mT=g.button`
  position: relative;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.85rem;
  border: 0;
  background: ${({$active:t,theme:e})=>t?"rgba(255, 255, 255, 0.06)":"transparent"};
  border-radius: ${({theme:t})=>t.borderRadius.sm};
  color: ${({$active:t,theme:e})=>t?e.colors.text:e.colors.textTertiary};
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: color ${({theme:t})=>t.transitions.fast},
    background ${({theme:t})=>t.transitions.fast};

  &:hover {
    color: ${({theme:t})=>t.colors.text};
  }
`,gT=g.span`
  color: ${({$active:t,theme:e})=>t?e.colors.accent:e.colors.textMuted};
  font-weight: 500;
`,yT=g.div`
  position: relative;
  padding: 1.5rem 1.75rem;
  min-height: 220px;
  text-align: left;

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: 1.25rem;
    min-height: 240px;
  }
`,xT=g.h3`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: clamp(1.35rem, 2.2vw, 1.75rem);
  font-weight: 600;
  letter-spacing: -0.025em;
  color: ${({theme:t})=>t.colors.text};
  margin-bottom: 0.35rem;
`,bT=g.p`
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:t})=>t.colors.textSecondary};
  max-width: 540px;
  margin-bottom: 1.1rem;
`,vT=g.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`,ST=g(R.li)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.82rem;
  color: ${({theme:t})=>t.colors.textSecondary};
`,wT=g.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${({$kind:t,theme:e})=>t==="done"?Ai`
          background: rgba(16, 185, 129, 0.15);
          color: ${e.colors.success};
          border: 1px solid rgba(16, 185, 129, 0.4);
        `:Ai`
          background: rgba(6, 215, 255, 0.1);
          color: ${e.colors.accent};
          border: 1px solid ${e.colors.borderAccent};
          animation: itemSpin 1.2s linear infinite;
        `}

  svg { width: 9px; height: 9px; }

  @keyframes itemSpin {
    0%, 100% { box-shadow: 0 0 0 0 ${({theme:t})=>t.colors.accentGlow}; }
    50% { box-shadow: 0 0 0 4px transparent; }
  }
`,TT=g.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  border-top: 1px solid ${({theme:t})=>t.colors.border};
  background: rgba(255, 255, 255, 0.015);
`,jT=g.div`
  flex: 1;
  height: 4px;
  background: ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  overflow: hidden;
`,AT=g(R.div)`
  height: 100%;
  background: ${({theme:t})=>t.gradients.brand};
  border-radius: inherit;
  box-shadow: 0 0 8px ${({theme:t})=>t.colors.accentGlow};
`,CT=g.span`
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: ${({theme:t})=>t.colors.textTertiary};
  text-transform: uppercase;
  min-width: 96px;
  text-align: right;
`;function $T(){const[t,e]=$.useState(0),[n,i]=$.useState(0),a=nt.heroRotator,s=_o[n];$.useEffect(()=>{const r=setInterval(()=>e(l=>(l+1)%a.length),2400);return()=>clearInterval(r)},[a.length]),$.useEffect(()=>{const r=setInterval(()=>i(l=>(l+1)%_o.length),3200);return()=>clearInterval(r)},[]);const o=`https://api.whatsapp.com/send?phone=${nt.contact.whatsapp}&text=Hola!%20Vi%20la%20landing%20de%20Biztek%20y%20me%20interesa%20charlar%20sobre%20un%20proyecto.`;return c.jsxs(Y7,{id:"hero",children:[c.jsx(X7,{}),c.jsx(K7,{}),c.jsx(Z7,{}),c.jsx(Q7,{}),c.jsx(F7,{children:c.jsxs(P7,{children:[c.jsxs(J7,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.5},children:[c.jsx(W7,{}),c.jsx("span",{children:"BIZTEK · SOFTWARE STUDIO"})]}),c.jsxs(I7,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.8,delay:.1,ease:[.22,1,.36,1]},children:["Software que mueve",c.jsx("br",{}),c.jsx(tT,{children:c.jsx(eT,{children:c.jsx(Ci,{mode:"wait",children:c.jsx(R.span,{initial:{opacity:0,y:20,filter:"blur(8px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},exit:{opacity:0,y:-20,filter:"blur(8px)"},transition:{duration:.5,ease:[.22,1,.36,1]},style:{display:"inline-block"},children:a[t]},a[t])})})})]}),c.jsx(nT,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.3},children:nt.company.description}),c.jsxs(iT,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.45},children:[c.jsxs(aT,{href:o,target:"_blank",rel:"noopener noreferrer",children:["Empezar un proyecto",c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),c.jsx(sT,{href:"#proyectos",children:"Ver caso de estudio"})]}),c.jsx(lT,{initial:{opacity:0,y:32},animate:{opacity:1,y:0},transition:{duration:.9,delay:.6,ease:[.22,1,.36,1]},children:c.jsxs(cT,{children:[c.jsxs(uT,{children:[c.jsxs(fT,{children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]}),c.jsxs(dT,{children:[c.jsx("strong",{children:"biztek"})," · proyecto-cliente"]}),c.jsx(hT,{})]}),c.jsx(pT,{children:_o.map((r,l)=>c.jsxs(mT,{type:"button",$active:l===n,onClick:()=>i(l),"aria-label":`Ver paso ${r.step} · ${r.label}`,children:[c.jsx(gT,{$active:l===n,children:r.step}),r.label]},r.step))}),c.jsx(yT,{children:c.jsx(Ci,{mode:"wait",children:c.jsxs(R.div,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},exit:{opacity:0,y:-14},transition:{duration:.45,ease:[.22,1,.36,1]},children:[c.jsx(xT,{children:s.title}),c.jsx(bT,{children:s.desc}),c.jsx(vT,{children:s.items.map((r,l)=>c.jsxs(ST,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{duration:.35,delay:.15+l*.12},children:[c.jsx(wT,{$kind:r.kind,children:r.kind==="done"?c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M5 13l4 4L19 7"})}):c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",children:c.jsx("circle",{cx:"12",cy:"12",r:"9",strokeDasharray:"14 8"})})}),r.text]},`${s.step}-${l}`))})]},s.step)})}),c.jsxs(TT,{children:[c.jsx(jT,{children:c.jsx(AT,{initial:!1,animate:{width:`${s.progress}%`},transition:{duration:.7,ease:[.22,1,.36,1]}})}),c.jsxs(CT,{children:[String(n+1).padStart(2,"0")," / ",String(_o.length).padStart(2,"0")," · ",s.progress,"%"]})]})]})})]})}),c.jsxs(oT,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:1.2},children:[c.jsx("span",{children:"scroll"}),c.jsx(rT,{})]})]})}const Zc=[.22,1,.36,1],ET=[{id:"distribucion",label:"Distribución",icon:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[c.jsx("path",{d:"M3 7h11v10H3z"}),c.jsx("path",{d:"M14 10h4l3 3v4h-7"}),c.jsx("circle",{cx:"7",cy:"18",r:"2"}),c.jsx("circle",{cx:"17",cy:"18",r:"2"})]})},{id:"logistica",label:"Logística",icon:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[c.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),c.jsx("path",{d:"M3.27 6.96 12 12.01l8.73-5.05"}),c.jsx("path",{d:"M12 22.08V12"})]})},{id:"ecommerce",label:"E-commerce",icon:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[c.jsx("path",{d:"M3 3h2l2.4 12.5a2 2 0 0 0 2 1.5h8.7a2 2 0 0 0 2-1.6L21.5 7H6"}),c.jsx("circle",{cx:"9",cy:"20",r:"1.5"}),c.jsx("circle",{cx:"18",cy:"20",r:"1.5"})]})},{id:"pymes",label:"PyMEs",icon:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[c.jsx("path",{d:"M3 21V9l9-6 9 6v12"}),c.jsx("path",{d:"M9 21v-6h6v6"}),c.jsx("path",{d:"M3 21h18"})]})},{id:"b2b",label:"B2B",icon:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[c.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),c.jsx("circle",{cx:"9",cy:"7",r:"4"}),c.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),c.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})},{id:"servicios",label:"Servicios profesionales",icon:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[c.jsx("rect",{x:"3",y:"7",width:"18",height:"13",rx:"2"}),c.jsx("path",{d:"M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"}),c.jsx("path",{d:"M3 13h18"})]})},{id:"gastronomia",label:"Gastronomía",icon:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[c.jsx("path",{d:"M6 3v8a3 3 0 0 0 6 0V3"}),c.jsx("path",{d:"M9 11v10"}),c.jsx("path",{d:"M17 3c-1.5 0-3 2-3 5s1.5 5 3 5v8"})]})}],MT=g.section`
  position: relative;
  padding: ${({theme:t})=>t.spacing.xxxl} 0;
  isolation: isolate;
  overflow: hidden;

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: ${({theme:t})=>t.spacing.xxl} 0;
  }
`,zT=g.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(circle at 50% 0%, rgba(6, 215, 255, 0.06), transparent 50%);
`,DT=g.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({theme:t})=>t.spacing.lg};

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: 0 ${({theme:t})=>t.spacing.md};
  }
`,RT=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({theme:t})=>t.spacing.md};
  margin-bottom: ${({theme:t})=>t.spacing.xl};
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
`,OT=g(R.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid ${({theme:t})=>t.colors.borderAccent};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  background: rgba(6, 215, 255, 0.06);
  backdrop-filter: blur(12px);
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  color: ${({theme:t})=>t.colors.accent};
  letter-spacing: 0.18em;
  text-transform: uppercase;
  width: fit-content;
`,kT=g(R.h2)`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: clamp(1.85rem, 3.6vw, 2.75rem);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: ${({theme:t})=>t.colors.text};
`,VT=g.span`
  background: ${({theme:t})=>t.gradients.brand};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`,BT=g.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({theme:t})=>t.spacing.md};

  @media (max-width: ${({theme:t})=>t.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({theme:t})=>t.spacing.sm};
  }
`,LT=g(R.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: ${({theme:t})=>t.spacing.sm};
  padding: ${({theme:t})=>t.spacing.md};
  min-height: 140px;
  background: ${({theme:t})=>t.colors.bgCard};
  backdrop-filter: blur(12px);
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  color: ${({theme:t})=>t.colors.textSecondary};
  transition:
    border-color ${({theme:t})=>t.transitions.normal},
    background ${({theme:t})=>t.transitions.normal},
    color ${({theme:t})=>t.transitions.normal},
    transform ${({theme:t})=>t.transitions.normal};

  svg {
    width: 28px;
    height: 28px;
    color: ${({theme:t})=>t.colors.textTertiary};
    transition: color ${({theme:t})=>t.transitions.normal};
  }

  &:hover {
    border-color: ${({theme:t})=>t.colors.borderHover};
    background: ${({theme:t})=>t.colors.bgCardHover};
    color: ${({theme:t})=>t.colors.text};
    transform: translateY(-2px);
  }

  &:hover svg {
    color: ${({theme:t})=>t.colors.accent};
  }
`,_T=g.span`
  font-family: ${({theme:t})=>t.fonts.body};
  font-size: 0.92rem;
  font-weight: 500;
  letter-spacing: -0.005em;
  line-height: 1.3;
`;function NT(){return c.jsxs(MT,{id:"clientes",children:[c.jsx(zT,{}),c.jsxs(DT,{children:[c.jsxs(RT,{children:[c.jsx(OT,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.5,ease:Zc},children:"Industrias"}),c.jsxs(kT,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:Zc,delay:.05},children:["Construido para equipos que ",c.jsx(VT,{children:"mueven cosas"})," todos los días"]})]}),c.jsx(BT,{children:ET.map((t,e)=>c.jsxs(LT,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.6,ease:Zc,delay:e*.06},children:[t.icon,c.jsx(_T,{children:t.label})]},t.id))})]})]})}var r2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},x0=ht.createContext&&ht.createContext(r2),UT=["attr","size","title"];function HT(t,e){if(t==null)return{};var n,i,a=GT(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function GT(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function ol(){return ol=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ol.apply(null,arguments)}function b0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,i)}return n}function rl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?b0(Object(n),!0).forEach(function(i){qT(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function qT(t,e,n){return(e=YT(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function YT(t){var e=XT(t,"string");return typeof e=="symbol"?e:e+""}function XT(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function l2(t){return t&&t.map((e,n)=>ht.createElement(e.tag,rl({key:n},e.attr),l2(e.child)))}function Be(t){return e=>ht.createElement(ZT,ol({attr:rl({},t.attr)},e),l2(t.child))}function ZT(t){var e=n=>{var{attr:i,size:a,title:s}=t,o=HT(t,UT),r=a||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),ht.createElement("svg",ol({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,o,{className:l,style:rl(rl({color:t.color||n.color},n.style),t.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),s&&ht.createElement("title",null,s),t.children)};return x0!==void 0?ht.createElement(x0.Consumer,null,n=>e(n)):e(r2)}function QT(t){return Be({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z"},child:[]}]})(t)}function KT(t){return Be({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"},child:[]},{tag:"path",attr:{d:"M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"},child:[]}]})(t)}function FT(t){return Be({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M16.5 7.5h-9v9h9v-9Z"},child:[]},{tag:"path",attr:{fillRule:"evenodd",d:"M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z",clipRule:"evenodd"},child:[]}]})(t)}function c2(t){return Be({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"},child:[]}]})(t)}function PT(t){return Be({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z",clipRule:"evenodd"},child:[]}]})(t)}function yr(t){return Be({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",clipRule:"evenodd"},child:[]}]})(t)}function JT(t){return Be({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z"},child:[]},{tag:"path",attr:{d:"M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z"},child:[]}]})(t)}function WT(t){return Be({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",clipRule:"evenodd"},child:[]},{tag:"path",attr:{d:"M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z"},child:[]}]})(t)}function IT(t){return Be({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z",clipRule:"evenodd"},child:[]}]})(t)}const tj={code:c2,integration:QT,automation:IT,cloud:PT,iot:FT,consulting:WT},yi=[.22,1,.36,1],ej=g.section`
  position: relative;
  padding: ${({theme:t})=>t.spacing.xxxl} 0;
  isolation: isolate;
  overflow: hidden;

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: ${({theme:t})=>t.spacing.xxl} 0;
  }
`,nj=g.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(circle at 85% 10%, rgba(6, 215, 255, 0.08), transparent 45%),
    radial-gradient(circle at 10% 90%, rgba(147, 51, 234, 0.07), transparent 45%);
`,ij=g.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({theme:t})=>t.spacing.lg};

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: 0 ${({theme:t})=>t.spacing.md};
  }
`,aj=g.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing.md};
  margin-bottom: ${({theme:t})=>t.spacing.xxl};
  max-width: 760px;
`,sj=g(R.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  background: ${({theme:t})=>t.colors.bgCard};
  backdrop-filter: blur(12px);
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  color: ${({theme:t})=>t.colors.accent};
  letter-spacing: 0.18em;
  text-transform: uppercase;
  width: fit-content;
`,oj=g(R.h2)`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: ${({theme:t})=>t.colors.text};
`,rj=g.span`
  background: ${({theme:t})=>t.gradients.brand};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`,lj=g(R.p)`
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  color: ${({theme:t})=>t.colors.textSecondary};
  line-height: 1.6;
  max-width: 560px;
`,cj=g.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing.lg};
`,Js=g(R.article)`
  --mx: 50%;
  --my: 50%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr minmax(320px, 380px);
  gap: ${({theme:t})=>t.spacing.xl};
  align-items: center;
  padding: 2rem;
  background: ${({theme:t})=>t.colors.bgCard};
  backdrop-filter: blur(12px);
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.lg};
  overflow: hidden;
  isolation: isolate;
  transition:
    border-color ${({theme:t})=>t.transitions.normal},
    background ${({theme:t})=>t.transitions.normal},
    transform ${({theme:t})=>t.transitions.normal};

  &[data-reverse="true"] {
    grid-template-columns: minmax(320px, 380px) 1fr;
  }

  /* Cursor spotlight */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle 320px at var(--mx) var(--my),
      rgba(6, 215, 255, 0.08),
      transparent 60%
    );
    opacity: 0;
    transition: opacity ${({theme:t})=>t.transitions.normal};
    pointer-events: none;
    z-index: 0;
  }

  /* Subtle gradient border on hover */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(135deg, rgba(6, 215, 255, 0.3), rgba(147, 51, 234, 0.0) 60%);
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    opacity: 0;
    transition: opacity ${({theme:t})=>t.transitions.normal};
    pointer-events: none;
    z-index: 0;
  }

  &:hover {
    border-color: ${({theme:t})=>t.colors.borderHover};
    background: ${({theme:t})=>t.colors.bgCardHover};
  }

  &:hover::before { opacity: 1; }
  &:hover::after { opacity: 1; }

  @media (max-width: ${({theme:t})=>t.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({theme:t})=>t.spacing.lg};

    &[data-reverse="true"] {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: 1.5rem;
  }
`,uj=g.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${Js}[data-reverse="true"] & {
    order: 2;
  }

  @media (max-width: ${({theme:t})=>t.breakpoints.desktop}) {
    ${Js}[data-reverse="true"] & {
      order: 1;
    }
  }
`,fj=g.div`
  position: relative;
  z-index: 1;
  width: 100%;

  ${Js}[data-reverse="true"] & {
    order: 1;
  }

  @media (max-width: ${({theme:t})=>t.breakpoints.desktop}) {
    ${Js}[data-reverse="true"] & {
      order: 2;
    }
  }
`,dj=g.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.3rem 0.7rem;
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  background: ${({theme:t})=>t.colors.bgElevated};
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:t})=>t.colors.textTertiary};
  width: fit-content;

  strong {
    color: ${({theme:t})=>t.colors.accent};
    font-weight: 500;
  }

  svg {
    width: 12px;
    height: 12px;
    color: ${({theme:t})=>t.colors.accent};
  }
`,hj=g.h3`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: clamp(1.4rem, 2vw, 1.75rem);
  font-weight: 600;
  line-height: 1.18;
  letter-spacing: -0.025em;
  color: ${({theme:t})=>t.colors.text};
`,pj=g.p`
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:t})=>t.colors.textSecondary};
  max-width: 520px;
`,_a=g.div`
  position: relative;
  width: 100%;
  background: linear-gradient(180deg, rgba(20, 20, 28, 0.95), rgba(14, 14, 20, 0.95));
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.lg};
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.02) inset;
`,Na=g.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.55rem 0.85rem;
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};
  background: rgba(255, 255, 255, 0.015);
`,Ua=g.div`
  display: flex;
  gap: 0.32rem;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  span:nth-child(1) { background: rgba(255, 95, 86, 0.55); }
  span:nth-child(2) { background: rgba(255, 189, 46, 0.55); }
  span:nth-child(3) { background: rgba(39, 201, 63, 0.55); }
`,Ha=g.div`
  flex: 1;
  text-align: center;
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.66rem;
  color: ${({theme:t})=>t.colors.textTertiary};
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  strong {
    color: ${({theme:t})=>t.colors.textSecondary};
    font-weight: 500;
  }
`,Ga=g.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({theme:t})=>t.colors.success};
  box-shadow: 0 0 8px ${({theme:t})=>t.colors.success};
  animation: mockDotPulse 1.8s ease-in-out infinite;

  @keyframes mockDotPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.85); }
  }
`,qa=g.div`
  position: relative;
  padding: 1rem 1.1rem;
  min-height: 220px;
  display: flex;
  flex-direction: column;
`,mj=ka`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`,gj=g.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.55rem;
`,v0=g.div`
  padding: 0.55rem 0.65rem;
  background: ${({theme:t})=>t.colors.bgCard};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.sm};
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`,S0=g.span`
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.56rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:t})=>t.colors.textTertiary};
`,w0=g.span`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({theme:t})=>t.colors.text};
`,T0=g.span`
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.6rem;
  color: ${({theme:t})=>t.colors.success};
`,yj=g.div`
  margin-top: 0.65rem;
  padding: 0.55rem 0.65rem;
  background: ${({theme:t})=>t.colors.bgCard};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.sm};
`,xj=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.45rem;

  span {
    font-family: ${({theme:t})=>t.fonts.mono};
    font-size: 0.6rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({theme:t})=>t.colors.textTertiary};
  }

  strong {
    font-family: ${({theme:t})=>t.fonts.mono};
    font-size: 0.62rem;
    color: ${({theme:t})=>t.colors.accent};
  }
`,bj=g.div`
  position: absolute;
  right: 0.6rem;
  bottom: 0.6rem;
  width: 66px;
  height: 118px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(20, 20, 28, 0.98), rgba(10, 10, 16, 0.98));
  border: 1px solid ${({theme:t})=>t.colors.borderHover};
  box-shadow: -10px 14px 28px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.03) inset;
  overflow: hidden;
  padding: 0.45rem 0.4rem 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.32rem;
  animation: ${mj} 4s ease-in-out infinite;
`,vj=g.div`
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 22px;
  height: 4px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.12);
`,No=g.div`
  height: 16px;
  border-radius: 4px;
  background: ${({$accent:t,theme:e})=>t?"linear-gradient(90deg, rgba(6, 215, 255, 0.25), rgba(147, 51, 234, 0.25))":"rgba(255, 255, 255, 0.04)"};
  border: 1px solid ${({theme:t})=>t.colors.border};
`;function u2(){return c.jsxs(_a,{children:[c.jsxs(Na,{children:[c.jsxs(Ua,{children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]}),c.jsxs(Ha,{children:[c.jsx("strong",{children:"tu-app"})," · /dashboard"]}),c.jsx(Ga,{})]}),c.jsxs(qa,{children:[c.jsxs(gj,{children:[c.jsxs(v0,{children:[c.jsx(S0,{children:"Ventas"}),c.jsx(w0,{children:"USD 18.4K"}),c.jsx(T0,{children:"+ 24%"})]}),c.jsxs(v0,{children:[c.jsx(S0,{children:"Pedidos"}),c.jsx(w0,{children:"142"}),c.jsx(T0,{children:"+ 12%"})]})]}),c.jsxs(yj,{children:[c.jsxs(xj,{children:[c.jsx("span",{children:"Últimos 7 días"}),c.jsx("strong",{children:"+ 18%"})]}),c.jsxs("svg",{viewBox:"0 0 220 60",width:"100%",height:"48",preserveAspectRatio:"none",children:[c.jsxs("defs",{children:[c.jsxs("linearGradient",{id:"wmLine",x1:"0",y1:"0",x2:"1",y2:"0",children:[c.jsx("stop",{offset:"0%",stopColor:"#06D7FF"}),c.jsx("stop",{offset:"100%",stopColor:"#9333EA"})]}),c.jsxs("linearGradient",{id:"wmFill",x1:"0",y1:"0",x2:"0",y2:"1",children:[c.jsx("stop",{offset:"0%",stopColor:"rgba(6, 215, 255, 0.25)"}),c.jsx("stop",{offset:"100%",stopColor:"rgba(6, 215, 255, 0)"})]})]}),c.jsx(R.path,{d:"M0 45 L30 38 L60 42 L90 28 L120 32 L150 18 L185 22 L220 8",fill:"none",stroke:"url(#wmLine)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",initial:{pathLength:0},whileInView:{pathLength:1},viewport:{once:!0},transition:{duration:1.6,ease:yi}}),c.jsx(R.path,{d:"M0 45 L30 38 L60 42 L90 28 L120 32 L150 18 L185 22 L220 8 L220 60 L0 60 Z",fill:"url(#wmFill)",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:1.2,delay:.6}})]})]}),c.jsxs(bj,{children:[c.jsx(vj,{}),c.jsx("div",{style:{height:6}}),c.jsx(No,{$accent:!0}),c.jsx(No,{}),c.jsx(No,{}),c.jsx(No,{})]})]})]})}const Sj=g.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
`,wj=g.svg`
  width: 100%;
  max-width: 320px;
  height: auto;
  display: block;
`,Tj=ka`
  0% { stroke-dashoffset: 24; }
  100% { stroke-dashoffset: 0; }
`,Qc=g.path`
  stroke: rgba(6, 215, 255, 0.55);
  stroke-width: 1.4;
  fill: none;
  stroke-dasharray: 4 4;
  animation: ${Tj} 1.6s linear infinite;
`;function Kc({x:t,y:e,label:n,sub:i,accent:a}){return c.jsxs("g",{transform:`translate(${t}, ${e})`,children:[c.jsx("rect",{x:"-44",y:"-22",width:"88",height:"44",rx:"10",fill:"rgba(255, 255, 255, 0.03)",stroke:a?"rgba(6, 215, 255, 0.45)":"rgba(255, 255, 255, 0.12)",strokeWidth:"1"}),c.jsx("text",{x:"0",y:"-3",textAnchor:"middle",fill:"#FAFAFA",fontFamily:"'IBM Plex Serif', serif",fontSize:"11",fontWeight:"600",letterSpacing:"-0.3",children:n}),c.jsx("text",{x:"0",y:"12",textAnchor:"middle",fill:"#71717A",fontFamily:"'JetBrains Mono', monospace",fontSize:"7",letterSpacing:"1",children:i})]})}function jj(){return c.jsxs(_a,{children:[c.jsxs(Na,{children:[c.jsxs(Ua,{children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]}),c.jsxs(Ha,{children:[c.jsx("strong",{children:"flow"})," · sync.live"]}),c.jsx(Ga,{})]}),c.jsx(qa,{children:c.jsx(Sj,{children:c.jsxs(wj,{viewBox:"0 0 300 200",children:[c.jsx("defs",{children:c.jsxs("radialGradient",{id:"hubGlow",cx:"50%",cy:"50%",r:"50%",children:[c.jsx("stop",{offset:"0%",stopColor:"rgba(6, 215, 255, 0.35)"}),c.jsx("stop",{offset:"100%",stopColor:"rgba(6, 215, 255, 0)"})]})}),c.jsx(Qc,{d:"M62 50 Q 110 70 138 96"}),c.jsx(Qc,{d:"M238 50 Q 190 70 162 96"}),c.jsx(Qc,{d:"M150 124 L 150 168"}),c.jsx(Kc,{x:62,y:40,label:"WhatsApp",sub:"MENSAJES"}),c.jsx(Kc,{x:238,y:40,label:"Facturación",sub:"API"}),c.jsx("circle",{cx:"150",cy:"105",r:"36",fill:"url(#hubGlow)"}),c.jsx(R.rect,{x:"110",y:"84",width:"80",height:"42",rx:"10",fill:"rgba(20, 20, 28, 0.95)",stroke:"rgba(6, 215, 255, 0.55)",strokeWidth:"1.2",initial:{opacity:.85},animate:{opacity:[.85,1,.85]},transition:{duration:2.4,repeat:1/0,ease:"easeInOut"}}),c.jsx("text",{x:"150",y:"102",textAnchor:"middle",fill:"#FAFAFA",fontFamily:"'IBM Plex Serif', serif",fontSize:"11",fontWeight:"600",children:"Tu sistema"}),c.jsx("text",{x:"150",y:"116",textAnchor:"middle",fill:"#06D7FF",fontFamily:"'JetBrains Mono', monospace",fontSize:"7",letterSpacing:"1",children:"CORE"}),c.jsx(Kc,{x:150,y:180,label:"Email + CRM",sub:"WEBHOOK",accent:!0})]})})})]})}const Aj=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Cj=g.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.55rem 0.7rem;
  background: ${({$active:t})=>t?"rgba(6, 215, 255, 0.06)":"rgba(255, 255, 255, 0.02)"};
  border: 1px solid
    ${({$active:t,theme:e})=>t?e.colors.borderAccent:e.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.sm};
  position: relative;
  overflow: hidden;
`,$j=g.span`
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  color: ${({$active:t,theme:e})=>t?e.colors.accent:e.colors.textMuted};
  min-width: 22px;
`,Ej=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  flex: 1;

  strong {
    font-family: ${({theme:t})=>t.fonts.display};
    font-size: 0.82rem;
    font-weight: 600;
    color: ${({theme:t})=>t.colors.text};
    letter-spacing: -0.01em;
  }

  span {
    font-family: ${({theme:t})=>t.fonts.mono};
    font-size: 0.6rem;
    color: ${({theme:t})=>t.colors.textTertiary};
    letter-spacing: 0.04em;
  }
`,Mj=g.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.18rem 0.45rem;
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.58rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  background: ${({$variant:t})=>t==="done"?"rgba(16, 185, 129, 0.12)":t==="running"?"rgba(6, 215, 255, 0.12)":"rgba(255, 255, 255, 0.04)"};
  color: ${({$variant:t,theme:e})=>t==="done"?e.colors.success:t==="running"?e.colors.accent:e.colors.textTertiary};
  border: 1px solid
    ${({$variant:t})=>t==="done"?"rgba(16, 185, 129, 0.3)":t==="running"?"rgba(6, 215, 255, 0.3)":"rgba(255, 255, 255, 0.08)"};
`,zj=g(R.span)`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({theme:t})=>t.colors.accent};
  box-shadow: 0 0 6px ${({theme:t})=>t.colors.accentGlow};
`;function Dj(){const t=[{id:1,title:"Pedido recibido",sub:"TRIGGER · WhatsApp",state:"done"},{id:2,title:"Factura emitida",sub:"ACTION · ERP",state:"done"},{id:3,title:"Aviso al cliente",sub:"ACTION · Email",state:"running"},{id:4,title:"Reporte diario",sub:"SCHEDULE · 22:00",state:"queued"}];return c.jsxs(_a,{children:[c.jsxs(Na,{children:[c.jsxs(Ua,{children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]}),c.jsxs(Ha,{children:[c.jsx("strong",{children:"workflow"})," · pedido-nuevo"]}),c.jsx(Ga,{})]}),c.jsx(qa,{children:c.jsx(Aj,{children:t.map(e=>c.jsxs(Cj,{$active:e.state==="running",children:[c.jsx($j,{$active:e.state==="running",children:String(e.id).padStart(2,"0")}),c.jsxs(Ej,{children:[c.jsx("strong",{children:e.title}),c.jsx("span",{children:e.sub})]}),c.jsxs(Mj,{$variant:e.state,children:[e.state==="running"&&c.jsx(zj,{animate:{opacity:[.4,1,.4],scale:[.85,1,.85]},transition:{duration:1.2,repeat:1/0}}),e.state==="done"?"OK":e.state==="running"?"Run":"Cola"]})]},e.id))})})]})}const Rj=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`,Oj=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.55rem;
`,j0=g.div`
  padding: 0.55rem 0.65rem;
  background: ${({theme:t})=>t.colors.bgCard};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.sm};
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`,A0=g.span`
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.56rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:t})=>t.colors.textTertiary};
`,C0=g.span`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({theme:t})=>t.colors.text};
`,kj=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,Vj=g.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.42rem 0.6rem;
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.18);
  border-radius: ${({theme:t})=>t.borderRadius.sm};
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.72rem;
  color: ${({theme:t})=>t.colors.textSecondary};

  span.label {
    flex: 1;
    color: ${({theme:t})=>t.colors.text};
  }

  span.time {
    color: ${({theme:t})=>t.colors.textTertiary};
    font-size: 0.6rem;
  }
`,Bj=g(R.span)`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({theme:t})=>t.colors.success};
  box-shadow: 0 0 8px ${({theme:t})=>t.colors.success};
  flex-shrink: 0;
`;function Lj(){const t=[{name:"api.tu-app.com",time:"12ms"},{name:"db · primary",time:"8ms"},{name:"cdn · global",time:"23ms"},{name:"ssl · valid",time:"89d"}];return c.jsxs(_a,{children:[c.jsxs(Na,{children:[c.jsxs(Ua,{children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]}),c.jsxs(Ha,{children:[c.jsx("strong",{children:"status"})," · uptime monitor"]}),c.jsx(Ga,{})]}),c.jsx(qa,{children:c.jsxs(Rj,{children:[c.jsxs(Oj,{children:[c.jsxs(j0,{children:[c.jsx(A0,{children:"Uptime · 30d"}),c.jsx(C0,{children:"99.98%"})]}),c.jsxs(j0,{children:[c.jsx(A0,{children:"Latencia P95"}),c.jsx(C0,{children:"184ms"})]})]}),c.jsx(kj,{children:t.map((e,n)=>c.jsxs(Vj,{children:[c.jsx(Bj,{animate:{opacity:[1,.55,1],scale:[1,.85,1]},transition:{duration:1.6,repeat:1/0,delay:n*.25,ease:"easeInOut"}}),c.jsx("span",{className:"label",children:e.name}),c.jsx("span",{className:"time",children:e.time})]},e.name))})]})})]})}const _j=g.div`
  display: flex;
  align-items: baseline;
  gap: 0.55rem;
  margin-bottom: 0.5rem;

  strong {
    font-family: ${({theme:t})=>t.fonts.display};
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: ${({theme:t})=>t.colors.text};
  }

  small {
    font-family: ${({theme:t})=>t.fonts.mono};
    font-size: 0.66rem;
    color: ${({theme:t})=>t.colors.success};
  }
`,Nj=g.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  align-items: end;
  gap: 0.28rem;
  height: 70px;
  margin-bottom: 0.55rem;
`,Uj=g(R.div)`
  background: ${({theme:t})=>t.gradients.brand};
  border-radius: 2px 2px 0 0;
  width: 100%;
  box-shadow: 0 0 8px rgba(6, 215, 255, 0.18);
  opacity: 0.95;
`,Hj=g.div`
  position: relative;
  padding: 0.6rem 0.7rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.sm};
`,Gj=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.35rem;

  span {
    font-family: ${({theme:t})=>t.fonts.mono};
    font-size: 0.6rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({theme:t})=>t.colors.textTertiary};
  }

  strong {
    font-family: ${({theme:t})=>t.fonts.mono};
    font-size: 0.62rem;
    color: ${({theme:t})=>t.colors.accent};
  }
`;function qj(){const t=[.42,.58,.5,.68,.62,.78,.72,.88,.82,.95];return c.jsxs(_a,{children:[c.jsxs(Na,{children:[c.jsxs(Ua,{children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]}),c.jsxs(Ha,{children:[c.jsx("strong",{children:"analytics"})," · live"]}),c.jsx(Ga,{})]}),c.jsxs(qa,{children:[c.jsxs(_j,{children:[c.jsx("strong",{children:"USD 142K"}),c.jsx("small",{children:"+ 28% vs mes anterior"})]}),c.jsx(Nj,{children:t.map((e,n)=>c.jsx(Uj,{initial:{height:0},whileInView:{height:`${e*100}%`},viewport:{once:!0},transition:{duration:.6,delay:.1+n*.05,ease:yi},style:{alignSelf:"end"}},n))}),c.jsxs(Hj,{children:[c.jsxs(Gj,{children:[c.jsx("span",{children:"Envío PO-04821"}),c.jsx("strong",{children:"EN RUTA"})]}),c.jsxs("svg",{viewBox:"0 0 280 60",width:"100%",height:"46",preserveAspectRatio:"none",children:[c.jsx("defs",{children:c.jsxs("linearGradient",{id:"dataRoute",x1:"0",y1:"0",x2:"1",y2:"0",children:[c.jsx("stop",{offset:"0%",stopColor:"#06D7FF"}),c.jsx("stop",{offset:"100%",stopColor:"#9333EA"})]})}),c.jsx("path",{d:"M10 45 Q 70 10 130 30 T 270 18",stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),c.jsx(R.path,{d:"M10 45 Q 70 10 130 30 T 270 18",stroke:"url(#dataRoute)",strokeWidth:"2",fill:"none",strokeLinecap:"round",initial:{pathLength:0},whileInView:{pathLength:.72},viewport:{once:!0},transition:{duration:2,ease:yi}}),c.jsx("circle",{cx:"10",cy:"45",r:"3.5",fill:"#06D7FF"}),c.jsx("circle",{cx:"270",cy:"18",r:"3.5",fill:"#9333EA"}),c.jsx(R.circle,{cx:"10",cy:"45",r:"4.5",fill:"#06D7FF",animate:{cx:[10,70,130,200,270],cy:[45,16,30,20,18]},transition:{duration:4.5,repeat:1/0,ease:"easeInOut"},style:{filter:"drop-shadow(0 0 4px rgba(6, 215, 255, 0.7))"}})]})]})]})]})}const Yj=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.65rem;

  h6 {
    font-family: ${({theme:t})=>t.fonts.display};
    font-size: 0.92rem;
    font-weight: 600;
    color: ${({theme:t})=>t.colors.text};
    margin: 0;
    letter-spacing: -0.01em;
  }
`,Xj=g.div`
  display: inline-flex;
  align-items: baseline;
  gap: 0.3rem;
  padding: 0.25rem 0.55rem;
  border: 1px solid rgba(16, 185, 129, 0.3);
  background: rgba(16, 185, 129, 0.08);
  border-radius: ${({theme:t})=>t.borderRadius.full};

  strong {
    font-family: ${({theme:t})=>t.fonts.mono};
    font-size: 0.85rem;
    font-weight: 600;
    color: ${({theme:t})=>t.colors.success};
  }

  span {
    font-family: ${({theme:t})=>t.fonts.mono};
    font-size: 0.6rem;
    color: ${({theme:t})=>t.colors.textTertiary};
  }
`,Zj=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.42rem;
`,Qj=g(R.div)`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.45rem 0.6rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.sm};
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.72rem;
  color: ${({theme:t})=>t.colors.textSecondary};
`,Kj=g.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({$tone:t,theme:e})=>t==="ok"?"rgba(16, 185, 129, 0.18)":t==="warn"?"rgba(255, 189, 46, 0.18)":"rgba(6, 215, 255, 0.18)"};
  border: 1px solid
    ${({$tone:t,theme:e})=>t==="ok"?"rgba(16, 185, 129, 0.45)":t==="warn"?"rgba(255, 189, 46, 0.45)":"rgba(6, 215, 255, 0.45)"};
  color: ${({$tone:t,theme:e})=>t==="ok"?e.colors.success:t==="warn"?"#FFBD2E":e.colors.accent};
  flex-shrink: 0;

  svg { width: 8px; height: 8px; }
`,Fj=g.span`
  flex: 1;
  color: ${({theme:t})=>t.colors.text};
  font-family: ${({theme:t})=>t.fonts.body};
  font-size: 0.78rem;
`,Pj=g.span`
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.62rem;
  letter-spacing: 0.06em;
  color: ${({$tone:t,theme:e})=>t==="ok"?e.colors.success:t==="warn"?"#FFBD2E":e.colors.accent};
`;function Jj(){const t=[{label:"Performance",metric:"92 / 100",tone:"ok"},{label:"Seguridad",metric:"A+",tone:"ok"},{label:"Cobertura tests",metric:"68%",tone:"warn"},{label:"Deuda técnica",metric:"2.4 días",tone:"info"}];return c.jsxs(_a,{children:[c.jsxs(Na,{children:[c.jsxs(Ua,{children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]}),c.jsxs(Ha,{children:[c.jsx("strong",{children:"audit"})," · revisión técnica"]}),c.jsx(Ga,{})]}),c.jsxs(qa,{children:[c.jsxs(Yj,{children:[c.jsx("h6",{children:"Health score"}),c.jsxs(Xj,{children:[c.jsx("strong",{children:"87"}),c.jsx("span",{children:"/ 100"})]})]}),c.jsx(Zj,{children:t.map((e,n)=>c.jsxs(Qj,{initial:{opacity:0,x:-8},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.45,delay:.1+n*.1},children:[c.jsx(Kj,{$tone:e.tone,children:e.tone==="ok"?c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M5 13l4 4L19 7"})}):e.tone==="warn"?c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M12 8v5M12 17h.01"})}):c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"12",cy:"12",r:"9"}),c.jsx("path",{d:"M12 8v4l3 2"})]})}),c.jsx(Fj,{children:e.label}),c.jsx(Pj,{$tone:e.tone,children:e.metric})]},e.label))})]})]})}const Wj={"web-mobile":u2,integraciones:jj,automatizacion:Dj,"cloud-devops":Lj,"data-iot":qj,consultoria:Jj},Ij={"web-mobile":"Plataforma a medida",integraciones:"Sistemas conectados",automatizacion:"Workflows automáticos","cloud-devops":"Infraestructura 24/7","data-iot":"Tableros en vivo",consultoria:"Auditoría técnica"};function tA({service:t,index:e}){const n=tj[t.icon]||c2,i=Wj[t.id]||u2,a=e%2===1,s=Ij[t.id]||t.title,o=$.useCallback(r=>{const l=r.currentTarget.getBoundingClientRect(),u=(r.clientX-l.left)/l.width*100,f=(r.clientY-l.top)/l.height*100;r.currentTarget.style.setProperty("--mx",`${u}%`),r.currentTarget.style.setProperty("--my",`${f}%`)},[]);return c.jsxs(Js,{"data-reverse":a?"true":"false",onMouseMove:o,initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:yi,delay:e*.04},children:[c.jsxs(uj,{children:[c.jsxs(dj,{children:[c.jsx(n,{}),c.jsx("strong",{children:String(e+1).padStart(2,"0")}),c.jsxs("span",{children:["· ",s]})]}),c.jsx(hj,{children:t.title}),c.jsx(pj,{children:t.description})]}),c.jsx(fj,{children:c.jsx(i,{})})]})}function eA(){return c.jsxs(ej,{id:"servicios",children:[c.jsx(nj,{}),c.jsxs(ij,{children:[c.jsxs(aj,{children:[c.jsx(sj,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.5,ease:yi},children:"01 · Servicios"}),c.jsxs(oj,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:yi,delay:.05},children:["Qué hacemos por ",c.jsx(rj,{children:"tu negocio"})]}),c.jsx(lj,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:yi,delay:.15},children:"Soluciones a medida pensadas para tu resultado, no para llenar horas."})]}),c.jsx(cj,{children:nt.services.map((t,e)=>c.jsx(tA,{service:t,index:e},t.id))})]})]})}const ts=[.22,1,.36,1],nA=g.section`
  position: relative;
  padding: ${({theme:t})=>t.spacing.xxxl} 0;
  isolation: isolate;
  overflow-x: clip;

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: ${({theme:t})=>t.spacing.xxl} 0;
  }
`,iA=g.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(circle at 15% 20%, rgba(6, 215, 255, 0.07), transparent 45%),
    radial-gradient(circle at 90% 80%, rgba(147, 51, 234, 0.07), transparent 45%);
`,aA=g.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({theme:t})=>t.spacing.lg};

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: 0 ${({theme:t})=>t.spacing.md};
  }
`,sA=g.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing.md};
  margin-bottom: ${({theme:t})=>t.spacing.xl};
  max-width: 760px;
`,oA=g(R.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid ${({theme:t})=>t.colors.accentAltGlow};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  background: rgba(147, 51, 234, 0.08);
  backdrop-filter: blur(12px);
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  color: ${({theme:t})=>t.colors.accentAlt};
  letter-spacing: 0.18em;
  text-transform: uppercase;
  width: fit-content;
`,rA=g(R.h2)`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: ${({theme:t})=>t.colors.text};
`,lA=g.span`
  background: ${({theme:t})=>t.gradients.brand};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`,cA=g(R.p)`
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  color: ${({theme:t})=>t.colors.textSecondary};
  line-height: 1.6;
  max-width: 560px;
`,uA=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:t})=>t.spacing.xl};
  align-items: start;

  @media (max-width: ${({theme:t})=>t.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({theme:t})=>t.spacing.lg};
  }
`,fA=g.div`
  position: sticky;
  top: 96px;
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing.md};
  padding: 1.75rem;
  background: ${({theme:t})=>t.colors.bgCard};
  backdrop-filter: blur(12px);
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.lg};

  @media (max-width: ${({theme:t})=>t.breakpoints.desktop}) {
    display: none;
  }
`,dA=g.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`,hA=g.div`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.04em;
  background: ${({theme:t})=>t.gradients.brand};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`,pA=g.h3`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: clamp(1.35rem, 2.2vw, 1.75rem);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: ${({theme:t})=>t.colors.text};
`,mA=g.p`
  font-size: 0.98rem;
  line-height: 1.6;
  color: ${({theme:t})=>t.colors.textSecondary};
  max-width: 460px;
`,gA=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding-top: ${({theme:t})=>t.spacing.sm};
  border-top: 1px solid ${({theme:t})=>t.colors.border};
`,yA=g.div`
  display: flex;
  justify-content: space-between;
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({theme:t})=>t.colors.textTertiary};
`,xA=g.div`
  position: relative;
  width: 100%;
  height: 2px;
  background: ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  overflow: hidden;
`,bA=g(R.div)`
  position: absolute;
  inset: 0 auto 0 0;
  background: ${({theme:t})=>t.gradients.brand};
  border-radius: inherit;
  box-shadow: 0 0 10px ${({theme:t})=>t.colors.accentGlow};
`,vA=g.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({theme:t})=>t.breakpoints.desktop}) {
    gap: ${({theme:t})=>t.spacing.md};
  }
`,SA=g.div`
  min-height: 38vh;
  display: flex;
  align-items: center;
  padding: ${({theme:t})=>t.spacing.md} 0;
  padding-left: ${({theme:t})=>t.spacing.md};
  border-left: 2px solid
    ${({$active:t,theme:e})=>t?e.colors.accent:e.colors.border};
  opacity: ${({$active:t})=>t?1:.45};
  transition:
    opacity ${({theme:t})=>t.transitions.normal},
    border-color ${({theme:t})=>t.transitions.normal};

  @media (max-width: ${({theme:t})=>t.breakpoints.desktop}) {
    min-height: 0;
    opacity: 1;
    padding: ${({theme:t})=>t.spacing.lg};
    padding-left: ${({theme:t})=>t.spacing.lg};
    background: ${({theme:t})=>t.colors.bgCard};
    backdrop-filter: blur(12px);
    border: 1px solid ${({theme:t})=>t.colors.border};
    border-left: 2px solid ${({theme:t})=>t.colors.accent};
    border-radius: ${({theme:t})=>t.borderRadius.lg};
  }
`,wA=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`,TA=g.span`
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.74rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({theme:t})=>t.colors.textTertiary};
`,jA=g.h4`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({theme:t})=>t.colors.text};
  line-height: 1.2;
`,AA=g.p`
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:t})=>t.colors.textSecondary};
  max-width: 520px;
`;function CA(){const t=nt.process,[e,n]=$.useState(0),i=$.useRef([]);$.useEffect(()=>{if(typeof window>"u"||!i.current.length)return;let o=0;const r=()=>{o=0;const u=window.innerHeight/2;let f=0,h=1/0;i.current.forEach((d,m)=>{if(!d)return;const b=d.getBoundingClientRect(),S=b.top+b.height/2,w=Math.abs(S-u);w<h&&(h=w,f=m)}),n(f)},l=()=>{o||(o=window.requestAnimationFrame(r))};return r(),window.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l),o&&window.cancelAnimationFrame(o)}},[t.length]);const a=t[e]||t[0],s=(e+1)/t.length*100;return c.jsxs(nA,{id:"proceso",children:[c.jsx(iA,{}),c.jsxs(aA,{children:[c.jsxs(sA,{children:[c.jsx(oA,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.5,ease:ts},children:"02 · Proceso"}),c.jsxs(rA,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:ts,delay:.05},children:["De idea a ",c.jsx(lA,{children:"producción"}),", sin sorpresas"]}),c.jsx(cA,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:ts,delay:.15},children:"Sprints cortos. Demos en vivo. Vos ves avances reales cada semana."})]}),c.jsxs(uA,{children:[c.jsx(fA,{children:c.jsxs(dA,{children:[c.jsx(Ci,{mode:"wait",children:c.jsxs(R.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:-12},transition:{duration:.4,ease:ts},style:{display:"flex",flexDirection:"column",gap:"0.85rem"},children:[c.jsx(hA,{children:a.step}),c.jsx(pA,{children:a.title}),c.jsx(mA,{children:a.description})]},a.step)}),c.jsxs(gA,{children:[c.jsxs(yA,{children:[c.jsxs("span",{children:[String(e+1).padStart(2,"0")," / ",String(t.length).padStart(2,"0")]}),c.jsx("span",{children:"Progreso"})]}),c.jsx(xA,{children:c.jsx(bA,{initial:!1,animate:{width:`${s}%`},transition:{duration:.6,ease:ts}})})]})]})}),c.jsx(vA,{children:t.map((o,r)=>c.jsx(SA,{ref:l=>i.current[r]=l,"data-index":r,$active:r===e,children:c.jsxs(wA,{children:[c.jsxs(TA,{children:["Paso ",o.step]}),c.jsx(jA,{children:o.title}),c.jsx(AA,{children:o.description})]})},o.step))})]})]})]})}const ll=[.22,1,.36,1],$A=[{label:"Resumen",items:[{id:"dashboard",label:"Panel Principal",icon:"home"}]},{label:"Gestión",items:[{id:"clientes",label:"Clientes",icon:"users"},{id:"ordenes",label:"Órdenes de Compra",icon:"cart"},{id:"productos",label:"Mis Productos",icon:"box"},{id:"descuentos",label:"Descuentos",icon:"tag"}]},{label:"Análisis",items:[{id:"ventas",label:"Resumen de Ventas",icon:"trend"},{id:"stock",label:"Alertas de Stock",icon:"warn"}]},{label:"Mi empresa",items:[{id:"config",label:"Configuración",icon:"gear"}]}],$0=["dashboard","ventas","stock"],EA=g.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  width: 100%;
  height: 560px;
  background: ${({theme:t})=>t.colors.bg};
  font-family: ${({theme:t})=>t.fonts.body};
  color: ${({theme:t})=>t.colors.text};

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    grid-template-columns: 64px 1fr;
    height: 480px;
  }
`,MA=g.aside`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 1rem 0.65rem;
  border-right: 1px solid ${({theme:t})=>t.colors.border};
  background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent);
  overflow: hidden;
`,zA=g.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.4rem 0.55rem;
  margin-bottom: 0.5rem;
  font-family: ${({theme:t})=>t.fonts.display};
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: -0.02em;
  color: ${({theme:t})=>t.colors.text};

  span {
    display: inline-flex;
    width: 20px;
    height: 20px;
    border-radius: 6px;
    background: ${({theme:t})=>t.gradients.brand};
    box-shadow: 0 0 12px ${({theme:t})=>t.colors.accentGlow};
  }

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    strong { display: none; }
  }
`,DA=g.div`
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.62rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({theme:t})=>t.colors.textMuted};
  padding: 0.6rem 0.55rem 0.25rem;

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    display: none;
  }
`,RA=g.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0.55rem;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  font-size: 0.82rem;
  color: ${({$active:t,theme:e})=>t?e.colors.text:e.colors.textTertiary};
  background: ${({$active:t})=>t?"rgba(6, 215, 255, 0.08)":"transparent"};
  position: relative;
  transition: all 0.25s;

  ${({$active:t,theme:e})=>t&&Ai`
      &::before {
        content: '';
        position: absolute;
        left: -0.65rem;
        top: 25%;
        bottom: 25%;
        width: 2px;
        border-radius: 2px;
        background: ${e.colors.accent};
      }
    `}

  svg {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    color: ${({$active:t,theme:e})=>t?e.colors.accent:e.colors.textMuted};
  }

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    justify-content: center;
    span.label { display: none; }
  }
`,OA=g.span`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 0.35rem;
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.65rem;
  background: rgba(239, 68, 68, 0.15);
  color: ${({theme:t})=>t.colors.error};
  border: 1px solid rgba(239, 68, 68, 0.35);
  border-radius: ${({theme:t})=>t.borderRadius.full};

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    display: none;
  }
`;function kA({name:t}){const e={fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(t){case"home":return c.jsx("svg",{viewBox:"0 0 24 24",...e,children:c.jsx("path",{d:"M3 11l9-8 9 8M5 10v10h14V10"})});case"users":return c.jsx("svg",{viewBox:"0 0 24 24",...e,children:c.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M19 7.13a4 4 0 010 7.75"})});case"cart":return c.jsxs("svg",{viewBox:"0 0 24 24",...e,children:[c.jsx("circle",{cx:"9",cy:"21",r:"1.5"}),c.jsx("circle",{cx:"18",cy:"21",r:"1.5"}),c.jsx("path",{d:"M3 3h2l2.7 12.4a2 2 0 002 1.6h7.6a2 2 0 002-1.6L21 7H6"})]});case"box":return c.jsx("svg",{viewBox:"0 0 24 24",...e,children:c.jsx("path",{d:"M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8"})});case"tag":return c.jsxs("svg",{viewBox:"0 0 24 24",...e,children:[c.jsx("path",{d:"M20.6 12.6L12 21.2a2 2 0 01-2.8 0L2 14V2h12l7.4 7.4a2 2 0 010 2.8z"}),c.jsx("circle",{cx:"7",cy:"7",r:"1.2"})]});case"trend":return c.jsx("svg",{viewBox:"0 0 24 24",...e,children:c.jsx("path",{d:"M3 17l6-6 4 4 8-8M14 7h7v7"})});case"warn":return c.jsx("svg",{viewBox:"0 0 24 24",...e,children:c.jsx("path",{d:"M10.3 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"})});case"gear":return c.jsxs("svg",{viewBox:"0 0 24 24",...e,children:[c.jsx("circle",{cx:"12",cy:"12",r:"3"}),c.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33h0a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51h0a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v0a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"})]});default:return null}}const VA=g.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,BA=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1.25rem;
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};
  background: rgba(255, 255, 255, 0.01);
`,LA=g.h4`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({theme:t})=>t.colors.text};
  margin: 0;
`,_A=g.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-left: 0.6rem;
  padding: 0.25rem 0.6rem;
  background: ${({theme:t})=>t.colors.bgCard};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.7rem;
  color: ${({theme:t})=>t.colors.textTertiary};

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    display: none;
  }
`,NA=g.div`
  flex: 1;
`,UA=g.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({theme:t})=>t.gradients.brand};
  box-shadow: 0 0 12px ${({theme:t})=>t.colors.accentGlow};
`,HA=g.div`
  flex: 1;
  padding: 1rem 1.25rem;
  overflow: hidden;
  position: relative;

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: 0.85rem;
  }
`,ph=g(R.div)`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  height: 100%;
`,f2=g.div`
  display: grid;
  grid-template-columns: ${({$cols:t=4})=>`repeat(${t}, 1fr)`};
  gap: 0.55rem;

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,d2=g(R.div)`
  padding: 0.7rem 0.85rem;
  background: ${({theme:t})=>t.colors.bgCard};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,h2=g.span`
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({theme:t})=>t.colors.textTertiary};
`,p2=g.span`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({theme:t})=>t.colors.text};
`,GA=g.span`
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.66rem;
  color: ${({theme:t})=>t.colors.textTertiary};
`,qA=g.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 0.7rem;
  flex: 1;
  min-height: 0;

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,cl=g.div`
  display: flex;
  flex-direction: column;
  background: ${({theme:t})=>t.colors.bgCard};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  overflow: hidden;
`,ul=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0.9rem;
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};

  h5 {
    font-family: ${({theme:t})=>t.fonts.display};
    font-size: 0.92rem;
    font-weight: 600;
    color: ${({theme:t})=>t.colors.text};
    letter-spacing: -0.01em;
    margin: 0;
  }

  small {
    font-family: ${({theme:t})=>t.fonts.mono};
    font-size: 0.65rem;
    color: ${({theme:t})=>t.colors.textTertiary};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`,m2=g.div`
  display: grid;
  grid-template-columns: 0.85fr 1.4fr 0.9fr 0.9fr 0.6fr;
  padding: 0.5rem 0.9rem;
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};
  background: rgba(255, 255, 255, 0.02);
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({theme:t})=>t.colors.textTertiary};

  span:last-child { text-align: right; }
`,YA=g(R.div)`
  display: grid;
  grid-template-columns: 0.85fr 1.4fr 0.9fr 0.9fr 0.6fr;
  align-items: center;
  padding: 0.55rem 0.9rem;
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};
  font-size: 0.8rem;
  color: ${({theme:t})=>t.colors.textSecondary};

  &:last-child { border-bottom: none; }
`,XA=g.span`
  font-family: ${({theme:t})=>t.fonts.mono};
  color: ${({theme:t})=>t.colors.text};
`,g2=g.span`
  font-family: ${({theme:t})=>t.fonts.mono};
  color: ${({theme:t})=>t.colors.text};
`,y2=g.span`
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.74rem;
  color: ${({theme:t})=>t.colors.textTertiary};
`,ZA=g.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.13rem 0.5rem;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.62rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: ${({$variant:t})=>t==="entregado"?"rgba(16,185,129,0.12)":t==="enviado"?"rgba(6,215,255,0.12)":t==="aprobado"?"rgba(147,51,234,0.14)":"rgba(255,189,46,0.12)"};
  color: ${({$variant:t,theme:e})=>t==="entregado"?e.colors.success:t==="enviado"?e.colors.accent:t==="aprobado"?e.colors.accentAlt:"#FFBD2E"};
  border: 1px solid ${({$variant:t})=>t==="entregado"?"rgba(16,185,129,0.3)":t==="enviado"?"rgba(6,215,255,0.3)":t==="aprobado"?"rgba(147,51,234,0.32)":"rgba(255,189,46,0.3)"};
`;g.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.22rem 0.55rem;
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.66rem;
  background: rgba(6,215,255,0.08);
  color: ${({theme:t})=>t.colors.accent};
  border: 1px solid ${({theme:t})=>t.colors.borderAccent};
  border-radius: ${({theme:t})=>t.borderRadius.sm};
  margin-left: auto;
`;const QA=g.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,KA=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.55rem 0.9rem;
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};
  font-size: 0.85rem;
  color: ${({theme:t})=>t.colors.textSecondary};

  &:last-child { border-bottom: none; }
`,FA=g.span`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({theme:t})=>t.colors.text};
`,PA=g(cl)`
  padding: 0;
`,JA=g.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0.9rem 1rem 0.75rem;
  gap: 0.5rem;
  min-height: 0;
`,WA=g.div`
  display: flex;
  align-items: baseline;
  gap: 0.6rem;

  strong {
    font-family: ${({theme:t})=>t.fonts.display};
    font-size: 1.35rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: ${({theme:t})=>t.colors.text};
  }

  small {
    font-family: ${({theme:t})=>t.fonts.mono};
    font-size: 0.7rem;
    color: ${({theme:t})=>t.colors.success};
  }
`,IA=g.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: end;
  gap: 0.32rem;
  min-height: 120px;
`,t9=g(R.div)`
  background: ${({theme:t})=>t.gradients.brand};
  border-radius: 3px 3px 0 0;
  width: 100%;
  box-shadow: 0 0 12px rgba(6,215,255,0.2);
  opacity: 0.95;
`,e9=g.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0.32rem;
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.6rem;
  text-align: center;
  color: ${({theme:t})=>t.colors.textTertiary};
`,n9=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
`,E0=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.85rem 0.95rem;
  background: ${({theme:t})=>t.colors.bgCard};
  border: 1px solid ${({$tone:t})=>t==="crit"?"rgba(239, 68, 68, 0.35)":"rgba(255, 189, 46, 0.3)"};
  border-radius: ${({theme:t})=>t.borderRadius.md};
`,M0=g.span`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: 1.7rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({$tone:t,theme:e})=>t==="crit"?e.colors.error:"#FFBD2E"};
`,z0=g.span`
  font-size: 0.78rem;
  color: ${({theme:t})=>t.colors.textSecondary};
`,i9=g(R.div)`
  display: grid;
  grid-template-columns: 1.4fr 0.7fr 0.7fr 0.7fr;
  align-items: center;
  padding: 0.55rem 0.9rem;
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};
  font-size: 0.8rem;
  color: ${({theme:t})=>t.colors.textSecondary};

  &:last-child { border-bottom: none; }
`,a9=g.span`
  color: ${({theme:t})=>t.colors.text};
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
`,s9=g.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({$tone:t,theme:e})=>t==="crit"?e.colors.error:"#FFBD2E"};
  box-shadow: 0 0 8px ${({$tone:t})=>t==="crit"?"rgba(239,68,68,0.5)":"rgba(255,189,46,0.5)"};
`,o9=[{num:"PO-04821",buyer:"Distribuidora Norte",date:"20 may",status:"entregado",amount:"USD 1.845"},{num:"PO-04820",buyer:"Mercado Central S.R.L.",date:"20 may",status:"enviado",amount:"USD 923"},{num:"PO-04819",buyer:"Almacén Don Pedro",date:"19 may",status:"aprobado",amount:"USD 478"},{num:"PO-04818",buyer:"Súper Hogar",date:"19 may",status:"pendiente",amount:"USD 2.154"},{num:"PO-04817",buyer:"Mayorista Suárez",date:"18 may",status:"entregado",amount:"USD 731"}],r9=[{label:"Pendiente",count:8,tone:"warn"},{label:"Aprobado",count:14,tone:"info"},{label:"Rechazado",count:2,tone:"muted"},{label:"Enviado",count:11,tone:"accent"},{label:"Entregado",count:39,tone:"success"}];function l9(){return c.jsxs(ph,{initial:{opacity:0,x:16},animate:{opacity:1,x:0},exit:{opacity:0,x:-16},transition:{duration:.45,ease:ll},children:[c.jsx(f2,{$cols:4,children:[{label:"Órdenes Totales",value:"74",hint:"8 pendientes de aprobación"},{label:"Ingresos Totales",value:"USD 28.4K",hint:"Promedio · USD 384 / orden"},{label:"Pendientes de Aprobación",value:"8",hint:"Requieren atención"},{label:"Tasa de Finalización",value:"92%",hint:"39 / 42 entregadas"}].map((t,e)=>c.jsxs(d2,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.4,delay:.1+e*.06},children:[c.jsx(h2,{children:t.label}),c.jsx(p2,{children:t.value}),c.jsx(GA,{children:t.hint})]},t.label))}),c.jsxs(qA,{children:[c.jsxs(cl,{children:[c.jsxs(ul,{children:[c.jsx("h5",{children:"Órdenes Recientes"}),c.jsx("small",{children:"Últimas 5"})]}),c.jsxs(m2,{children:[c.jsx("span",{children:"Número"}),c.jsx("span",{children:"Empresa Compradora"}),c.jsx("span",{children:"Fecha"}),c.jsx("span",{children:"Estado"}),c.jsx("span",{children:"Monto"})]}),o9.map((t,e)=>c.jsxs(YA,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.4,delay:.2+e*.07},children:[c.jsx(XA,{children:t.num}),c.jsx("span",{children:t.buyer}),c.jsx(y2,{children:t.date}),c.jsx("span",{children:c.jsx(ZA,{$variant:t.status,children:t.status})}),c.jsx(g2,{style:{textAlign:"right"},children:t.amount})]},t.num))]}),c.jsxs(cl,{children:[c.jsxs(ul,{children:[c.jsx("h5",{children:"Resumen de Estados"}),c.jsx("small",{children:"Este mes"})]}),c.jsx(QA,{children:r9.map(t=>c.jsxs(KA,{children:[c.jsx("span",{children:t.label}),c.jsx(FA,{children:t.count})]},t.label))})]})]})]},"dashboard")}const c9=[.42,.55,.48,.62,.58,.71,.65,.78,.72,.88,.82,.95],u9=["E","F","M","A","M","J","J","A","S","O","N","D"];function f9(){return c.jsxs(ph,{initial:{opacity:0,x:16},animate:{opacity:1,x:0},exit:{opacity:0,x:-16},transition:{duration:.45,ease:ll},children:[c.jsx(f2,{$cols:6,children:[{label:"Ingresos Totales",value:"USD 284K"},{label:"Órdenes Totales",value:"742"},{label:"Unidades Vendidas",value:"12.840"},{label:"Clientes Activos",value:"168"},{label:"Valor Prom. / Orden",value:"USD 384"},{label:"Productos Activos",value:"320"}].map((t,e)=>c.jsxs(d2,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.4,delay:.1+e*.05},children:[c.jsx(h2,{children:t.label}),c.jsx(p2,{children:t.value})]},t.label))}),c.jsxs(PA,{children:[c.jsxs(ul,{children:[c.jsx("h5",{children:"Tendencia de Ingresos"}),c.jsx("small",{children:"Este año · USD"})]}),c.jsxs(JA,{children:[c.jsxs(WA,{children:[c.jsx("strong",{children:"USD 284K"}),c.jsx("small",{children:"+ 32% vs año anterior"})]}),c.jsx(IA,{children:c9.map((t,e)=>c.jsx(t9,{initial:{height:0},animate:{height:`${t*100}%`},transition:{duration:.7,delay:.15+e*.05,ease:ll},style:{alignSelf:"end"}},e))}),c.jsx(e9,{children:u9.map((t,e)=>c.jsx("span",{children:t},e))})]})]})]},"ventas")}const d9=[{product:"Yerba Mate La Tranquera 1kg",sku:"YM-1000",current:4,min:50,tone:"crit"},{product:"Aceite Girasol Cocinero 1.5L",sku:"AG-1500",current:9,min:60,tone:"crit"},{product:"Detergente Magistral 750ml",sku:"DT-0750",current:18,min:40,tone:"warn"},{product:"Galletitas Don Satur 220g",sku:"GS-0220",current:22,min:80,tone:"warn"},{product:"Arroz Gallo Oro 1kg",sku:"AR-1000",current:12,min:40,tone:"warn"}];function h9(){return c.jsxs(ph,{initial:{opacity:0,x:16},animate:{opacity:1,x:0},exit:{opacity:0,x:-16},transition:{duration:.45,ease:ll},children:[c.jsxs(n9,{children:[c.jsxs(E0,{$tone:"crit",children:[c.jsx(z0,{children:"Críticos · stock bajo mínimo"}),c.jsx(M0,{$tone:"crit",children:"2"})]}),c.jsxs(E0,{$tone:"warn",children:[c.jsx(z0,{children:"Advertencia · stock cercano al mínimo"}),c.jsx(M0,{$tone:"warn",children:"3"})]})]}),c.jsxs(cl,{children:[c.jsxs(ul,{children:[c.jsx("h5",{children:"Productos con Alerta"}),c.jsx("small",{children:"Ver Todas"})]}),c.jsxs(m2,{style:{gridTemplateColumns:"1.4fr 0.7fr 0.7fr 0.7fr"},children:[c.jsx("span",{children:"Producto"}),c.jsx("span",{children:"SKU"}),c.jsx("span",{children:"Stock"}),c.jsx("span",{style:{textAlign:"right"},children:"Mínimo"})]}),d9.map((t,e)=>c.jsxs(i9,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.4,delay:.18+e*.07},children:[c.jsxs(a9,{children:[c.jsx(s9,{$tone:t.tone}),t.product]}),c.jsx(y2,{children:t.sku}),c.jsx("span",{style:{color:t.tone==="crit"?"#EF4444":"#FFBD2E",fontFamily:"var(--font-mono)"},children:t.current}),c.jsx(g2,{style:{textAlign:"right"},children:t.min})]},t.sku))]})]},"stock")}const p9={dashboard:{title:"Panel Principal",period:"Este Mes",component:l9},ventas:{title:"Resumen de Ventas",period:"Este Año",component:f9},stock:{title:"Alertas de Stock",period:"Tiempo real",component:h9}};function m9(){const[t,e]=$.useState(0),n=$0[t],i=p9[n],a=i.component;return $.useEffect(()=>{const s=setInterval(()=>e(o=>(o+1)%$0.length),4800);return()=>clearInterval(s)},[]),c.jsxs(EA,{children:[c.jsxs(MA,{children:[c.jsxs(zA,{children:[c.jsx("span",{}),c.jsx("strong",{children:"AbastoLink"})]}),$A.map(s=>c.jsxs("div",{children:[c.jsx(DA,{children:s.label}),s.items.map(o=>c.jsxs(RA,{$active:o.id===n,children:[c.jsx(kA,{name:o.icon}),c.jsx("span",{className:"label",children:o.label}),o.id==="stock"&&c.jsx(OA,{children:"2"})]},o.id))]},s.label))]}),c.jsxs(VA,{children:[c.jsxs(BA,{children:[c.jsx(LA,{children:i.title}),c.jsx(_A,{children:i.period}),c.jsx(NA,{}),c.jsx(UA,{})]}),c.jsx(HA,{children:c.jsx(Ci,{mode:"wait",children:c.jsx(a,{})})})]})]})}const Fc={initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:[.22,1,.36,1]}},g9=g.section`
  position: relative;
  padding: ${({theme:t})=>t.spacing.xxxl} 0;
  overflow: hidden;
  isolation: isolate;

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: ${({theme:t})=>t.spacing.xxl} 0;
  }
`,y9=g.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 25%, rgba(6, 215, 255, 0.07), transparent 60%);
  z-index: -1;
  pointer-events: none;
`,x9=g.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({theme:t})=>t.spacing.lg};

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: 0 ${({theme:t})=>t.spacing.md};
  }
`,b9=g(R.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.sm};
  text-align: center;
  margin-bottom: ${({theme:t})=>t.spacing.xxl};
`,D0=g.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 122, 26, 0.3);
  border-radius: ${({theme:t})=>t.borderRadius.full};
  background: rgba(255, 122, 26, 0.08);
  backdrop-filter: blur(12px);
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.78rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({theme:t})=>t.colors.accentWarm};
  width: fit-content;
`,v9=g.h2`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: clamp(1.65rem, 2.6vw, 2.15rem);
  font-weight: 500;
  letter-spacing: -0.03em;
  color: ${({theme:t})=>t.colors.text};
`,S9=g(R.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.sm};
  text-align: center;
  margin-bottom: ${({theme:t})=>t.spacing.xl};
  max-width: 880px;
  margin-left: auto;
  margin-right: auto;
`,w9=g.h3`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: clamp(2.5rem, 5.5vw, 4rem);
  font-weight: 600;
  line-height: 1.04;
  letter-spacing: -0.04em;
  color: ${({theme:t})=>t.colors.text};

  span {
    background: ${({theme:t})=>t.gradients.brand};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,T9=g.p`
  font-size: 1.15rem;
  color: ${({theme:t})=>t.colors.textSecondary};
  line-height: 1.6;
  max-width: 640px;
`,j9=g(R.div)`
  position: relative;
  margin: 0 auto ${({theme:t})=>t.spacing.xxl};
  max-width: 1120px;
  border-radius: ${({theme:t})=>t.borderRadius.lg};
  border: 1px solid ${({theme:t})=>t.colors.border};
  background: ${({theme:t})=>t.colors.bgElevated};
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.02) inset;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: ${({theme:t})=>t.borderRadius.lg};
    background: ${({theme:t})=>t.gradients.brand};
    opacity: 0.15;
    filter: blur(50px);
    z-index: -1;
  }
`,A9=g.div`
  height: 36px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${({theme:t})=>t.colors.bgAlt};
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};
`,Pc=g.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({$color:t})=>t};
  display: inline-block;
`,C9=g.div`
  margin-left: auto;
  margin-right: auto;
  padding: 4px 14px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  background: ${({theme:t})=>t.colors.bgCard};
  border: 1px solid ${({theme:t})=>t.colors.border};
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.78rem;
  color: ${({theme:t})=>t.colors.textTertiary};
  min-width: 220px;
  text-align: center;
`;g.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`;const $9=g.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: ${({theme:t})=>t.spacing.xl};
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: ${({theme:t})=>t.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({theme:t})=>t.spacing.lg};
  }
`,E9=g(R.div)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing.sm};
`,R0=g.h4`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({theme:t})=>t.colors.accent};
  letter-spacing: -0.02em;

  &:not(:first-child) {
    margin-top: ${({theme:t})=>t.spacing.md};
  }
`,O0=g.p`
  font-size: 1.05rem;
  color: ${({theme:t})=>t.colors.textSecondary};
  line-height: 1.7;
`,M9=g(R.div)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing.md};
`,k0=g.div`
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.lg};
  background: ${({theme:t})=>t.colors.bgCard};
  padding: ${({theme:t})=>t.spacing.md};
  backdrop-filter: blur(8px);
`,V0=g.h5`
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({theme:t})=>t.colors.textTertiary};
  margin-bottom: ${({theme:t})=>t.spacing.sm};
`,z9=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:t})=>t.spacing.sm};
  padding: 0.85rem 0;
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`,D9=g.span`
  font-size: 0.95rem;
  color: ${({theme:t})=>t.colors.textSecondary};
`,R9=g.span`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: 1.5rem;
  font-weight: 600;
  background: ${({theme:t})=>t.gradients.brand};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
`,O9=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,k9=g.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.85rem;
  border: 1px solid ${({theme:t})=>t.colors.border};
  background: ${({theme:t})=>t.colors.bgCard};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.78rem;
  color: ${({theme:t})=>t.colors.text};
`,V9=g.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({theme:t})=>t.colors.accent};
  box-shadow: 0 0 8px ${({theme:t})=>t.colors.accentGlow};
`,B9=g(R.div)`
  display: flex;
  justify-content: center;
  margin-top: ${({theme:t})=>t.spacing.xxl};
`,L9=g.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: 1.05rem;
  font-weight: 500;
  color: ${({theme:t})=>t.colors.text};
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};
  transition: all ${({theme:t})=>t.transitions.normal};

  svg {
    transition: transform ${({theme:t})=>t.transitions.normal};
    color: ${({theme:t})=>t.colors.accent};
  }

  &:hover {
    color: ${({theme:t})=>t.colors.accent};
    border-color: ${({theme:t})=>t.colors.borderAccent};
  }

  &:hover svg {
    transform: translateX(6px);
  }
`;function _9(){const t=nt.projects[0];return t?c.jsxs(g9,{id:"proyectos",children:[c.jsx(y9,{}),c.jsxs(x9,{children:[c.jsxs(b9,{...Fc,children:[c.jsx(D0,{children:"03 · Trabajos"}),c.jsx(v9,{children:"Últimos proyectos a producción"})]}),c.jsxs(S9,{...Fc,children:[c.jsx(D0,{children:t.eyebrow}),c.jsx(w9,{children:c.jsx("span",{children:t.title})}),c.jsx(T9,{children:t.subtitle})]}),c.jsxs(j9,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,margin:"-80px"},transition:{duration:.8,ease:[.22,1,.36,1]},children:[c.jsxs(A9,{children:[c.jsx(Pc,{$color:"#FF5F57"}),c.jsx(Pc,{$color:"#FEBC2E"}),c.jsx(Pc,{$color:"#28C840"}),c.jsx(C9,{children:"abastolink.com"})]}),c.jsx(m9,{})]}),c.jsxs($9,{children:[c.jsxs(E9,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:[.22,1,.36,1]},children:[c.jsx(R0,{children:"El problema"}),c.jsx(O0,{children:t.problem}),c.jsx(R0,{children:"La solución"}),c.jsx(O0,{children:t.solution})]}),c.jsxs(M9,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,delay:.1,ease:[.22,1,.36,1]},children:[c.jsxs(k0,{children:[c.jsx(V0,{children:"Resultados"}),t.highlights.map(e=>c.jsxs(z9,{children:[c.jsx(D9,{children:e.label}),c.jsx(R9,{children:e.value})]},e.label))]}),c.jsxs(k0,{children:[c.jsx(V0,{children:"Stack"}),c.jsx(O9,{children:t.stack.map(e=>c.jsxs(k9,{children:[c.jsx(V9,{}),e]},e))})]})]})]}),c.jsx(B9,{...Fc,children:c.jsxs(L9,{href:"#cta",children:["¿Querés algo así para tu empresa? Hablemos",c.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})]})]}):null}const Uo=[.22,1,.36,1],Ef=32,N9=12,U9=13,H9="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(""),G9=55,B0=600,q9=1100,Y9=38,X9=[{label:"RESPUESTA INICIAL",value:"24 HS"},{label:"PRIMER MVP",value:"4 8 SEM"},{label:"DEMO POR SPRINT",value:"1 2 SEM"},{label:"CODIGO TUYO",value:"100%"}],Z9=g.section`
  position: relative;
  padding: ${({theme:t})=>t.spacing.xxxl} 0;
  isolation: isolate;
  overflow-x: clip;

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: ${({theme:t})=>t.spacing.xxl} 0;
  }
`,Q9=g.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(circle at 20% 10%, rgba(6, 215, 255, 0.08), transparent 45%),
    radial-gradient(circle at 80% 90%, rgba(147, 51, 234, 0.06), transparent 45%);
`,K9=g.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({theme:t})=>t.spacing.lg};

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: 0 ${({theme:t})=>t.spacing.md};
  }
`,F9=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({theme:t})=>t.spacing.md};
  margin: 0 auto ${({theme:t})=>t.spacing.xl};
  max-width: 720px;
`,P9=g(R.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid ${({theme:t})=>t.colors.borderAccent};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  background: rgba(6, 215, 255, 0.06);
  backdrop-filter: blur(12px);
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  color: ${({theme:t})=>t.colors.accent};
  letter-spacing: 0.18em;
  text-transform: uppercase;
  width: fit-content;
`,J9=g.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({theme:t})=>t.colors.accent};
  box-shadow: 0 0 10px ${({theme:t})=>t.colors.accentGlow};
`,W9=g(R.h2)`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: ${({theme:t})=>t.colors.text};
`,I9=g.span`
  background: ${({theme:t})=>t.gradients.brand};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`,tC=g(R.p)`
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  color: ${({theme:t})=>t.colors.textSecondary};
  line-height: 1.6;
  max-width: 560px;
`,eC=g(R.div)`
  --tile-w: 32px;
  --tile-h: 44px;
  --tile-gap: 2px;
  --tile-font: 22px;

  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: ${({theme:t})=>t.spacing.lg};
  margin: 0 auto;
  width: fit-content;
  max-width: 100%;
  background: #050509;
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.lg};
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  overflow: hidden;

  @media (max-width: ${({theme:t})=>t.breakpoints.desktop}) {
    --tile-w: 24px;
    --tile-h: 34px;
    --tile-font: 17px;
    padding: ${({theme:t})=>t.spacing.md};
  }

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    --tile-w: 18px;
    --tile-h: 26px;
    --tile-gap: 1px;
    --tile-font: 13px;
    padding: ${({theme:t})=>t.spacing.sm};
    gap: 5px;
  }

  @media (max-width: ${({theme:t})=>t.breakpoints.mobile}) {
    --tile-w: 14px;
    --tile-h: 20px;
    --tile-font: 10px;
  }
`,nC=g.div`
  display: grid;
  grid-template-columns: repeat(${Ef}, var(--tile-w));
  gap: var(--tile-gap);
`,iC=g.div`
  position: relative;
  width: var(--tile-w);
  height: var(--tile-h);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: var(--tile-font);
  font-weight: 600;
  line-height: 1;
  color: ${({theme:t})=>t.colors.text};
  background: ${({$empty:t})=>t?"#020205":"#0A0A0E"};
  border: 1px solid ${({$empty:t})=>t?"rgba(255,255,255,0.02)":"rgba(255,255,255,0.05)"};
  border-radius: 3px;
  overflow: hidden;
  user-select: none;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.04) 0%,
      rgba(255, 255, 255, 0) 48%,
      rgba(0, 0, 0, 0.35) 50%,
      rgba(0, 0, 0, 0.15) 100%
    );
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background: rgba(0, 0, 0, 0.6);
    pointer-events: none;
  }
`,aC=g.span`
  position: relative;
  z-index: 1;
  background: linear-gradient(180deg, #FAFAFA 0%, #B8B8C0 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  letter-spacing: 0;
`;function sC(t,e){const n=new Array(Ef).fill(null),i=t.slice(0,N9).toUpperCase();for(let o=0;o<i.length;o++)n[o]=i[o];const a=e.slice(0,U9).toUpperCase(),s=Ef-a.length;for(let o=0;o<a.length;o++)n[s+o]=a[o];return n}function oC({targetChar:t,delay:e,active:n}){const i=t===null||t===" "||t===void 0,[a,s]=$.useState(" "),o=$.useRef(!1);return $.useEffect(()=>{if(!n||o.current)return;if(i){s(" "),o.current=!0;return}let r=null,l=null;const u=setTimeout(()=>{r=setInterval(()=>{const h=/[0-9]/.test(t)||t==="."||t==="%"?"0123456789".split(""):H9,d=h[Math.floor(Math.random()*h.length)];s(d)},G9);const f=B0+Math.random()*(q9-B0);l=setTimeout(()=>{r&&clearInterval(r),s(t),o.current=!0},f)},e);return()=>{clearTimeout(u),l&&clearTimeout(l),r&&clearInterval(r)}},[n,t,e,i]),c.jsx(iC,{$empty:i,children:!i&&c.jsx(aC,{children:a})})}function rC({label:t,value:e,rowDelay:n,active:i}){const a=$.useMemo(()=>sC(t,e),[t,e]);return c.jsx(nC,{children:a.map((s,o)=>c.jsx(oC,{targetChar:s,delay:n+o*Y9,active:i},o))})}function lC(){const t=$.useRef(null),e=E7(t,{once:!0,margin:"-80px"});return c.jsxs(Z9,{id:"stats",children:[c.jsx(Q9,{}),c.jsxs(K9,{children:[c.jsxs(F9,{children:[c.jsxs(P9,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.5,ease:Uo},children:[c.jsx(J9,{}),"Compromisos"]}),c.jsxs(W9,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:Uo,delay:.05},children:["Lo que prometemos ",c.jsx(I9,{children:"por escrito"})]}),c.jsx(tC,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:Uo,delay:.15},children:"Reglas que firmamos al arrancar. Sin letra chica, sin sorpresas."})]}),c.jsx(eC,{ref:t,initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.8,ease:Uo},children:X9.map((n,i)=>c.jsx(rC,{label:n.label,value:n.value,rowDelay:i*120,active:e},n.label))})]})]})}const ti=[.22,1,.36,1],cC=g.section`
  position: relative;
  padding: ${({theme:t})=>t.spacing.xxxl} 0;
  isolation: isolate;
  overflow-x: clip;

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: ${({theme:t})=>t.spacing.xxl} 0;
  }
`,uC=g.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(circle at 50% 0%, rgba(147, 51, 234, 0.07), transparent 55%),
    radial-gradient(circle at 50% 100%, rgba(6, 215, 255, 0.05), transparent 55%);
`,fC=g.div`
  position: relative;
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  padding: 0 ${({theme:t})=>t.spacing.lg};

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: 0 ${({theme:t})=>t.spacing.md};
  }
`,dC=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({theme:t})=>t.spacing.md};
  margin-bottom: ${({theme:t})=>t.spacing.xl};
`,hC=g(R.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid ${({theme:t})=>t.colors.accentAltGlow};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  background: rgba(147, 51, 234, 0.08);
  backdrop-filter: blur(12px);
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  color: ${({theme:t})=>t.colors.accentAlt};
  letter-spacing: 0.18em;
  text-transform: uppercase;
  width: fit-content;
`,pC=g(R.h2)`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: ${({theme:t})=>t.colors.text};
  max-width: 720px;
`,mC=g(R.p)`
  font-size: clamp(1rem, 1.4vw, 1.1rem);
  color: ${({theme:t})=>t.colors.textSecondary};
  line-height: 1.6;
  max-width: 560px;
`,gC=g.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({theme:t})=>t.colors.border};
`,yC=g(R.div)`
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};
`,xC=g.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:t})=>t.spacing.md};
  padding: 1.4rem 0.25rem;
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  color: ${({$open:t,theme:e})=>t?e.colors.text:e.colors.textSecondary};
  transition: color ${({theme:t})=>t.transitions.normal};

  &:hover {
    color: ${({theme:t})=>t.colors.text};
  }

  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px ${({theme:t})=>t.colors.borderAccent};
    border-radius: ${({theme:t})=>t.borderRadius.sm};
  }

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: 1.2rem 0.25rem;
  }
`,bC=g.span`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: clamp(1.05rem, 1.6vw, 1.25rem);
  font-weight: 500;
  letter-spacing: -0.015em;
  line-height: 1.35;
  color: inherit;
`,vC=g(R.span)`
  position: relative;
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:t})=>t.colors.accentAlt};
`,SC=g.span`
  position: absolute;
  inset: 50% 0 auto 0;
  height: 1.5px;
  background: currentColor;
  border-radius: 2px;
  transform-origin: center;
  transform: translateY(-50%);
`,wC=g(R.span)`
  position: absolute;
  inset: 0 50% 0 auto;
  width: 1.5px;
  background: currentColor;
  border-radius: 2px;
  transform-origin: center;
  transform: translateX(50%);
`,TC=g(R.div)`
  overflow: hidden;
`,jC=g.div`
  padding: 0 0 1.4rem 0;
  max-width: 700px;
`,AC=g.p`
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:t})=>t.colors.textSecondary};

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    font-size: 0.95rem;
  }
`;function CC(){const t=nt.faq,[e,n]=$.useState(0),i=a=>{n(s=>s===a?-1:a)};return c.jsxs(cC,{id:"faq",children:[c.jsx(uC,{}),c.jsxs(fC,{children:[c.jsxs(dC,{children:[c.jsx(hC,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.5,ease:ti},children:"05 · Preguntas frecuentes"}),c.jsx(pC,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:ti,delay:.05},children:"Preguntas que solemos recibir"}),c.jsx(mC,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:ti,delay:.15},children:"Si tu duda no aparece acá, escribinos. Respondemos todo personalmente."})]}),c.jsx(gC,{children:t.map((a,s)=>{const o=s===e,r=`faq-panel-${s}`,l=`faq-button-${s}`;return c.jsxs(yC,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.6,ease:ti,delay:s*.08},children:[c.jsxs(xC,{type:"button",id:l,"aria-expanded":o,"aria-controls":r,onClick:()=>i(s),$open:o,children:[c.jsx(bC,{children:a.q}),c.jsxs(vC,{animate:{rotate:o?180:0},transition:{duration:.35,ease:ti},children:[c.jsx(SC,{}),c.jsx(wC,{animate:{scaleY:o?0:1},transition:{duration:.3,ease:ti}})]})]}),c.jsx(Ci,{initial:!1,children:o&&c.jsx(TC,{id:r,role:"region","aria-labelledby":l,initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.4,ease:ti},children:c.jsx(jC,{children:c.jsx(AC,{children:a.a})})},"panel")})]},a.q)})})]})]})}const $C={initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:[.22,1,.36,1]}},EC=g.section`
  position: relative;
  padding: ${({theme:t})=>t.spacing.xxxl} 0;
  overflow: hidden;

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: ${({theme:t})=>t.spacing.xxl} 0;
  }
`,MC=g.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({theme:t})=>t.spacing.lg};

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: 0 ${({theme:t})=>t.spacing.md};
  }
`,zC=g(R.div)`
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.xl};
  padding: ${({theme:t})=>`${t.spacing.xxxl} ${t.spacing.xl}`};
  background: ${({theme:t})=>t.colors.bgAlt};
  overflow: hidden;
  isolation: isolate;
  text-align: center;

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: ${({theme:t})=>`${t.spacing.xxl} ${t.spacing.md}`};
  }
`,DC=g.div`
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    radial-gradient(circle at 30% 20%, rgba(6, 215, 255, 0.22), transparent 55%),
    radial-gradient(circle at 75% 85%, rgba(147, 51, 234, 0.2), transparent 55%);
`,RC=g.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse at center, black 25%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 25%, transparent 75%);
  pointer-events: none;
`,OC=g.div`
  position: absolute;
  width: 540px;
  height: 540px;
  border-radius: 50%;
  border: 1px solid ${({theme:t})=>t.colors.borderAccent};
  opacity: 0.25;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    inset: 80px;
    border-radius: 50%;
    border: 1px solid ${({theme:t})=>t.colors.borderAccent};
    opacity: 0.6;
  }
`,kC=g(R.ul)`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({theme:t})=>t.spacing.md};
  list-style: none;
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.78rem;
  color: ${({theme:t})=>t.colors.textSecondary};
  margin: 0 auto ${({theme:t})=>t.spacing.lg};
  padding: 0;

  li {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }

  svg {
    color: ${({theme:t})=>t.colors.accent};
    flex-shrink: 0;
  }
`,VC=g(R.h2)`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 600;
  line-height: 1.04;
  letter-spacing: -0.04em;
  color: ${({theme:t})=>t.colors.text};
  margin: 0 auto;
  max-width: 880px;

  span {
    background: ${({theme:t})=>t.gradients.brand};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,BC=g(R.p)`
  font-size: 1.15rem;
  color: ${({theme:t})=>t.colors.textSecondary};
  max-width: 520px;
  margin: ${({theme:t})=>t.spacing.md} auto ${({theme:t})=>t.spacing.lg};
  line-height: 1.6;
`,LC=g(R.div)`
  display: flex;
  justify-content: center;
  gap: ${({theme:t})=>t.spacing.md};
  flex-wrap: wrap;
  margin-top: ${({theme:t})=>t.spacing.sm};
`,_C=g.a`
  position: relative;
  padding: 0.95rem 1.75rem;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-weight: 500;
  font-size: 0.98rem;
  color: ${({theme:t})=>t.colors.bg};
  background: ${({theme:t})=>t.colors.accent};
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  transition: all ${({theme:t})=>t.transitions.normal};
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({theme:t})=>t.gradients.brand};
    opacity: 0;
    transition: opacity ${({theme:t})=>t.transitions.normal};
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px ${({theme:t})=>t.colors.accentGlow};
    color: ${({theme:t})=>t.colors.text};
  }

  &:hover::before {
    opacity: 1;
  }

  svg {
    transition: transform ${({theme:t})=>t.transitions.normal};
  }

  &:hover svg {
    transform: translateX(3px);
  }
`,NC=g.a`
  padding: 0.95rem 1.75rem;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-weight: 500;
  font-size: 0.98rem;
  color: ${({theme:t})=>t.colors.text};
  border: 1px solid ${({theme:t})=>t.colors.border};
  background: ${({theme:t})=>t.colors.bgCard};
  backdrop-filter: blur(8px);
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  transition: all ${({theme:t})=>t.transitions.normal};

  &:hover {
    border-color: ${({theme:t})=>t.colors.borderHover};
    transform: translateY(-2px);
    background: ${({theme:t})=>t.colors.bgCardHover};
  }
`;function UC(){const t=`https://api.whatsapp.com/send?phone=${nt.contact.whatsapp}&text=Hola!%20Quiero%20agendar%20una%20llamada%20con%20Biztek.`,e=`mailto:${nt.contact.email}`;return c.jsx(EC,{id:"cta",children:c.jsx(MC,{children:c.jsxs(zC,{...$C,children:[c.jsx(DC,{}),c.jsx(RC,{}),c.jsx(OC,{}),c.jsxs(kC,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.6},children:[c.jsxs("li",{children:[c.jsx(yr,{size:16})," Te respondemos en menos de 24hs"]}),c.jsxs("li",{children:[c.jsx(yr,{size:16})," Sin contrato anual"]}),c.jsxs("li",{children:[c.jsx(yr,{size:16})," Todo lo que hacemos queda tuyo desde el primer día"]})]}),c.jsxs(VC,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,delay:.1,ease:[.22,1,.36,1]},children:["¿Querés construir algo que ",c.jsx("span",{children:"cambie tu negocio"}),"?"]}),c.jsx(BC,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,delay:.25},children:"Charlemos 30 minutos. Sin compromiso y sin vueltas."}),c.jsxs(LC,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,delay:.4},children:[c.jsxs(_C,{href:t,target:"_blank",rel:"noopener noreferrer",children:[c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:c.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})}),"Agendar una llamada",c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),c.jsx(NC,{href:e,children:"Escribinos un correo"})]})]})})})}function HC(t){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(t)}function GC(t){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(t)}const qC={initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:[.22,1,.36,1]}},YC=g.section`
  position: relative;
  padding: ${({theme:t})=>t.spacing.xxxl} 0;
  overflow: hidden;
  isolation: isolate;

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: ${({theme:t})=>t.spacing.xxl} 0;
  }
`,XC=g.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 80% 20%, rgba(147, 51, 234, 0.08), transparent 55%);
  z-index: -1;
  pointer-events: none;
`,ZC=g.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({theme:t})=>t.spacing.lg};

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: 0 ${({theme:t})=>t.spacing.md};
  }
`,QC=g(R.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.sm};
  text-align: center;
  margin-bottom: ${({theme:t})=>t.spacing.xxl};
`,KC=g.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  background: ${({theme:t})=>t.colors.bgCard};
  backdrop-filter: blur(12px);
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.78rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({theme:t})=>t.colors.accent};
  width: fit-content;
`,FC=g.h2`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  letter-spacing: -0.04em;
  color: ${({theme:t})=>t.colors.text};
  line-height: 1.1;

  span {
    background: ${({theme:t})=>t.gradients.brand};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,PC=g.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: ${({theme:t})=>t.spacing.xl};
  max-width: 1120px;
  margin: 0 auto;
  align-items: start;

  @media (max-width: ${({theme:t})=>t.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({theme:t})=>t.spacing.lg};
  }
`,JC=g(R.div)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing.md};
`,WC=g.h3`
  font-family: ${({theme:t})=>t.fonts.display};
  font-size: clamp(1.6rem, 2.6vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: ${({theme:t})=>t.colors.text};
  line-height: 1.15;
`,IC=g.p`
  color: ${({theme:t})=>t.colors.textSecondary};
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 480px;
`,t$=g.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing.sm};
  margin-top: ${({theme:t})=>t.spacing.xs};
`,L0=g.li`
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    color: ${({theme:t})=>t.colors.text};
    font-size: 1rem;
    transition: color ${({theme:t})=>t.transitions.fast};

    &:hover {
      color: ${({theme:t})=>t.colors.accent};
    }

    svg {
      color: ${({theme:t})=>t.colors.accent};
      flex-shrink: 0;
    }
  }
`,e$=g.div`
  display: flex;
  gap: ${({theme:t})=>t.spacing.sm};
  margin-top: ${({theme:t})=>t.spacing.sm};
`,_0=g.a`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid ${({theme:t})=>t.colors.border};
  background: ${({theme:t})=>t.colors.bgCard};
  color: ${({theme:t})=>t.colors.textSecondary};
  transition: all ${({theme:t})=>t.transitions.fast};

  &:hover {
    border-color: ${({theme:t})=>t.colors.borderAccent};
    color: ${({theme:t})=>t.colors.accent};
    box-shadow: 0 0 18px ${({theme:t})=>t.colors.accentGlow};
    transform: translateY(-2px);
  }
`,n$=g(R.div)`
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.lg};
  background: ${({theme:t})=>t.colors.bgCard};
  padding: ${({theme:t})=>t.spacing.lg};
  backdrop-filter: blur(8px);
`,i$=g.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing.sm};
`,Ho=g.label`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,Go=g.span`
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: ${({theme:t})=>t.colors.textTertiary};
`,x2=({theme:t})=>`
  background: ${t.colors.bgElevated};
  border: 1px solid ${t.colors.border};
  color: ${t.colors.text};
  padding: 0.85rem 1rem;
  border-radius: ${t.borderRadius.md};
  font-family: ${t.fonts.body};
  font-size: 0.95rem;
  width: 100%;
  transition: border-color ${t.transitions.fast}, box-shadow ${t.transitions.fast};

  &::placeholder {
    color: ${t.colors.textTertiary};
  }

  &:focus {
    outline: none;
    border-color: ${t.colors.accent};
    box-shadow: 0 0 0 3px ${t.colors.accentGlow};
  }
`,Jc=g.input`
  ${t=>x2(t)}
`,a$=g.textarea`
  ${t=>x2(t)}
  min-height: 120px;
  resize: vertical;
  font-family: ${({theme:t})=>t.fonts.body};
`,s$=g.button`
  position: relative;
  margin-top: ${({theme:t})=>t.spacing.xs};
  padding: 0.95rem 1.75rem;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-weight: 500;
  font-size: 0.98rem;
  color: ${({theme:t})=>t.colors.bg};
  background: ${({theme:t})=>t.colors.accent};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  transition: all ${({theme:t})=>t.transitions.normal};
  overflow: hidden;
  isolation: isolate;
  width: 100%;
  cursor: pointer;
  border: none;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({theme:t})=>t.gradients.brand};
    opacity: 0;
    transition: opacity ${({theme:t})=>t.transitions.normal};
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px ${({theme:t})=>t.colors.accentGlow};
    color: ${({theme:t})=>t.colors.text};
  }

  &:hover::before {
    opacity: 1;
  }

  svg {
    transition: transform ${({theme:t})=>t.transitions.normal};
  }

  &:hover svg {
    transform: translateX(4px);
  }
`,o$=g(R.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: ${({theme:t})=>t.spacing.md};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  border: 1px solid ${({theme:t})=>t.colors.success};
  background: rgba(16, 185, 129, 0.08);
  color: ${({theme:t})=>t.colors.text};

  svg {
    color: ${({theme:t})=>t.colors.success};
    flex-shrink: 0;
  }

  strong {
    color: ${({theme:t})=>t.colors.success};
    font-family: ${({theme:t})=>t.fonts.display};
    font-weight: 600;
    margin-right: 0.35rem;
  }
`;function r$(){const[t,e]=$.useState(!1),[n,i]=$.useState({name:"",email:"",company:"",message:""});$.useEffect(()=>{if(!t)return;const r=setTimeout(()=>e(!1),5e3);return()=>clearTimeout(r)},[t]);const a=r=>{const{name:l,value:u}=r.target;i(f=>({...f,[l]:u}))},s=r=>{r.preventDefault(),e(!0),i({name:"",email:"",company:"",message:""})},o=`https://api.whatsapp.com/send?phone=${nt.contact.whatsapp}`;return c.jsxs(YC,{id:"contacto",children:[c.jsx(XC,{}),c.jsxs(ZC,{children:[c.jsxs(QC,{...qC,children:[c.jsx(KC,{children:"04 · Contacto"}),c.jsxs(FC,{children:["Hagamos algo ",c.jsx("span",{children:"grande"})," juntos"]})]}),c.jsxs(PC,{children:[c.jsxs(JC,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:[.22,1,.36,1]},children:[c.jsx(WC,{children:"Contanos en qué pensás"}),c.jsx(IC,{children:"Decinos qué querés resolver, con qué herramientas trabajás hoy y para cuándo lo necesitás. Te respondemos en menos de 24hs."}),c.jsxs(t$,{children:[c.jsx(L0,{children:c.jsxs("a",{href:`mailto:${nt.contact.email}`,children:[c.jsx(KT,{size:20}),nt.contact.email]})}),c.jsx(L0,{children:c.jsxs("a",{href:o,target:"_blank",rel:"noopener noreferrer",children:[c.jsx(JT,{size:20}),nt.contact.whatsapp]})})]}),c.jsxs(e$,{children:[c.jsx(_0,{href:nt.social.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:c.jsx(HC,{size:18})}),c.jsx(_0,{href:nt.social.instagram,target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:c.jsx(GC,{size:18})})]})]}),c.jsx(n$,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,delay:.1,ease:[.22,1,.36,1]},children:c.jsx(Ci,{mode:"wait",children:t?c.jsxs(o$,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:-12},transition:{duration:.4},children:[c.jsx(yr,{size:28}),c.jsxs("div",{children:[c.jsx("strong",{children:"¡Gracias!"}),"Te respondemos en menos de 24hs."]})]},"success"):c.jsxs(i$,{onSubmit:s,children:[c.jsxs(Ho,{children:[c.jsx(Go,{children:"Nombre"}),c.jsx(Jc,{type:"text",name:"name",required:!0,value:n.name,onChange:a,placeholder:"Tu nombre"})]}),c.jsxs(Ho,{children:[c.jsx(Go,{children:"Email"}),c.jsx(Jc,{type:"email",name:"email",required:!0,value:n.email,onChange:a,placeholder:"tu@email.com"})]}),c.jsxs(Ho,{children:[c.jsx(Go,{children:"Empresa"}),c.jsx(Jc,{type:"text",name:"company",value:n.company,onChange:a,placeholder:"Tu empresa (opcional)"})]}),c.jsxs(Ho,{children:[c.jsx(Go,{children:"Mensaje"}),c.jsx(a$,{name:"message",required:!0,value:n.message,onChange:a,placeholder:"Contanos qué tenés en mente..."})]}),c.jsxs(s$,{type:"submit",children:["Enviar mensaje",c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]},"form")})})]})]})]})}const l$=ka`
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.45); }
  70% { box-shadow: 0 0 0 8px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
`,c$=g.footer`
  position: relative;
  border-top: 1px solid ${({theme:t})=>t.colors.border};
  background: ${({theme:t})=>t.colors.bgAlt};
  padding: ${({theme:t})=>t.spacing.xxl} 0 ${({theme:t})=>t.spacing.lg};

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: ${({theme:t})=>t.spacing.xl} 0 ${({theme:t})=>t.spacing.md};
  }
`,u$=g(R.div)`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({theme:t})=>t.spacing.lg};

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    padding: 0 ${({theme:t})=>t.spacing.md};
  }
`,f$=g.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr 1.2fr 1fr;
  gap: ${({theme:t})=>t.spacing.xl};
  padding-bottom: ${({theme:t})=>t.spacing.xl};

  @media (max-width: ${({theme:t})=>t.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({theme:t})=>t.spacing.lg};
  }

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({theme:t})=>t.spacing.lg};
    padding-bottom: ${({theme:t})=>t.spacing.lg};
  }
`,xr=g.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing.sm};
`,d$=g(xr)`
  gap: ${({theme:t})=>t.spacing.md};
  max-width: 320px;

  @media (max-width: ${({theme:t})=>t.breakpoints.desktop}) {
    grid-column: 1 / -1;
    max-width: 420px;
  }
`,h$=g.a`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  transition: opacity ${({theme:t})=>t.transitions.fast};

  img {
    height: 38px;
    width: auto;
    object-fit: contain;
    display: block;
  }

  &:hover {
    opacity: 0.85;
  }
`,p$=g.p`
  color: ${({theme:t})=>t.colors.textSecondary};
  font-size: 0.95rem;
  line-height: 1.6;
`,m$=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: ${({theme:t})=>t.spacing.xs};
`,N0=g.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({theme:t})=>t.colors.textSecondary};
  font-size: 0.9rem;
  transition: color ${({theme:t})=>t.transitions.fast};
  width: fit-content;

  svg {
    flex-shrink: 0;
    color: ${({theme:t})=>t.colors.textTertiary};
    transition: color ${({theme:t})=>t.transitions.fast};
  }

  &:hover {
    color: ${({theme:t})=>t.colors.text};
  }

  &:hover svg {
    color: ${({theme:t})=>t.colors.accent};
  }
`,g$=g.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-top: ${({theme:t})=>t.spacing.xs};
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({theme:t})=>t.colors.textTertiary};
`,y$=g.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({theme:t})=>t.colors.success};
  animation: ${l$} 2.2s infinite;
`,Wc=g.h5`
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({theme:t})=>t.colors.textTertiary};
  margin-bottom: ${({theme:t})=>t.spacing.xs};
  font-weight: 500;
`,U0=g.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding: 0;
  margin: 0;
`,H0=g.a`
  position: relative;
  font-size: 0.92rem;
  color: ${({theme:t})=>t.colors.textSecondary};
  transition: color ${({theme:t})=>t.transitions.fast};
  padding: 0.1rem 0;
  width: fit-content;
  line-height: 1.4;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({theme:t})=>t.colors.accent};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform ${({theme:t})=>t.transitions.normal};
  }

  &:hover {
    color: ${({theme:t})=>t.colors.text};
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`,x$=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`,G0=g.a`
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  border: 1px solid ${({theme:t})=>t.colors.border};
  background: ${({theme:t})=>t.colors.bgCard};
  color: ${({theme:t})=>t.colors.textSecondary};
  transition: all ${({theme:t})=>t.transitions.fast};

  &:hover {
    border-color: ${({theme:t})=>t.colors.borderAccent};
    color: ${({theme:t})=>t.colors.accent};
    box-shadow: 0 0 14px ${({theme:t})=>t.colors.accentGlow};
    transform: translateY(-2px);
  }
`,b$=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:t})=>t.spacing.md};
  padding-top: ${({theme:t})=>t.spacing.md};
  border-top: 1px solid ${({theme:t})=>t.colors.border};

  @media (max-width: ${({theme:t})=>t.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({theme:t})=>t.spacing.sm};
  }
`,v$=g.p`
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.76rem;
  color: ${({theme:t})=>t.colors.textTertiary};
  letter-spacing: 0.02em;
  margin: 0;
`,S$=g.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${({theme:t})=>t.fonts.mono};
  font-size: 0.76rem;
  color: ${({theme:t})=>t.colors.textTertiary};
  letter-spacing: 0.02em;

  svg {
    color: ${({theme:t})=>t.colors.accentAlt};
  }
`,w$=()=>c.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[c.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),c.jsx("path",{d:"m3 7 9 6 9-6"})]}),T$=()=>c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:c.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"})}),j$=()=>c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:c.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),A$=()=>c.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[c.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5"}),c.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),c.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]}),C$=()=>c.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:c.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})}),$$=[{label:"Servicios",href:"#servicios"},{label:"Cómo trabajamos",href:"#proceso"},{label:"Clientes",href:"#clientes"},{label:"Contacto",href:"#contacto"}];function E$(){const t=new Date().getFullYear(),e=nt.contact.whatsapp.replace(/[^\d]/g,""),n=e?`https://api.whatsapp.com/send?phone=${e}`:null,i=(nt.services||[]).slice(0,5),a=nt.social||{},s=!!(a.linkedin||a.instagram);return c.jsx(c$,{children:c.jsxs(u$,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:[.22,1,.36,1]},children:[c.jsxs(f$,{children:[c.jsxs(d$,{children:[c.jsx(h$,{href:"#hero","aria-label":`${nt.company.name} - Inicio`,children:c.jsx("img",{src:s2,alt:`${nt.company.name} logo`})}),c.jsxs(p$,{children:[nt.company.tagline,"."]}),c.jsxs(m$,{children:[c.jsxs(N0,{href:`mailto:${nt.contact.email}`,children:[c.jsx(w$,{}),nt.contact.email]}),n&&c.jsxs(N0,{href:n,target:"_blank",rel:"noopener noreferrer",children:[c.jsx(T$,{}),"WhatsApp"]})]}),c.jsxs(g$,{children:[c.jsx(y$,{}),"Tomando proyectos"]})]}),c.jsxs(xr,{children:[c.jsx(Wc,{children:"Navegación"}),c.jsx(U0,{children:$$.map(o=>c.jsx("li",{children:c.jsx(H0,{href:o.href,children:o.label})},o.href))})]}),c.jsxs(xr,{children:[c.jsx(Wc,{children:"Servicios"}),c.jsx(U0,{children:i.map(o=>c.jsx("li",{children:c.jsx(H0,{href:"#servicios",children:o.title})},o.id))})]}),s&&c.jsxs(xr,{children:[c.jsx(Wc,{children:"Redes"}),c.jsxs(x$,{children:[a.linkedin&&c.jsx(G0,{href:a.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:c.jsx(j$,{})}),a.instagram&&c.jsx(G0,{href:a.instagram,target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:c.jsx(A$,{})})]})]})]}),c.jsxs(b$,{children:[c.jsxs(v$,{children:["© ",t," ",nt.company.name,". Todo el código queda tuyo."]}),c.jsxs(S$,{children:["Made with ",c.jsx(C$,{})," in Argentina"]})]})]})})}function M$(){return c.jsxs(b3,{theme:$3,children:[c.jsx(C3,{}),c.jsx(U7,{}),c.jsxs("main",{children:[c.jsx($T,{}),c.jsx(NT,{}),c.jsx(eA,{}),c.jsx(CA,{}),c.jsx(_9,{}),c.jsx(lC,{}),c.jsx(CC,{}),c.jsx(UC,{}),c.jsx(r$,{})]}),c.jsx(E$,{})]})}g4.createRoot(document.getElementById("root")).render(c.jsx(ht.StrictMode,{children:c.jsx(M$,{})}));
