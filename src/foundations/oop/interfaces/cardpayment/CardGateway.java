package foundations.oop.interfaces.cardpayment;

public class CardGateway implements Payable, Refundable {
    @Override
    public int pay(int amount) {
        System.out.println("Card payment for " + amount);
        return amount;
    }

    @Override
    public int refund(int amount) {
        System.out.println("Payment refund " + amount);
        return amount;
    }
}
