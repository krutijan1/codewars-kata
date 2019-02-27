/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function (str) {
    const s = str.trim();

    if (!s || s.length === 0 || s === '+' || s === '-') {
        return 0;
    }

    const numberPattern = /^[-+]?\d+/;
    const match = s.match(numberPattern);

    if (!match || match.length === 0) {
        return 0;
    }

    const number = new Number(match[0]);

    const MIN_NEGATIVE = -2147483648;
    const MAX_POSITIVE = 2147483647;

    if (number <= MIN_NEGATIVE) {
        return MIN_NEGATIVE;
    }

    if (number >= MAX_POSITIVE) {
        return MAX_POSITIVE;
    }

    return number;
};
