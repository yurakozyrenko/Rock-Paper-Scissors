const crypto = require('crypto');

const generateKey = () => {
    return crypto.randomBytes(32);
};

module.exports = generateKey;
