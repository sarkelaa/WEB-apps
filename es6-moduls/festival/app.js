(function () {
    'use strict';
    
    const {Genre} = require ('./Genre.js');
    const {Movie} = require ('./Movie.js');
    const {Program} = require ('./Program.js');
    const {Festival} = require ('./Festival.js');

    function createMovie(title, genre, length) {
        const genreObject = new Genre(genre);
        return new Movie(title, genreObject, length);
    }

    function createProgram(date) {
        return new Program(date);
    }

    const movieFestival = new Festival("Oscar");

    const date1 = new Date("Oct 29 2018");
    const date2 = new Date("Oct 30 2018");

    const day1Program = createProgram(date1);
    const day2Program = createProgram(date2);

    const movie1 = createMovie("Bruce Almighty", "Comedy", 120);
    const movie2 = createMovie("Insomnia", "Thriller", 150);
    const movie3 = createMovie("Green Mile", "Drama", 130);
    const movie4 = createMovie("Dead Pool", "Action", 160);

    day1Program.addMovie(movie1);
    day1Program.addMovie(movie2);
    day1Program.addMovie(movie3);
    day1Program.addMovie(movie4);

    day2Program.addMovie(movie1);
    day2Program.addMovie(movie2);
    day2Program.addMovie(movie3);
    day2Program.addMovie(movie4);

    movieFestival.addProgram(day1Program);
    movieFestival.addProgram(day2Program);

    console.log(movieFestival.getData());

})();