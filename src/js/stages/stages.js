import { stagesList } from './stages-list';

const refs = {
  stages: document.querySelector('.stages-list'),
};

const markup = stagesList
  .map(({ src, alt, number, title, text }) => {
    return `
    <li class="stages-item">
        <div class="stages-card">
            <div class="stages-image">
                 <img src="${src}" alt="${alt}"/>
            </div>
            <div>
                <p class="stages-number"> ${number}</p>
            </div>
        </div>
        <div class="stages-info">
            <h3 class="stages-info--title">${title}</h3>
            <p class="stages-info--text">${text}</p>
        </div>
    </li>
   `;
  })
  .join('');

refs.stages.insertAdjacentHTML('beforeend', markup);
