package foundations.oop.interfaces.cardpayment;

// Contract
public interface Payable {
    int pay (int amount);
    default int validate(int amount) {
        return (amount <= 0) ? 0 : amount; // return Math.max(amount, 0);
    }

    static String currency() {
        return "INR";
    }
}
