// console.log("Hello from form");

var createMovieButton = document.querySelector("#createMovie");
var createProgramButton = document.getElementById("createProgram");
var addMovieButton = document.getElementById("addMovie");
var listOfCreatedMovies = [];
var listOfCreatedPrograms = [];



function createMovie(title, genre, length) {
    var genreObject = new Genre(genre);
    return new Movie(title, genreObject, length);
}

function createProgram(date) {
    return new Program(date);
}

function moviePrint(movieObj) {
    var movieList = document.querySelector(".moviePrint");
    var listItem = document.createElement("li");

    listItem.textContent = movieObj.getData();
    movieList.appendChild(listItem);
}

function programPrint(programObj) {
    var programPrint = document.querySelector(".programPrint");

    programPrint.textContent = programObj.getData();
}


createMovieButton.onclick = function () {
    var titleInput = document.getElementById("title").value;
    var lengthInput = document.getElementById("length").value;
    var genreInput = document.querySelector("select").value;
    var selectMovie = document.getElementById("movie");
    var option = document.createElement("option");

    var movie = createMovie(titleInput, genreInput, lengthInput);
    listOfCreatedMovies.push(movie);

    option.textContent = movie.getData();
    option.value = listOfCreatedMovies.length - 1;
    selectMovie.appendChild(option);
    moviePrint(movie);

    document.querySelector("form:first-of-type").reset();
};

createProgramButton.onclick = function () {
    var date = new Date(document.getElementById("date").value);
    var selectProgram = document.getElementById("program");
    var option = document.createElement("option");

    var program = createProgram(date);
    listOfCreatedPrograms.push(program);

    option.textContent = program.getData();
    option.value = listOfCreatedPrograms.length - 1;
    selectProgram.appendChild(option);

    programPrint(program);

    document.querySelector("form:last-of-type").reset();
};

addMovieButton.onclick = function () {
    var movieIndex = document.getElementById("movie").value;
    var selectedMovie = listOfCreatedMovies[movieIndex];
    var programIndex = document.getElementById("program").value;
    var selectedProgram = listOfCreatedPrograms[programIndex];


    selectedProgram.addMovie(selectedMovie);

    programPrint(selectedProgram);
    document.querySelector("form:last-of-type").reset();
}

