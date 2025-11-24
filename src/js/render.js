import { eventsContainer } from './dom.js';

export function renderEvents(events) {
  let eventsToRender = 0;

  eventsToRender = events;

  if (!eventsContainer) return;
  eventsContainer.innerHTML = '';

  const markup = eventsToRender
    .map((event, index) => {
      const imageUrl =
        event.images?.find(img => img.ratio === '3_2')?.url || '';
      const dateText = event.dates?.start?.localDate || 'No date info';
      const venue = event._embedded?.venues?.[0];
      const venueName = venue?.name || "We don't have enough info";
      const name =
        typeof event.name === 'string' && event.name.trim() !== ''
          ? event.name
          : 'Untitled event';

      return `
      <li class="event-item" data-id="${index}">
        <img src="${imageUrl}" alt="${name}">
        <h3 class="event-name">${name}</h3>
        <p class="event-date">${dateText}</p>
        <p class="event-place">${venueName}</p>
      </li>
    `;
    })
    .join('');

  eventsContainer.insertAdjacentHTML('beforeend', markup);
}
