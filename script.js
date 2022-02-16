let value = 0;

function add(num) {
    return value + num;
}

function subtract(num) {
    return value - num;
}

function multiply(num) {
    return value * num;
}

function divide(num) {
    return value / num;
}

function operate(operator) {
    if (operator === '+') {
        add(value);
    }
    if (operator === '-') {
        subtract(num);
    }
    if (operator === '*') {
        multiply(num);
    }
    if (operator === '/') {
        divide(num);
    }
}
//sets display back to 0
function reset() {
    displayText.textContent = 0;
}
const displayText = document.querySelector('#display');

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    reset();
});

const plusMinusButton = document.querySelector('#plusMinus');
plusMinusButton.addEventListener('click', () => {
    value *= -1;
    displayText.textContent += value;
});
const percentageButton = document.querySelector('#percentage');
const sevenButton = document.querySelector('#seven');
sevenButton.addEventListener('click', () => {
    value += 7;
    displayText.textContent = value;
});
const eightButton = document.querySelector('#eight');
eightButton.addEventListener('click', () => {
    displayText.textContent += '8';
});
const nineButton = document.querySelector('#nine');
nineButton.addEventListener('click', () => {
    displayText.textContent += '9';
});
const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => {
    operate('*');
});
const fourButton = document.querySelector('#four');
fourButton.addEventListener('click', () => {
    displayText.textContent += '4';
});
const fiveButton = document.querySelector('#five');
fiveButton.addEventListener('click', () => {
    displayText.textContent += '5';
});
const sixButton = document.querySelector('#six');
sixButton.addEventListener('click', () => {
    displayText.textContent += '6';
});
const minusButtom = document.querySelector('#minus');
const oneButton = document.querySelector('#one');
oneButton.addEventListener('click', () => {
    displayText.textContent += '1';
});
const twoButton = document.querySelector('#two');
twoButton.addEventListener('click', () => {
    displayText.textContent += '2';
});
const threeButton = document.querySelector('#three');
threeButton.addEventListener('click', () => {
    displayText.textContent += '3';
});
const plusButton = document.querySelector('#plus');
const zeroButton = document.querySelector('#zero');
zeroButton.addEventListener('click', () => {
    displayText.textContent += '0';
});
const decimalButton = document.querySelector('#decimal');
const equalsButton = document.querySelector('#equals');

