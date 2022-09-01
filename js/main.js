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