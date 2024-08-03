// Создайте страницу:
// 1.1 при открытии страницы пользователь видит
// погоду (город, температуру и иконку) в своей
// местности (для получения прогноза погоды используйте Open Weather Map API)
// 1.2 он может ввести имя города в поле ввода и увидеть погоду в выбранном городе 1.3 введенные города сохраняются у пользователя в браузере, так что он видит последние 10 городов, где он смотрел погоду
// 1.4 при клике по строчке города в списке он видит погоду в выбранном городе
// 1.5 кроме информации о погоде покажите в центре страницы карту для введенного адреса (используйте Google Maps Static API)

/**
 * 
 * @param {Критерии оценки:

создан репозиторий на гитхабе, проект c package.json, настроены линтеры, хаски, github actions - 2
настроены dev и build скрипты, сборка делается с помощью с использованием webpack - 2
при открытии страницы пользователь видит свой город и прогноз погоды в своем городе - 2
пользователь может ввести адрес/город и увидеть прогноз погоды - 2
введенные города сохраняются у пользователя в браузере, так что он видит последние 10 городов, где он смотрел погоду (записи в истории не повторяются) - 2
при клике по строчке города в списке истории он видит погоду в выбранном городе - 2
вместе с погодой показывается картинка карты местности для точки - 2
сделана публикация на githubpages (с помощью github action) - 2
покрытие кода выше 60 %, покрытие проверяется на CI - 2
ссылка на страницу для просмотра погоды добавлена в адрес страницы репозитория - 1
в репозитории есть README.md, который содержит описание проекта (что делается, зачем, где смотреть) и описывает структуру проекта - 1
в README.md есть badge для отображения статуса проверок на основной ветке (линтеры и тесты) - 1
Задание считается принятым при 18 баллах
} lat 
 * @param {*} lon 
 */

// ApiKey 31388c5842028e0b17906edf57971cc7
// API call https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
export function ApiKeyF() {
  return "31388c5842028e0b17906edf57971cc7";
}

export const weatherDataObj = {
  temp: 0,
  cityName: "",
  lat: 0,
  lon: 0,
  img: "",
  error: 0,
};

export async function getWeather(cityName = "Moskow") {
  const APIkey = ApiKeyF();
  const weather = Object.create(weatherDataObj);
  try {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=";
    url += `${cityName}&appid=${APIkey}`;
    const response = await fetch(url);
    let data = await response.json();

    if ("data" in data) data = JSON.parse(data.data);

    weather.temp = data.main.temp;
    weather.cityName = data.name;
    weather.img = `http://openweathermap.org/img/wn/`;
    weather.img += `${data.weather[0].icon}@2x.png`;
    weather.lon = data.coord.lon;
    weather.lat = data.coord.lat;
    weather.error = 0;
  } catch (error) {
    // console.log("ERROR!  ", error);
    weather.error = 1;
  }
  return weather;
}

export function KToC(KTemp) {
  return Math.round(KTemp - 273.15);
}
/**
 * Функция должна отображать в элементе следующие данные
 * - имя города
 * - текущую температуру (main.temp)
 * - иконку для погоды (одну или все - weather[index]icon)
 *   (см https://openweathermap.org/weather-conditions#How-to-get-icon-URL)
 *   например http://openweathermap.org/img/wn/10d@2x.png
 *
 *
 */
export function drawWeather(el, data) {
  // console.log("drawWeather", data);
  if (data.error === 0) {
    const name = data.cityName;
    const tempS = data.temp;

    const cityName = `<p class="city">${name}</p>`;
    const temp = `<p class="ctemp">${KToC(tempS)}</p> `;

    let wImg = `<p class="cicon">`;

    wImg += `<img src="${data.img}"/>`;

    wImg += `</p>`;

    el.innerHTML = `<div>${cityName}${temp}${wImg}</div>`;
  } else {
    el.innerHTML = `<div><p class="error">Ой, что-то пошло не так</p></div>`;
  }
  return el;
}
export function drawMap(el, imgSrc) {
  el.innerHTML = `<img src="${imgSrc}" />`;
}
