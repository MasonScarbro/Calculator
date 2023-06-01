let result = 0;
let prevNum = '';
let currNum = '';
let displayValue = "";
let operator = "";
let operatorCount = 0;

document.addEventListener("DOMContentLoaded", function(){
    const clear = document.querySelector('.clear');
    const equal = document.querySelector('.equals');
    const numBtns = document.querySelectorAll('.btn');
    const calcScreen = document.querySelector('.calcScreen');
    const calcScreenTop = document.querySelector('.calcScreenTop');
    const symbols = document.querySelectorAll('.btnS');
    numBtns.forEach(function(number){
        number.addEventListener('click', function(e){
            handleNumber(e.target.dataset.num); // calls the function to ''handle'' the number
            calcScreen.textContent = currNum; // Updates to the ''currentNum'' post function
        })
    })

    symbols.forEach(function(symbs){
        symbs.addEventListener('click', function(e){
            handleOperator(e.target.dataset.symb); // handles each time an operator is typed
            calcScreenTop.textContent = prevNum + " " + operator; // pushes the previous typed number and operator to the top and now displays the new number which is empty for now
            calcScreen.textContent = currNum;
            if (operatorCount > 0){
                operate();
                calcScreenTop.textContent = currNum + " " + operator;
                calcScreen.textContent = currNum;
                console.log(prevNum);
                console.log(currNum);
                operatorCount = 0; // Im not 100% sure if any of the if stat ^ is needed but code works im not toucing it
            }
            operatorCount++; // increments to signify the operator button has been clicked
        })
    })

    // clears everything
    clear.addEventListener('click', () => {
        prevNum = "";
        currNum = "";
        calcScreen.textContent = currNum;
        calcScreenTop.textContent = currNum;
        operator = '';

    })

    // calculates the numbers based on operator and removes whats on the top of the calc then prints the prevnum to the bottom
    equal.addEventListener('click', function() {
       operate();
       calcScreenTop.textContent = "";
       calcScreen.textContent = prevNum;
        })

})
    
// just keeps adding the numbers so it will be concatnated like 111 instead of adding because they are strings
function handleNumber(num) {
    currNum += num;
}


function handleOperator(symb){
    // checks if the operator button has been clicked if it has it calculates like the equal sign and updates that way
    if (operatorCount > 0) {
        operate();
        operatorCount = 0;
      }
    operator = symb // assigns the operator to the symbol in the for each loop
    prevNum = currNum; // sets the previous number to the current right before the reset 
    currNum = ""; // reset
}


function operate(){
    prevNum = Number(prevNum);
    currNum = Number(currNum);
    if (operator === "+"){
        prevNum += currNum; // if the operator is positive it adds teh two numbers and makes it prev num and so forth for the rest of the operators
        currNum = prevNum; // for some reason it wasnt updating the prevnum to the screen so this fixes it and now it updates if you add multiple times or do any other operator
    } else if (operator === "-"){
        prevNum -= currNum;
        currNum = prevNum;
    } else if (operator === "/"){
        prevNum /= currNum;
        currNum = prevNum;
    } else if (operator === "*") {
        prevNum *= currNum;
        currNum = prevNum;
    }
   prevNum = prevNum.toString();
   currNum = currNum.toString();
   // console.log(prevNum); testing
  // console.log(currNum);  testing
}
