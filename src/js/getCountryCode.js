export async function getCountryCode() {
  const res = await fetch('https://ipapi.co/json/');
  if (!res.ok) return null;

  const data = await res.json();
  return data.country; 
}
