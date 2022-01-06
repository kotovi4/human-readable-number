module.exports = function toReadable (number) {
    var numberToWords = require('number-to-words');
    return numberToWords.toWords(number).replace(/-/g, ' ');
}
