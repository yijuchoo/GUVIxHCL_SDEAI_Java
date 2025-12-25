package foundations.activites.cardpayments;

public class Main {
    public static void main(String[] args) {
        UPI upi = new UPI(500);
        upi.pay(100);
        System.out.println("upi balance: " + upi.balanceAmount());

        CreditCard c1 = new CreditCard(300);
        c1.pay(500);
        System.out.println("c1 balance: " + c1.balanceAmount());

        DebitCard d1 = new DebitCard(100); // Constructor is needed to pass the balanceAmount
        d1.pay(0);
        System.out.println("d1 balance: " + d1.balanceAmount());
    }
}
/*
Lecture 6
Activity 2: Card payments
Goal: Implement CreditCard and DebitCard that conform to the existing Payable
Given
    - Payable exists with int pay(int amount), default int validate(int), and static String currency()
    - Upi already implements Payable
Design / Rules
    - In each provider, call validate(amount) before printing or returning
    - pay(amount) returns the validated amount and prints provider line
Acceptance checks
    - new CreditCard().pay(500) -> 500 with provider print
    - new DebitCard().pay(0) -> 0 using validate
    - Payable[] arr = { new CreditCard(), new Upi() }
    - No if on class type in the driver
*/