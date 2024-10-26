/*! For license information please see component---src-pages-rmind-js-576f9f66d87db80b95eb.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[639],{9273:function(t,e,r){"use strict";r.r(e);var n=r(2982),o=r(5861),a=r(4687),i=r.n(a),c=r(7294),s=r(4916),u=r(1082);function l(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}e.default=function(){var t=(0,c.useState)(""),e=t[0],r=t[1],a=(0,c.useState)(0),m=a[0],f=a[1],d=(0,c.useState)([]),p=d[0],h=d[1],y='$ rmind clean crontab in 1 month\n<span class="console__check">✔︎</span> I\'ll remind you to "clean crontab” (Sunday Jun 21st at 12:00 PM)\n\n$ rmind email Sarah in 40 mins\n<span class="console__check">✔︎</span> I\'ll remind you to "email Sarah" (Today at 11:51 AM)\n\n$ rmind call mom tonight\n<span class="console__check">✔︎</span> I\'ll remind you to "call mom" (Tonight at 10:00 PM)',v=[{message:"Clean up crontab",date:"21/05/2020, 12:00 PM"},{message:"Email Sarah",date:"Today, 11:51 AM"},{message:"Call mom",date:"Today, 10:00 PM"}];function g(t,e){return w.apply(this,arguments)}function w(){return w=(0,o.Z)(i().mark((function t(e,n){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var o=0,a=setInterval((function(){o<e.length?r((function(t){return t+e[o++]})):(clearInterval(a),t())}),n)})));case 1:case"end":return t.stop()}}),t)}))),w.apply(this,arguments)}function b(t){return _.apply(this,arguments)}function _(){return(_=(0,o.Z)(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(0,c.useEffect)((function(){if(!("undefined"==typeof window)){var t=y.split("\n");!function(){e.apply(this,arguments)}()}function e(){return e=(0,o.Z)(i().mark((function e(){var o,a,c,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=l(t);case 1:if((a=o()).done){e.next=16;break}return c=a.value,s=/^\$/g.test(c)?50:5,e.next=6,g(c,s);case 6:if(!/^</g.test(c)){e.next=11;break}f((function(t){return t+1})),h((function(t){var e=t.length;return[].concat((0,n.Z)(t),[v[e]])})),e.next=13;break;case 11:return e.next=13,b(1500);case 13:r((function(t){return t+"\n"}));case 14:e.next=1;break;case 16:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}}),[y]);var E="rmind: A minimalist CLI for the macOS Reminders app",x="rmind is a CLI that lets you add macOS reminders from the terminal using natural language";return c.createElement(c.Fragment,null,c.createElement(s.ZP,{htmlAttributes:{lang:"en"},title:E,titleTemplate:"%s",meta:[{name:"description",content:x},{property:"og:title",content:E},{property:"og:description",content:x},{property:"og:type",content:"website"},{property:"og:image",content:"http://carlos-temp-public.s3.amazonaws.com/rmindog.jpg"},{property:"og:image:secure_url",content:"https://carlos-temp-public.s3.amazonaws.com/rmindog.jpg"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:"@caroso1222"},{name:"twitter:title",content:E},{name:"twitter:description",content:x}]}),c.createElement("div",{className:"rmind"},c.createElement("div",{className:"container container--rmind p-relative"},c.createElement("h1",{className:"rmind__header"},"rmind"),c.createElement("h2",{className:"rmind__subheader"},"A minimalist CLI for the macOS Reminders app"),c.createElement("div",{className:"row"},c.createElement("div",{className:"col-sm-8"},c.createElement("div",{className:"console"},c.createElement("div",{className:"console__header"},c.createElement("div",{className:"window-buttons"},c.createElement("div",{className:"window-buttons__button window-buttons__button--red"}),c.createElement("div",{className:"window-buttons__button window-buttons__button--yellow"}),c.createElement("div",{className:"window-buttons__button window-buttons__button--green"}))),c.createElement("div",{className:"console__body"},c.createElement("pre",{className:"console__code rmind-code",dangerouslySetInnerHTML:{__html:e}})))),c.createElement("div",{className:"col-sm-4"},c.createElement("div",{className:"reminders"},c.createElement("div",{className:"reminders__header"},c.createElement("div",{className:"window-buttons"},c.createElement("div",{className:"window-buttons__button window-buttons__button--red"}),c.createElement("div",{className:"window-buttons__button window-buttons__button--yellow"}),c.createElement("div",{className:"window-buttons__button window-buttons__button--green"}))),c.createElement("div",{className:"reminders__body as-header"},c.createElement("div",{className:"reminders__upper d-flex justify-content-between"},c.createElement("p",null,"Reminders"),c.createElement("p",null,m)),p.map((function(t,e){return c.createElement("div",{className:"reminder d-flex",key:e},c.createElement("div",{className:"reminder__left"},c.createElement("div",{className:"reminder__checker"})),c.createElement("div",{className:"reminder__right"},c.createElement("p",{className:"reminder__message"},t.message),c.createElement("p",{className:"reminder__date"},t.date)))})))))),c.createElement("div",{className:"rmind__links"},c.createElement("p",{className:"rmind-code rmind-code--star"},"rmind ",c.createElement("a",{href:"https://github.com/caroso1222/rmind"},"star rmind on GitHub")," in 1 min"),c.createElement(u.Link,{className:"rmind__credits as-header d-block",to:"/"},"Carlos Roso © 2022")))))}},7061:function(t,e,r){var n=r(8698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function m(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{m({},"")}catch(I){m=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),c=new j(n||[]);return i(a,"_invoke",{value:N(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}e.wrap=f;var p={};function h(){}function y(){}function v(){}var g={};m(g,s,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(O([])));b&&b!==r&&a.call(b,s)&&(g=b);var _=v.prototype=h.prototype=Object.create(g);function E(t){["next","throw","return"].forEach((function(e){m(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,i,c,s){var u=d(t[o],t,i);if("throw"!==u.type){var l=u.arg,m=l.value;return m&&"object"==n(m)&&a.call(m,"__await")?e.resolve(m.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(m).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function N(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=d(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=v,i(_,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:y,configurable:!0}),y.displayName=m(v,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,m(t,l,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},E(x.prototype),m(x.prototype,u,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new x(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(_),m(_,l,"Generator"),m(_,s,(function(){return this})),m(_,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8698:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},4687:function(t,e,r){var n=r(7061)();t.exports=n;try{regeneratorRuntime=n}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},5861:function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=component---src-pages-rmind-js-576f9f66d87db80b95eb.js.map