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
     if (a != null && a !='' && b != null && b !='' && a.length <50){
        personalMovieDb.movies[a] = b;
        console.log('done');  
        } else {
            console.log('error');
            i--;
        } 
}

if (personalMovieDb.count <10){
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDb.count >= 10 && personalMovieDb.count <30) {
    console.log('Вы классический зритель');
} else if (personalMovieDb.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Error:(');
}

console.log(personalMovieDb);