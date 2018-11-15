"use strict";
(function () {


    function Genre(name) {
        this.name = name;
    }
    Genre.prototype.getData = function () {
        var firstAndLastLetter = this.name[0] + this.name[this.name.length - 1];
        return firstAndLastLetter.toUpperCase();
    };
    // var action = new Genre("action");
    // var comedy = new Genre("comedy");
    // var drama = new Genre("drama");
    // var fantasy = new Genre("fantasy");
    // var horor = new Genre("horor");


    //// MOVIE CONSTRUCTOR 

    function Movie(title, genre, movieDuration) {
        this.title = title;
        this.genre = genre;
        this.movieDuration = movieDuration;
    }
    Movie.prototype.getData = function () {
        return (
            this.title + ", " + this.movieDuration + "min, " + this.genre.getData()
        );
    };

    function createMovie(title, genre, movieDuration) {
        var genreObject = new Genre(genre);
        return new Movie(title, genreObject, movieDuration);
    }

    var terminator = createMovie("Terminator", "action", 130);
    var homeAlone = createMovie("Home alone", "comedy", 120);
    var warZone = createMovie("War zone", "drama", 160);
    var avatar = createMovie("Avatar", "fantasy", 200);
    var dark = createMovie("Dark movie", "horor", 130);


    /// PROGRAM CONSTRUCTOR  

    function Program(date) {
        this.date = date;
        this.moviesList = [];
        this.numbersOfMovies = 0;
    }
    Program.prototype.addMovie = function (movie) {
        this.moviesList.push(movie);
        this.numbersOfMovies += 1;
    };
    Program.prototype.getData = function () {


        var date = this.date.split("-").reverse().join(".");
        var sumOfDuration = 0;
        var allMovieData = " ";
        for (var i = 0; i < this.moviesList.length; i++) {
            var movie = this.moviesList[i];
            sumOfDuration += movie.movieDuration;
            allMovieData += movie.getData() + "\n" + "\t " + "\t ";
        }
        return date + ", " + "program duration " + sumOfDuration + "min" + "\n" + "\t" + "\t" + allMovieData + "\n";
    }

    function createProgram(date) {
        return new Program(date);
    }

    var dayProgram = createProgram(new Date("2018-11-20").toLocaleDateString());
    var nigthProgram = createProgram(new Date("2018-11-27").toLocaleDateString());


    dayProgram.addMovie(terminator);
    dayProgram.addMovie(homeAlone);
    dayProgram.addMovie(dark);

    nigthProgram.addMovie(warZone);
    nigthProgram.addMovie(avatar);


    /////// FESTIVAL CONSTRUCTOR 
    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
    }
    Festival.prototype.addProgram = function (program) {
        this.listOfPrograms.push(program);
    };
    Festival.prototype.allProgramMovies = function () {
        var sum = 0;
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            var oneProgram = this.listOfPrograms[i];
            sum += oneProgram.numbersOfMovies;
        }
        return sum;
    };
    Festival.prototype.getData = function () {
        var oneProgram1;
        var oneProgramData = "";
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            oneProgram1 = this.listOfPrograms[i];
            oneProgramData += oneProgram1.getData();
        }

        return this.name + " has " + this.allProgramMovies() + " movie titles" + "\n" + oneProgramData;
    };

    var canFestival = new Festival("Can festival");
    var belgradeFestival = new Festival("Belgrade festival");
    belgradeFestival.addProgram(dayProgram);
    belgradeFestival.addProgram(nigthProgram);
    canFestival.addProgram(dayProgram);
    canFestival.addProgram(nigthProgram);

    // console.log(dayProgram.getData());
})();



function printAllAvailableMoviesInSelect(movies) {
    var selectMovie = document.querySelector("#movies");
    selectMovie.innerHTML = "";
    for (var i = 0; i < movies.length; i++) {
        selectMovie.innerHTML += "<option value='" + i + "'>" + movies[i].title + "</option>";
    }
}

function printAllAvailableProgramsInSelect(programs) {
    var selectProgram = document.querySelector("#programs");
    selectProgram.innerHTML = "";
    for (var i = 0; i < programs.length; i++) {
        selectProgram.innerHTML += "<option value='" + i + "'>" + programs[i].getData() + "</option>";
    }
}