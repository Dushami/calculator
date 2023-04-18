//global variables
let firstNum = ''
let secondNum = ''
let operation = null
let screenReset = false

const numberButton = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operator}');
const allClear = document.getElementsByClassName('AC');
const delete1 = document.getElementsByClassName('Delete');
const equals = document.getElementsByClassName('=');
const point = document.getElementsByClassName("point");
const lastOperationScreen = document.getElementsByClassName('previousOperation');
const currentOperationScreen = document.getElementsByClassName('currentOperaion');

window.addEventListener('keydown', handleKeyboardInput)
equals.addEventListener('click', evaluate);
delete1.addEventListener('click', deleteANo);
point.addEventListener('click', decimal);
allClear.addEventListener('click', clearAll);

numberButton.forEach((buton) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
);

operatorButton.forEach((buton) => 
    button.addEventListener('click', () => setOperator(button.textContent))
);

function appendNumber(number){
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
        resetScreen();
    lastOperationScreen.textContent += number;
}

function resetScreen(){
    currentOperationScreen.textContent = ''
    shouldResetScreen = false
}

function allClear(){
    lastOperationScreen = 0;
    currentOperationScreen = '';
    firstNum = '';
    secondNum = '';
    operation = null;
}

function apppendPoint(){
    if(shouldResetScreen) resetScreen();
    if(currentOperationScreen.textContent === ''){
        currentOperationScreen.textContent = '0';
    }
    if(currentOperationScreen.textContent.includes('.')){
        currentOperationScreen.textContent += '.';
    }
}

function delete1(){
    currentOperationScreen.textContent = currentOperationScreen.textContent
    .toString()
    .slice(0 , -1);
}

