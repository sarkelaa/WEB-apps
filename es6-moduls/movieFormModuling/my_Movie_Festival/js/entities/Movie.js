class Movie {

    constructor(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }

    getData() {
        return `${this.title},  ${this.length}, ${this.genre.getData()}`;
    }
}

export default Movie;