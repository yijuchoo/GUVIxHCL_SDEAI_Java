package foundations.oop.interfaces.cardpayment;

public class UPI implements Payable {
    @Override
    public int pay(int amount) {
        int a = validate(amount);
        System.out.println("UPI " + a + " " + Payable.currency());
        return a;
    }

}
