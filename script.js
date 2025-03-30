const button="added a button";
console.log(button);

// Create HTML elements
const calculator = document.createElement('div');
calculator.innerHTML = `
    <input type="number" id="num1" placeholder="Enter first number">
    <input type="number" id="num2" placeholder="Enter second number">
    <button id="calculateBtn">Calculate</button>
    <div id="result"></div>
`;
document.body.appendChild(calculator);

// Add event listeners
document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        calculate();
    }
});

document.getElementById('calculateBtn').addEventListener('click', calculate);

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        const result = addNumbers(num1, num2);
        document.getElementById('result').textContent = `Result: ${result}`;
    } else {
        document.getElementById('result').textContent = 'Please enter valid numbers';
    }
}

function addNumbers(a, b) {
    return a + b;
}
