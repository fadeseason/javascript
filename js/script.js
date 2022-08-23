const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?','');

const personalMovieDb = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = +prompt('Насколько оцените его?', '');
    personalMovieDb.movies[a] = b;
}

console.log(personalMovieDb);