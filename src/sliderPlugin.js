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
      liNodeList[i].classList.add("ul.liststyle");
    }
    const arrowRight = document.createElement("a");
    arrowRight.innerHTML = `<img src="./img/ar_right.gif"/>`;
    arrowRight.classList.add("arrow");
    arrowRight.classList.add("arrow_right");
    const arrowLeft = document.createElement("a");
    arrowLeft.innerHTML = `<img src="./img/ar_left.gif"/>`;
    arrowLeft.classList.add("arrow");
    arrowLeft.classList.add("arrow_left");
    element.insertAdjacentElement("afterbegin", arrowLeft);
    element.insertAdjacentElement("beforeend", arrowRight);
  }

  sliderPluginEnhancer(element);
  this.left = () => {
    const liNodeList = element.querySelectorAll("li");
    for (let i = 0; i < liNodeList.length; i++) {
      if (liNodeList[i].classList.contains("slider-item-visible")) {
        liNodeList[i].classList.replace(
          "slider-item-visible",
          "slider-item-invisible",
        );
        i -= 1;
        if (i < 0) {
          i = liNodeList.length - 1;
        }
        liNodeList[i].classList.replace(
          "slider-item-invisible",
          "slider-item-visible",
        );
        break;
      }
    }
  };
  this.right = () => {
    const liNodeList = element.querySelectorAll("li");
    for (let i = 0; i < liNodeList.length; i++) {
      if (liNodeList[i].classList.contains("slider-item-visible")) {
        liNodeList[i].classList.replace(
          "slider-item-visible",
          "slider-item-invisible",
        );
        i += 1;
        if (i >= liNodeList.length) {
          i = 0;
        }
        liNodeList[i].classList.replace(
          "slider-item-invisible",
          "slider-item-visible",
        );
        break;
      }
    }
  };
}
/**/
/* Критерии оценки:

на главной странице добавлена разметка для карусели - 1 балл
добавлен скрипт, который отвечает за работу карусели - 2 балла
скрипт поддерживает инициализацию карусели после загрузки страницы (можно создавать свои экземпляры карусели) - 1 балл
карусель позволяет программно изменять слайды - 1 балл
принято ставится от 4 баллов
Если код не проходит линтинг - задание заворачивается на доработку */
