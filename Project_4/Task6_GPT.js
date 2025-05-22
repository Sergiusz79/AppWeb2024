// Глобальная переменная для подсчета вызовов функции zmienSzarosc
let zmienSzaroscCallCount = 0;

// Функция для установки цвета элемента Block1
function ustawKolor() {
  // Получаем значение из текстового поля
  let inputColorValue = document.getElementById("poleTekstowe").value;
  let color = parseInt(inputColorValue, 10);

  // Проверяем, является ли введенное значение числом и находится ли оно в диапазоне 0-255
  // (Изменил диапазон на 0-255, так как это стандартный диапазон для RGB)
  if (isNaN(color) || color < 0 || color > 255) {
    alert("Wprowadź liczbę z zakresu 0-255!");
    return;
  }

  // Получаем ссылку на элемент Block1
  let element1 = document.getElementById("Block1");

  // Проверяем, существует ли элемент
  if (!element1) {
    console.error("Ошибка: Элемент с ID 'Block1' не найден для установки цвета.");
    alert("Элемент 'Block1' не найден!");
    return;
  }

  // Изменяем стиль цвета background-color у элемента element1
  element1.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
}

// Функция для установки случайного цвета элементу
function getRandomIntInclusive(blockName) {
  // Генерируем случайное число от 0 до 255
  let color = Math.floor(Math.random() * 256); // * 256, чтобы включить 255

  // Получаем ссылку на элемент по его имени
  let element = document.getElementById(blockName);

  // Проверяем, существует ли элемент
  if (!element) {
    console.error(`Ошибка: Элемент с ID "${blockName}" не найден для установки случайного цвета.`);
    alert(`Элемент "${blockName}" не найден!`);
    return;
  }

  // Устанавливаем случайный цвет (серый оттенок)
  element.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
}

// Функция для получения RGB значений элемента
function rgbStr(blockName) {
  const element = document.getElementById(blockName);

  // Важно: Проверяем, существует ли элемент
  if (!element) {
    console.error(`Ошибка в rgbStr: Элемент с ID "${blockName}" не найден.`);
    return null; // Возвращаем null, чтобы вызывающая функция знала, что что-то пошло не так.
  }

  const rgbString = window.getComputedStyle(element).backgroundColor;
  // Используем /\d+/g для получения всех чисел и .map(Number) для преобразования их в числа
  const matches = rgbString.match(/\d+/g);

  if (matches && matches.length >= 3) { // Убеждаемся, что есть как минимум R, G, B
    return matches.map(Number); // Возвращаем массив чисел: [R, G, B] (или [R, G, B, A])
  } else {
    console.warn(`Предупреждение: Не удалось извлечь корректные RGB значения из "${rgbString}" для элемента "${blockName}".`);
    return null;
  }
}

// Функция для изменения оттенка серого цвета элемента
function zmienSzarosc(blockName, n) {
  zmienSzaroscCallCount++; // Увеличиваем счетчик при каждом вызове

  const element = document.getElementById(blockName);

  // Проверяем, найден ли элемент
  if (!element) {
    console.error(`Ошибка в zmienSzarosc: Элемент с ID "${blockName}" не найден.`);
    alert("Элемент для изменения цвета не найден!");
    return;
  }

  // Получаем RGB значения с помощью функции rgbStr.
  const rgbValues = rgbStr(blockName);

  if (rgbValues) {
    // Берем значение первого канала (например, красного), предполагая, что это серый оттенок
    const initialColorValue = rgbValues[0]; 
    
    let newColor = initialColorValue + n;

    // Ограничиваем значение цвета диапазоном 0-255
    if (newColor < 0) {
      newColor = 0;
      alert("Достигнут нижний предел цвета (0)!");
    } else if (newColor > 255) {
      newColor = 255;
      alert("Достигнут верхний предел цвета (255)!");
    }

    // Устанавливаем новый цвет, применяя его ко всем трем каналам
    element.style.backgroundColor = `rgb(${newColor}, ${newColor}, ${newColor})`;
  } else {
    alert("Ошибка при получении цвета элемента!");
    return;
  }
}

