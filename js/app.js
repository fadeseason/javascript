// // if (4 == 9) {
// //     console.log('ok!');
// // } else {
// //     console.log('error!');
// // }

// // const num = 50;

// // switch (num) {
// //     case 49:
// //         console.log('Error!');
// //         break;
// //     case 100: 
// //         console.log('Error!');
// //         break;
// //     case 50:
// //         console.log('Done!');
// //         break;
// //     default:
// //         console.log('Not today:(');
// //         break;
// // }

// // const hamburger = 5;
// // const fries = 6; 

// // if (hamburger && fries) { // если хотя бы одна перменная true, код будет выполняться 
// //     console.log('Я сыт!');
// // } else {
// //     console.log('Я голоден!');
// // }

// // const hamburger = 3;
// // const fries = 3;
// // const cola = 0;
// // const nuggets = 2;

// // if (hamburger === 3 && cola === 2 || fries === 3 && nuggets ) {
// //     console.log('Все сыты!');
// // } else {
// //     console.log('We leave(');
// // }
// // let hamburger;
// // const fries = NaN;
// // const cola = 0;
// // const nuggets = 2;
 
// // if (hamburger && cola || fries === 3 && nuggets) {
// //    console.log('Done!')
// // }
// // "use strict";

// // let num = 50;
// // // while(num <= 55) {
// // //     console.log(num);
// // //     num++;
// // // }

// // do {
// //     console.log(num);
// //     num++;
// // } while (num < 55);

// // for (let i = 1; i < 10; i++) {
// //     if (i === 6) {
// //         break;
// //     }
// //     console.log(i);
// // }


// // for (let i = 0; i < 3; i++){
// //     console.log(i);
// //     for (let j = 0; j < 3; j++){
// //         console.log(j);  
// //     }
// // }

// // *
// // **       задача на построение треугольника
// // ***
// // ****
// // *****
// // ******

// // let result = '';
// // const lenght = 7;

// // for (let i = 0; i < lenght; i++){
    
// //     for (let j = 0; j < i; j++){
// //         result += '*';
// //     }

// //     result += '\n';
// // }

// // console.log(result);

// // first: for (let i = 0; i < 3; i++){
// //     console.log(`First level : ${i}`);
// //     for (let j = 0; j < 3; j++){
// //         console.log(`Second level : ${j}`);  
// //         for (let k = 0; k < 3; k++){
// //             if (k === 2) {
// //             break first;
// //             }
// //             console.log(`Third level : ${k}`);  
// //         }
// //     }
// // }
// "use strict";

// let num = 20;

// function showFirstMessage(text){
//     console.log(text);
//     console.log(num);
// }
// showFirstMessage('Hello World!');
// console.log(num);

// // function calc(a, b){
// //     return (a + b);
// // }
// // console.log(calc(4, 6));
// // console.log(calc(11, 6));
// // console.log(calc(2, 6));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log('Hello');
// };

// logger();

// const calc = (a, b) =>  a + b;

// const usdCurr = 28;
// const discount = 0.9;

// function convert (amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// promotion(convert(500, usdCurr));

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) {return;}
//     }
//     console.log('done');
// }
// test();

// function doNothing() {}
// console.log(doNothing() === undefined);
/* если функция должна вернуть какой-то результат, именно вернуть для дальнейшей работы,
то нам пригодится ключевое слово return
так же можно досрочно закончить функцию, просто написав return*/

// Методы и свойства строк и чисел 
// "use strict";
// // Строки
// const str = "some text";
// const arr = [1, 2, 3];

// console.log(str.length); // метод length в данном случае вывед длину строки в консоль
// console.log(arr.length); // так же можно и у массива

// const strUpCase = str.toLocaleUpperCase();
// console.log(strUpCase);
// console.log(str);

// const fruit = "some fruit";
// console.log(fruit.indexOf("fruit")); /* метод indexOf показывает с какого индекса начинается агрумент
// либо действительно ли в этой строке есть искомое значение  !Поиск подстроки!*/

// const logg = "Hello world";
// console.log(logg.slice(6, 11)); /* при использовании метода slice в аргументе указывается начальный и конечный
// индекс, ко всему, конечный индекс должен указываться не включающийся, то есть в примере с logg конечный индекс 
// равен 10, и если мы так запустим консоль нам выведет worl, поэтому в методе указываем 11 как конечный аргумент*/
// console.log(logg.substring(6, 11)); /* то же самое что и slice, но нельзя использовать отрицательные числа 
// з.ы. загугли*/
// console.log(logg.substr(6, 5));/*substr в аргументе принимает старт и количество символов*/

// //Числа 

// const num = 12.2;
// console.log(Math.round(num)); /*с помощью обекта Math и метода round мы можем вернуть
// значение числа, округлённое до ближайшего целого, встроенный оъект Math имеет много методов -- загугли*/

// const test = "12.2px";
// console.log(parseInt(test));  /*parseInt переводит аргумент в другую систему исчислений */
// console.log(parseFloat(test)); /*Функция parseFloat() принимает строку в качестве аргумента 
// и возвращает десятичное число (число с плавающей точкой)*/



const obj = {
    a : 5,
    b : 1  
};

// const copy = obj; // передача поссылке
// copy.a = 10; 
// console.log(copy);
// console.log(obj);

function copy(mainObj) { // эта функция создаст новый объект перебирая старые свойства
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key]; // из объекта скопируем свойства в новый объект по ключам
    }
    return objCopy;
}

const numbers = {
    a : 2,
    b : 5,
    c : {
        x : 7,
        y : 4 
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

newNumbers.c.x = 10; // при вложенности значения заменяются

// console.log(newNumbers);

// console.log(numbers);  // здесь мы склонировали объект при помощи функции copy()

/*это поверхностная копия обьекта, она создает обычные свойства которые были в родителе  
и создает независимые структуры, но если в свойствах есть объект или массив и тд. его клонирование будет ссылочным
нормально будут клонироваться свойства которые лежат на первом уровне вложенности*/

// метод Object.assign соединяет объекты

// добавляем новый объект 
const asd = {
    d : 17,
    e : 20
};

// выводим в консоль 
//console.log(Object.assign(numbers, asd)); // { a: 2, b: 5, c: { x: 10, y: 4 }, d: 17, e: 20 }

// создаем просто копию объекта через пустой объект

const clone = Object.assign({}, asd);

clone.d = 20;

// console.log(asd); // { d: 17, e: 20 }
// console.log(clone); // { d: 20, e: 20 }

// клонирование массивов

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); //Метод slice() возвращает новый массив, содержащий копию части исходного массива.

newArray[2] = 'cssasd';

console.log(oldArray);
console.log(newArray);

// оператор spread ...

const japan = ['honda', 'toyota', 'lexus'],
      germany = ['opel', 'bmw', 'mercedes'],
      carBrands = [...germany, ...japan, 'lifan', 'vaz'];

console.log(carBrands);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];

const q = {
    one : 1,
    two : 2
};

const newQ = {...q};

console.log(newQ);