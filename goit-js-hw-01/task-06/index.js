let input;
let total = 0;

// eslint-disable-next-line no-constant-condition
while (true) {
  input = prompt('Введите число');

  if (input === null) break;

  if (Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += Number(input);
  }
}

alert(`Общая сумма чисел равна ${total}`);
