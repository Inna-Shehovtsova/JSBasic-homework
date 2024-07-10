// (async function () {
export function getCityHistKey() {
  return "cityHist";
}
// Должна возвращать список пользователя
// Если пользователь ничего не вводил - пустой список
export async function readList() {
  const key = getCityHistKey();
  let items = [];
  if (localStorage.getItem(key) !== "undefined")
    items = localStorage.getItem(key).split(",");

  return items;
}

// Сохраняет список
export function saveList(items) {
  let inner = items.reduce((a, c) => {
    if (!a.find((e) => e === c)) a.push(c);
    return a;
  }, []);

  inner = inner.slice(0, 10);
  const strItem = inner.join(",");
  localStorage.setItem(getCityHistKey(), strItem);
}

export function drawList(el, items) {
  el.innerHTML = `<ul>${items.map((el) => `<li>${el}</li>`).join("")}</ul>`;
}

/*  // Получаем указатели на нужные элементы
    const form = document.querySelector("form");
    const listEl = document.querySelector("#list");
  
    // Читаем список при старте
    const items = await readList();
  
    // и отрисовываем список
    drawList(listEl, items);
  
    form.addEventListener("submit", (ev) => {
      // чтобы не перезагружать страницу
      ev.preventDefault();
  
      // читаем значение из формы
      const formElement = ev.target;
      const input = formElement.querySelector("input");
      const value = input.value;
      input.value = "";
  
      // добавляем элемент в список
      items.push(value);
  
      // обновляем список
      drawList(listEl, items);
  
      // сохраняем список
      saveList(items);
    });
  })(); */
