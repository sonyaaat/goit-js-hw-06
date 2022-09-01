const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const mainEl=document.querySelector('#ingredients')
const list=ingredients.map(el=>
  {
    const newEl=document.createElement('li')
    newEl.textContent=el;
    newEl.classList.add("item")
    return newEl;
  })
  mainEl.append(...list);