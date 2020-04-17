const credits = 23580;
const pricePerDroid = 3000;

const droidCount = prompt();

if (droidCount === null) console.log('Отменено пользователем!');
else {
  const totalPrice = droidCount * pricePerDroid;
  alert(
    credits - totalPrice < 0
      ? 'Недостаточно средств на счету!'
      : `Вы купили ${droidCount} дроидов, на счету осталось ${credits -
          totalPrice} кредитов.`,
  );
}
