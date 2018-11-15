function Exam(subjectInstance, studentInstance, grade) {
    this.subject = subjectInstance;
    this.student = studentInstance;
    this.grade = grade;
}

Exam.prototype.getExamInfo = function () {

    return `${this.subject.getSubjectName()} - ${this.student.getStudentData()}`;
};
Exam.prototype.hasPassed = function () {

    if (this.grade > 5) {

        return true;
    }

    return false;
};

export default Exam;