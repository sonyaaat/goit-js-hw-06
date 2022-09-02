function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input=document.querySelector("input");
const createBtn=document.querySelector('[data-create]')
const destroyBtn=document.querySelector('[data-destroy]')
const box=document.querySelector('#boxes');
const list=[];
let prevWidth=20;
let prevHeight=20;

createBtn.addEventListener('click',createBoxes)
destroyBtn.addEventListener('click',destroyBoxes);


function createBoxes()
{
for (let index = 1; index <= Number(input.value); index++) {
  const newEl=document.createElement('div');
  newEl.classList.add(`.div${index}`)
  prevWidth+=10
  prevHeight+=10
  newEl.style.width=prevWidth+'px'
  newEl.style.height=prevHeight+'px'
  newEl.style.backgroundColor=getRandomHexColor();
  list.push(newEl)
}
box.append(...list)
}


function destroyBoxes()
{
box.innerHTML="";
input.value='';
list.splice(0,list.length)
console.log(list)
prevHeight=20;
prevWidth=20;
}