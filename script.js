let num1 = 0;
let num2 = 0;
let Lastoperator = "";
let operatorcount = 0;

const calcScreen = document.querySelector('.calcScreen');
const calcScreenTop = document.querySelector('.calcScreenTop');
const btns = document.querySelectorAll('.btn')
function populate(){
    btns.forEach(function(button){
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            calcScreen.textContent += value
            if (value === "+" || value === "-" || value === "*" || value === "/") {
                if (Lastoperator != ""){
                    Lastoperator = value;
                    num2 = parseFloat(calcScreen.textContent);
                    console.log(num2)
                    operate(Lastoperator, num1, num2);
                    calcScreen.textContent = result + value;
                
                  }else {
                    num1 = parseFloat(calcScreen.textContent);
                    console.log(num1)
                    Lastoperator = value;
                    calcScreen.textContent = "";
                  }
                
              } 
        });
    })
}

function add(num1, num2){
    return num1 + num2;
};
function div(num1, num2){
    return num1 / num2;
};
function mult(num1, num2){
    return num1 * num2;
};
function minus(num1, num2){
    return num1 - num2;
};

function operate(operator, num1, num2){
    switch(operator) {
        case "+": result = add(num1, num2);
        return result;
        break;
        case "-": result = minus(num1, num2);
        return result;
        break;
        case "/": result = div(num1, num2);
        return result;
        break;
        case "*": result = mult(num1, num2);
        return result;
        break;
    }
}
populate();