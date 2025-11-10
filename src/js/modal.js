const modalContainer = document.querySelector('#modal-vignette');
const eventsContainer = document.querySelector('.events-ul');

// слухач кліку на картку події
eventsContainer.addEventListener('click', e => {
  const item = e.target.closest('.event-item');
  if (!item) return;

  //елементи і дані
  const nameEl = item.querySelector('.event-name');
  const dateEl = item.querySelector('.event-date');
  const placeEl = item.querySelector('.event-place');
  const imgEl = item.querySelector('img');

  const name = nameEl?.textContent?.trim() || 'Unknown event';
  const info = nameEl?.dataset.name?.trim() || 'No info available';
  const time = dateEl?.dataset.time?.trim() || 'Unknown time';
  const place = placeEl?.dataset.place?.trim() || 'Unknown place';
  const city = placeEl?.textContent?.trim() || '';
  const image = imgEl?.src || '';
  const url = imgEl.dataset.url || '#';

  //створення модалки
  modalContainer.innerHTML = `
    <div id="modal-box" class="modal-box">
      <button class="close-modal-butt" id="close-modal-butt">
        <svg class="close-modal-icon">
          <use href="../img/cross.svg"></use>
        </svg>
      </button>

      <img class="modal-sub-img" src="${image}" alt="${name}" />
      <img class="modal-main-img" src="${image}" alt="${name}" />

      <ul class="modal-info-list" id="modal-info-list">
        <li class="modal-info-item" id="modal-info">
          <h2>Info</h2>
          <p class="modal-info-text">${info}</p>
        </li>
        <li class="modal-info-item" id="modal-when">
          <h2>When</h2>
          <p class="modal-when-text">${time}</p>
        </li>
        <li class="modal-info-item" id="modal-where">
          <h2>Where</h2>
          <p class="modal-where-text">${place}<br>${city}</p>
        </li>
        <li class="modal-info-item" id="modal-who">
          <h2>Who</h2>
          <p class="modal-who-text">Performer info here</p>
        </li>
        <li class="modal-info-item" id="modal-prices">
          <h2>Prices</h2>
          <p class="modal-prices">Standard 1000–1500 UAH</p>
          <button class="buy-tick-butt">Buy tickets</button>
          <p class="modal-prices">VIP 3000–5500 UAH</p>
          <button class="buy-tick-butt">Buy tickets</button>
        </li>
      </ul>

      <button data-url="${url}" class="more-author-butt" id="more-author-butt">
        More from this author
      </button>
    </div>
  `;

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
});
