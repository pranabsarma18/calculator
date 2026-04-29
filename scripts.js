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
    else if (operator === '÷') {
        return devide(operand1, operand2)
    }
}

function updateNumber(value) {
    const display =document.querySelector('.display')
    display.textContent = value
}

let result
let first = ''
let second = ''
let operator = ''
let beforeOperand = true
let disabledButton
let resultShown = false
const button = document.addEventListener('click', (e) => {
    console.log(e.target.value)
    console.log(e.target)
    if ((e.target.value) === '=') {
        if (result || result === 0) {
            updateNumber(result.toFixed(4))
            first = result
            beforeOperand = false
            resultShown = true
        }
        else if (!(first) || !(second)){
            result = ''
            first = ''
            second = ''
            operator = ''
            beforeOperand = true
        }
    }
    else if (e.target.textContent === 'Clear') {
        if (disabledButton) disabledButton.disabled = false
        first = ''
        second = ''
        operator = ''
        result = ''
        beforeOperand = true
        const display =document.querySelector('.display')
        display.textContent = ''
    }
    else if (!isNaN(e.target.value) || e.target.value === '0') {
        if (beforeOperand && !resultShown) {
            first = first + e.target.value
            updateNumber(first)
        }
        else if (!resultShown){
            second = second + e.target.value
            result = operate(operator, Number(first), Number(second))
            console.log(result)
            updateNumber(second)
            disabledButton.disabled = false 
        }
        else if (resultShown){
            result = ''
            second = ''
            operator = ''
            resultShown = false
            first = e.target.value
            updateNumber(first)
        }
    }
    else {
        if (disabledButton) disabledButton.disabled = false
        operator = e.target.value
        e.target.disabled = true;
        disabledButton = e.target
        beforeOperand = false
        if (second) {
            updateNumber(result.toFixed(4))
            console.log(result.toFixed(4))
            first = result
            second = ''
        }
    }
    }
)