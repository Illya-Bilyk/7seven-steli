!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},c=n.parcelRequire7ca8;null==c&&((c=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var c={id:e,exports:{}};return t[e]=c,n.call(c.exports,c,c.exports),c.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){i[e]=n},n.parcelRequire7ca8=c),c("iE7OH").register(JSON.parse('{"3H8Ak":"index.3096c355.js","aTBEt":"fb.141765e4.svg","fwHZt":"inst.0318107a.svg","bL0Ce":"telegram.444847e8.svg"}'));var r;r=c("aNJCr").getBundleURL("3H8Ak")+c("iE7OH").resolve("aTBEt");var a;a=c("aNJCr").getBundleURL("3H8Ak")+c("iE7OH").resolve("fwHZt");var l;l=c("aNJCr").getBundleURL("3H8Ak")+c("iE7OH").resolve("bL0Ce");var o=[{src:e(r),alt:"fb"},{src:e(a),alt:"inst"},{src:e(l),alt:"telegram"}],s={company:document.querySelector(".company-list"),clients:document.querySelector(".clients-list"),social:document.querySelector(".social-list")},d=["Про нас","Блог","Контакти","Privacy Policy"].map((function(e){return'\n        <li class="company-item">\n            <p class="company-item--text">'.concat(e,"</p>\n        </li>\n   ")})).join(""),f=["Як замовити?","Наші роботи","Дилирам"].map((function(e){return'\n        <li class="clients-item">\n            <p class="clients-item--text">'.concat(e,"</p>\n        </li>\n   ")})).join(""),u=o.map((function(e){var n=e.src,t=e.alt;return'\n        <li class="clients-item">\n            <a class="clients-item--link">\n            <img src="'.concat(n,'" alt="').concat(t,'"/>\n            </a>\n        </li>\n   ')})).join("");s.company.insertAdjacentHTML("beforeend",d),s.clients.insertAdjacentHTML("beforeend",f),s.social.insertAdjacentHTML("beforeend",u)}();
//# sourceMappingURL=index.3096c355.js.map
