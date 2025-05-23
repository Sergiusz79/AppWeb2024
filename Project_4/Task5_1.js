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
  element1.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
}

function getRandomIntInclusive() {
  let color = Math.floor(Math.random() * 255);
  let element2 = document.getElementById("Block2");
  element2.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
}

function zmienSzarosc(n) {
  let element1 = document.getElementById("Block1");
  let rgbString = window.getComputedStyle(element1).backgroundColor;
  //Распарсим строку bgColor
  const rgbValues = rgbString.match(/(\d+),\s*(\d+),\s*(\d+)/gi); //(/\d+/gi): Это регулярное выражение ищет одну или более цифр (\d+) по всей строке, ,\s*— 0 или больше пробелов (чтобы игнорировать пробелы после запятой), g - global flag, он указывает движку регулярных выражений на необходимость выполнять поиск всех совпадений в заданной строке, а не останавливаться после первого найденного совпадения, i (case-insensitive): Поиск без учета регистра (Например, /красный/i найдет и "красный", и "Красный", и "кРАсный"). Флаги просто приписываем друг за другом после закрывающей косой черты / регулярного выражения. Порядок флагов не имеет значения. Метод match() возвращает массив найденных совпадений (строк).
  if (rgbValues && rgbValues.length < 4) {
    const r = parseInt(rgbValues[0], 10);
    const g = parseInt(rgbValues[1], 10);
    const b = parseInt(rgbValues[2], 10);
    let newColor = r + n;
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

function getRandomBackgroundColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let elementBody = document.body;
  elementBody.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
