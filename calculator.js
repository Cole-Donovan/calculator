const greyButtons = document.querySelectorAll('.grey');
const redButtons = document.querySelectorAll('.red');

for (let i = 0; i < 11; i++) {
    greyButtons[i].addEventListener('mouseover', function (e) {
        e.target.style.background = '#36485f';
    });
    greyButtons[i].addEventListener('mouseout', function (e) {
        e.target.style.background = '#455d7a';
    });
}

for (let i = 0; i < 8; i++) {
    redButtons[i].addEventListener('mouseover', function (e) {
        e.target.style.background = '#da4e4e';
    });
    redButtons[i].addEventListener('mouseout', function (e) {
        e.target.style.background = '#f95959';
    });
}

window.addEventListener("keydown", function(event) {
    if(event.key == 0) {
        zeroButton();
    }
    if(event.key == 1) {
        oneButton();
    }
    if(event.key == 2) {
        twoButton();
    }
    if(event.key == 3) {
        threeButton();
    }
    if(event.key == 4) {
        fourButton();
    }
    if(event.key == 5) {
        fiveButton();
    }
    if(event.key == 6) {
        sixButton();
    }
    if(event.key == 7) {
        sevenButton();
    }
    if(event.key == 8) {
        eightButton();
    }
    if(event.key == 9) {
        nineButton();
    }
    if(event.key == '.') {
        decimalButton();
    }

    if(event.key == 'c' || event.key == 'C') {
        clearButton();
    }
    if(event.key == 'Backspace' || event.key == 'Delete') {
        deleteButton();
    }
    if(event.key == 'p' || event.key == 'P' || event.key == 'n' || event.key == 'N') {
        positiveNegativeButton();
    }
    if(event.key == '/') {
        divideButton();
    }
    if(event.key == 'x' || event.key == 'X' || event.key == '*') {
        multiplyButton();
    }
    if(event.key == '-') {
        minusButton();
    }
    if(event.key == '+') {
        plusButton();
    }
    if(event.key == '=' || event.key == 'Enter') {
        equalButton();
    }

    console.log(event.key);
  }, true);

// display
const displayVar = document.querySelector('#display-container');

// current value of input
let currentValue = 'empty';
displayVar.textContent = '0';

//saved input value
let savedValue = 'empty';
let prevWasEqual = false;

// holds which of the 4 functions is selected: 0 none, 1 div, 2 mult, 3 min, 4 plus
let whichFunction = 0;

// holds answer of previous equation
let answer = 'empty';

// max length of input
let maxLength = 20;

