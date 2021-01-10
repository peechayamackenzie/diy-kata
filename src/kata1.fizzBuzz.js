const fizzBuzz = number => {
  const isDividableBy3 = number % 3 === 0;
  const isDividableBy5 = number % 5 === 0;

if (isDividableBy3 && isDividableBy5) {
    return FizzBuzz
};

if (isDividableBy5) {
    return Buzz
};

if (isDividableBy3) {
    return Fizz
};

return number 
};

module.exports = fizzBuzz;
