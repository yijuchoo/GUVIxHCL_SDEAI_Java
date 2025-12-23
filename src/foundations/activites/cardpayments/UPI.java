package foundations.activites.cardpayments;

public class UPI implements Payable {

    private int balanceAmount;

    public UPI(int balanceAmount) {
        this.balanceAmount = balanceAmount;
    }

    @Override
    public int pay(int amount) {
        boolean permitted = validate(amount);
        if(!permitted) {
            return 0;
        }
        balanceAmount -= amount;
        System.out.println("UPI: pay " + amount + " = " + Payable.currency() + " " + balanceAmount);
        return 1;
    }

    @Override
    public int balanceAmount() {
        return balanceAmount;
    }

    @Override
    public boolean validate(int amount) {
        return Payable.super.validate(amount);
    }
}
