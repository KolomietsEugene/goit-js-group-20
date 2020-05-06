let total = 0;

const makeArray = function() {
  const numbers = [];
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const input = prompt('Введите число');
    if (input === null) {
      return numbers;
    }
    //  fixed
    const number = Number(input);
    console.log(typeof number);
    if (Number.isNaN(number)) {
      alert('Было введено не число, попробуйте еще раз');
      // eslint-disable-next-line no-continue
      continue;
    }
    numbers.push(number);
  }
};

const getTotalFromArray = function(arr = []) {
  return arr.reduce((acc, currValue) => acc + currValue, 0);
};

total = getTotalFromArray(makeArray());

console.log(total);
