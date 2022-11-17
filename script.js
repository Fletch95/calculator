function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            display.textContent = add(a, b);
            break;
        case "-":
            display.textContent = subtract(a, b);
            break;
        case "*":
            display.textContent = multiply(a, b);
            break;
        case "/":
            display.textContent = divide(a, b);
            break;
    }
}

function clear() {
    display.textContent = 0;
    memory = 0;
    console.log("cleared");
}

function equals() {
    operate(operator, memory, display.textContent);
    operator = "";
}

function buttonHandler(input) {
    if (input == "clear") {
        clear();
    } else if (/[/*\-+]/.test(input)) { // Input is an operation button
        memory = display.textContent;
        console.log(`Memory: ${memory}`);
        operator = input;
        display.textContent = "";
    } else if (input == "=") {
        equals();
    } else {
        if (display.textContent == "0") {
            display.textContent = "";
        }
        display.textContent += input;
    }
}

let memory = 0;
let operator = "";

const display = document.querySelector('.display p');
console.log(display.textContent);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonHandler(button.textContent);

        console.log(`Input: ${button.textContent} Display: ${display.textContent} Memory: ${memory} Operator: ${operator}`);
    });
});