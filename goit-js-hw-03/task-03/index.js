const findBestEmployee = function(employees) {
  let bestEmployer = Object.keys(employees)[0];
  // eslint-disable-next-line no-restricted-syntax
  for (const key in employees) {
    if (employees[bestEmployer] < employees[key]) {
      bestEmployer = key;
    }
  }
  return bestEmployer;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
