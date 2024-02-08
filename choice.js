const question = async (rl) => {
    const result = await new Promise((userChoice) => {
        rl.question('Enter your move: ', userChoice);
    });

    return result;
};
module.exports = question;
