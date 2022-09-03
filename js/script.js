// 'use strict';

// let numberOfFilms;

// function start() {
//     numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?','');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?','');

//     }
// }

// start();

// const personalMovieDb = {
//     count : numberOfFilms,
//     movies : {},
//     actors : {},
//     genres : [],
//     privat : false
// };


// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++){
//         const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//             b = +prompt('Насколько оцените его?', '');
//          if (a != null && a !='' && b != null && b !='' && a.length <50){
//             personalMovieDb.movies[a] = b;
//             console.log('done');  
//             } else {
//                 console.log('error');
//                 i--;
//             } 
//     }
// }

// rememberMyFilms();

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDb.genres[i - 1] = prompt (`Ваш любимый жанр под номером: ${i}`);
//     }
// }

// writeYourGenres();

// function detectPersonalLevel() {
//     if (personalMovieDb.count <10){
//         console.log('Просмотрено мало фильмов');
//     } else if (personalMovieDb.count >= 10 && personalMovieDb.count <30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDb.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Error:(');
//     }
// }

// detectPersonalLevel();

// function showMyDb(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDb);
//     }
// }

// showMyDb(personalMovieDb.privat);