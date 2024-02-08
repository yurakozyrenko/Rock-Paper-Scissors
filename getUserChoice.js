const question = require('./choice.js');
const displayHelp = require('./help');
const constants = require('./constants.js');

const getUserChoiceIndex = async (rl, data) => {
    let userChoiceIndex;
    let userChoice;

    while (true) {
        userChoiceIndex = await question(rl);

        if (userChoiceIndex === constants.EXIT_OPTION) {
            console.log(`${constants.GOODBYE_MESSAGE}`);
            return { userChoice: null, userChoiceIndex: null };
        }

        if (userChoiceIndex === constants.HELP_OPTION) {
            displayHelp(data);
            continue;
        }

        userChoice = data[userChoiceIndex - 1];

        if (userChoice) {
            break;
        }

        console.log(constants.INVALID_INPUT_MESSAGE);
    }

    return { userChoice, userChoiceIndex };
};

module.exports = getUserChoiceIndex;
