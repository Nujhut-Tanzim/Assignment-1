class BankAccount {  
    constructor(accountNumber,ownerName,balance) {
        this.accountNumber = accountNumber;
        this.ownerName=ownerName;
        this.balance = balance;
        
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
        } 
        else {
            console.log(`Insufficient funds`);
        }
    }
    getBalance(){
        return this.balance;
    }

    displayAccountInfo()
    {
        console.log("Account Number: "+this.accountNumber);
        console.log("Owner Name: "+this.ownerName);
        console.log("Balance: $"+this.getBalance());

    }
}
const a = new BankAccount(100,"Nujhut Tanzim",21000);
a.deposit(5000);
a.withdraw(1500);
a.displayAccountInfo();
console.log("...............................................");
const b = new BankAccount(101,"Ayshi Jaman",55000);
b.deposit(2000);
b.withdraw(65000);
b.displayAccountInfo();
  