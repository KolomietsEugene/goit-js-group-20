let total = 0;

const makeArray = function() {
  const numbers = [];
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const input = prompt('Введите число');
    if (input === null) {
      return numbers;
    }
    if (!Number(input)) {
      alert('Было введено не число, попробуйте еще раз');
      // eslint-disable-next-line no-continue
      continue;
    }
    numbers.push(Number(input));
  }
};

const getTotalFromArray = function(arr = []) {
  return arr.reduce((acc, currValue) => acc + currValue, 0);
};

total = getTotalFromArray(makeArray());

console.log(total);
