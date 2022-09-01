const inputText=document.querySelector('#name-input');
const outputText=document.querySelector('#name-output');
inputText.addEventListener('input',addName);
function addName()
{
    outputText.textContent=event.currentTarget.value;
    if(event.currentTarget.value==='')
    {
        outputText.textContent='Anonymous';
    }
}