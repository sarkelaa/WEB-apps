function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
}

Festival.prototype = {
    totalMoviesInFestival: function () {
        let total = 0;
        for (let i = 0; i < this.listOfPrograms.length; i++) {
            const currentProgramLength = this.listOfPrograms[i].totalNumberOfMovies();
            total += currentProgramLength;
        }
        return total;
    },
    addProgram: function (program) {
        this.listOfPrograms.push(program);
    },
    getData: function () {
        let programPrint = "";
        for (let i = 0; i < this.listOfPrograms.length; i++) {
            const currentProgram = this.listOfPrograms[i];
            programPrint += currentProgram.getData();
        }
        return this.name + " has " + this.totalMoviesInFestival() + " movie titles\n" + programPrint;
    }
};

module.exports.Festival = Festival;