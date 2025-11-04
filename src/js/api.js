import { renderEvents, eventHandle } from './render';
import { currentPage, renderPagination } from './pagination.js';
const API_KEY = 'q6wGVb9Aq0qhPo2kRkaUMu7npvf9A2ZE';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';

export async function getEvents() {
  try {
    //тут мож  countryCode любий, тут найбільше адекватних
    const url = `${BASE_URL}/events.json?apikey=${API_KEY}&countryCode=DE&page=${currentPage}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    const data = await res.json();
    //шлях такий))
    if (data?._embedded?.events) {
      eventHandle(data._embedded.events);
      renderEvents();
    }
    //всі сторінки як не дивно
    if (data?.page?.totalPages && data.page.totalPages <= 50) {
      renderPagination(data.page.totalPages);
    } else {
      renderPagination(50);
    }
    renderEvents();
  } catch (error) {
    console.error('error get', error.message);
  }
}

getEvents();
