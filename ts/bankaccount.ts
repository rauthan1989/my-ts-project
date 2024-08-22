//Bankaccount balance calculator
class BankAccount {
    private _balance:number = 0;
    
    public get balance() {
        return this._balance;
    }    
    public set balance(newBalance:number){
        if(newBalance<0){
            throw new Error("Invalid balance..");
        }
        this._balance=newBalance;
    }    
    }
    
    const account = new BankAccount();
    account.balance = 10;
    console.log(account.balance);

// Temprature calculator
class Temprature {
    private _celsius: any = 0;

    public get celsius(){
        return this._celsius;
    }
    public set celsius(temprature:number){
        this._celsius = temprature;       
    }
    public get fahrenheit(){
        return (this._celsius * 9) / 5 + 32;
    }
    public set fahrenheit(temprature1:number){
        this._celsius = ((temprature1 - 32) * 5 ) / 9;
    }
    
}

const temp = new Temprature();
temp.celsius = 25; // calling set method
console.log(temp.fahrenheit);  // calling get method

temp.fahrenheit = 77; // calling set method
console.log(temp.celsius);  // calling get method
