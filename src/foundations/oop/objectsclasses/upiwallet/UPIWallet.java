package foundations.oop.objectsclasses.upiwallet;

/*
    Goal
        Protect a sensitive field with a rule based mutator
    Fields
        balance as private number
        pin as private text
    changePin rules
        oldPin must match current pin
        newPin trimmed, length at least four, not equal to oldPin
    addMoney rule
        Positive amounts only and returns boolean
*/
public class UPIWallet {
    private int balance = 0;
    private String pin = "1234";

    int getBalance() {
        return balance;
    }

    boolean addMoney(int amount) {
        if (amount <= 0) return false;
        balance += amount;
        return true;
    }

    boolean deduct(int amount) {
        if (amount <= 0 || amount > balance)
            return false;
        balance -= amount;
        return true;
    }

    boolean changePin(String oldPin, String newPin) {
        String n = (newPin == null) ? "" : newPin.trim();
        // If oldPin is NULL, oldPin is NOT Equals to pin
        if (oldPin == null || !oldPin.equals(pin)) return false;
        // If length of new Pin is less than 4 digits/characters OR SAME as existing pin
        if (n.length() < 4 || n.equals(pin)) return false;
        pin = n; // assign newPin n to pin
        return true;
    }

}
