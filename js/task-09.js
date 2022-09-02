function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button=document.querySelector('.change-color');
const colorName=document.querySelector('.color');
button.addEventListener('click',onColorChange)
function onColorChange(event){
document.body.style.backgroundColor=getRandomHexColor();
colorName.textContent=getRandomHexColor();
}
