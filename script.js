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
    if (input == "clear") {
        clear();
    } else if (/[/*\-+]/.test(input)) {
        console.log(input);
        operate(input, memory, display.textContent);
        display.textContent = memory;
    } else {
        display.textContent += input;
    }
}

let memory = 0;

const display = document.querySelector('.display p');
console.log(display.textContent);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonHandler(button.textContent);
    });
});