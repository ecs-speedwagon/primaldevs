import { getEvents } from './api.js';
import { paginationContainer } from './dom.js';

export let currentPage = 0;
let totalPages;
let activeButt = null;

export function resetCurrentPage() {
  currentPage = 0;
}

function createButton(id) {
  //створити кнопку
  const button = document.createElement('button');
  button.classList.add('pagination-unit');
  button.textContent = id + 1;
  //активна кнопка
  if (id === currentPage) {
    button.classList.add('active');
    activeButt = button;
  }
  return button;
}

export function renderPagination(total) {
  totalPages = total;
  paginationContainer.innerHTML = '';

  let butts = [];
  function createDots() {
    const dots = document.createElement('span');
    dots.textContent = '...';
    dots.classList.add('pagination-dots');
    butts.push(dots);
  }
  //перевірка максимуму сторінок
  if (totalPages <= 5) {
    for (let i = 0; i < totalPages; i++) {
      butts.push(createButton(i));
    }
  } else {
    //перша кнопка
    butts.push(createButton(0));

    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages - 2, currentPage + 2);

    //шоб у мінус не йшло
    if (currentPage < 2) {
      start = 1;
      end = 4;
    }

    //шоб більше не було
    if (currentPage > totalPages - 4) {
      start = totalPages - 5;
      end = totalPages - 2;
    }

    //...
    if (start > 1) {
      createDots();
    }

    //то шо посєрьодкі
    for (let i = start; i <= end; i++) {
      butts.push(createButton(i));
    }

    //...№2
    if (end < totalPages - 2) {
      createDots();
    }

    //ласт кнопка
    butts.push(createButton(totalPages - 1));
  }

  //додаєм кнопки
  butts.map(butt =>
    paginationContainer.insertAdjacentElement('beforeend', butt)
  );
}