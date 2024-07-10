import { getWeather, drawWeather } from "./functions1.js";

(async function () {
  // Получаем указатели на нужные элементы
  const formEl = document.querySelector("form");
  const weatherInfoEl = document.querySelector(".weather-info");

  function showWeather(el, weatherInfo) {
    el.innerHTML = JSON.stringify(weatherInfo, null, 2);
  }
  // drawWeather(document.querySelector(".weater-info"), data);

  formEl.addEventListener("submit", async (ev) => {
    // чтобы не перезагружать страницу
    ev.preventDefault();

    // читаем значение из формы
    const formElement = ev.target;
    const inputEl = formElement.querySelector("input");
    const cityName = inputEl.value;
    inputEl.value = "";

    const weather = await getWeather(cityName);
    showWeather(weatherInfoEl, weather);
    drawWeather(document.querySelector(".weather-info"), weather);
  });
})();
