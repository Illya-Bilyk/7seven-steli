import { aboutList } from './about-list';

const refs = {
  about: document.querySelector('.about-list'),
};

const markup = aboutList
  .map(({ src, alt, title, text }) => {
    return `
    <li class="about-item">
        <div class="about-item--image">
            <img src="${src}" alt="${alt}"/>
        </div>
        <div class="about-info">
            <h3 class="about-info--title">${title}</h3>
            <p class="about-info--text">${text}</p>
        </div>
    </li>
   `;
  })
  .join('');

refs.about.insertAdjacentHTML('beforeend', markup);
