let value1 = '';
let value2 = '';
let operatorSign = '';

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === '0') {
        displayText.textContent = 'You will crash my calculator.';
    }
    return a / b;
}

function operate(operator, a, b) {
   switch (operator) {
    case '/':
        return divide(a, b);
    case '*':
        return multiply(a, b);
    case '-':
        return subtract(a, b);
    case '+':
        return add(a, b);
   }
}

function equals() {
    let result = operate(operatorSign, +value1, +value2);
    displayText.textContent = result;
    operatorSign = '';
    value1 = result;
    value2 = '';
}

//checks value to decide where to assign the number
function valueChecker(num) {
    if (operatorSign === '') {
        value1 += num;
        displayText.textContent = value1;
    } else if (operatorSign.length > 0) {
        value2 += num;
        displayText.textContent = value2;
    }
}

//sets display back to 0
function reset() {
    displayText.textContent = defaultText;
    value1 = '';
    value2 = '';
    operatorSign = '';
}

const displayText = document.querySelector('#display');
const defaultText = displayText.textContent;

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    equals();
});

//reset button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    reset();
});
const plusMinusButton = document.querySelector('#plusMinus');
plusMinusButton.addEventListener('click', () => {
    if (value1 > 0) {
        value1 *= -1;
        displayText.textContent = value1;
    }
    value2 *= -1;
});
const percentageButton = document.querySelector('#percentage');

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => {
    operatorSign = '*';
});
const minusButton = document.querySelector('#minus');
minusButton.addEventListener('click', () => {
    operatorSign = '-';
});
const plusButton = document.querySelector('#plus');
plusButton.addEventListener('click', () => {
    operatorSign = '+';
});
const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => {
    operatorSign = '/';
});

const zeroButton = document.querySelector('#zero');
zeroButton.addEventListener('click', () => {
    valueChecker(0);
});
const oneButton = document.querySelector('#one');
oneButton.addEventListener('click', () => {
    valueChecker(1);
});
const twoButton = document.querySelector('#two');
twoButton.addEventListener('click', () => {
    valueChecker(2);
});
const threeButton = document.querySelector('#three');
threeButton.addEventListener('click', () => {
    valueChecker(3);
});
const fourButton = document.querySelector('#four');
fourButton.addEventListener('click', () => {
    valueChecker(4);
});
const fiveButton = document.querySelector('#five');
fiveButton.addEventListener('click', () => {
    valueChecker(5);
});
const sixButton = document.querySelector('#six');
sixButton.addEventListener('click', () => {
    valueChecker(6);
});
const sevenButton = document.querySelector('#seven');
sevenButton.addEventListener('click', () => {
    valueChecker(7);
});
const eightButton = document.querySelector('#eight');
eightButton.addEventListener('click', () => {
    valueChecker(8);
});
const nineButton = document.querySelector('#nine');
nineButton.addEventListener('click', () => {
    valueChecker(9);
}); 
const decimalButton = document.querySelector('#decimal');