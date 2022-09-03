'use strict';
//Callback функции
// function first() {
//     // do something
//     setTimeout (function(){
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS (lang, callback) {
//     console.log(`Я учу: ${lang} `);
//     callback();
// }

// learnJS('JavaScript', function(){  //здесь в аргументе анонимная функция, после выполнения она исчезнет
//     console.log('Я прошел этот урок!'); // и мы больше не сможем к ней обратиться
// });

// Объекты, деструктуризация объектов (ES6)

// const options = {
//     name : 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){  // внутри объектов можно создавать методы
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors; // деструктуризация, вытащили свойства border и bg из options.colors
// console.log(border);

// console.log(Object.keys(options).length); //object.keys(options) выводит массив со всеми ключами объекта
// а .length длину получившегося массива

// console.log(options.name);

// delete options.name;  // удаляем свойство name у объекта options

// console.log(options);

// for (let key in options) { 
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         } 
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

// Массивы и псевдомассивы

// const arr = [1, 2, 3, 6, 8];

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) { //forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
//     console.log(`${i}: ${item} внутри массива ${arr} `);
// });

// arr.pop(); // удаляет значение с конца массива

// arr.push(10); // добавляет (в данном случае 10) в конец массива элемент
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

const string = prompt("", "");
const products = string.split(", "); //Метод split() разбивает объект String на массив строк путём разделения строки
products.sort(); // Метод sort() сортирует массив 
console.log(products.join("; ")); // Метод join() объединяет все элементы массива в строку.

