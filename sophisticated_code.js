/**
 * Filename: sophisticated_code.js
 * 
 * This code demonstrates a complex and elaborate JavaScript program that performs various tasks.
 * 
 * The program simulates a banking system, allowing users to create accounts, deposit and withdraw funds,
 * transfer funds between accounts, and calculate interest on account balances.
 */

// Account class represents a bank account
class Account {
  constructor(accountNumber, accountHolder, initialBalance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount} into Account ${this.accountNumber}`);
    }
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount} from Account ${this.accountNumber}`);
    } else {
      console.log(`Insufficient funds in Account ${this.accountNumber}`);
    }
  }
}

// Bank class manages multiple bank accounts
class Bank {
  constructor() {
    this.accounts = [];
  }

  createAccount(accountHolder, initialBalance) {
    const newAccountNumber = Math.floor(Math.random() * 10000) + 1;
    const newAccount = new Account(newAccountNumber, accountHolder, initialBalance);
    this.accounts.push(newAccount);
    console.log(`Account ${newAccountNumber} created for ${accountHolder}`);
  }

  getAccount(accountNumber) {
    return this.accounts.find(account => account.accountNumber === accountNumber);
  }

  transferFunds(fromAccountNumber, toAccountNumber, amount) {
    const fromAccount = this.getAccount(fromAccountNumber);
    const toAccount = this.getAccount(toAccountNumber);

    if (!fromAccount || !toAccount) {
      console.log(`Invalid account number(s) provided for funds transfer`);
      return;
    }

    if (fromAccount.balance >= amount) {
      fromAccount.withdraw(amount);
      toAccount.deposit(amount);
      console.log(`Transferred $${amount} from Account ${fromAccountNumber} to Account ${toAccountNumber}`);
    } else {
      console.log(`Insufficient funds in Account ${fromAccountNumber}`);
    }
  }
}

// Simple interest calculation function
function calculateInterest(principal, rate, time) {
  return principal * rate * time / 100;
}

// Usage example
const bank = new Bank();
bank.createAccount("John Doe", 1000);
bank.createAccount("Jane Smith", 2000);

const johnAccount = bank.getAccount(1);
const janeAccount = bank.getAccount(2);

johnAccount.deposit(500);
janeAccount.withdraw(100);

bank.transferFunds(1, 2, 300);

const johnInterest = calculateInterest(johnAccount.balance, 5, 1); // Principal, Rate (%), Time (years)
const janeInterest = calculateInterest(janeAccount.balance, 5, 1);

console.log(`John Doe's Balance: $${johnAccount.balance}`);
console.log(`Jane Smith's Balance: $${janeAccount.balance}`);
console.log(`John Doe's Interest: $${johnInterest}`);
console.log(`Jane Smith's Interest: $${janeInterest}`);
