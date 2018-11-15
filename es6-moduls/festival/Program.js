function Program(date) {
    this.date = date;
    this.listOfMovies = [];
}

Program.prototype = {
    totalNumberOfMovies: function () {
        const total = this.listOfMovies.length;
        return total;
    },
    addMovie: function (movie) {
        this.listOfMovies.push(movie);
    },
    getData: function () {
        let lengthOfProgram = 0;
        let line = "";
        for (let i = 0; i < this.listOfMovies.length; i++) {
            const currentMovie = this.listOfMovies[i];
            lengthOfProgram += currentMovie.length;
            line += "\t\t" + currentMovie.getData() + "\n";
        }
        return "\t" + this.date.getDate() + "." + this.date.getMonth() + "." + this.date.getFullYear() + ", program duration " + lengthOfProgram + "min\n" + line;
    }
};

module.exports.Program = Program;