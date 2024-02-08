const winner = require('./winner.js');

const playGame = (
    userChoiceIndex,
    userChoice,
    randomIndex,
    computerChoice,
    data
) => {
    console.log(`Your choice: ${userChoice}`);
    console.log(`Computer move: ${computerChoice}`);

    const result = winner(userChoiceIndex, randomIndex, data);
    console.log(result);
};

module.exports = playGame;
