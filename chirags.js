function addNumbers(a, b) {
    return a + b;
}


const account = {
    name: 'John Doe',
    balance: 1000,
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}`);
    },
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds');
        } else {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}`);
        }
    },
    checkBalance() {
        console.log(`The current balance is ${this.balance}`);
    }
};


function addNumbers(a, b) {
    return a + b;
}
function addNumbers(a, b) {
    return a + b;
}
function addNumbers(a, b) {
    return a + b;
}
function addNumbers(a, b) {
    return a + b;
}
function addNumbers(a, b) {
    return a + b;
}
