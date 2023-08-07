import { headerList } from './header-list';

const refs = {
  header: document.querySelector('.header-list'),
  headerMobile: document.querySelector('.headerMobile-list'),
};

const markup = headerList
  .map(({ href, text }) => {
    return `
    <li class="header-item">
        <a href="${href}" class="header-link">${text}</a>
    </li>
   `;
  })
  .join('');

const markupMob = headerList
  .map(({ href, text }) => {
    return `
    <li class="headerMobile-item">
        <a href="${href}" class="header-link">${text}</a>
    </li>
   `;
  })
  .join('');

refs.header.insertAdjacentHTML('beforeend', markup);
refs.headerMobile.insertAdjacentHTML('beforeend', markupMob);
