export function getSize() {
  const width = window.innerWidth;
  return width >= 1280 ? 20 : width >= 768 ? 21 : 20;
}
