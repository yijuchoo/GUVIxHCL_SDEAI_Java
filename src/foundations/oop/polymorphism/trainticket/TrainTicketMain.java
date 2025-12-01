package foundations.oop.polymorphism.trainticket;

public class TrainTicketMain {
    public static void main(String[] args) {
        // runtime polymorphism (method overriding behavior)
        // call the overridden methods in AcTicket
        TrainTicket t = new AcTicket();
        System.out.println(t.fare(10)); // 30
        // fare = km * 3 -> 10 * 3
        int fc = new FlexCalc().price(10,5);
        // price = km * 3, price = price + surcharge -> (10 * 3) + 5
        System.out.println(fc); // 35
    }
}
