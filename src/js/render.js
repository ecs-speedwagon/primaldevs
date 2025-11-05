let events = [];
// events ми не можемо експортувати й взаємодіяти в іншому докі, тому обходим так
export function eventHandle(newEvent) {
  events = newEvent;
}

const eventsContainer = document.querySelector('.events-ul');

export function renderEvents() {
  if (!eventsContainer) return;
  eventsContainer.innerHTML = '';

  const markup = events
    .map(event => {
      const moreAuthorUrl = event.url || '#';
      const imageUrl =
        event.images?.find(img => img.ratio === '3_2')?.url || '';
      const dateText = event.dates?.start?.localDate || 'No date info';
      const timeText = event.dates?.start?.localTime || 'Unknown time';
      const timezone = event.dates?.timezone || 'Local time';
      const venue = event._embedded?.venues?.[0];
      const venueName = venue?.name || "We don't have enough info";
      const city = venue?.city?.name || '';
      const country = venue?.country?.name || '';
      const info =
        typeof event.description === 'string' && event.description.trim() !== ''
          ? event.description.slice(0, 140) +
            (event.description.length > 140 ? '…' : '')
          : 'No info available';

      const name =
        typeof event.name === 'string' && event.name.trim() !== ''
          ? event.name
          : 'Untitled event';

      return `
        <li class="event-item">
          <img src="${imageUrl}" alt="${name}" data-url="${moreAuthorUrl}">
          <h3 class="event-name" data-name="${info}">${name}</h3>
          <p class="event-date" data-time="${timeText} ${timezone}">${dateText}</p>
          <p class="event-place" data-place="${city}, ${country}">${venueName}</p>
        </li>
      `;
    })
    .join('');

  eventsContainer.insertAdjacentHTML('beforeend', markup);
}
