const form=document.querySelector('.login-form');
form.addEventListener("submit",onFormSubmit);
const data={}
function onFormSubmit(event)
{
event.preventDefault();
const {
    elements: { email, password }
  } = event.currentTarget;
  if(email.value==='' || password.value==='')
  {
    alert("Всі поля мають бути заповнені")
  }
  const formElements=event.currentTarget.elements;
  data[formElements.email.name]=formElements.email.value;
  data[formElements.password.name]=formElements.password.value;
  form.reset();
  console.log(data)

}

