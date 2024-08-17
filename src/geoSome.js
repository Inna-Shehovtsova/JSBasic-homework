export async function getCity() {
  let city = "";
  try {
    const url = "https://get.geojs.io/v1/ip/geo.json";
    const response = await fetch(url);
    const jsonData = await response.json();
    city = jsonData.city;
  } catch (exception) {
    city = exception;
  }
  return city;
}
export function getMapUrl(data) {
  let url = `https://static.maps.2gis.com/1.0?s=280x250&c=`;
  url += `${data.lat},${data.lon}&z=12`;
  return url;
}
