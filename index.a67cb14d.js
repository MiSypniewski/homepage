!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1);console.log("HELLO 👋");var r=document.querySelector(".projects__wrapper--js");fetch("https://api.github.com/users/misypniewski/repos").then((function(e){return e.json()})).then((function(e){e.forEach((function(e){var n,t,o,c;null!=e.description&&(r.innerHTML+=(n=e.name,t=e.description,o=e.html_url,c=e.homepage,'<article class="project">\n          <div class="project__bar">\n            <span class="project__dot"></span>\n            <span class="project__dot"></span>\n            <span class="project__dot"></span>\n          </div>\n          <div class="project__box">\n            <img class="project__logo" src="github_icon.svg" alt="" />\n            <h3 class="project__title project__grid">\n              <span class="project__label">project:</span>\n              <span class="project__title project__title--special">'.concat(n,'</span>\n            </h3>\n            <p class="project__grid">\n              <span class="project__label">desctryption:</span>\n              <span class="project__special">').concat(t,'</span>\n            </p>\n            <p class="project__grid">\n              <span class="project__label">demo:</span>\n              <span>&lt;<a class="project__link" href="').concat(c,'" title="podlski git - demo">see demo</a>&gt;</span>\n            </p>\n            <p class="project__grid">\n              <span class="project__label">github:</span>\n              <span>&lt;<a class="project__link" href="').concat(o,'" title="podlski git - code">see code</a>&gt;</span>\n            </p>\n          </div>\n        </article>')))}))})).catch((function(e){return console.log(e)}))},function(e,n,t){}]);