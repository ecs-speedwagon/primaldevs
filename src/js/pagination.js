import { getEvents } from './api.js';

export let currentPage = 0;
let totalPages;
const paginationContainer = document.querySelector('.pagination-box');
let activeButt = null;

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

  //івент
  button.addEventListener('click', () => {
    if (activeButt) activeButt.classList.remove('active');
    button.classList.add('active');
    activeButt = button;

    currentPage = id;
    window.scrollTo(0, 0);
    getEvents();
    renderPagination(totalPages);
  });

  return button;
}

export function renderPagination(total) {
  totalPages = total;
  paginationContainer.innerHTML = '';

  let butts = [];

  //перевірка максимуму сторінок
  if (totalPages <= 9) {
    for (let i = 0; i < totalPages; i++) {
      butts.push(createButton(i));
    }
  } else {
    //перша кнопка
    butts.push(createButton(0));

    let start = Math.max(1, currentPage - 4);
    let end = Math.min(totalPages - 2, currentPage + 4);

    //шоб у мінус не йшло
    if (currentPage < 4) {
      start = 1;
      end = 4;
    }

    //шоб більше не було
    if (currentPage > totalPages - 5) {
      start = totalPages - 8;
      end = totalPages - 2;
    }

    //...
    if (start > 1) {
      const dots = document.createElement('span');
      dots.textContent = '...';
      dots.classList.add('pagination-dots');
      butts.push(dots);
    }

    //то шо посєрьодкі
    for (let i = start; i <= end; i++) {
      butts.push(createButton(i));
    }

    //...№2
    if (end < totalPages - 2) {
      const dots = document.createElement('span');
      dots.textContent = '...';
      dots.classList.add('pagination-dots');
      butts.push(dots);
    }

    //ласт кнопка
    butts.push(createButton(totalPages - 1));
  }

  //додаєм кнопки
  butts.map(butt =>
    paginationContainer.insertAdjacentElement('beforeend', butt)
  );
}
