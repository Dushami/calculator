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
const currentOperation = document.getElementsByClassName('currentOperaion');

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