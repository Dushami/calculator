//global variables
let firstNum = ''
let secondNum = ''
let operation = null
let shouldResetScreen = false

const numberButton = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operator]');
const allClear = document.getElementById('AC');
const delete1 = document.getElementById('Delete');
const equals = document.getElementById('equals');
const point = document.getElementById("point");
const lastOperationScreen = document.getElementById('previousOperation');
const currentOperationScreen = document.getElementById('currentOperation');

window.addEventListener('keydown', handleKeyboardInput)
equals.addEventListener('click', evaluate)
delete1.addEventListener('click', deleteNum);
point.addEventListener('click', decimal);
allClear.addEventListener('click', clearAll);

numberButton.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
);

operatorButton.forEach((button) => 
    button.addEventListener('click', () => setOperation(button.textContent))
);

function appendNumber(number){
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
        resetScreen();
    currentOperationScreen.textContent += number;
}

function resetScreen(){
    currentOperationScreen.textContent = ''
    shouldResetScreen = false
}

function clearAll(){
    lastOperationScreen.textContent = '';
    currentOperationScreen.textContent = '0';
    firstNum = '';
    secondNum = '';
    operation = null;
}

function decimal(){
    if(shouldResetScreen) resetScreen();
    if(currentOperationScreen.textContent === ''){
        currentOperationScreen.textContent = '0';
    }
    if(currentOperationScreen.textContent.includes('.')){
        currentOperationScreen.textContent += '.';
    }
}

function deleteNum(){
    currentOperationScreen.textContent = currentOperationScreen.textContent
    .toString()
    .slice(0 , -1);
}

function setOperation(operator){
   if(operation !== null) evaluate()
   firstNum = currentOperationScreen.textContent
   operation = operator
   lastOperationScreen.textContent = `${firstNum} ${operation}`
   shouldResetScreen = true 
}

function evaluate(){
    if(operation === null || shouldResetScreen) return
    if(operation === '÷' && currentOperationScreen.textContent === '0'){
        alert("you can't devide by 0")
        return;
    }
    secondNum = currentOperationScreen.textContent
    currentOperationScreen.textContent = roundedNum(operate(operation, firstNum, secondNum))
    lastOperationScreen.textContent = `${firstNum} ${operation} ${secondNum} =`;
    operation = null;
}

function roundedNum(number){
    return Math.round(number * 1000)/1000
}

function handleKeyboardInput(e){
    if(e.key >= 0 && e.key <= 9) appendNumber(e.key);
    if(e.key === '.') apppendPoint();
    if(e.key === '=' || e.key === 'Enter') evaluate();
    if(e.key === 'Backspace') deleteNum();
    if(e.key === 'Escape') clearAll();
    if(e.key ==='+' || e.key === '-' || e.key === '*' || e.key === 'x' || e.key === '/'){
        setOperation(convertOperator(e.key));
    }
}

function convertOperator(input){
    if(input === '+') return '+';
    if(input === '-') return '-';
    if(input === '*') return '*';
    if(input === 'x') return '*';
    if(input === '/') return '÷';
}

function add(a , b){
    return a + b;
}

function subtract(a , b){
    return a - b;
}

function divide(a , b){
    return a / b;
}

function multiply(a , b){
    return a * b;
}

function operate(operator , a , b){
    a = Number(a);
    b = Number(b);
    switch (operator){
        case '÷':
            if(b === 0) return null
            else return divide(a, b);
        case '*':
            return multiply(a, b);
        case 'x':
            return multiply(a, b);
        case '+':
            return add(a,b);
        case '-':
            return subtract(a, b);
        default:
            return null;
    }
}