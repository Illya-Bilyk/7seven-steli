const e=[{href:"",text:"Про нас"},{href:"",text:"Як замовити?"},{href:"",text:"Наші роботи"},{href:"",text:"Продаж LED освітленн"},{href:"",text:"Дилерам"},{href:"",text:"Блог"},{href:"",text:"Контакти"}],t={header:document.querySelector(".header-list"),headerMobile:document.querySelector(".headerMobile-list")},r=e.map((({href:e,text:t})=>`\n    <li class="header-item">\n        <a href="${e}" class="header-link">${t}</a>\n    </li>\n   `)).join(""),a=e.map((({href:e,text:t})=>`\n    <li class="headerMobile-item">\n        <a href="${e}" class="header-link">${t}</a>\n    </li>\n   `)).join("");t.header.insertAdjacentHTML("beforeend",r),t.headerMobile.insertAdjacentHTML("beforeend",a);
//# sourceMappingURL=index.5284b225.js.map