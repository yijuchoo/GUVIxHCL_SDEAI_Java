package foundations.oop.objectsclasses.upiwallet;

public class UPIWalletMain {
    public static void main(String[] args) {
        // create UPIWallet object
        UPIWallet wallet = new UPIWallet();

        boolean isPinUpdated = wallet.changePin("1234", "1235");
        System.out.println(isPinUpdated);
    }
}
