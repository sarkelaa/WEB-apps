var figlet = require('figlet');

const myFiglet = (msg) => {

    let dataNew;
    figlet(msg, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        dataNew = data;
    });
    return dataNew;
}

module.exports.myFiglet = myFiglet;