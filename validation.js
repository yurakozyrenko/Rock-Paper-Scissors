class DataValidator {
    static areAllElementsUnique(data) {
        const uniqueSet = new Set(data);
        return uniqueSet.size === data.length;
    }

    static isValidLength(data, minLength) {
        return data.length >= minLength;
    }

    static isOddNumber(data) {
        return data.length % 2 !== 0;
    }
}

module.exports = DataValidator;
