

function Genre(name) {
    this.name = name;
}

Genre.prototype.getData = function () {
    var firstLetter = this.name[0];
    var lastLetter = this.name[this.name.length - 1];
    var formatedName = (firstLetter + lastLetter).toUpperCase();
    return formatedName;
}



function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
}

Movie.prototype.getData = function () {
    return this.title + ", " + this.length + ", " + this.genre.getData();
};



function Program(date) {
    this.date = date;
    this.listOfMovies = [];
}

Program.prototype = {
    totalNumberOfMovies: function () {
        var total = this.listOfMovies.length;
        return total;
    },
    addMovie: function (movie) {
        this.listOfMovies.push(movie);
    },
    getData: function () {
        var lengthOfProgram = 0;
        for (var i = 0; i < this.listOfMovies.length; i++) {
            var currentMovie = this.listOfMovies[i];
            lengthOfProgram += parseInt(currentMovie.length);
        }
        return "\t" + this.date.getDate() + "." + this.date.getMonth() + "." + this.date.getFullYear() + ". " + this.totalNumberOfMovies() + " movie(s)" + ", program duration " + lengthOfProgram + " min\n";
    }
}



//---------TEST------------

// function createMovie(title, genre, length) {
//     var genreObject = new Genre(genre);
//     return new Movie(title, genreObject, length);
// }

// function createProgram(date) {
//     return new Program(date);
// }

// var date1 = new Date("Oct 29 2018");
// var date2 = new Date("Oct 30 2018");

// var day1Program = createProgram(date1);
// var day2Program = createProgram(date2);

// var movie1 = createMovie("Bruce Almighty", "Comedy", 120);
// var movie2 = createMovie("Insomnia", "Thriller", 150);
// var movie3 = createMovie("Green Mile", "Drama", 130);
// var movie4 = createMovie("Dead Pool", "Action", 160);

// day1Program.addMovie(movie1);
// day1Program.addMovie(movie2);
// day1Program.addMovie(movie3);
// day1Program.addMovie(movie4);

// console.log(day1Program.getData());
