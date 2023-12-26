let valueA = '0';
let valueB = '';
let operator = '';
const reg = /[^0-9]/;
const displayTop = document.querySelector('.displayTop')
const displayBottom = document.querySelector('.displayBot');

///////////////////////////////////---------------------------////////////////////////////////////////////

function add(a, b) {
    return Number(a) + Number(b);
};

function subtract(a, b) {
    return Number(a) - Number(b);
};

function multiply(a, b) {
    return Number(a) * Number(b);
};

function divide(a, b) {
    return Number(a) / Number(b);
};

function operate(op, a, b) {
    if (op == 'add') {
        return add(a, b);
    } else if (op == 'subtract') {
        return subtract(a, b);
    } else if (op == 'multiply') {
        return multiply(a, b);
    } else if (op == 'divide') {
        return divide(a, b);   
    };
};

function roundResult(num) {
    return Math.round(num * 1000) / 1000;
}; 

////////////////////////////////////----------------------------/////////////////////////////////////////////

const numButtons = document.querySelectorAll('.numbtn');

for (let numButton of numButtons) {
    numButton.addEventListener('click', () => {
        if (displayBottom.textContent === '0' || (valueB === '' && displayTop.textContent.match(reg) !== null)) {
            displayBottom.textContent = '';
        };

        displayBottom.textContent += numButton.id;

        if (displayTop.textContent.match(reg) !== null) {
            if (valueB === '0') {
                valueB = '';
            };
            valueB += numButton.id;
        };
    });
};



const opButtons = document.querySelectorAll('.opbtn');
for (let button of opButtons) {
    button.addEventListener('click', () => {
        if (valueB !== '') {
            if (operator === 'divide' && valueB === '0') {
                alert('You cannot divide by 0');
                valueA = '0';
            } else {
                displayBottom.textContent = roundResult(operate(operator, valueA, valueB));
                valueB = '';
            };
        };
        
        if (displayBottom.textContent !== '0') {
            valueA = displayBottom.textContent;
        };

        if (button.id === 'add') {
            operator = 'add';
            displayTop.textContent = valueA;
            displayTop.textContent += ' + ';
            console.log(operator);
        } else if (button.id === 'subtract') {
            operator = 'subtract';
            displayTop.textContent = valueA;
            displayTop.textContent += ' − ';
            console.log(operator);
        } else if (button.id === 'multiply') {
            operator = 'multiply';
            displayTop.textContent = valueA;
            displayTop.textContent += ' × ';
            console.log(operator);
        } else if (button.id === 'divide') {
            operator = 'divide';
            displayTop.textContent = valueA;
            displayTop.textContent += ' ÷ ';
            console.log(operator);
        };

        

    });
};

const equalButton = document.querySelector('.eqbtn');
equalButton.addEventListener('click', () => {
    if (operator !== '' && valueB !== '') {
        if (operator === 'divide' && valueB === '0') {
            alert('You cannot divide by 0');
        } else {
            displayBottom.textContent = roundResult(operate(operator, valueA, valueB));
            displayTop.textContent += `${valueB} =`;
            valueB = '';
        };
        
    };
});

const clearButton = document.querySelector('.clrbtn');
clearButton.addEventListener('click', () => {
    valueA = '0';
    valueB = '';
    operator = '';
    displayTop.textContent = '';
    displayBottom.textContent = '0';
});

const deleteButton = document.querySelector('.delbtn');
deleteButton.addEventListener('click', () => {
    displayBottom.textContent = displayBottom.textContent.slice(0, displayBottom.textContent.length - 1);
    if (displayTop.textContent.match(reg) !== null) {
        valueB = valueB.slice(0, valueB.length - 1);
    };
});

const decimalButton = document.querySelector('.decimalbtn');
decimalButton.addEventListener('click', () => {
    if (displayBottom.textContent.match(/\./) === null) {
        displayBottom.textContent += '.';
    };

    if (displayTop.textContent.match(reg) !== null && valueB === '') {
        valueB = '0';
        displayBottom.textContent = '0.';
    };

    if (valueB !== '' && valueB.match(/\./) === null) {
        valueB += '.';
    };

    
});
