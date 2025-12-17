package foundations.oop.interfaces;

public class DebitCard implements Payable{

    @Override
    public int pay(int amount) {
        System.out.println("Debit card paid " + amount);
        return amount;
    }
}
