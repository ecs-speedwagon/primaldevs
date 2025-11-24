import { getEvents } from './api.js';
import { renderEvents } from './render.js';
import { modalRender } from './modal.js';
import { paginationContainer, eventsContainer, findInput } from './dom.js';
import { currentPage, renderPagination } from './pagination.js';
import { renderDropdown } from './filter.js';

let events = [];
let searchQuery = '';

async function initEvents(page, keyword) {
  const data = await getEvents(page, keyword);
  events = data._embedded.events;

  //всі сторінки як не дивно
  if (data?.page?.totalPages && data.page.totalPages <= 50) {
    renderPagination(data.page.totalPages);
  } else {
    renderPagination(50);
  }

  renderEvents(events);
  renderDropdown(events);
}

if (findInput) {
  findInput.addEventListener('input', e => {
    searchQuery = e?.target?.value;
    initEvents(currentPage, searchQuery)
  });
}

eventsContainer.addEventListener('click', e => modalRender(events, e));

paginationContainer.addEventListener('click', async e => {
  if (e.target.classList.contains('pagination-unit')) {
    const page = parseInt(e.target.textContent) - 1;
    await initEvents(page, searchQuery);
  }
});

initEvents(currentPage);
