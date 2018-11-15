import Subject from "./entities/Subject.js";
import Student from "./entities/Student.js";
import Exam from "./entities/Exam.js";

const storage = {

    passedStudents: [],
    failedStudents: []
};


const createExam = ({
    subject,
    name,
    surname,
    grade
}) => {
    const subjectInstance = new Subject(subject);
    const studentInstance = new Student(name, surname);

    return new Exam(subjectInstance, studentInstance, grade);
};

const addStudentToStorage = (examInstance) => {

    if (examInstance.hasPassed()) {
        storage.passedStudents.push(examInstance);
    } else {
        storage.failedStudents.push(examInstance);
    }
};

const totalNumberOfStudents = () => {

    const failedStudents = storage.failedStudents.length;
    const passedStudents = storage.passedStudents.length;

    return failedStudents + passedStudents;
};

const percentageOfFailedStudents = () => {

    const failedStudents = storage.failedStudents.length;
    const total = this.totalNumberOfStudents();

    return Number.parseFloat((failedStudents * 100) / total).toFixed(0);
};



export {
    createExam,
    addStudentToStorage,
    totalNumberOfStudents,
    percentageOfFailedStudents
}