import * as ui from "./ui.js";
import * as data from "./data.js";

const setupEventListeners = () => {

    const $createMovieButton = $('#createMovie');
    const $createProgramButton = $("#createProgram");
    const $addMovieButton = $("#addMovie");

    $createMovieButton.on('click', createMovieHandler);
    $createProgramButton.on('click', createProgramHandler);
    $addMovieButton.on('click', addMovieHandler);
    console.log("EVENT LISTENERS SET");

}

const createMovieHandler = () => {

    const movieObj = ui.getMovieFormValues();

    if (!movieObj) {

        return;
    }
    const movieInstance = data.createMovie(movieObj);
    const storageId = data.addMovieToStorage(movieInstance);

    if (storageId) {

        ui.createMovieOption(movieInstance, storageId);
        ui.printMovie(movieInstance);
    } else {

        ui.displayAddMovieError();
    }

    ui.resetForm();


};

const createProgramHandler = () => {

    const dateObj = ui.getDateFormValues();

    if (!dateObj) {

        return;
    }
    const programInstance = data.createProgram(dateObj);
    const storageId = data.addProgramToStorage(programInstance);

    if (storageId) {

        ui.createProgramOption(programInstance, storageId);
        ui.printProgram(programInstance);
    } else {

        ui.displayCreateProgramError();
    }

    ui.resetForm();

};

const addMovieHandler = () => {

    const addMovieObj = ui.getAddMovieFormValues();

    if (!addMovieObj) {

        return;
    }
    const selectedMovieInstance = data.findSelectedMovie(addMovieObj.selectedMovieId);
    const selectedProgramInstance = data.findSelectedProgram(addMovieObj.selectedProgramId);

    selectedProgramInstance.addMovie(selectedMovieInstance);
    ui.updateProgramDisplay(selectedProgramInstance);
    ui.resetForm();

}

const init = () => {

    console.log("APP INITIALIZED");
    setupEventListeners();
};

export {
    init
}
