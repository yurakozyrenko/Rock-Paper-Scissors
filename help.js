const Table = require('ascii-table');
const constants = require('./constants.js');

const displayHelp = (data) => {
    const n = data.length;
    const p = (n - 1) / 2;
    const arr = [];
    for (let i = 0; i < n; i += 1) {
        const row = [];
        for (let j = 0; j < n; j += 1) {
            const element = Math.sign(((i - j + p + n) % n) - p);

            if (element === 0) {
                row.push(constants.DRAW);
            }
            if (element > 0) {
                row.push(constants.WIN);
            }
            if (element < 0) {
                row.push(constants.LOSE);
            }
        }
        arr.push(row);
    }

    const table = new Table(constants.GAME_INFORMATION);

    table.setHeading(
        'v PC \\ User >',
        ...Array.from({ length: arr.length }, (_, i) => data[i])
    );

    for (let j = 0; j < arr[0].length; j++) {
        const column = arr.map((row) => row[j]);
        table.addRow(data[j], ...column);
    }
    console.log(table.toString());
};

module.exports = displayHelp;
