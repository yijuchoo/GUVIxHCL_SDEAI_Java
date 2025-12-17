package foundations.oop.interfaces;

public class UPI implements Payable {
    @Override
    public int pay(int amount) {
        int a = validate(amount);
        System.out.println("UPI " + a + " " + Payable.currency());
        return a;
    }

}
