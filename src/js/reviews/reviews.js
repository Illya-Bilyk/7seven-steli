import { reviewsList } from './reviews-list';

const refs = {
  reviews: document.querySelector('.swiper-wrapper'),
};

const markup = reviewsList
  .map(({ src, alt, title, text }) => {
    return `
    <div class="swiper-slide rev-item">
            <div class="rev-image">
              <img src="${src}" alt="${alt}" />
            </div>
            <div class="rev-info">
              <p class="rev-info--text">${text}</p>
              <h3 class="rev-info--title">${title}</h3>
            </div>
          </div>
   `;
  })
  .join('');

refs.reviews.insertAdjacentHTML('beforeend', markup);
