import { getWeather, drawWeather, drawMap } from "./functions1.js";
import { readList, saveList, drawList } from "./storeCity.js";
import { getCity, getMapUrl } from "./geoSome.js";
import { SliderPlugin } from "./sliderPlugin.js";

(async function () {
  // Получаем указатели на нужные элементы
  const formEl = document.querySelector("form");
  const weatherInfoEl = document.querySelector(".test");
  const listEl = document.querySelector(".history");
  // if (!navigator.geolocation) {
  //  status.textContent = 'Ваш браузер не дружит с геолокацией...'
  // } else {
  //  navigator.geolocation.getCurrentPosition(success, error)
  // }
  // Если всё хорошо, собираем ссылку
  // function success(position) {
  //  const { longitude, latitude }  = position.coords

  // map.src = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude}%2C${latitude}&amp;layer=mapnik`
  // }

  /// / Если всё плохо, просто напишем об этом
  // function error() {
  //  status.textContent = 'Не получается определить вашу геолокацию :('
  // }
  let items = [];
  // Читаем список при старте
  // const
  items = await readList();
  // и отрисовываем список
  drawList(listEl, items);

  // add plugin
  const element = document.querySelector(".slider-plugin");
  const slider = new SliderPlugin(element, null);
  document.querySelector(".arrow_left").addEventListener("click", () => {
    slider.left();
  });
  document.querySelector(".arrow_right").addEventListener("click", () => {
    slider.right();
  });
  function showWeather(el, weatherInfo) {
    // el.innerHTML = JSON.stringify(weatherInfo, null, 2);
  }

  async function onLiClick(ev) {
    // чтобы не перезагружать страницу
    ev.preventDefault();

    // читаем значение из формы
    const formElement = ev.target;
    const cityName = ev.target.innerText;
    if (cityName.trim() === "") return;
    const weather = await getWeather(cityName);
    showWeather(weatherInfoEl, weather);
    drawWeather(document.querySelector(".weather-info"), weather);
    drawMap(document.querySelector(".mapImage"), getMapUrl(weather));
  }

  listEl
    .querySelectorAll(".weater-info-item")
    .forEach((el) => el.addEventListener("click", async (e) => onLiClick(e)));

  async function onClick(ev) {
    // чтобы не перезагружать страницу
    ev.preventDefault();

    // читаем значение из формы
    const formElement = ev.target;
    const inputEl = formElement.querySelector("input");
    const cityName = inputEl.value;
    inputEl.value = "";

    if (cityName.trim() === "") return;

    items.unshift(cityName);
    saveList(items);
    const weather = await getWeather(cityName);

    showWeather(weatherInfoEl, weather);
    drawWeather(document.querySelector(".weather-info"), weather);
    drawMap(document.querySelector(".mapImage"), getMapUrl(weather));

    // обновляем список
    items = await readList();
    drawList(listEl, items);
    listEl
      .querySelectorAll(".weater-info-item")
      .forEach((el) => el.addEventListener("click", async (e) => onLiClick(e)));
  }
  formEl.addEventListener("submit", async (ev) => onClick(ev));
  async function firstGet() {
    const city = await getCity();
    // document.querySelector("input").value = city;
    // document.querySelector(".weather-button").click();
    const weather = await getWeather(city);
    const weatherInfo = document.querySelector(".test");

    showWeather(weatherInfo, weather);
    drawWeather(document.querySelector(".weather-info"), weather);

    drawMap(document.querySelector(".mapImage"), getMapUrl(weather));
  }

  await firstGet();
})();
