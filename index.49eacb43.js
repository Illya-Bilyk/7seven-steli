function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},i=n.parcelRequire7ca8;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in l){var n=l[e];delete l[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){l[e]=n},n.parcelRequire7ca8=i),i("kyEFX").register(JSON.parse('{"fiOTe":"index.49eacb43.js","dPq1l":"fb.141765e4.svg","1OTBB":"inst.0318107a.svg","lMUs1":"telegram.444847e8.svg"}'));var r;r=new URL(i("kyEFX").resolve("dPq1l"),import.meta.url).toString();var s;s=new URL(i("kyEFX").resolve("1OTBB"),import.meta.url).toString();var o;o=new URL(i("kyEFX").resolve("lMUs1"),import.meta.url).toString();const a=[{src:e(r),alt:"fb"},{src:e(s),alt:"inst"},{src:e(o),alt:"telegram"}],c={company:document.querySelector(".company-list"),clients:document.querySelector(".clients-list"),social:document.querySelector(".social-list")},d=["Про нас","Блог","Контакти","Privacy Policy"].map((e=>`\n        <li class="company-item">\n            <p class="item--text">${e}</p>\n        </li>\n   `)).join(""),f=["Як замовити?","Наші роботи","Дилирам"].map((e=>`\n        <li class="clients-item">\n            <p class="item--text">${e}</p>\n        </li>\n   `)).join(""),m=a.map((({src:e,alt:n})=>`\n        <li class="social-item">\n            <a class="social-item--link">\n            <img src="${e}" alt="${n}"/>\n            </a>\n        </li>\n   `)).join("");c.company.insertAdjacentHTML("beforeend",d),c.clients.insertAdjacentHTML("beforeend",f),c.social.insertAdjacentHTML("beforeend",m);
//# sourceMappingURL=index.49eacb43.js.map