package foundations.oop.objectsclasses.practice.wallet;

public class Wallet {
    private int balance;

    public Wallet(int balance) {
        this.balance = Math.max(0, balance);
    }

    public boolean pay(int amount) {
        if (amount <= 0 || amount > balance) return false;
        balance -= amount;
        return true;
    }

    public int getBalance() {
        return balance;
    }

    boolean addMoney(int amount) {
        if (amount <= 0) return false;
        balance += amount;
        return true;
    }
}
