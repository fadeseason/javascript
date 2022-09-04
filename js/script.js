'use strict';

const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDb.count = prompt('Сколько фильмов вы уже просмотрели?', '');

        while (personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
            personalMovieDb.count = prompt('Сколько фильмов вы уже просмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                b = +prompt('Насколько оцените его?', '');
            if (a != null && a != '' && b != null && b != '' && a.length < 50) {
                personalMovieDb.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    showMyDb: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDb);
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDb.count < 10) {
            console.log('Просмотрено мало фильмов');
        } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDb.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Error:(');
        }
    },
    toogleVisibleMyDB: function () {
        if (personalMovieDb.privat) {
            personalMovieDb.privat = false;
        } else {
            personalMovieDb.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером: ${i}`);
            if (genre === '' || genre == null){
                console.log("Введены не корректные данные, либо вообще ничего не введено");
                i--;
            } else {
                personalMovieDb.genres[i - 1] = genre;
            }
        }
        personalMovieDb.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }

};

personalMovieDb.start();

personalMovieDb.rememberMyFilms();

personalMovieDb.writeYourGenres();

personalMovieDb.detectPersonalLevel();

console.log(personalMovieDb);