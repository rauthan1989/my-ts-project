"use strict";
//Bankaccount balance calculator
class BankAccount {
    _balance = 0;
    get balance() {
        return this._balance;
    }
    set balance(newBalance) {
        if (newBalance < 0) {
            throw new Error("Invalid balance..");
        }
        this._balance = newBalance;
    }
}
const account = new BankAccount();
account.balance = 10;
console.log(account.balance);
// Temprature calculator
class Temprature {
    _celsius = 0;
    get celsius() {
        return this._celsius;
    }
    set celsius(temprature) {
        this._celsius = temprature;
    }
    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
    set fahrenheit(temprature1) {
        this._celsius = ((temprature1 - 32) * 5) / 9;
    }
}
const temp = new Temprature();
temp.celsius = 25; // calling set method
console.log(temp.fahrenheit); // calling get method
temp.fahrenheit = 77; // calling set method
console.log(temp.celsius); // calling get method
