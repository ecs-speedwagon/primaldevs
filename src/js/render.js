let events = [];

// events ми не можемо експортувати й взаємодіяти в іншому докі, тому обходим так
export function eventHandle(newEvent) {
  events = newEvent;
}

const eventsContainer = document.querySelector('.events-ul');

export function renderEvents() {
  let eventsToRender = 0;
  if (findEven.length > 0) {
    eventsToRender = findEven;
  } else {
    eventsToRender = events;
  }

  if (!eventsContainer) return;
  eventsContainer.innerHTML = '';

  const markup = eventsToRender
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

// економим як можемо, тому тут частина пошуку

let findEven = [];

export function findEvenHandle(sepData) {
  findEven = sepData;
}

//search ивент
export function searchEvents(searchEvent) {
  if (!searchEvent.trim()) {
    findEven = [...events];
  } else {
    findEven = events.filter(event => {
      return event.name.toLowerCase().includes(searchEvent.toLowerCase());
    });
  }

  renderEvents();
}
