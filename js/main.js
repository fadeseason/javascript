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

// const string = prompt("", "");
// const products = string.split(", "); //Метод split() разбивает объект String на массив строк путём разделения строки
// products.sort(); // Метод sort() сортирует массив
// console.log(products.join("; ")); // Метод join() объединяет все элементы массива в строку.

// function createCounter () {
//    let counter = 0;

//    const myFunction = function () {
//       counter=counter + 1;
//       return counter;
//    };

//    return myFunction;
// }

// const increment = createCounter();

// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);

// let i = 5;
// console.log(i++); // 5 постфиксная форма, вернет исходное значение, а после уже увеличит на единицу
// префиксная форма ++i возвращает сразу увеличенный на единицу результат

// let qwer = [ ] + false - null + true ; // NaN читай тетрадку

// let y = 1;
// let x = y = 2;
// console.log(x); // 2

// console.log([ ] + 1 + 2); // 12

// console.log("1"[0] ); // 1 к каждому элементу строки можно обратиться по его индексу,
// в данном случае строка "1" и ее индекс 0

// console.log(2 && 1 && null && 0 && undefined); // null остановится на первом ложном значении

//Есть ли разница между выражениями? !!( a && b ) и (a && b)? // в данном случае оператор !! превращает (a && b)
// в boolean тип данных

//Что выведет этот код: alert( null || 2 && 3 || 4 ); ? // 3 И && запинается на лжи, ИЛИ || запинается на правде

// let a = [1, 2, 3];
// let b = [1, 2, 3]; // Правда ли что a == b ?
// ответ нет у переменных одинаковые данные, но это разные хранилища информации
// console.log(a == b);
// console.log(0 || "" || 2 || undefined || true || false ); // 2

// Что выведет этот код: alert( +"Infinity" ); ? // infinity

//"Ёжик" > "яблоко" false
// Рекурсия

// function pow(x, n) {
//    let result = 1;

//    for (let i = 0; i < n; i++){
//       result *= x;
//    }

//    return result;
// }

// function pow(x, n) {
//    if (n === 1) {
//       return x;
//    } else {
//       return x * pow(x, n - 1);
//    }
// }

// pow(2, 1); // 2
// pow(2, 2); // 4
// pow(2, 3); // 8
// pow(2, 4); // 16

let students = {
   js: [{
         name: 'John',
         progress: 100
   }, {
         name: 'Ivan',
         progress: 60
   }],

   html: {
      basic: [{
         name: 'Peter',
         progress: 20
      }, {
         name: 'Ann',
         progress: 18
      }],

      pro: [{
         name: 'Sam',
         progress: 10
      }],

      semi: {
         students:[{
            name: 'Test',
            progress: 100
         }]
      }
   }
};
// вычислить общий процент прогресса со всех курсов

function getTotalProgressByIteration(data) {
   let total = 0; // переменная для общего прогресса
   let students = 0; // общее кроичество студентов

   for (let course of Object.values(data)) { // получаем значение объекта
      if(Array.isArray(course)){
         students += course.length;

         for (let i = 0; i < course.length; i++){  // если это массив выполняем эти операции
            total += course[i].progress;
         }
      } else {
         for (let subCourse of Object.values(course)){  // если это объект то находим все что внутри
            students += subCourse.length;    // и выполняем эти операции

            for (let i = 0; i < subCourse.length; i++){
               total += subCourse[i].progress;
            }
         }
      }
   }

    return total / students;
}

// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
   if(Array.isArray(data)){
      let total = 0;

      for (let i = 0; i < data.length; i++){  // если это массив выполняем эти операции
         total += data[i].progress;
      }

      return [total, data.length];
   } else {
      let total = [0, 0];

      for (let subData of Object.values(data)){
         const subDataArr = getTotalProgressByRecursion(subData);
         total[0] += subDataArr[0];
         total[1] += subDataArr[1];
      }

      return total;
   }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/ result[1]);