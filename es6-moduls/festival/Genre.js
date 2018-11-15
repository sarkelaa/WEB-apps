function Genre(name) {
    this.name = name;
}

Genre.prototype.getData = function () {
    const firstLetter = this.name[0];
    const lastLetter = this.name[this.name.length - 1];
    const formatedName = (firstLetter + lastLetter).toUpperCase();
    return formatedName;
}

module.exports.Genre = Genre;