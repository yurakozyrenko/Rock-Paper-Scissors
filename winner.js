const constants = require('./constants.js');

const winner = (userChoiceIndex, randomIndex, data) => {

    const n = data.length;
    const p = (n - 1) / 2;
    const result = Math.sign(((userChoiceIndex - randomIndex + p + n) % n) - p);

    if (result === 0) {
        return constants.DRAW;
    }
    if (result > 0) {
        return constants.WIN;
    }
    if (result < 0) {
        return constants.LOSE;
    }
};

module.exports = winner;
