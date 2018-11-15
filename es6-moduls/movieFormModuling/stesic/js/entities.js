function Genre(name) {
    this.name = name;
}
Genre.prototype.getData = function () {
    var firstAndLastLetter = this.name[0] + this.name[this.name.length - 1];
    return firstAndLastLetter.toUpperCase();
};
var action = new Genre("action");
function Movie(title, genre, movieDuration) {
    this.title = title;
    this.genre = genre;
    this.movieDuration = movieDuration;
}

Movie.prototype.getData = function () {

    return this.title + ", " + this.movieDuration + "min, " + this.genre.getData();
};


function Program(date) {
    this.date = date;
    this.moviesList = [];
}

Program.prototype.addMovie = function (movie) {
    this.moviesList.push(movie);
};
Program.prototype.dateString = function () {
    return this.date.split("-").reverse().join(".");
}

Program.prototype.getData = function () {
    var date = this.date.split("-").reverse().join(".");

    if (!this.moviesList.length) {
        return date;
    }

    var sumOfDuration = 0;
    for (var i = 0; i < this.moviesList.length; i++) {
        var movie = this.moviesList[i];
        sumOfDuration += parseInt(movie.movieDuration);
    }

    return date + ", " + this.moviesList.length + " movies , duration " + sumOfDuration + "min";
}