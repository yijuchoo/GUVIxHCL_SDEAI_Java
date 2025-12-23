package foundations.oop.interfaces.notification;

public class App {
    public static void main(String[] args) {
        Notifier n = new SmsNotifier();
        n.send("Order packed");

        n = new WhatsAppNotifier();
        n.send("Out for delivery");
    }
}
/*
Polymorphism can be used with interfaces in addition to classes
A single call like notifier.send(msg) on a common type (interface or base class) dispatches to the actual object
From behavior swapping to channels
    - One call send(msg); different notifier objects handle it (SMS, WhatsApp, Email)
Why this matters
    - Switch channels without touching calling code

*/