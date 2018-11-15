const controllerModule = (function (data, ui) {

    const setupEventListeners = () => {


        console.log("Event listeners set");
    }

    return {
        init: () => {

            console.log("App initialized");
            setupEventListeners();
        }
    }
})(dataModule, uiModule);