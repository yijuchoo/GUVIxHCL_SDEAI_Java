package foundations.oop.objectsclasses.practice.wallet;


public class WalletMain {
    public static void main(String[] args) {
        RewardWallet rw = new RewardWallet(100);

        System.out.println("=== Reward Wallet ===");
        System.out.println("Balance: " + rw.getBalance());
        System.out.println("Reward Points: " + rw.getRewardPoints());
        System.out.println(rw.pay(30));
        System.out.println("Balance: " + rw.getBalance());
        System.out.println("Reward Points: " + rw.getRewardPoints());

        System.out.println("\n=== Cashback Wallet ===");
        CashbackWallet cw = new CashbackWallet(500);

        System.out.println("Balance: " + cw.getBalance());
        System.out.println(cw.pay(200));
        System.out.println("Cashback: " + cw.getTotalCashback());
        System.out.println("Balance: " + cw.getBalance());
        System.out.println(cw.pay(200));
        System.out.println("Cashback: " + cw.getTotalCashback());
        System.out.println("Balance: " + cw.getBalance());
        System.out.println(cw.pay(100));
        System.out.println("Cashback: " + cw.getTotalCashback());
        System.out.println("Balance: " + cw.getBalance());
    }
}
