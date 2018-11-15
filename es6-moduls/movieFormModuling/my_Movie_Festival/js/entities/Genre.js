class Genre {

    constructor(name) {
        this.name = name;
    }

    getData() {

        const firstLetter = this.name[0];
        const lastLetter = this.name[this.name.length - 1];
        const formatedName = (`${firstLetter}${lastLetter}`).toUpperCase();

        return formatedName;
    }
}

export default Genre;