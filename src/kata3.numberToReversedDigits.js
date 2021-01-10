const numberToReversedDigits = number => {
    const rawnumber = number.toString().split([]).reverse();
    return rawnumber.map(a => parseInt(a))
};

module.exports = numberToReversedDigits;
