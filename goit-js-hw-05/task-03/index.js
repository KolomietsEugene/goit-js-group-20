class Storage {
  constructor(incomeItems = []) {
    this.items = incomeItems;
  }

  getItems() {
    return this.items;
  }

  addItem(items = []) {
    this.items.push(items);
  }

  removeItem(item) {
    if (this.items.includes(item)) {
      const index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
