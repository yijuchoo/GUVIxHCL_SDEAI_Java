package foundations.oop.objectsclasses.upiwallet;

/*
    Try adding money using the parent wallet rules.
    If the parent rejects it, immediately return false and stop.
    Only proceed with cashback if the parent’s addMoney succeeded.
*/
// Child keeps parent checks, then adds 1% cashback
public class CashbackWallet extends UPIWallet {

    private final double cashbackRate;

    // Constructor to validate cashbackRate
    public CashbackWallet(double cashbackRate) {
        this.cashbackRate = (cashbackRate < 0) ? 0 : cashbackRate;
    }

    @Override
    public boolean addMoney(int amount) {
        // If the parent class fails to add money,
        // then stop execution in this method and return false immediately.
        if (!super.addMoney(amount)) return false; // parent guard

        // int bonus = amount / 100; // gives cashback -> integer rupees
        int bonus = (int) (amount * cashbackRate); // e.g. 1% → ₹1 on ₹100
        // If it succeeds → calculate cashback
        // Add cashback
        if (bonus > 0) super.addMoney(bonus); // reuse parent rule
        return true;
    }
}
