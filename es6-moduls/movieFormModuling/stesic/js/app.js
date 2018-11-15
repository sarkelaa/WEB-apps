var dataModule = (function () {

    var db = {
        movies: [],
        programs: []
    }

    function Genre(name) {
        this.name = name;
    }

    Genre.prototype.getData = function () {
        var firstAndLastLetter = this.name[0] + this.name[this.name.length - 1];
        return firstAndLastLetter.toUpperCase();
    };

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
        this.listOfMovies = [];
    }

    Program.prototype.dateString = function () {
        return this.date.split("-").reverse().join(".");
    };

    Program.prototype.getData = function () {
        var date = this.date.split("-").reverse().join(".");

        if (!db.programs.length) {
            return date;
        }

        var sumOfDuration = 0;
        for (var i = 0; i < db.programs.length; i++) {
            var movie = db.programs[i];
            sumOfDuration += parseInt(movie.movieDuration);
        }

        return date + ", " + db.programs.length + " movies , duration " + sumOfDuration + "min";
    };



    function createMovie(title, genre, movieDuration) {
        var genreObj = new Genre(genre);
        return new Movie(title, genreObj, movieDuration);
    }


    function addMovieToDb(movie) {
        return db.movies.push(movie);
    }

    function createProgram(date) {
        return new Program(date);
    }

    function addProgramToDb(program) {
        return db.programs.push(program);
    }

    function findSelectedMovie(movieId) {
        return db.movies[movieId];
    }

    function findSelectedProgram(programId) {
        return db.programs[programId];
    }


    function addMovieToProgram(movieId, programId) {
        var selectedProgram = findSelectedProgram(programId);
        var selectedMovie = findSelectedMovie(movieId);
        console.log(selectedProgram);

        selectedProgram.listOfMovies.push(selectedMovie);
    }

    return {
        createMovie: createMovie,
        addMovieToDb: addMovieToDb,
        createProgram: createProgram,
        addProgramToDb: addProgramToDb,
        addMovieToProgram: addMovieToProgram
    }


})();



var uiModule = (function () {

    var $title = document.querySelector("#title");
    var $duration = document.querySelector("#movieDuration");
    var $selectedGenre = document.querySelector("#dropDown");
    var $selectMovie = document.querySelector("#movies");
    var $selectProgram = document.querySelector("#programs");
    var $inputDate = document.querySelector("#inputDate");
    var $programsOverview = document.querySelector("#programList");


    function collectedFormValues() {
        return {
            title: $title.value,
            duration: $duration.value,
            selectedGenre: $selectedGenre.value,
            date: $inputDate.value,
            selectedMovie: $selectMovie.value,
            selectedProgram: $selectProgram.value
        }
    }

    function printMovies(movie) {
        var $moviesOverview = document.querySelector("#addedMovie");
        var li = document.createElement("li");
        li.textContent = movie.getData();
        $moviesOverview.appendChild(li);
    }

    function createMovieOption(movieInstance, id) {
        var $option = document.createElement("option");
        $option.textContent = movieInstance.getData();
        $option.value = id;
        $selectMovie.appendChild($option);
    }

    function createProgramOption(programInstance, id) {
        var $option = document.createElement("option");
        $option.textContent = programInstance.getData();
        $option.value = id;
        $selectProgram.appendChild($option);
    }

    function printProgram(programInstance) {
        var $listItem = document.createElement("li");
        $listItem.textContent = programInstance.getData();
        $programsOverview.appendChild($listItem);
    }

    function displayError(message) {
        var $errorMessage = document.querySelector(".errorMessage");
        $errorMessage.textContent = message;
    }

    function resetMovieForm() {
        $title.value = "";
        $duration.value = "";
        $selectedGenre.value = "-";
    }

    function resetProgramForm() {
        $inputDate.value = "";
    }



    return {
        formValues: collectedFormValues,
        printMovies: printMovies,
        createMovieOption: createMovieOption,
        createProgramOption: createProgramOption,
        printProgram: printProgram,
        displayError: displayError,
        resetMovieForm: resetMovieForm,
        resetProgramForm: resetProgramForm

    }

})();



var controller = (function (ui, data) {


    function setupEventListeners() {
        var $createMovieButton = document.querySelector("#submitButton");
        var $createProgramButton = document.querySelector("#programButton");
        var $addMovieToProgram = document.querySelector("#movieToProgramButton");

        $createMovieButton.addEventListener('click', onCreateMovieHandler);
        $createProgramButton.addEventListener('click', onCreateProgramHandler);
        $addMovieToProgram.addEventListener('click', onAddMovieToProgramHandler);
    }

    function onCreateMovieHandler() {

        var movieObj = ui.formValues();
        var movieInstance = data.createMovie(movieObj.title, movieObj.selectedGenre, movieObj.duration);
        var movieId = data.addMovieToDb(movieInstance) - 1;
        ui.printMovies(movieInstance);
        ui.resetMovieForm();
        ui.createMovieOption(movieInstance, movieId);
    }

    function onCreateProgramHandler() {
        var date = ui.formValues().date;
        var programInstance = data.createProgram(date);
        var programId = data.addProgramToDb(programInstance) - 1;
        ui.printProgram(programInstance);
        ui.resetProgramForm();
        ui.createProgramOption(programInstance, programId);
    }

    function onAddMovieToProgramHandler() {
        var movieId = ui.formValues.selectedMovie;
        var programId = ui.formValues.selectedProgram;
        data.addMovieToProgram(movieId, programId);
    }

    function init() {
        setupEventListeners();
        console.log("App initialized!");
    }

    return {
        init: init
    }

})(uiModule, dataModule);