import fb from '../images/footer/fb.svg';
import inst from '../images/footer/inst.svg';
import telegram from '../images/footer/telegram.svg';

const companyList = ['Про нас', 'Блог', 'Контакти', 'Privacy Policy'];
const clientsList = ['Як замовити?', 'Наші роботи', 'Дилирам'];
const socialList = [
  { src: fb, alt: 'fb' },
  { src: inst, alt: 'inst' },
  { src: telegram, alt: 'telegram' },
];

const refs = {
  company: document.querySelector('.company-list'),
  clients: document.querySelector('.clients-list'),
  social: document.querySelector('.social-list'),
};

const companyMarkup = companyList
  .map(item => {
    return `
        <li class="company-item">
            <p class="item--text">${item}</p>
        </li>
   `;
  })
  .join('');

const clientsMarkup = clientsList
  .map(item => {
    return `
        <li class="clients-item">
            <p class="item--text">${item}</p>
        </li>
   `;
  })
  .join('');

const socialMarkup = socialList
  .map(({ src, alt }) => {
    return `
        <li class="social-item">
            <a class="social-item--link">
            <img src="${src}" alt="${alt}"/>
            </a>
        </li>
   `;
  })
  .join('');

refs.company.insertAdjacentHTML('beforeend', companyMarkup);
refs.clients.insertAdjacentHTML('beforeend', clientsMarkup);
refs.social.insertAdjacentHTML('beforeend', socialMarkup);
