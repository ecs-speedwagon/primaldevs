import { dropdownEl, dropdownBtn } from './dom.js';
import { renderEvents } from './render.js';

let dropdownEvents = [];

export function renderDropdown(events) {
  dropdownEvents = events;

  if (!dropdownEl) return;

  dropdownEl.innerHTML = '';

  const unicCountryName = [
    ...new Set(
      events.map(el => el._embedded?.venues?.[0]?.state?.name?.trim())
    ),
  ];

  const markupDD = unicCountryName
    .map(
      element => `
        <li>
          <a class="dropdown-item" href="#">${element}</a>
        </li>
      `
    )
    .join('');

  dropdownEl.insertAdjacentHTML('beforeend', markupDD);
}

if (dropdownEl) {
  dropdownEl.addEventListener('click', e => {
    e.preventDefault();
    const button = e.target;
    if (button.nodeName !== 'A') return;

    if (dropdownBtn) {
      dropdownBtn.textContent = button.textContent;
    }

    if (!dropdownEvents.length) return;

    const filteredEvents = dropdownEvents.filter(
      ev =>
        ev._embedded?.venues?.[0]?.state?.name?.trim() === button.textContent
    );
    renderEvents(filteredEvents);
  });
}
