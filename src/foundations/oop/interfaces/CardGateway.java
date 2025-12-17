package foundations.oop.interfaces;

public class CardGateway implements Payable, Refundable {
    @Override
    public int pay(int amount) {
        System.out.println("Card pay " + amount);
        return amount;
    }

    @Override
    public int refund(int amount) {
        System.out.println("Card refund " + amount);
        return amount;
    }
}
