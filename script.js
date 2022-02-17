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
    if (value2 === '0') {
        return displayText.textContent = 'ERROR';
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


//doesn't reset operatorSign so value1 keeps the old result so user can string operations together
function equals() {
    if (operatorSign === '') {
        displayText.textContent = value1;
    } else {
    let result = Math.round(( operate(operatorSign, +value1, +value2) + Number.EPSILON) * 100) / 100;
    let exponential = result.toExponential(3);
    displayText.textContent = exponential;
    value1 = result;
    value2 = '';
    decimalButton.disabled = false;
    }
}

//checks value to decide where to assign the number
function valueChecker(num) {
    if (value1.length < 8) {
        value1 += num;
        displayText.textContent = value1;
        } else if (operatorSign.length > 0 && value2.length < 8) {
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
    decimalButton.disabled = false;
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
    } else if (value2 > 0) {
        value2 *= -1;
        displayText.textContent = value2;
    }
});
const percentageButton = document.querySelector('#percentage');
percentageButton.addEventListener('click', () => {
    if (value1 !== '') {
        value1 /= 100;
        displayText.textContent = value1;
    } else if (value2 !== '') {
        value2 /= 100;
        displayText.textContent = value2;
    }
});

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => {
    if (value2 === '') {
    operatorSign = '*';
    } else if (operatorSign.length > 0) {
    equals();
    }
    decimalButton.disabled = false;
});
const minusButton = document.querySelector('#minus');
minusButton.addEventListener('click', () => {
    if (value2 === '') {
        operatorSign = '-';
        } else if (operatorSign.length > 0) {
        equals();
        }
    decimalButton.disabled = false;
});
const plusButton = document.querySelector('#plus');
plusButton.addEventListener('click', () => {
    if (value2 === '') {
        operatorSign = '+';
        } else if (operatorSign.length > 0) {
        equals();
        }
    decimalButton.disabled = false;
});
const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => {
    if (value2 === '') {
        operatorSign = '/';
        } else if (operatorSign.length > 0) {
        equals();
        }
    decimalButton.disabled = false;
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

//operator buttons renable the decimal button
const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', () => {
    if (value1 === '') {
        value1 +='0.';
        displayText.textContent = value1;
        decimalButton.disabled = true;
    } else if (value2 === '' && value2.search('.') === -1 && operatorSign !== '') {
        value2 += '0.';
        displayText.textContent = value2;
        decimalButton.disabled = true; 
    } else if (value1.length > 0 && value1.includes('.') === false) {
        value1 += '.';
        displayText.textContent = value1;
        decimalButton.disabled = true;
    } else if (value2.length > 0 && value2.includes('.') === false) {
        value2 += '.';
        displayText.textContent = value2;
        decimalButton.disabled = true;
    }
});

window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
});