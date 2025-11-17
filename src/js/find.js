
export const findInput = document.querySelector('#searching-input')
export function searchEvents(events, query) {
  const text = query.trim().toLowerCase();
  if (!text) return [...events];

  return events.filter(ev =>
    ev.name?.toLowerCase().includes(text)
  );
}
  
// if (findInput) {
//     findInput.addEventListener("input", (e) => {
//       searchEvent =e.target.value
//       searchEvents(e.target.value);
//     });
//   }