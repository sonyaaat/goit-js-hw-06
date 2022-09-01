const decrementBtn=document.querySelector('[data-action="decrement"]');
const incrementBtn=document.querySelector('[data-action="increment"]');
const text=document.querySelector("#value");
let counterValue=0;
decrementBtn.addEventListener('click',onButtonDecrement);
incrementBtn.addEventListener('click',onButtonIncrement)
function onButtonDecrement()
{
    counterValue-=1;
    text.textContent=counterValue;
}
function onButtonIncrement()
{
    counterValue+=1;
    text.textContent=counterValue;
}