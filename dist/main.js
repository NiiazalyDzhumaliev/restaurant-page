!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,i=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(s," */")),c=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(c).concat([o]).join("\n")}var a,i,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(o[a]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";t.a=n.p+"7d46515336381fd891d754edec642803.jpg"},function(e,t,n){var r=n(4),o=n(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var c={insert:"head",singleton:!1};r(o,c);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},c=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],s=t.base?c[0]+t.base:c[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var d=i(l),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(a[d].references++,a[d].updater(m)):a.push({identifier:l,updater:b(m,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=c(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function m(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var c=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(c,a[t]):e.appendChild(c)}}function f(e,t,n){var r=n.css,o=n.media,c=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function b(e,t){var n,r,o;if(t.singleton){var c=h++;n=p||(p=u(t)),r=m.bind(null,n,c,!1),o=m.bind(null,n,c,!0)}else n=u(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);a[o].references--}for(var c=s(e,t),u=0;u<n.length;u++){var l=i(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=c}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(1),a=n.n(c),i=n(2),s=o()(!1),u=a()(i.a);s.push([e.i,"body {\r\n  background: url("+u+");\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  color: white;\r\n}\r\n\r\n.header-container {\r\n  border-bottom: 1px solid white;\r\n}\r\n\r\n.nav-list {\r\n  list-style-type: none;\r\n}\r\n\r\n.list-item {\r\n  text-transform: capitalize;\r\n  cursor: pointer;\r\n}\r\n\r\n.list-item:hover {\r\n  color: gray;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n.home-img {\r\n  width: 300px;\r\n  border-radius: 10%;\r\n}\r\n",""]),t.default=s},function(e,t,n){"use strict";n.r(t);n(3);const r=document.getElementById("content"),o=document.querySelector("body"),c=document.createElement("li"),a=document.createElement("li"),i=document.createElement("li");var s=()=>{const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("class","contact-div d-flex flex-column align-items-center justify-content-center mt-5"),e.appendChild(t);const n=document.createElement("h3");n.setAttribute("class","contact-header"),n.textContent="Contact us :",t.appendChild(n);const r=document.createElement("p");r.setAttribute("class","contact-phone"),r.textContent="+996 555 555 555",t.appendChild(r)};var u=()=>{const e=document.getElementById("content"),t=document.createElement("h1");t.setAttribute("class","home-header mt-5 ml-5 mb-5 text-center"),t.textContent="Be yourself, enjoy your meals",e.appendChild(t);const n=document.createElement("div");n.setAttribute("class","container"),e.appendChild(n);const r=document.createElement("div");r.setAttribute("class","row"),n.appendChild(r);const o=document.createElement("div");o.setAttribute("class","col"),r.appendChild(o);const c=document.createElement("p");c.setAttribute("class","par-one"),c.textContent="Cheesecake",o.appendChild(c);const a=document.createElement("img");a.setAttribute("src","https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"),a.setAttribute("class","home-img"),o.appendChild(a);const i=document.createElement("div");i.setAttribute("class","col"),r.appendChild(i);const s=document.createElement("p");s.setAttribute("class","par-one"),s.textContent="Muffin",i.appendChild(s);const u=document.createElement("img");u.setAttribute("src","https://images.unsplash.com/photo-1590759668580-b9fc6e734ce3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"),u.setAttribute("class","home-img"),i.appendChild(u);const l=document.createElement("div");l.setAttribute("class","col"),r.appendChild(l);const d=document.createElement("p");d.setAttribute("class","par-one"),d.textContent="Cake",l.appendChild(d);const m=document.createElement("img");m.setAttribute("src","https://images.unsplash.com/photo-1464941913535-1f37bfb72880?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"),m.setAttribute("class","home-img text-center"),l.appendChild(m)};var l=()=>{const e=document.getElementById("content"),t=document.createElement("h1");t.setAttribute("class","about-header ml-5 mt-5"),t.textContent="About us",e.appendChild(t);const n=document.createElement("p");n.setAttribute("class","about-info ml-5"),n.textContent="Join us every week to taste what’s new at Ceremony and enhance your coffee knowledge.",e.appendChild(n)};const d=document.getElementById("content"),m=()=>{d.textContent=""};(()=>{const e=document.createElement("DIV");o.insertBefore(e,r),e.setAttribute("class","header-container d-flex justify-content-between mt-3 align-items-center");const t=document.createElement("div");t.setAttribute("class","header-div mb-3"),e.appendChild(t);const n=document.createElement("h2");n.setAttribute("class","header ml-5"),n.textContent="Complement",t.appendChild(n);const s=[c,a,i],u=["home","about","contact"],l=document.createElement("ul");l.setAttribute("class","nav-list d-flex"),e.appendChild(l);for(let e=0;e<s.length;e+=1)s[e].textContent=u[e],s[e].setAttribute("class","list-item mr-5"),l.appendChild(s[e])})(),i.addEventListener("click",()=>{m(),s()}),c.addEventListener("click",()=>{m(),u()}),a.addEventListener("click",()=>{m(),l()})}]);