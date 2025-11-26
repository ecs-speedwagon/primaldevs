import { dropdownEl, dropdownBtn } from './dom.js';
import { renderEvents } from './render.js';

const countryCodes = [
  'US',
  'AD',
  'AI',
  'AR',
  'AU',
  'AT',
  'AZ',
  'BS',
  'BH',
  'BB',
  'BE',
  'BM',
  'BR',
  'BG',
  'CA',
  'CL',
  'CN',
  'CO',
  'CR',
  'HR',
  'CY',
  'CZ',
  'DK',
  'DO',
  'EC',
  'EE',
  'FO',
  'FI',
  'FR',
  'GE',
  'DE',
  'GH',
  'GI',
  'GB',
  'GR',
  'HK',
  'HU',
  'IS',
  'IN',
  'IE',
  'IL',
  'IT',
  'JM',
  'JP',
  'KR',
  'LV',
  'LB',
  'LT',
  'LU',
  'MY',
  'MT',
  'MX',
  'MC',
  'ME',
  'MA',
  'NL',
  'AN',
  'NZ',
  'ND',
  'NO',
  'PE',
  'PL',
  'PT',
  'RO',
  'RU',
  'LC',
  'SA',
  'RS',
  'SG',
  'SK',
  'SI',
  'ZA',
  'ES',
  'SE',
  'CH',
  'TW',
  'TH',
  'TT',
  'TR',
  'UA',
  'AE',
  'UY',
  'VE',
];

export function renderDropdown() {
  if (!dropdownEl) return;

  dropdownEl.innerHTML = '';

  const markupDD = countryCodes
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
