const crypto = require('crypto');

const getHMAC = (key, move) => {
    const hmac = crypto.createHmac('sha3-256', key);
    hmac.update(move);
    return hmac.digest('hex');
};

module.exports = getHMAC;
