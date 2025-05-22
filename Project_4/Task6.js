function ustawKolor() {
  let color = parseInt(document.getElementById("poleTekstowe").value, 10);
  if (isNaN(color) || color < 0 || color > 100) {
    alert("Wprowadź liczbę z zakresu 0-100!");
    return;
  }
  //Объявляем переменную element и присваиваем ей значение
  let element1 = document.getElementById("Block1");
  //Изменяем стиль цвета backgroung-color у элемента element
  element1.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
}

function getRandomIntInclusive(blockName) {
  let color = Math.floor(Math.random() * 255);
  let element2 = document.getElementById(blockName);
  element2.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
}

function rgbStr(block) {
  let element = document.getElementById(block);
  if (!element) {
    console.error(`Ошибка в rgbStr: Элемент с ID "${block}" не найден.`);
    return null; // Возвращаем null, чтобы вызывающая функция знала, что что-то пошло не так.
  }
  let rgbString = window.getComputedStyle(element).backgroundColor;
  return rgbString.match(/\d+/);
}

function zmienSzarosc(block, n) {
  let element1 = document.getElementById(block);
  //Распарсим строку bgColor
  const rgbValues = rgbStr(block);
  if (rgbValues) {
    const color = parseInt(rgbValues[0], 10);
    let newColor = color + n;
    if (newColor < 0 || newColor > 255) {
      alert("Limit koloru!");
      return;
    }
    element1.style.backgroundColor = `rgb(${newColor}, ${newColor}, ${newColor})`;
  } else {
    alert("Bląd koloru!");
    return;
  }
}

function podsumowanie(block1, block2) {
  let element1 = document.getElementById(block1);
  let element2 = document.getElementById(block2);
  const rgbValue1 = rgbStr(block1);
  const rgbValue2 = rgbStr(block2);
  const color1 = parseInt(rgbValue1[0], 10);
  const color2 = parseInt(rgbValue2[0], 10);
  const ruznicaKoloru = (color1 - color2) / color2;
  let table = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0]; //[0] используется для доступа к первому элементу массива, возвращаемого методом. Если бы мы не поставили [0], то переменная table содержала бы коллекцию элементов, а не конкретный элемент, и дальнейшие операции (например, добавление строк) могли бы не работать.

  // Создаем новый элемент tr (строка)
  const newRow = document.createElement("tr");
  // Создаем новые элементы td (ячейки)
  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");
  const cell3 = document.createElement("td");
  const cell4 = document.createElement("td");
  // Устанавливаем содержимое ячеек, используя innerHTML
  cell1.innerHTML = "Новая ячейка 1";
  cell2.innerHTML = window.getComputedStyle(element2).backgroundColor;
  cell3.innerHTML = window.getComputedStyle(element1).backgroundColor;
  cell4.innerHTML = Math.round(ruznicaKoloru*100)/100;

  // Добавляем ячейки в новую строку, используя appendChild
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);
  newRow.appendChild(cell4);

  // Добавляем новую строку в tbody таблицы, используя appendChild
  table.appendChild(newRow);
}

function czysc() {
  // Получаем ссылку на элемент tbody таблицы
  const table = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];

  // Получаем количество строк в tbody
  const rowCount = table.rows.length;

  // Проверяем, есть ли строки для удаления
  if (rowCount > 0) {
    // Удаляем последнюю строку из tbody, используя removeChild
    table.removeChild(table.rows[rowCount - 1]);
  } else {
    alert("В таблице нет строк для удаления.");
  }
}
