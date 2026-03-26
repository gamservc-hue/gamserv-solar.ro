// calculator.js

// Functionality for a simple calculator
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
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

// Form handling functionality
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
}

// Attach event listener to form
const form = document.getElementById('myForm');
form.addEventListener('submit', handleFormSubmit);

// Expose functions for external use
export { add, subtract, multiply, divide, handleFormSubmit };