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
  it("to add arrows to li items", () => {
    let el = document.createElement("div");
    el = createLI(el);
    const slider = new SliderPlugin(el, null);
    const ulEl = el.querySelector("ul");
    expect(ulEl.classList.contains("slider-frame")).toBeTruthy();
    const nodeList = ulEl.querySelectorAll("a");
    for (let i = 0; i < nodeList.length; i++) {
      expect(nodeList[i].classList.contains("arrow")).toBeTruthy();
    }
  });
  it("to carousel", () => {
    let el = document.createElement("div");
    el = createLI(el);
    const slider = new SliderPlugin(el, null);

    const nodeLis1 = el.querySelectorAll("li");
    for (let i = 0; i < nodeLis1.length; i++) {
      if (i === 0) {
        expect(
          nodeLis1[i].classList.contains("slider-item-visible"),
        ).toBeTruthy();
        expect(
          nodeLis1[i].classList.contains("slider-item-invisible"),
        ).toBeFalsy();
      } else {
        expect(
          nodeLis1[i].classList.contains("slider-item-invisible"),
        ).toBeTruthy();
        expect(
          nodeLis1[i].classList.contains("slider-item-visible"),
        ).toBeFalsy();
      }
    }
    slider.right();
    const nodeLis2 = el.querySelectorAll("li");
    for (let i = 0; i < nodeLis2.length; i++) {
      if (i === 1) {
        expect(
          nodeLis2[i].classList.contains("slider-item-visible"),
        ).toBeTruthy();
        expect(
          nodeLis2[i].classList.contains("slider-item-invisible"),
        ).toBeFalsy();
      } else {
        expect(
          nodeLis2[i].classList.contains("slider-item-invisible"),
        ).toBeTruthy();
        expect(
          nodeLis2[i].classList.contains("slider-item-visible"),
        ).toBeFalsy();
      }
    }
    slider.left();

    for (let i = 0; i < nodeLis1.length; i++) {
      if (i === 0) {
        expect(
          nodeLis1[i].classList.contains("slider-item-visible"),
        ).toBeTruthy();
        expect(
          nodeLis1[i].classList.contains("slider-item-invisible"),
        ).toBeFalsy();
      } else {
        expect(
          nodeLis1[i].classList.contains("slider-item-invisible"),
        ).toBeTruthy();
        expect(
          nodeLis1[i].classList.contains("slider-item-visible"),
        ).toBeFalsy();
      }
    }
  });
});
