package foundations.oop.objectsclasses.practice.wallet;

public class CashbackWallet extends Wallet {

    private int totalCashback = 0;

    public CashbackWallet(int balance) {
        super(balance);
    }

    @Override
    public boolean pay(int amount) {
        // Step 1: parent pay first
        if (!super.pay(amount)) {
            return false;
        }

        // Step 2: calculate cashback (1%)
        int cashback = amount / 100; // integer division

        // Step 3: add cashback back to wallet
        if (cashback > 0) {
            super.addMoney(cashback);
            totalCashback += cashback;
        }

        return true;
    }

    public int getTotalCashback() {
        return totalCashback;
    }
}

