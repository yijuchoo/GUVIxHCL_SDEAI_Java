package foundations.activites.cardpayments;

public interface Payable {
    int pay (int amount);

    int balanceAmount();

    // Question: What are we validating?
    // Do I have enough balance?
    // Balance: 350; Amount I wish to spend: 500;
    default boolean validate (int amount) {
        int balance = balanceAmount();
        if(amount > balance) {
            return false;
        }
        return true;
    }
    static String currency() {
        return "INR";
    };
}
