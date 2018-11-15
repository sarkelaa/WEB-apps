import Genre from "./entities/Genre.js";
import Movie from "./entities/Movie.js";
import Program from "./entities/Program.js";

const storage = {

    movies: [],
    programs: []
}

const createMovie = ({ title, genre, length }) => {

    const genreObject = new Genre(genre);

    return new Movie(title, genreObject, length);
};

const createProgram = dateObj => new Program(dateObj)

const addMovieToStorage = movieInstance => {

    const { title } = movieInstance;

    for (let i = 0; i < storage.movies.length; i++) {

        const currentMovie = storage.movies[i];

        if (title.trim() === currentMovie.title) {

            return false;
        }
    }

    return storage.movies.push(movieInstance);
};

const addProgramToStorage = (programInstance) => {

    for (let i = 0; i < storage.programs.length; i++) {

        const currentProgram = storage.programs[i];

        if (programInstance.date.getTime() === currentProgram.date.getTime()) {

            return false;
        }
    }

    return storage.programs.push(programInstance);
};

const findSelectedMovie = id => {

    const selectedMovie = storage.movies[id];

    return selectedMovie;
};

const findSelectedProgram = (id) => {

    const selectedProgram = storage.programs[id];

    return selectedProgram;
}

export {
    createMovie,
    createProgram,
    addMovieToStorage,
    addProgramToStorage,
    findSelectedMovie,
    findSelectedProgram
}