const menu = (data) => {
    console.log('Available moves:');
    data.forEach((element, index) => {
        console.log(`${index + 1} -`, element);
    });

    console.log('0 - exit \n? - help');
};

module.exports = menu;
