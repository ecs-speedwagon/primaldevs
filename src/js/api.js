const API_KEY = 'q6wGVb9Aq0qhPo2kRkaUMu7npvf9A2ZE';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';

export async function getEvents(page, keyword, size, code) {
  try {
    //тут мож  countryCode любий, тут найбільше адекватних
    const url = `${BASE_URL}/events.json?apikey=${API_KEY}&size=${size}&page=${page}&keyword=${
      keyword ? keyword : ''
    }&countryCode=${code}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);

    const data = await res.json();

    if (data?._embedded?.events) {
      return data;
    }
  } catch (error) {
    console.error('error get', error.message);
  }
}
