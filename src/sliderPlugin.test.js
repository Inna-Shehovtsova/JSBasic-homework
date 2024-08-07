import { SliderPlugin } from "./sliderPlugin.js";

function createLI(element) {
  element.innerHTML = ` <ul >
        <li ><img ="./img/IMG_2326.jpg" /></li>
        <li ><img ="./img/IMG_2331.jpg" /></li>
        <li><img ="./img/IMG_2340.jpg" /></li>
      </ul>`;
  return element;
}

describe("Storage test", () => {
  it("to be function", () => {
    expect(SliderPlugin).toBeInstanceOf(Function);
  });

  it("to add class to li items", () => {
    let el = document.createElement("div");
    el = createLI(el);
    const slider = new SliderPlugin(el, null);
    const ulEl = el.querySelector("ul");
    expect(ulEl.classList.contains("slider-frame")).toBeTruthy();
    const nodeList = ulEl.querySelectorAll("li");
    for (let i = 0; i < nodeList.length; i++) {
      if (i === 0) {
        expect(
          nodeList[i].classList.contains("slider-item-visible"),
        ).toBeTruthy();
        expect(
          nodeList[i].classList.contains("slider-item-invisible"),
        ).toBeFalsy();
      } else {
        expect(
          nodeList[i].classList.contains("slider-item-invisible"),
        ).toBeTruthy();
        expect(
          nodeList[i].classList.contains("slider-item-visible"),
        ).toBeFalsy();
      }
    }
  });
});
