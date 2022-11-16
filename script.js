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
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
}

function clear() {
    display.textContent = "";
    console.log("cleared");
}

function buttonHandler(input) {
    switch (input) {
        case "clear":
            clear();
            break;
        // TODO: CASE is operator
        default:
            // is number?
            display.textContent += input;
            break;
    }
}


const display = document.querySelector('.display p');
console.log(display.textContent);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonHandler(button.textContent);
    });
});