import { KToC, getWeather, drawWeather, weatherDataObj } from "./functions1.js";

function setupFetchStub(data) {
  return function fetchStub(_url) {
    return new Promise((resolve) => {
      resolve({
        json: () =>
          Promise.resolve({
            data,
          }),
      });
    });
  };
}

describe("Kelvin to Celcius", () => {
  it("to be function", () => {
    expect(KToC).toBeInstanceOf(Function);
  });
  it("0", () => {
    expect(KToC(0)).toBe(-273);
  });
  it("293.15", () => {
    expect(KToC(293.15)).toBe(20);
  });
  it("263.15", () => {
    expect(KToC(263.15)).toBe(-10);
  });
});

const mockretVal = ` {
  "coord":{
     "lon":-0.13,
     "lat":51.51
  },
  "weather":[
     {
        "id":300,
        "main":"Drizzle",
        "description":"light intensity drizzle",
        "icon":"09d"
     }
  ],
  "base":"stations",
  "main":{
     "temp":280.32,
     "pressure":1012,
     "humidity":81,
     "temp_min":279.15,
     "temp_max":281.15
  },
  "visibility":10000,
  "wind":{
     "speed":4.1,
     "deg":80
  },
  "clouds":{
     "all":90
  },
  "dt":1485789600,
  "sys":{
     "type":1,
     "id":5091,
     "message":0.0103,
     "country":"GB",
     "sunrise":1485762037,
     "sunset":1485794875
  },
  "id":2643743,
  "name":"London",
  "cod":200
 }`;

const mockBadVal = '{ "cod": "404", "message": "city not found" }';

const weatherObjGood = Object.create(weatherDataObj);
Object.assign(weatherObjGood, {
  temp: 280.32,
  cityName: "London",
  lat: 51.51,
  lon: -0.13,
  img: "http://openweathermap.org/img/wn/09d@2x.png",
  error: 0,
});
const weatherObjBad = Object.create(weatherDataObj);
Object.assign(weatherObjBad, { error: 1 });
describe("Get weater", () => {
  it("to be function", () => {
    expect(getWeather).toBeInstanceOf(Function);
  });
  it("MOck get weater", async () => {
    global.fetch = jest.fn().mockImplementation(setupFetchStub(mockretVal));
    const weather = await getWeather("London");
    // console.log(weather);
    expect(weather).toStrictEqual(weatherObjGood);
    global.fetch.mockClear();
    delete global.fetch;
  });
});
describe("draw good weater", () => {
  it("to be function", () => {
    expect(drawWeather).toBeInstanceOf(Function);
  });
  it("draw good some", () => {
    const divApp = document.createElement("div");
    drawWeather(divApp, weatherObjGood);
    const city = divApp.querySelector(".city");
    expect(city).toBeTruthy();
    expect(city.innerHTML).toBe("London");
    const ctemp = divApp.querySelector(".ctemp");
    expect(ctemp).toBeTruthy();
    expect(ctemp.innerHTML).toBe(KToC(280).toString());
    const icEl = divApp.querySelector(".cicon");
    expect(icEl).toBeTruthy();
    const icS = '<img src="http://openweathermap.org/img/wn/09d@2x.png">';
    expect(icEl.innerHTML).toBe(icS);
  });
  it("draw bad city", () => {
    const divApp = document.createElement("div");
    drawWeather(divApp, weatherObjBad);
    const city = divApp.querySelector(".city");
    expect(city).toBeFalsy();

    const ctemp = divApp.querySelector(".ctemp");
    expect(ctemp).toBeFalsy();

    const icEl = divApp.querySelector(".cicon");
    expect(icEl).toBeFalsy();

    const er = divApp.querySelector(".error");
    expect(er).toBeTruthy();
    expect(er.innerHTML).toBe("Ой, что-то пошло не так");
  });
});
