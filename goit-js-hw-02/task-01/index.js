const logItems = function(array) {
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < array.length - 1; index++) {
    console.log(`${index + 1} - ${array[index]}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
