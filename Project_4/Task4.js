function ustawKolor()  
{   
    // значение, введённое пользователем в текстовое поле с id="poleTekstowe", преобразуется в целое число с помощью parseInt (с основанием системы счисления 10).
    let color = parseInt(document.getElementById("poleTekstowe").value, 10);  
    //Проверяется, является ли введённое значение числом (isNaN(color)), а также находится ли оно в диапазоне от 0 до 255. Если значение некорректно, появляется предупреждение, и выполнение функции прерывается.
    if (isNaN(color) || color < 0 || color > 100) {
        alert("Wprowadź liczbę z zakresu 0-100!");
        return;
    }
    //Объявляем переменную element и присваиваем ей значение 
    let element1=document.getElementById("Block1");
    let element2=document.getElementById("Block2");
    //Изменяем стиль цвета backgroung-color у элемента element 
    element1.style.backgroundColor="rgb(" + color + "," + color + "," + color + ")";
}