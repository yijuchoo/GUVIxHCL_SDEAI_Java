package foundations.oop.interfaces.cardpayment;

public class App {
    public static void main(String[] args) {
        /*
        Payable is an interface, and interfaces cannot be instantiated.
        CardGateway is a concrete class that implements Payable
        */
        System.out.println("=== Payable Reference Type ===");
        /*
        The object is still a CardGateway
        BUT you are viewing it as a Payable -> “I only care that this object can pay.”
        Can: pay, validate, display currency. Cannot: refund. -> Because Payable does not declare refund()
        Even though the object is a CardGateway, the compiler only looks at the reference type (Payable)
        */
        Payable p1 = new CardGateway();
        p1.pay(300);
        // Output: Card payment for 300
        System.out.println("validate: " + p1.validate(50));
        System.out.println(Payable.currency());

        System.out.println("\n=== Refundable Reference Type ===");
        // variable r1 of type Refundable
        // instantiated as a CardGateway
        Refundable r1 = new CardGateway();
        r1.refund(100);
        // Output: Payment refund 100

        System.out.println("\n=== CardGateway Reference Type ===");
        /*
        You are creating a CardGateway object
        You are referencing it as a CardGateway
        Can: pay, refund, validate. -> Maximum access
        Because CardGateway implements both interfaces, and the reference type is the concrete class itself.
        */
        CardGateway c1 = new CardGateway();
        c1.pay(20);
        c1.refund(10);
        System.out.println("validate: " + c1.validate(-10));
    }
}
/*
Object-Oriented Programming
    - Inheritance (Parent-Child relationship
    - Polymorphism (Child can behave differently eg. Dog is child of Pet)
    - Encapsulation (Hiding the internal state, optionally certain behavior, of an object) -> private variables
        eg. private String name;
    - Abstraction
*/