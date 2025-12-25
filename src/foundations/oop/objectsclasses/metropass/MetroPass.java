package foundations.oop.objectsclasses.metropass;
/*
    Purpose
        A compact class with two fields and two actions to anchor ideas
    Fields (aka instance variables)
        ownerName as text, balance as whole number with non negative rule
    Methods
        addMoney increases balance only for positive amount
        rideOnce deducts fare only if balance is enough
    Ordering inside the class
        Fields, then constructors, then methods
    Boundary rules
        Null ownerName becomes empty string
        Zero or negative amounts are rejected
    */

// Only MetroPass.java can access MetroTemplate
// MetroTemplate is not accessible from outside MetroPass.java
class MetroTemplate {

}

// MetroPass Blueprint
public class MetroPass {

    // Instance variables / fields
    public String ownerName;
    public int balance;

    // Default Constructor
    public MetroPass() {
        ownerName = "";
        balance = 0;
    }

    // Parameterized Constructor - parameters: String newOwnerName, int newBalance
    public MetroPass(String ownerName, int balance) {
        // "Nikhil " -> "Nikhil" trim = remove trailing spaces
        // ternary operator = if/else
        // if ownerName is NULL, assign empty String to it. Else (Not Null), trim the spaces.
        this.ownerName = (ownerName == null) ? "" : ownerName.trim(); // setting ownerName to the input
        if (balance < 0) balance = 0;
        this.balance = balance; // set the value
    }
    // Constructor example 2
    // or use new in Parameters, then we don't need 'this' keyword
//    MetroPass(String newOwnerName, int newBalance) {
//        ownerName = (newOwnerName == null) ? "" : ownerName.trim();
//        if (newBalance < 0) newBalance = 0;
//        balance = newBalance;
//    }

    // Methods (Actions/ verbs)
    public boolean addMoney(int amount) {
        if (amount <= 0) return false;
        // balance += amount; // balance = balance + amount
        this.balance += amount;
        return true;
    }

    public boolean rideOnce(int fare) {
//        this.addMoney(500);
        if (fare <= 0 || fare > balance) return false;
        balance -= fare; // balance = balance - fare
        return true;
    }
}

// The methods here belong exclusively to the class MetroPass.
// To use the methods, we must create an object of MetroPass.


