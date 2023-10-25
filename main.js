const inputEmail = document.getElementById("inputEmail");
const warning = document.querySelector(".error-text");
const btn = document.getElementById("submitButton");
const strongEmail = document.querySelector(".strong-email");
const mainContainer = document.querySelector(".main-section");
const succesContainer = document.querySelector(".success-section");


inputEmail.addEventListener('blur', function(){
   const emailValor = inputEmail.value;
   if(emailValidator(emailValor)){
      inputEmail.classList.remove('error-message-input');
      warning.classList.remove('error-message-text');
      warning.classList.add('error-message-none');
      strongEmail.innerText = inputEmail.value;
      mainContainer.classList.add('hiddenPage');
      succesContainer.classList.toggle('showPage');
      btn.disable = false;
   } else{
      warning.classList.add('error-message-text');
      inputEmail.classList.add('error-message-input');
      warning.innerText = "Valid email required"
      btn.disable = true;
   }

})


function emailValidator (email){
   // Regular expression for a valid email address
   var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   // Test the email against the regex
   return regex.test(email);
}
