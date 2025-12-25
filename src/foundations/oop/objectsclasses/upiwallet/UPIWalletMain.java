package foundations.oop.objectsclasses.upiwallet;

public class UPIWalletMain {
    public static void main(String[] args) {
        // create UPIWallet object
        UPIWallet wallet = new UPIWallet();

        boolean isPinUpdated = wallet.changePin("1234", "1235");
        System.out.println("Is pin updated? " + isPinUpdated);

        // create CashbackWallet object
        // 1% cashback wallet
        CashbackWallet cw = new CashbackWallet(0.01);
        cw.addMoney(100);
        System.out.println("Balance after ₹100: " + cw.getBalance()); // 101
    }
}
