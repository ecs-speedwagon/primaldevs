import { getEvents } from './api.js';
import { renderEvents } from './render.js';
import { modalRender } from './modal.js';
import {
  paginationContainer,
  eventsContainer,
  findInput,
  dropdownEl,
  dropdownBtn,
  loader,
} from './dom.js';
import {
  currentPage,
  renderPagination,
  resetCurrentPage,
  setCurrentPage,
} from './pagination.js';
import { renderDropdown } from './filter.js';
import { debounce } from './debounce.js';
import { getCountryCode } from './getCountryCode.js';
import { getSize } from './getSize.js';

let page = 0;
let code;
let events = [];
let searchQuery = '';
let size = getSize();

renderDropdown();

async function initEvents(page, keyword, size, code) {
  setCurrentPage(page);
  loader.classList.add('active');
  const data = await getEvents(page, keyword, size, code);
  if (!data?._embedded?.events) {
    if (code !== 'US') {
      code = 'US';
      dropdownBtn.textContent = 'US';
      await initEvents(page, keyword, size, code);
      return;
    }
    events = [];
    renderEvents(events);
    return;
  }
  renderEvents([]);
  loader.classList.remove('active');
  events = data._embedded.events;

  const totalPages = data?.page?.totalPages || 1;
  renderPagination(Math.min(totalPages, 50));
  renderEvents(events);
  renderDropdown();
}

findInput?.addEventListener(
  'input',
  debounce(e => {
    searchQuery = e.target.value;
    initEvents(currentPage, searchQuery, size, code);
  }, 300)
);

eventsContainer.addEventListener('click', e => modalRender(events, e));

paginationContainer.addEventListener('click', async e => {
  if (e.target.classList.contains('pagination-unit')) {
    const page = parseInt(e.target.textContent) - 1;
    await initEvents(page, searchQuery, size, code);
  }
});

dropdownEl.addEventListener('click', async e => {
  e.preventDefault();
  const button = e.target;
  if (button.tagName !== 'A') return;

  const countryCode = button.textContent.trim();
  code = countryCode;
  dropdownBtn.textContent = countryCode;
  await initEvents(currentPage, searchQuery, size, code);
});

window.addEventListener('resize', () => {
  const newSize = getSize();
  if (newSize !== size) {
    size = newSize;
    resetCurrentPage();
    initEvents(currentPage, searchQuery, size, code);
  }
});

async function initialize() {
  code = await getCountryCode();
  initEvents(currentPage, '', size, code);
}

window.addEventListener('resize', () => {
  const newSize = getSize();
  if (newSize !== size) {
    size = newSize;
    resetCurrentPage();
    initEvents(currentPage, searchQuery, size, code);
  }
});

initialize();
