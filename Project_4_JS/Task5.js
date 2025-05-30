function ustawKolor() {
  // значение, введённое пользователем в текстовое поле с id="poleTekstowe", преобразуется в целое число с помощью parseInt (с основанием системы счисления 10).
  let color = parseInt(document.getElementById("poleTekstowe").value, 10);
  //Проверяется, является ли введённое значение числом (isNaN(color)), а также находится ли оно в диапазоне от 0 до 255. Если значение некорректно, появляется предупреждение, и выполнение функции прерывается.
  if (isNaN(color) || color < 0 || color > 100) {
    alert("Wprowadź liczbę z zakresu 0-100!");
    return;
  }
  //Объявляем переменную element и присваиваем ей значение
  let element1 = document.getElementById("Block1");
  //Изменяем стиль цвета backgroung-color у элемента element
  element1.style.backgroundColor =
    "rgb(" + color + "," + color + "," + color + ")";
}

function getRandomIntInclusive() {
  let color = Math.floor(Math.random() * 255);
  let element2 = document.getElementById("Block2");
  element2.style.backgroundColor =
    "rgb(" + color + "," + color + "," + color + ")";
}

function zmienSzarosc(n) {
  let element1 = document.getElementById("Block1");
  let rgbString = window.getComputedStyle(element1).backgroundColor;
  //Распарсим строку bgColor
  const rgbValues = rgbString.match(/\d+/); //(/\d+/gi): Это регулярное выражение ищет одну или более цифр (\d+) по всей строке.
  if (rgbValues) {
    const color = parseInt(rgbValues[0], 10);
    let newColor = color + n;
    if (newColor < 0 || newColor > 255) {
      alert("Limit koloru!");
      return;
    }
    element1.style.backgroundColor = `rgb(${newColor}, ${newColor}, ${newColor})`; //Это шаблонная строка (template literal), заключенная в обратные кавычки (`). Шаблонные строки предоставляют удобный способ встраивания выражений (в том числе переменных) внутрь строковых литералов.
  } else {
    alert("Bląd koloru!");
    return;
  }
}
