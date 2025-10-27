package foundations.activites.cardpayments.interfaces;

public interface Payable {
    int pay (int amount);
    int balanceAmount();
//    default int validate (int amount) {
//        int balance = balanceAmount();
//    }
}
