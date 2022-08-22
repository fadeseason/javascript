const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?','');

const personalMovieDb = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = +prompt('Насколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = +prompt('Насколько оцените его?', '');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);
