var createMovieButton = document.querySelector("#submitButton");
var programButton = document.querySelector("#programButton");
var movieToProgramButton = document.querySelector("#movieToProgramButton");


var $title = document.querySelector("#title");
var $duration = document.querySelector("#movieDuration");
var $selectedGenre = document.querySelector("#dropDown");

var $moviesOverview = document.querySelector("#addedMovie");
var $programsOverview = document.querySelector("#programList");
var $errorMessage = document.querySelector(".errorMessage");
var $errorDate = document.querySelector(".errorDateMessage");

var movies = [];
var programs = [];

function printList(items, $list) {
    $list.innerHTML = '';
    for (var i = 0; i < items.length; i++) {
        $list.innerHTML += "<li>" + items[i].getData() + "</li>" + "\n";
    }
}

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
        selectProgram.innerHTML += "<option value='" + i + "'>" + programs[i].dateString() + "</option>";
    }
}


createMovieButton.addEventListener('click', function () {
    if ($title.value === "") {
        $errorMessage.innerHTML = "input movie title";
        return;
    }
    if ($duration.value === "") {
        $errorMessage.innerHTML = "input movie duration";
        return;
    }
    if ($duration.value > 300) {
        $errorMessage.innerHTML = "movies length is to large";
        return;
    }
    if ($selectedGenre.value === "") {
        $errorMessage.innerHTML = "select movie genre";
        return;
    }

    for (var i = 0; i < movies.length; i++) {
        if ($title.value.trim() == movies[i].title) {
            $errorMessage.innerHTML = "movie already created";
            return;
        }
    }


    $errorMessage.innerHTML = "";

    var genre = new Genre($selectedGenre.value);
    var movie = new Movie($title.value, genre, $duration.value);
    movies.push(movie);

    printList(movies, $moviesOverview);
    printAllAvailableMoviesInSelect(movies);
});

programButton.addEventListener('click', function () {
    var inputDate = document.querySelector("#inputDate").value;

    if (inputDate === "") {
        $errorDate.innerHTML = "date is required";
        return;
    }
    var newDate = new Date();
    if (new Date(inputDate) < newDate) {

        $errorDate.innerHTML = "date is in the past";
        return;
    }


    $errorDate.innerHTML = "";


    var program = new Program(inputDate);
    programs.push(program);

    printAllAvailableProgramsInSelect(programs);
});



movieToProgramButton.addEventListener('click', function () {
    var $selectMovie = document.querySelector("#movies");
    var $selectProgram = document.querySelector("#programs");

    var movie = movies[$selectMovie.value];
    var program = programs[$selectProgram.value];

    program.addMovie(movie);
    printList(programs, $programsOverview);


});

console.log(movies.title);