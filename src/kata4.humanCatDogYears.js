const humanCatDogYears = number => {
    const Human = number;
    const Cat = (15 + 9 + ((number - 2) * 4));
    const Dog = (15 + 9 + ((number - 2) * 5));
    if (number ===1){
        return [1, 15, 15];
    };
    if (number ===2){
        return [2, 24, 24];
    };
     return [Human, Cat, Dog];
};

module.exports = humanCatDogYears;
