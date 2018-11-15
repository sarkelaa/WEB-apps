const controllerModule = (function (data, ui) {

    function setupEventListeners() {

        const $addButton = document.querySelector('#add');
        const $deleteButton = document.querySelector('.delete');

        $addButton.addEventListener("click", onAddHandler);
        $deleteButton.addEventListener("click", )

    }

    function onAddHandler() {

        const validationObj = ui.validation();

        if (!validationObj.isValid) {

            ui.displayMessage(validationObj.message);
        }

        ui.displaMessage(validationObj.message);
        const dataObj = ui.getFormValues();
        const examInstance = data.createExam(dataObj);
        let percentageValue;
        let total;

        ui.addStudentToList(examInstance);
        data.addStudentToStorage(examInstance);
        percentageValue = data.percentageOfFailedStudents();
        total = data.totalNumberOfStudents();
        ui.addingstatisticsPrint(examInstance, total);
        ui.updatePercentageStatistics(percentageValue);
        ui.resetForm();
    }

    function odDelteHandler(event){
        const target = event.target;

        if (target === ) {
            
        }

    } 

    return {

        init() {

            console.log("App started");
            setupEventListeners();
        }
    }
})(dataModule, uiModule);