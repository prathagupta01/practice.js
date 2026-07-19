function add(a,b){
    return a + b ;
}
function subtract (a,b){
    return a - b;
}
function divide(a,b){
    if (b == 0) return "THERE EXISTS";
    else return a/b;
}
function multiply(a,b){
    return a*b;
}

function calculateResult(a, operator, b) {
    if (operator === '+') return add(a, b);
    if (operator === '-') return subtract(a, b);
    if (operator === '*') return multiply(a, b);
    if (operator === '/') return divide(a, b);
    return "Error";
}


function parseExpression(expression) {
    let a = "";
    let operator = "";
    let b = "";

    for (let char of expression) {
        if ("+-*/".includes(char) && operator === "") {
            operator = char;
        } else if (operator === "") {
            a += char;
        } else {
            b += char;
        }
    }

    return {
        a: Number(a),
        operator,
        b: Number(b)
    };
}

// 2. State Variables
let clearOnNextClick = false;

let num = document.getElementById("buttons");
let display = document.getElementById("display");
let strinngh = [];

num.addEventListener('click',(e) =>{
    const a  = e.target.textContent
    //   display.value = e.target.textContent;
    if(a === 'clear'){
        strinngh = [];
        display.value = '';
         clearOnNextClick = false;
            return;
    }
     
    
    if(e.target.id ==='equal'){
        const { a, operator, b } = parseExpression(display.value);
        display.value = calculateResult(a, operator, b);
        return 
    }
        // strinngh.push(display.value);
        console.log(strinngh)
         display.value += a;
        strinngh.push(a);
         
})