// grey buttons: numbers and decimal
function zeroButton() {
    if(currentValue.length < maxLength)
    {
        if(isNaN(currentValue)) {
            currentValue = '0';
        }
        else {
            if(currentValue != '0') {
                currentValue += '0';
            }
        }
        displayVar.textContent = currentValue;
    }
}
function oneButton() {
    if(currentValue.length < maxLength)
    {
        if(isNaN(currentValue) || currentValue == '0') {
            currentValue = '1';
        }
        else {
            currentValue += '1';
        }
        displayVar.textContent = currentValue;
    }
}
function twoButton() {
    if(currentValue.length < maxLength)
    {
        if(isNaN(currentValue) || currentValue == '0') {
            currentValue = '2';
        }
        else {
            currentValue += '2';
        }
        displayVar.textContent = currentValue;
    }
}
function threeButton() {
    if(currentValue.length < maxLength)
    {
        if(isNaN(currentValue) || currentValue == '0') {
            currentValue = '3';
        }
        else {
            currentValue += '3';
        }
        displayVar.textContent = currentValue;
    }
}
function fourButton() {
    if(currentValue.length < maxLength)
    {
        if(isNaN(currentValue) || currentValue == '0') {
            currentValue = '4';
        }
        else {
            currentValue += '4';
        }
        displayVar.textContent = currentValue;
    }
}
function fiveButton() {
    if(currentValue.length < maxLength)
    {
        if(isNaN(currentValue) || currentValue == '0') {
            currentValue = '5';
        }
        else {
            currentValue += '5';
        }
        displayVar.textContent = currentValue;
    }
}
function sixButton() {
    if(currentValue.length < maxLength)
    {
        if(isNaN(currentValue) || currentValue == '0') {
            currentValue = '6';
        }
        else {
            currentValue += '6';
        }
        displayVar.textContent = currentValue;
    }
}
function sevenButton() {
    if(currentValue.length < maxLength)
    {
        if(isNaN(currentValue) || currentValue == '0') {
            currentValue = '7';
        }
        else {
            currentValue += '7';
        }
        displayVar.textContent = currentValue;
    }
}
function eightButton() {
    if(currentValue.length < maxLength)
    {
        if(isNaN(currentValue) || currentValue == '0') {
            currentValue = '8';
        }
        else {
            currentValue += '8';
        }
        displayVar.textContent = currentValue;
    }
}
function nineButton() {
    if(currentValue.length < maxLength)
    {
        if(isNaN(currentValue) || currentValue == '0') {
            currentValue = '9';
        }
        else {
            currentValue += '9';
        }
        displayVar.textContent = currentValue;
    }
}
function decimalButton() {
    if(currentValue.length < maxLength)
    {
        if(isNaN(currentValue)) {
            currentValue = '0.';
            displayVar.textContent = currentValue;
        }
        else {
            if(!currentValue.includes('.')) {
                currentValue += '.';
                displayVar.textContent = currentValue;
            }
        }
    }
}

// red buttons: four functions, equal, clearing, delete, negative/positive
function clearButton() {
currentValue = 'empty';
displayVar.textContent = '0';
savedValue = 'empty';
whichFunction = 'empty';
answer = 'empty';
prevWasEqual == false;
}
function deleteButton() {
    if(!isNaN(currentValue) && currentValue != '0') {
        currentValue = currentValue.slice(0, -1);
        if(currentValue == '-0' || currentValue == '-' || currentValue == '') {
            currentValue = '0';
        }
        displayVar.textContent = currentValue;
    }
}
function positiveNegativeButton() {
    if(currentValue.length < maxLength)
    {
        if(!isNaN(currentValue) && currentValue != '0') {
            if(currentValue.includes('-')) {
                currentValue = currentValue.slice(1);
            }
            else {
                currentValue = '-' + currentValue;
            }
            displayVar.textContent = currentValue;
        }
    }
}
let currentFunctionType = 0;
function contingency(currentFunctionType) {
    if(whichFunction != currentFunctionType && whichFunction > 0) {
        if(whichFunction == 1) {
            savedValue = parseFloat(savedValue) / parseFloat(currentValue);
            currentValue = 'empty';
        }
        if(whichFunction == 2) {
            savedValue = parseFloat(savedValue) * parseFloat(currentValue);
            currentValue = 'empty';
        }
        if(whichFunction == 3) {
            savedValue = parseFloat(savedValue) - parseFloat(currentValue);
            currentValue = 'empty';
        }
        if(whichFunction == 4) {
            savedValue = parseFloat(savedValue) + parseFloat(currentValue);
            currentValue = 'empty';
        }
        displayVar.textContent = savedValue;
        return 0;
    }
    return 1;
}

