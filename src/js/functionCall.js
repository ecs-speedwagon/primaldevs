import { getEvents } from './api.js';
import { renderEvents } from './render.js';
import { modalRender } from './modal.js';
import { paginationContainer, eventsContainer, findInput } from './dom.js';
import { currentPage } from './pagination.js';
import { renderDropdown } from './filter.js';
import { searchEvents } from './find.js';

let events = [];
let searchQuery = "";

// застосувати пошук до events
function applySearch() {
  const filtered = searchEvents(events, searchQuery);
  renderEvents(filtered);
}

async function initEvents(page = currentPage) {
  events = await getEvents(page);

  renderDropdown(events);
  applySearch();
}

if (findInput) {
  findInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    applySearch();
  });
}

eventsContainer.addEventListener('click', e => modalRender(events, e));

paginationContainer.addEventListener('click', async e => {
  if (e.target.classList.contains('pagination-unit')) {
    const page = parseInt(e.target.textContent) - 1;
    await initEvents(page);
  }
});

initEvents();
