const LOL = document.querySelector('[data-js="LOL"]');
const LAL = document.querySelector('[data-js="LAL"]');
const LEL = document.querySelector('[data-js="LEL"]');
const BODY = document.querySelector('[data-js="body"]');
const showResult = document.querySelector('[data-js="SHOW-RESULT"]');

LOL.addEventListener("click", () =>{
BODY.classList.toggle('body-aqua');

});

function addNumbers() {
    const result = 2 + 2 ;
    showResult.textContent = result;
   

};

LEL.addEventListener("click", () =>{
    addNumbers();
 
    });