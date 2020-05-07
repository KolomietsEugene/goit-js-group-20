/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

// eslint-disable-next-line no-unused-vars
const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  idCount: 0,

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: type.charAt() + this.idCount,
      amount,
      type,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    //  fixed
    if (amount > this.balance) {
      alert(`Недостаточно денег на счету. На Вашем счету: ${this.balance}`);
      return;
    }
    this.balance -= amount;
    this.transactions.push(
      this.createTransaction(amount, Transaction.WITHDRAW),
    );
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of this.transactions) {
      //  that was really stupid by me =) fixed
      if (item.id === id) {
        return item;
      }
    }
    return {};
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    return this.transactions
      .filter(item => item.type === type)
      .reduce((total, currentItem) => total + currentItem.amount, 0);
  },
};
