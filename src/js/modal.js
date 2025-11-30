import { modalContainer } from './dom.js';

export function modalRender(events, el) {
  const item = el.target.closest('.event-item');
  if (!item) return;
  const event = events[item.dataset.id];

  // дані
  const moreAuthorUrl = event.url || '#';

  const imageUrl = event.images?.find(img => img.ratio === '3_2')?.url || '';
  const dateText = event.dates?.start?.localDate || 'No date info';
  const timeText = event.dates?.start?.localTime.slice(0,5) || 'Unknown time';
  const timezone = event.dates?.timezone || 'Local time';
  const venue = event._embedded?.venues?.[0];
  const venueName = venue?.name || "We don't have enough info";
  const city = venue?.city?.name || '';
  const country = venue?.country?.name || '';
  const info =
    typeof event.description === 'string' && event.description.trim() !== ''
      ? event.description.slice(0, 140) +
        (event.description.length > 140 ? '…' : '')
      : false;
  const performer =
    event._embedded?.attractions?.[0]?.name || 'Unknown performer';
  const name =
    typeof event.name === 'string' && event.name.trim() !== ''
      ? event.name
      : 'Untitled event';

  //створення модалки
  modalContainer.innerHTML = `<div id="modal-box" class="modal-box">
      <button class="close-modal-butt" id="close-modal-butt">
        <svg class="close-modal-icon">
          <use href="./img/cross.svg"></use>
        </svg>
      </button>

      <div class="modal-sub-img" style="background: url('${imageUrl}') center/cover no-repeat;"></div>
      <div class="modal-main-img" style="background: url('${imageUrl}') center/cover no-repeat;"></div>

      <ul class="modal-info-list" id="modal-info-list">
        <li class="modal-info-item" id="modal-info">
          <h2 class="modal-title">Info</h2>
          <p class="modal-text">${info ? info : name} </p>
        </li>
        <li
class="modal-info-item" id="modal-when">
          <h2 class="modal-title">When</h2>
          <p class="modal-text">${dateText}<span class="br-space"></span>${timeText} (${timezone})</p>
        </li>
        <li class="modal-info-item" id="modal-where">
          <h2 class="modal-title">Where</h2>
          <p class="modal-text">${city}, ${country}<span class="br-space"></span>${venueName}</p>
        </li>
        <li class="modal-info-item" id="modal-who">
          <h2 class="modal-title">Who</h2>
          <p class="modal-text">${performer}</p>
        </li>
        <li class="modal-info-item" id="modal-prices">
          <h2 class="modal-title">Prices</h2>
          <p class="modal-text">
            <svg class="ticket-barcode-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 16">
              <path d="M2.66668 0L0 0L0 16H2.66668L2.66668 0Z" fill="currentColor" />
              <path d="M9.3737 0L6.70703 0L6.70703 16H9.3737L9.3737 0Z" fill="currentColor" />
              <path d="M13.4142 0L10.7476 0L10.7476 16H13.4142L13.4142 0Z" fill="currentColor" />
              <path d="M24.0001 0L20.0405 0L20.0405 16H24.0001L24.0001 0Z" fill="currentColor" />
              <path d="M5.33334 0L4.04041 0L4.04041 16H5.33334L5.33334 0Z" fill="currentColor" />
              <path d="M16 0L14.707 0L14.707 16H16L16 0Z" fill="currentColor" />
              <path d="M18.6666 0L17.3737 0L17.3737 16H18.6666L18.6666 0Z" fill="currentColor" />
            </svg>Standard
            1000–1500 UAH
          </p>
          <button class="buy-tick-butt">Buy tickets</button>
          <p class="modal-text">
            <svg class="ticket-barcode-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 16">
              <path d="M2.66668 0L0 0L0 16H2.66668L2.66668 0Z" fill="currentColor" />
              <path d="M9.3737 0L6.70703 0L6.70703 16H9.3737L9.3737 0Z" fill="currentColor" />
              <path d="M13.4142 0L10.7476 0L10.7476 16H13.4142L13.4142 0Z" fill="currentColor" />
              <path d="M24.0001 0L20.0405 0L20.0405 16H24.0001L24.0001 0Z" fill="currentColor" />
              <path d="M5.33334 0L4.04041 0L4.04041 16H5.33334L5.33334 0Z" fill="currentColor" />
              <path d="M16 0L14.707 0L14.707 16H16L16 0Z" fill="currentColor" />
              <path d="M18.6666 0L17.3737 0L17.3737 16H18.6666L18.6666 0Z" fill="currentColor" />
            </svg>VIP 3000–5500 UAH
          </p>
          <button class="buy-tick-butt">Buy tickets</button>
        </li>
      </ul>

      <button data-url="${moreAuthorUrl}" class="more-author-butt" id="more-author-butt">
        More from this author
      </button>
    </div>`;

  //показуємо модалку
  modalContainer.classList.add('active');

  //закриваємо модалку
  const closeButt = modalContainer.querySelector('#close-modal-butt');
  closeButt.addEventListener('click', () =>
    modalContainer.classList.remove('active')
  );

  //закриваєм модалку №2
  modalContainer.addEventListener('click', e => {
    if (e.target === modalContainer) {
      modalContainer.classList.remove('active');
    }
  });

  const moreAuthorButt = document.querySelector('#more-author-butt');
  moreAuthorButt.addEventListener('click', e => {
    const url = e.target.dataset.url;
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      console.warn('URL not provided');
    }
  });
}
