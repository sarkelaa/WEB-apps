
const $title = $('#title');
const $length = $('#length');
const $genre = $('#genre');
const $date = $('#date');
const $movieSelect = $('#movie');
const $programSelect = $('#program');
const $forms = $('form');
const $exists = $('.exists');
const $dateError = $('.dateError');



export const getMovieFormValues = () => {

    try {

        if ($title.val() === "") {

            throw new Error("Title is required.");
        } else if ($length.val() === "") {

            throw new Error("Length is required.");
        } else if ($length.val() > 360) {

            throw new Error("Length needs to be less then 360 min.");
        } else if ($genre.val() === "-") {

            throw new Error("Genre is required.");
        }
        $forms.children('div').text("");

        return {
            title: $title.val(),
            length: $length.val(),
            genre: $genre.val(),
        };
    } catch (error) {

        $forms.children('div').text("");

        if (error.message === "Title is required.") {

            const $errorDisplay = $('.titleError');
            $errorDisplay.text(error.message);
        } else if (error.message === "Length is required.") {

            const $errorDisplay = $('.lengthError');
            $errorDisplay.text(error.message);
        } else if (error.message === "Length needs to be less then 360 min.") {

            const $errorDisplay = $('.lengthError');
            $errorDisplay.text(error.message);
        } else {

            const $errorDisplay = $('.genreError');
            $errorDisplay.text(error.message);
        }

        return false;
    }
}

export const printMovie = movieInstance => {

    $exists.text("");

    const $movieList = $('.moviePrint');
    const $listItem = $('<li>');

    $listItem.text(movieInstance.getData());
    $movieList.append($listItem);
}

export const createMovieOption = (movieInstance, id) => {

    const $option = $('<option>');

    $option.text(movieInstance.getData());
    $option.val(id - 1);
    $movieSelect.append($option);
}

export const resetForm = () => $forms.trigger('reset')

export const displayAddMovieError = () => $exists.text("Movie already exists")

export const getDateFormValues = () => {

    try {
        if ($date.val() === "") {

            throw new Error("Date is required.");
        }
        const dateObj = new Date($date.val());

        if (new Date() - dateObj > 864e5) {

            throw new Error("Date can't be in past.");
        }

        return dateObj;
    } catch (error) {

        $('.dateError').text(error.message);
        return false;
    }
}

export const printProgram = programInstance => {

    $dateError.text("");

    const $programList = $('.programPrint');
    const $listItem = $('<li>');

    $listItem.text(programInstance.getData());
    $programList.append($listItem);
}

export const createProgramOption = (programInstance, id) => {

    const $option = $('<option>');

    $option.text(programInstance.getData());
    $option.val(id - 1);
    $programSelect.append($option);
}

export const displayCreateProgramError = () => $dateError.text("Program already exists")

export const getAddMovieFormValues = () => {

    const selectedMovieId = $movieSelect.val();
    const selectedProgramId = $programSelect.val();

    try {

        if (selectedMovieId === "-") {

            throw new Error("Movie is required.");
        }
        if (selectedProgramId === "-") {

            throw new Error("Program is required.");
        }
        $forms.children('div').text("");

        return {
            selectedMovieId,
            selectedProgramId
        };
    } catch (error) {

        $forms.children('div').text("");

        if (error.message === "Movie is required.") {

            const $movieError = $('.movieError');
            $movieError.text(error.message);
        } else {

            const $programError = $('.programError');
            $programError.text(error.message);
        }

        return false;
    }
}

export const updateProgramDisplay = programInstance => {

    const optionToUpdate = $programSelect.val();
    const $allOptions = $programSelect.children();
    const $listItem = $('.programPrint').children().eq(parseInt(optionToUpdate - 1))

    $listItem.text(programInstance.getData())

    for (let i = 0; i < $allOptions.length; i++) {
        const $currentOption = $allOptions.eq(i);

        if ($currentOption.val() === optionToUpdate) {

            $currentOption.text(programInstance.getData());
        }
    }
}
