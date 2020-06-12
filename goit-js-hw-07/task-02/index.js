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
  return ingredientsList
    .map(
      item => `
  <li>${item}</li>`,
    )
    .join('');
};

const ingredientsListElem = document.querySelector('#ingredients');

ingredientsListElem.innerHTML = generateIngredientsElemments(ingredients);
