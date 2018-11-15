class Program {
    constructor(date) {
        this.date = date;
        this.listOfMovies = [];
    }

    totalNumberOfMovies() {

        const total = this.listOfMovies.length;
        return total;
    }

    addMovie(movieInstance) {

        this.listOfMovies.push(movieInstance);
    }

    getData() {

        let lengthOfProgram = 0;

        for (let i = 0; i < this.listOfMovies.length; i++) {

            const currentMovie = this.listOfMovies[i];
            lengthOfProgram += parseInt(currentMovie.length);
        }

        return `    ${this.date.getDate()}.${this.date.getMonth() + 1}.${this.date.getFullYear()}. ${this.totalNumberOfMovies()} movie(s), program duration ${lengthOfProgram} min
    `;
    }
}

export default Program;