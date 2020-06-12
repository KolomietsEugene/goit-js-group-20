'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const generateIngredientsElemments = function(ingredientsList = []) {
  // fixes
  return ingredientsList.map(item => {
    const li = document.createElement('li');
    li.textContent = item;
    return li;
  });
};

const ingredientsListElem = document.querySelector('#ingredients');

ingredientsListElem.append(...generateIngredientsElemments(ingredients));
