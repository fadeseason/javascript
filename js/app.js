// if (4 == 9) {
//     console.log('ok!');
// } else {
//     console.log('error!');
// }

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Error!');
//         break;
//     case 100: 
//         console.log('Error!');
//         break;
//     case 50:
//         console.log('Done!');
//         break;
//     default:
//         console.log('Not today:(');
//         break;
// }

// const hamburger = 5;
// const fries = 6; 

// if (hamburger && fries) { // если хотя бы одна перменная true, код будет выполняться 
//     console.log('Я сыт!');
// } else {
//     console.log('Я голоден!');
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets ) {
//     console.log('Все сыты!');
// } else {
//     console.log('We leave(');
// }
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }
// "use strict";

// let num = 50;
// // while(num <= 55) {
// //     console.log(num);
// //     num++;
// // }

// do {
//     console.log(num);
//     num++;
// } while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break;
//     }
//     console.log(i);
// }


// for (let i = 0; i < 3; i++){
//     console.log(i);
//     for (let j = 0; j < 3; j++){
//         console.log(j);  
//     }
// }

// *
// **       задача на построение треугольника
// ***
// ****
// *****
// ******

// let result = '';
// const lenght = 7;

// for (let i = 0; i < lenght; i++){
    
//     for (let j = 0; j < i; j++){
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++){
//     console.log(`First level : ${i}`);
//     for (let j = 0; j < 3; j++){
//         console.log(`Second level : ${j}`);  
//         for (let k = 0; k < 3; k++){
//             if (k === 2) {
//             break first;
//             }
//             console.log(`Third level : ${k}`);  
//         }
//     }
// }