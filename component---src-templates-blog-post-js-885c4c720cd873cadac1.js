(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[132],{8556:function(e,t){"use strict";var r=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!r.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},1244:function(e,t,r){"use strict";t.A=void 0;var n,a=(n=r(1729))&&n.__esModule?n:{default:n},o=r(8556);var s=function(e,t,r){var n=(0,o.validate)(e),s=encodeURIComponent(e);if(!n)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var i="https://carlosroso.us19.list-manage.com/subscribe/post?u=6e6b2a45aafc4611ed67292ee&id=ca6efbbe50";arguments.length<3&&"string"==typeof t?i=t:"string"==typeof r&&(i=r),i=i.replace(/\/post/g,"/post-json");var c="&EMAIL=".concat(s).concat(function(e){var t="";for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n="group["===r.substring(0,6)?r:r.toUpperCase();t=t.concat("&".concat(n,"=").concat(e[r]))}return t}(t));return function(e){var t=e.url,r=e.timeout;return new Promise((function(e,n){return(0,a.default)(t,{param:"c",timeout:r},(function(t,r){t&&n(t),r&&e(r)}))}))}({url:"".concat(i).concat(c),timeout:3500})};t.A=s},4728:function(e,t,r){"use strict";r.d(t,{A:function(){return c}});var n=r(6540),a=r(8007);const o=e=>{let{siteTitle:t}=e;return n.createElement("header",null,n.createElement("div",{className:"d-flex justify-content-center topnav align-items-center"},n.createElement(a.Link,{to:"/",className:"topnav__link as-header"},"Home"),n.createElement(a.Link,{to:"about",className:"topnav__link as-header"},"About")))};o.defaultProps={siteTitle:""};var s=o;var i=()=>n.createElement("footer",{className:"d-flex justify-content-between align-items-center footer"},n.createElement("h6",{className:"footer__info m-0"},"Carlos Roso © 2024"),n.createElement("div",{className:"footer__icons"},n.createElement("a",{href:"https://twitter.com/caroso1222",target:"_blank",rel:"noopener noreferrer",className:"d-inline-block footer__icon"},n.createElement("svg",{width:"16px",height:"13px",viewBox:"0 0 16 13",version:"1.1"},n.createElement("defs",null),n.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",opacity:"0.8"},n.createElement("g",{id:"Desktop",transform:"translate(-824.000000, -1151.000000)",fill:"#000000",fillRule:"nonzero"},n.createElement("g",{id:"twitter",transform:"translate(824.000000, 1151.000000)"},n.createElement("path",{d:"M16,1.539 C15.405,1.8 14.771,1.973 14.11,2.057 C14.79,1.651 15.309,1.013 15.553,0.244 C14.919,0.622 14.219,0.889 13.473,1.038 C12.871,0.397 12.013,0 11.077,0 C9.261,0 7.799,1.474 7.799,3.281 C7.799,3.541 7.821,3.791 7.875,4.029 C5.148,3.896 2.735,2.589 1.114,0.598 C0.831,1.089 0.665,1.651 0.665,2.256 C0.665,3.392 1.25,4.399 2.122,4.982 C1.595,4.972 1.078,4.819 0.64,4.578 C0.64,4.588 0.64,4.601 0.64,4.614 C0.64,6.208 1.777,7.532 3.268,7.837 C3.001,7.91 2.71,7.945 2.408,7.945 C2.198,7.945 1.986,7.933 1.787,7.889 C2.212,9.188 3.418,10.143 4.852,10.174 C3.736,11.047 2.319,11.573 0.785,11.573 C0.516,11.573 0.258,11.561 -5.68434189e-14,11.528 C1.453,12.465 3.175,13 5.032,13 C11.068,13 14.368,8 14.368,3.666 C14.368,3.521 14.363,3.381 14.356,3.242 C15.007,2.78 15.554,2.203 16,1.539 Z",id:"Shape"})))))),n.createElement("a",{href:"https://github.com/caroso1222",target:"_blank",rel:"noopener noreferrer",className:"d-inline-block footer__icon"},n.createElement("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1"},n.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",opacity:"0.8"},n.createElement("g",{id:"Desktop",transform:"translate(-863.000000, -1149.000000)",fill:"#000000",fillRule:"nonzero"},n.createElement("g",{id:"github",transform:"translate(863.000000, 1149.000000)"},n.createElement("path",{d:"M7.999,0.01028125 C3.582,0.01028125 0,3.60628125 0,8.04228125 C0,11.5902812 2.292,14.6002812 5.472,15.6632812 C5.872,15.7372812 6.018,15.4892812 6.018,15.2762812 C6.018,15.0852812 6.011,14.5802812 6.007,13.9102812 C3.782,14.3952812 3.312,12.8332812 3.312,12.8332812 C2.949,11.9052812 2.424,11.6582812 2.424,11.6582812 C1.697,11.1602812 2.478,11.1702812 2.478,11.1702812 C3.281,11.2272812 3.703,11.9982812 3.703,11.9982812 C4.417,13.2252812 5.576,12.8712812 6.032,12.6652812 C6.104,12.1462812 6.311,11.7922812 6.54,11.5912812 C4.764,11.3882812 2.896,10.6992812 2.896,7.62228125 C2.896,6.74528125 3.208,6.02828125 3.72,5.46628125 C3.637,5.26328125 3.363,4.44628125 3.798,3.34128125 C3.798,3.34128125 4.47,3.12528125 5.998,4.16428125 C6.636,3.98628125 7.32,3.89728125 8.001,3.89428125 C8.68,3.89828125 9.365,3.98628125 10.004,4.16528125 C11.531,3.12628125 12.202,3.34228125 12.202,3.34228125 C12.638,4.44828125 12.364,5.26428125 12.282,5.46728125 C12.795,6.02928125 13.104,6.74628125 13.104,7.62328125 C13.104,10.7082813 11.234,11.3872812 9.452,11.5862812 C9.739,11.8342813 9.995,12.3242812 9.995,13.0732812 C9.995,14.1472812 9.985,15.0132812 9.985,15.2762812 C9.985,15.4912812 10.129,15.7412813 10.535,15.6622812 C13.71,14.5982812 16,11.5892812 16,8.04228125 C16,3.60628125 12.418,0.01028125 7.999,0.01028125 Z",id:"Shape"})))))),n.createElement("a",{href:"https://www.linkedin.com/in/carlos-roso-41577886/",target:"_blank",rel:"noopener noreferrer",className:"d-inline-block footer__icon"},n.createElement("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1"},n.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",opacity:"0.8"},n.createElement("g",{id:"Desktop",transform:"translate(-902.000000, -1148.000000)",fill:"#000000",fillRule:"nonzero"},n.createElement("g",{id:"linkedin",transform:"translate(902.000000, 1148.000000)"},n.createElement("rect",{id:"Rectangle-path",x:"0",y:"5",width:"3.578",height:"11"}),n.createElement("path",{d:"M13.324,5.129 C13.286,5.117 13.25,5.104 13.21,5.093 C13.162,5.082 13.114,5.073 13.065,5.065 C12.875,5.027 12.667,5 12.423,5 C10.337,5 9.014,6.517 8.578,7.103 L8.578,5 L5,5 L5,16 L8.578,16 L8.578,10 C8.578,10 11.282,6.234 12.423,9 C12.423,11.469 12.423,16 12.423,16 L16,16 L16,8.577 C16,6.915 14.861,5.53 13.324,5.129 Z",id:"Shape"}),n.createElement("circle",{id:"Oval",cx:"1.75",cy:"1.75",r:"1.75"}))))))));var c=e=>{let{children:t}=e;const r=(0,a.useStaticQuery)("3649515864");return n.createElement(n.Fragment,null,n.createElement("div",{className:"layout__header"},n.createElement(s,{siteTitle:r.site.siteMetadata.title})),n.createElement("main",{className:"layout__main"},t),n.createElement("div",{className:"container"},n.createElement(i,null)))}},7528:function(e,t,r){"use strict";var n=r(6540),a=r(9125),o=r(8007),s=r(5244);function i(e){let{description:t,lang:r,meta:i,title:c}=e;const{site:l}=(0,o.useStaticQuery)("63159454"),m=t||l.siteMetadata.description;return n.createElement(a.Ay,{htmlAttributes:{lang:r},title:c,titleTemplate:`%s | ${l.siteMetadata.title}`,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{property:"og:image",content:s.A},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(i)})}i.defaultProps={lang:"en",meta:[],description:""},t.A=i},7800:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(6540),a=r(4728),o=r(7528);r(1244);var s=r.p+"static/profile-pic-sm-8cd2a1a55ae6aaf4b2b09cf4f418f322.jpg",i=r(8007);var c=()=>n.createElement("div",{className:"short-bio"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-sm-2 d-flex short-bio__img-container"},n.createElement("div",{className:"short-bio__img-outer"},n.createElement("div",{className:"short-bio__img-wrapper"},n.createElement("img",{className:"short-bio__img",src:s,alt:"Logo"})))),n.createElement("div",{className:"col-sm-10"},n.createElement("p",{className:"short-bio__content"},n.createElement("b",null,"I'm Carlos Roso.")," I'm a Production Engineer at Meta. Former SDE at Amazon. Ex digital nomad at"," ",n.createElement("a",{href:"https://www.toptal.com#join-only-great-devs",target:"_blank",rel:"noopener noreferrer"},"Toptal")," ","and"," ",n.createElement("a",{href:"https://www.crossover.com/crossover-stories-carlosr",target:"_blank",rel:"noopener noreferrer"},"Crossover"),". In love with"," ",n.createElement("a",{href:"https://github.com/caroso1222",target:"_blank",rel:"noopener noreferrer"},"open source")," ","and"," ",n.createElement("a",{href:"https://dribbble.com/caroso1222",target:"_blank",rel:"noopener noreferrer"},"design"),"."),n.createElement(i.Link,{to:"/about",className:"as-header short-bio__link"},"More about me"))));var l=e=>{let{data:t}=e;const r=t.markdownRemark;return n.createElement(a.A,null,n.createElement(o.A,{title:r.frontmatter.title,description:r.frontmatter.meta||r.frontmatter.description}),n.createElement("div",{className:"container"},n.createElement("div",{className:"col-sm-10 offset-sm-1 bg__container"},n.createElement("small",{className:"bg__date as-header"},r.frontmatter.date),n.createElement("h1",{className:"bg__main-title"},r.frontmatter.title),n.createElement("h2",{className:"bg__main-subtitle as-body"},r.frontmatter.description),n.createElement("div",{className:"divider"}),n.createElement("div",{dangerouslySetInnerHTML:{__html:r.html}}),n.createElement("div",{className:"bg__bio"},n.createElement("span",{className:"bg__bio-separator"}),n.createElement(c,null)))))}},1729:function(e,t,r){var n=r(5149)("jsonp");e.exports=function(e,t,r){"function"==typeof t&&(r=t,t={});t||(t={});var s,i,c=t.prefix||"__jp",l=t.name||c+a++,m=t.param||"callback",u=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;u&&(i=setTimeout((function(){p(),r&&r(new Error("Timeout"))}),u));function p(){s.parentNode&&s.parentNode.removeChild(s),window[l]=o,i&&clearTimeout(i)}return window[l]=function(e){n("jsonp got",e),p(),r&&r(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+m+"="+d(l)).replace("?&","?"),n('jsonp req "%s"',e),(s=document.createElement("script")).src=e,f.parentNode.insertBefore(s,f),function(){window[l]&&p()}};var a=0;function o(){}},5149:function(e,t,r){function n(){var e;try{e=t.storage.debug}catch(r){}return!e&&"undefined"!=typeof process&&"env"in process&&(e={}.DEBUG),e}(t=e.exports=r(1666)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),!r)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var a=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(a++,"%c"===e&&(o=a))})),e.splice(o,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(r){}},t.load=n,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(n())},1666:function(e,t,r){var n;function a(e){function r(){if(r.enabled){var e=r,a=+new Date,o=a-(n||a);e.diff=o,e.prev=n,e.curr=a,n=a;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;c++;var a=t.formatters[n];if("function"==typeof a){var o=s[c];r=a.call(e,o),s.splice(c,1),c--}return r})),t.formatArgs.call(e,s),(r.log||t.log||console.log.bind(console)).apply(e,s)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(r),r}(t=e.exports=a.debug=a.default=a).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var r=("string"==typeof e?e:"").split(/[\s,]+/),n=r.length,a=0;a<n;a++)r[a]&&("-"===(e=r[a].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(4005),t.names=[],t.skips=[],t.formatters={}},4005:function(e){var t=1e3,r=60*t,n=60*r,a=24*n,o=365.25*a;function s(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,i){i=i||{};var c,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var s=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!s)return;var i=parseFloat(s[1]);switch((s[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return i*o;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*n;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===l&&!1===isNaN(e))return i.long?s(c=e,a,"day")||s(c,n,"hour")||s(c,r,"minute")||s(c,t,"second")||c+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=n)return Math.round(e/n)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},5244:function(e,t,r){"use strict";t.A=r.p+"static/profile-pic-65eff315d061ca7d631992f61b91d732.jpg"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-885c4c720cd873cadac1.js.map