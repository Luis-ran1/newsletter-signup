const inputText = document.getElementById('inputEmail');
const strong = document.querySelector(".strong-email");

inputText.addEventListener('input',function(){
   const inputValue = inputText.value;
   strong.textContent = inputValue;
})