package foundations.oop.objectsclasses.fasttagaccount;

/*
    Lecture 5: Intro to OOP: Classes & Objects and More!
    Activity: Model and Encapsulate a FASTagAccount
    -----------------------------------------------------------
    Goal
        Build a small class with private fields and safe updates
    Design and rules
        Fields
            vehicleNumber as text, balance as whole number not below zero
        Constructor
            Parameterized or default?
        Getters
            getVehicleNumber and getBalance for read only access
        Setters and actions
            setVehicleNumber trims text and rejects blank
            addMoney(amount) only if amount is positive
            payToll(fee) only if fee is positive and balance is enough

*/
public class FastTagAccount {
    private String vehicleNumber;
    private int balance;

    // Default Constructor
    public FastTagAccount() {

    }

    // Parameterized Constructor
    public FastTagAccount(String vehicleNumber, int balance) {
        setVehicleNumber(vehicleNumber);
        // this.balance = balance;
        // if balance is used instead of Math.max, then when initial object fta1 value is -500,
        // it will display as -500 and not 0
        this.balance = Math.max(balance, 0);
    }

    // Methods
    // Getters
    public String getVehicleNumber() {
        return vehicleNumber;
    }

    public int getBalance() {
        return balance;
    }

    // Setters
    public void setVehicleNumber(String vehicleNumber) {
        if (vehicleNumber != null && !vehicleNumber.isEmpty()) {
            this.vehicleNumber = vehicleNumber.trim();
        } else {
            System.out.println("Invalid vehicle number");
        }
    }

    public void addMoney(int amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Amount: $" + amount + " added successfully.");
        } else {
            System.out.println("Invalid amount");
        }
    }

    public void payToll(int fee) {
        if (fee <= 0) {
            System.out.println("Invalid fee amount");
        } else if (balance >= fee) {
            balance -= fee;
            System.out.println("Toll fee of: $" + fee + " is deducted");
            System.out.println("Balance: $" + balance);
        } else {
            System.out.println("Insufficient balance");
        }
    }
/*
        // works when message is not required to print
        public void payToll(int fee) {
            balance -= (fee > 0 || balance >= fee) ? fee : 0;
        }
*/
}
