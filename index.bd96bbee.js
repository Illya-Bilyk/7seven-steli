!function(){var e=[{href:"",text:"Про нас"},{href:"",text:"Як замовити?"},{href:"",text:"Наші роботи"},{href:"",text:"Продаж LED освітленн"},{href:"",text:"Дилерам"},{href:"",text:"Блог"},{href:"",text:"Контакти"}],t={header:document.querySelector(".header-list"),headerMobile:document.querySelector(".headerMobile-list")},r=e.map((function(e){var t=e.href,r=e.text;return'\n    <li class="header-item">\n        <a href="'.concat(t,'" class="header-link">').concat(r,"</a>\n    </li>\n   ")})).join(""),n=e.map((function(e){var t=e.href,r=e.text;return'\n    <li class="headerMobile-item">\n        <a href="'.concat(t,'" class="header-link">').concat(r,"</a>\n    </li>\n   ")})).join("");t.header.insertAdjacentHTML("beforeend",r),t.headerMobile.insertAdjacentHTML("beforeend",n)}();
//# sourceMappingURL=index.bd96bbee.js.map
