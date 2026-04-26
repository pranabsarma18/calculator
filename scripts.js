function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a-b
}

function multiply(a, b) {
    return a * b
}

function devide(a, b) {
    return a/b
}

let operand1
let operator
let operand2

function operate(operator, operand1, operand2) {
    if (operator === '+') {
        return add(operand1, operand2)
    }
    else if (operator === '-') {
        return subtract(operand1, operand2)
    }
    else if (operator === 'x') {
        return multiply(operand1, operand2)
    }
    else if (operator === '%') {
        return devide(operand1, operand2)
    }
}

function updateNumber(value) {
    const display =document.querySelector('.display')
    display.textContent = ''
    display.textContent = value
}

let inputs = []
const button = document.addEventListener('click', (e) => {
    console.log(e.target.value)
    console.log(e.target)
    console.log(inputs)
    if ((e.target.value) === '=') {
        num1 = Number(inputs[0])
        operator = inputs[1]
        num2 = Number(inputs[2])
        result = operate(operator, num1, num2)
        updateNumber(result)
        inputs = []
    }
    else if (e.target.textContent === 'Clear') {
        inputs = []
        const display =document.querySelector('.display')
        display.textContent = ''
    }
    else {
        inputs.push(e.target.value)
        updateNumber(e.target.value)
    }
    }
)