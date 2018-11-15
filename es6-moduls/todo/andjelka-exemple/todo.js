function Task(description, isCompleted, deadline) {
    this.description = description;
    this.isCompleted = isCompleted;
    this.deadline = deadline;

    this.changeCompletedStatus = function () {
        this.isCompleted = !this.isCompleted;
    };

    this.changeDescription = function (newDescription) {
        this.description = newDescription;
    };
    this.extendDeadline = function (newDeadline) {
        this.deadline = newDeadline;
    };
}

var learnJS = new Task('JS is easy!', false, new Date('2018-12-31'));
learnJS.changeCompletedStatus();
learnJS.changeDescription('JS is super easy!');
learnJS.extendDeadline(new Date('2018-11-01'));
// console.log(learnJS);

var buyEggs = new Task('Buy eggs!', false, new Date('2018-10-31'));

function ToDoList(name) {
    this.name = name;
    this.tasks = []; // array of Task

    this.addTask = function (task) {
        this.tasks.push(task);
    };

    this.deleteTask = function (taskIndex) {
        this.tasks.splice(taskIndex, 1);
    };

    this.deleteToDoList = function () {
        this.tasks.length = 0; // or = [];
    };
}

var ourList = new ToDoList('Our ToDo List');
ourList.addTask(learnJS);
ourList.addTask(buyEggs);
ourList.deleteTask(1);

ourList.deleteToDoList();

console.log(ourList);