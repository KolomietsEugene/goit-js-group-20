const list = document.querySelectorAll('#categories .item');
list.forEach(item => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
});
