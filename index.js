const readline = require('readline');
const menu = require('./menu.js');
const getHMAC = require('./getHMAC.js');
const generateKey = require('./generateKey.js');
const DataValidator = require('./validation.js');
const playGame = require('./playGame.js');
const getUserChoice = require('./getUserChoice.js');
const getIndex = require('./getRandomIndex');
const constants = require('./constants.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const main = async (data) => {
    try {
        if (!DataValidator.areAllElementsUnique(data)) {
            throw new Error('All moves must be distinct.');
        }

        if (!DataValidator.isValidLength(data, constants.MINIMUM_LINES)) {
            throw new Error(
                `You must pass a number of >= ${constants.MINIMUM_LINES} lines`
            );
        }

        if (!DataValidator.isOddNumber(data)) {
            throw new Error('Please enter odd move number.');
        }

        const key = generateKey();
        const randomIndex = getIndex(data);
        const computerChoice = data[randomIndex - 1];
        const hmacValue = getHMAC(key, computerChoice);
        console.log(`HMAC: ${hmacValue}`);
        menu(data);
        const { userChoice, userChoiceIndex } = await getUserChoice(rl, data);
        if (userChoice === null && userChoiceIndex === null) {
            return; // exit
        }

        playGame(
            userChoiceIndex,
            userChoice,
            randomIndex,
            computerChoice,
            data
        );

        console.log(`HMAC key: ${key.toString('hex')}`);
    } catch (error) {
        console.log(error.message);
    } finally {
        rl.close();
    }
};

main(constants.DATA);