function divideButton() {
    if(prevWasEqual == true && !isNaN(currentValue)) {
        savedValue = 'empty';
    }
    let x = contingency(1);
    if(x == 0) {
        whichFunction = 1;
        return;
    }
    prevWasEqual = false;
    if(isNaN(savedValue)) {
        if(isNaN(currentValue)) {
            savedValue = '0';
            whichFunction = 1;
            displayVar.textContent = '0';
        }
        else {
            savedValue = currentValue;
            currentValue = 'empty';
            whichFunction = 1;
        }
    }
    else {
        if(isNaN(currentValue)) {
            whichFunction = 1;
        }
        else {
            answer = parseFloat(savedValue) / parseFloat(currentValue);
            savedValue = answer;
            currentValue = 'empty';
            whichFunction = 1;
            displayVar.textContent = answer;
        }
    } 
}
function multiplyButton() {
    if(prevWasEqual == true && !isNaN(currentValue)) {
        savedValue = 'empty';
    }
    let x = contingency(2);
    if(x == 0) {
        whichFunction = 2;
        return;
    }
    prevWasEqual = false;
    if(isNaN(savedValue)) {
        if(isNaN(currentValue)) {
            savedValue = '0';
            whichFunction = 2;
            displayVar.textContent = '0';
        }
        else {
            savedValue = currentValue;
            currentValue = 'empty';
            whichFunction = 2;
        }
    }
    else {
        if(isNaN(currentValue)) {
            whichFunction = 2;
        }
        else {
            answer = parseFloat(savedValue) * parseFloat(currentValue);
            savedValue = answer;
            currentValue = 'empty';
            whichFunction = 2;
            displayVar.textContent = answer;
        }
    }
}
function minusButton() {
    if(prevWasEqual == true && !isNaN(currentValue)) {
        savedValue = 'empty';
    }
    let x = contingency(3);
    if(x == 0) {
        whichFunction = 3;
        return;
    }
    prevWasEqual = false;
    if(isNaN(savedValue)) {
        if(isNaN(currentValue)) {
            savedValue = '0';
            whichFunction = 3;
            displayVar.textContent = '0';
        }
        else {
            savedValue = currentValue;
            currentValue = 'empty';
            whichFunction = 3;
        }
    }
    else {
        if(isNaN(currentValue)) {
            whichFunction = 3;
        }
        else {
            answer = parseFloat(savedValue) - parseFloat(currentValue);
            savedValue = answer;
            currentValue = 'empty';
            whichFunction = 3;
            displayVar.textContent = answer;
        }
    }
}
function plusButton() {
    if(prevWasEqual == true && !isNaN(currentValue)) {
        savedValue = 'empty';
    }
    let x = contingency(4);
    if(x == 0) {
        whichFunction = 4;
        return;
    }
    prevWasEqual = false;
    if(isNaN(savedValue)) {
        if(isNaN(currentValue)) {
            savedValue = '0';
            whichFunction = 4;
            displayVar.textContent = '0';
        }
        else {
            savedValue = currentValue;
            currentValue = 'empty';
            whichFunction = 4;
        }
    }
    else {
        if(isNaN(currentValue)) {
            whichFunction = 4;
        }
        else {
            answer = parseFloat(savedValue) + parseFloat(currentValue);
            savedValue = answer;
            currentValue = 'empty';
            whichFunction = 4;
            displayVar.textContent = answer;
        }
    }
}
function equalButton() {
    if(whichFunction == 1) {
        answer = parseFloat(savedValue) / parseFloat(currentValue);
        savedValue = answer;
        currentValue = 'empty';
        whichFunction = 0;
        displayVar.textContent = answer;
        prevWasEqual = true;
    }
    if(whichFunction == 2) {
        answer = parseFloat(savedValue) * parseFloat(currentValue);
        savedValue = answer;
        currentValue = 'empty';
        whichFunction = 0;
        displayVar.textContent = answer;
        prevWasEqual = true;
    }
    if(whichFunction == 3) {
        answer = parseFloat(savedValue) - parseFloat(currentValue);
        savedValue = answer;
        currentValue = 'empty';
        whichFunction = 0;
        displayVar.textContent = answer;
        prevWasEqual = true;
    }
    if(whichFunction == 4) {
        answer = parseFloat(savedValue) + parseFloat(currentValue);
        savedValue = answer;
        currentValue = 'empty';
        whichFunction = 0;
        displayVar.textContent = answer;
        prevWasEqual = true;
    }
}