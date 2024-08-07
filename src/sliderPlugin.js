export function SliderPlugin(element, options) {
  function sliderPluginEnhancer(element) {
    const ulEl = element.querySelector("ul");
    const liNodeList = ulEl.querySelectorAll("li");
    ulEl.classList.add("slider-frame");
    for (let i = 0; i < liNodeList.length; i++) {
      if (i === 0) {
        liNodeList[i].classList.add("slider-item-visible");
      } else {
        liNodeList[i].classList.add("slider-item-invisible");
      }
    }
  }

  sliderPluginEnhancer(element);
}
