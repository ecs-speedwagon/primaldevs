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
      //без різниці
      let imageUrl = event.images ? event.images[0].url : '';
      // if(event.images) imageUrl=event.images[0].url

      //тут теж
      let dateText =
        event.dates && event.dates.start && event.dates.start.localDate
          ? event.dates.start.localDate
          : '';

      // if (event.dates && event.dates.start) {
      //   dateText = event.dates.start.localDate;
      // }
      return `
          <li class="event-item">
            <img src="${imageUrl}" alt="${event.name}">
            <h3>${event.name}</h3>
            <p>${dateText}</p>
          </li>
        `;
    })
    .join('');

  eventsContainer.insertAdjacentHTML('beforeend', markup);
}
