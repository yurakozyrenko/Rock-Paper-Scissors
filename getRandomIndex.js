const getRandomIndex = (data) => {
    const randomIndex = Math.floor(Math.random() * data.length) + 1;
    return randomIndex;
};
module.exports = getRandomIndex;
