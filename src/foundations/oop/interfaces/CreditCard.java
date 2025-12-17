package foundations.oop.interfaces;

public class CreditCard implements Payable {
    @Override
    public int pay (int amount) {
        System.out.println("Credit card paid " + amount);
        return amount;
    }
}
