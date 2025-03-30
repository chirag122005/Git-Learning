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

// Add percentage calculator
const percentageCalc = document.createElement('div');
percentageCalc.innerHTML = `
    <h3>Percentage Calculator</h3>
    <input type="number" id="mainNumber" placeholder="Enter number">
    <input type="number" id="percentage" placeholder="Enter percentage">
    <button id="calculatePercentage">Calculate</button>
    <div id="percentageResult"></div>
`;
document.body.appendChild(percentageCalc);

// Add tax calculator
const taxCalc = document.createElement('div');
taxCalc.innerHTML = `
    <h3>Tax Calculator</h3>
    <input type="number" id="income" placeholder="Enter income">
    <input type="number" id="taxRate" placeholder="Enter tax rate (%)">
    <button id="calculateTax">Calculate Tax</button>
    <div id="taxResult"></div>
`;
document.body.appendChild(taxCalc);

// Add event listeners
document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        calculate();
    }
});

document.getElementById('calculateBtn').addEventListener('click', calculate);
document.getElementById('calculatePercentage').addEventListener('click', calculatePercentage);
document.getElementById('calculateTax').addEventListener('click', calculateTax);

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

function calculatePercentage() {
    const number = parseFloat(document.getElementById('mainNumber').value);
    const percentage = parseFloat(document.getElementById('percentage').value);
    
    if (!isNaN(number) && !isNaN(percentage)) {
        const result = (number * percentage) / 100;
        document.getElementById('percentageResult').textContent = 
            `${percentage}% of ${number} is ${result}`;
    } else {
        document.getElementById('percentageResult').textContent = 
            'Please enter valid numbers';
    }
}

function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);
    
    if (!isNaN(income) && !isNaN(taxRate)) {
        const tax = (income * taxRate) / 100;
        const afterTax = income - tax;
        document.getElementById('taxResult').textContent = 
            `Tax amount: ${tax.toFixed(2)}, After tax: ${afterTax.toFixed(2)}`;
    }
}
