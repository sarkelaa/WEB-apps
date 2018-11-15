
function getFormValues() {
    const $subjectSelect = document.querySelector('#subject');
    const $student = document.querySelector('#student');
    const $gradeSelect = document.querySelector('#grade');

    const studentData = $student.value.toLowerCase().split(' ');

    return {

        subject: $subjectSelect.value,
        name: studentData[0],
        surname: studentData[1],
        grade: $gradeSelect.value
    }
}

function validation() {
    try {

        if ($subjectSelect.value === "-") {

            throw new Error("Select subject");
        }
        if ($student.value === "") {

            throw new Error("Enter student name");
        }
        if ($gradeSelect.value === "") {

            throw new Error("Select grade");
        }

        return {
            message: "Data validation successful!",
            isValid: true
        }
    } catch (error) {

        return {
            message: error.message,
            isValid: false
        }
    }
}

function createDeleteButton() {
    const $deleteButton = document.createElement('span');

    $deleteButton.textContent = "X";
    $deleteButton.setAttribute("class", "delete");

    return $deleteButton;
}

function addStudentToList(examInstance) {
    const $passedList = document.querySelector('.passedList');
    const $failedList = document.querySelector('.failedList');

    const $listItem = document.createElement('li');
    const $deleteButton = createDeleteButton();

    $listItem.textContent = examInstance.getExamInfo();
    $listItem.appendChild($deleteButton);

    if (examInstance.hasPassed()) {
        $passedList.appendChild($listItem);
    } else {
        $failedList.appendChild($listItem);
    }
}

function addingStatisticsPrint(examInstance, total) {
    const $totalDisplay = document.querySelector('.total');

    $totalDisplay.textContent = total;

    if (examInstance.hasPassed()) {
        const $passedDisplay = document.querySelector('.passed');
        let passedValue = parseInt($passedDisplay.textContent);

        $passedDisplay.textContent = ++passedValue;
    } else {
        const $failedDisplay = document.querySelector('.failed');
        let failedValue = parseInt($failedDisplay.textContent);

        $failedDisplay.textContent = ++failedValue;
    }
}

function deletingFailedStudent(total, target) {
    const $totalDisplay = document.querySelector('.total');

    $totalDisplay.textContent = total;

    const $failedDisplay = document.querySelector('.failed');
    let failedValue = parseInt($failedDisplay.textContent);

    $failedDisplay.textContent = --failedValue;

    document.querySelector(target).parentElement().remove();
}

function deletingPassedStudent(total, target) {
    const $totalDisplay = document.querySelector('.total');

    $totalDisplay.textContent = total;

    const $passedDisplay = document.querySelector('.passed');
    let passedValue = parseInt($passedDisplay.textContent);

    $passedDisplay.textContent = --passedValue;

    document.querySelector(target).parentElement().remove();
}

function updatePercentageStatistics(value) {

    const $failedPercentageDisplay = document.querySelector('.failedPercentage');
    const $passedPercentageDisplay = document.querySelector('.passedPercentage');

    $failedPercentageDisplay.textContent = `${value}%`;
    $passedPercentageDisplay.textContent = `${100 - value}%`;
}

function displayMessage(message){
    const $messageDisplay = document.querySelector('.errorMessage');
    $messageDisplay.textContent = message;
}

function resetForm() {

    $form = document.querySelector('form');
    $form.reset();
    // document.querySelector('.errorMessage').textContent = "";
}

export {
    getFormValues,
    validation,
    addStudentToList,
    printStatistics,
    updatePercentageStatistics,
    resetForm,
    addingStatisticsPrint,
    deletingFailedStudent,
    deletingPassedStudent,
    displayMessage
}