package foundations.oop.interfaces;

public class App {
    public static void main(String[] args) {
        /*
        Payable is an interface, and interfaces cannot be instantiated.
        CardGateway is a concrete class that implements Payable

        */
        Payable p = new CardGateway();
        p.pay(300);

        Refundable r = new CardGateway();
        r.refund(100);
    }
}