// Функция для отображения количества вызовов zmienSzarosc
function displayZmienSzaroscCount() {
  alert(`Функция zmienSzarosc была вызвана ${zmienSzaroscCallCount} раз.`);
  // Если у вас есть div с id="callCountDisplay" в HTML, можно использовать:
  // document.getElementById('callCountDisplay').innerText = `Вызовов zmienSzarosc: ${zmienSzaroscCallCount}`;
}


// Функция для подведения итогов и добавления строки в таблицу
function podsumowanie() {
  // Получаем ссылки на элементы
  const element1 = document.getElementById("Block1");
  const element2 = document.getElementById("Block2");

  // Проверяем существование элементов
  if (!element1 || !element2) {
    console.error("Ошибка: Один или оба элемента (Block1, Block2) не найдены для подведения итогов.");
    alert("Не найдены элементы Block1 или Block2!");
    return;
  }

  // Получаем RGB значения
  const rgbValuesBlock1 = rgbStr("Block1");
  const rgbValuesBlock2 = rgbStr("Block2");

  // Проверяем, что оба цвета были успешно получены
  if (!rgbValuesBlock1 || !rgbValuesBlock2) {
    console.error("Не удалось получить цвета для Block1 или Block2.");
    alert("Ошибка: Не удалось получить цвета для таблицы.");
    return;
  }

  // Значения уже являются числами благодаря .map(Number) в улучшенной rgbStr
  const color1_R = rgbValuesBlock1[0]; 
  const color2_R = rgbValuesBlock2[0];

  // Вычисляем разницу цвета
  // Проверяем деление на ноль
  let ruznicaKoloru;
  if (color2_R === 0) {
    ruznicaKoloru = "Деление на ноль"; // Или другое сообщение об ошибке
  } else {
    ruznicaKoloru = (color1_R - color2_R) / color2_R;
  }
  
  // Получаем ссылку на tbody таблицы
  const table = document.getElementById("myTable");
  if (!table) {
    console.error("Ошибка: Элемент с ID 'myTable' не найден.");
    alert("Таблица не найдена!");
    return;
  }
  const tbody = table.getElementsByTagName("tbody")[0];

  // Создаем новую строку и ячейки
  const newRow = document.createElement("tr");
  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");
  const cell3 = document.createElement("td");
  const cell4 = document.createElement("td");

  // Устанавливаем содержимое ячеек
  // Номер попытки + количество вызовов zmienSzarosc
  cell1.innerHTML = `Попытка ${tbody.rows.length + 1} (Вызовов Szarosc: ${zmienSzaroscCallCount})`; 
  
  // Форматируем RGB значения для вывода
  cell2.innerHTML = `rgb(${rgbValuesBlock2[0]}, ${rgbValuesBlock2[1]}, ${rgbValuesBlock2[2]})`;
  cell3.innerHTML = `rgb(${rgbValuesBlock1[0]}, ${rgbValuesBlock1[1]}, ${rgbValuesBlock1[2]})`;
  
  // Ограничиваем количество знаков после запятой для ruznicaKoloru, если это число
  if (typeof ruznicaKoloru === 'number') {
    cell4.innerHTML = ruznicaKoloru.toFixed(2); // Округляем до 2 знаков после запятой
  } else {
    cell4.innerHTML = ruznicaKoloru; // Выводим сообщение об ошибке (например, "Деление на ноль")
  }
  

  // Добавляем ячейки в строку
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);
  newRow.appendChild(cell4);

  // Добавляем строку в tbody
  tbody.appendChild(newRow);
}

// Функция для очистки таблицы
function czysc() {
  const table = document.getElementById("myTable");
  if (!table) {
    console.error("Ошибка: Элемент с ID 'myTable' не найден для очистки.");
    alert("Таблица не найдена!");
    return;
  }
  const tbody = table.getElementsByTagName("tbody")[0];

  // Удаляем все строки из tbody
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  
  // Сбрасываем счетчик вызовов zmienSzarosc на 0
  zmienSzaroscCallCount = 0; 
  // alert("Таблица очищена и счетчик сброшен."); // Опционально: оповещение об очистке
}
