import { readList, saveList, drawList } from "./storeCity.js";

describe("Storage test", () => {
  beforeEach(() => {
    // to fully reset the state between tests, clear the storage
    localStorage.clear();
    // and reset all mocks
    jest.clearAllMocks();

    // clearAllMocks will impact your other mocks too, so you can optionally reset individual mocks instead:
    localStorage.setItem.mockClear();
  });
  it("to be function", () => {
    expect(saveList).toBeInstanceOf(Function);
  });
  it("Local storage", () => {
    const KEY = "cityHist";
    const VALUE = "London";
    // dispatch(action.update(KEY, VALUE));
    saveList([VALUE]);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
    expect(localStorage.__STORE__[KEY]).toBe(VALUE);
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });
  it("Local storage", () => {
    const KEY = "cityHist";
    const VALUE = "London";
    const VALUE2 = "Paris";
    // dispatch(action.update(KEY, VALUE));
    saveList([VALUE, VALUE2]);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      KEY,
      [VALUE, VALUE2].join(","),
    );
    expect(localStorage.__STORE__[KEY]).toBe([VALUE, VALUE2].join(","));
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });
  it("Local storage", async () => {
    const KEY = "cityHist";
    const VALUE = "London";
    const VALUE2 = "London1";

    saveList([VALUE, VALUE2]);
    const items = await readList();

    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      KEY,
      [VALUE, VALUE2].join(","),
    );
    expect(localStorage.__STORE__[KEY]).toBe([VALUE, VALUE2].join(","));
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
    expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);

    expect(items[0]).toStrictEqual(VALUE);
  });
  it("Local storage", async () => {
    const KEY = "cityHist";
    const VALUE = "London";
    const arr = [
      VALUE,
      VALUE,
      VALUE,
      VALUE,
      VALUE,
      VALUE,
      VALUE,
      VALUE,
      VALUE,
      VALUE,
      VALUE,
      VALUE,
    ];
    const arrT = [VALUE];
    saveList(arr);
    const items = await readList();

    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, arrT.join(","));
    expect(localStorage.__STORE__[KEY]).toBe(arrT.join(","));
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
    expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);

    expect(items[0]).toStrictEqual(VALUE);
    expect(items[9]).toStrictEqual(undefined);
    expect(items[10]).toBe(undefined);
  });

  it("Local storage", async () => {
    const KEY = "cityHist";
    const VALUE = "London";
    const arr = ["ab", "ab", "cd", "cd", "d", "pp"];
    const arrT = ["ab", "cd", "d", "pp"];
    saveList(arr);
    const items = await readList();

    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, arrT.join(","));
    expect(localStorage.__STORE__[KEY]).toBe(arrT.join(","));
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
    expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);

    expect(items[0]).toStrictEqual(arrT[0]);
    expect(items[9]).toStrictEqual(undefined);
    expect(items[10]).toBe(undefined);
  });

  it("Local storage", () => {
    const VALUE = "London";
    const arr = [
      VALUE,
      VALUE,
      VALUE,
      VALUE,
      VALUE,
      VALUE,
      VALUE,
      VALUE,
      VALUE,
      VALUE,
      VALUE,
      VALUE,
    ];
    const divApp = document.createElement("div");
    drawList(divApp, arr);
    const ol = divApp.querySelector("ul");
    expect(ol).toBeTruthy();
  });
});
