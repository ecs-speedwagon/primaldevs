import { getEvents } from './api.js';
import { renderEvents } from './render.js';
import { modalRender, eventsContainer } from './modal.js';
import { currentPage, paginationContainer } from './pagination.js';

// глобальна змінна для подій
let events = [];

// ну типу шоб не писать багато раз
async function initEvents(page = currentPage) {
  events = await getEvents(page);
  renderEvents(events);
}

// обробка кліків для модалки
eventsContainer.addEventListener('click', e => modalRender(events, e));

// обробка пагінації
paginationContainer.addEventListener('click', async e => {
  if (e.target.classList.contains('pagination-unit')) {
    const page = parseInt(e.target.textContent) - 1;
    await initEvents(page);
  } else {
    return;
  }
});

// ініціалізація
initEvents();
