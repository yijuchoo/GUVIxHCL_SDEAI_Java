package foundations.activites.traintickets;

import foundations.activites.traintickets.cardpayments.CreditCard;
import foundations.activites.traintickets.cardpayments.Payable;
import foundations.activites.traintickets.cardpayments.UPI;
import foundations.activites.traintickets.notification.Notifier;
import foundations.activites.traintickets.notification.SmsNotifier;

import java.util.Arrays;

public class TrainTicketMain {
    public static void main(String[] args) {
        // System.out.println(new SleeperTicket("1234A").fare(10));
        // System.out.println(new AcTicket("2456B").fare(10));
        SleeperTicket st1 = new SleeperTicket("PNR1","SleeperNew");
        SleeperTicket st2 = new SleeperTicket("PNR2");
        AcTicket ac1 = new AcTicket("PNR3","AC-New");
        AcTicket ac2 = new AcTicket("PNR4");

        System.out.println("Coach type: " + st1.coachType() + " = " + st1.fare(10)); // SleeperNew = 20
        System.out.println("Coach type: " + st2.coachType() + " = " + st2.fare(10)); // Sleeper= 20
        System.out.println("Coach type: " + ac1.coachType() + " = " + ac1.fare(10)); // AC-New = 30
        System.out.println("Coach type: " + ac2.coachType() + " = " + ac2.fare(10)); // AC= 30

        System.out.println("===================================");
        // Polymorphism via parent reference
        // Declaring an array of type TrainTicket (abstract class), trainTickets
        // Initializing array with three elements
        // [sleeper ticket, ac ticket, sleeper ticket]
        TrainTicket[] trainTickets = {st1, ac1, new SleeperTicket("PNR3", "")};
        for (int i = 0; i < trainTickets.length; i++) {
            int fare = trainTickets[i].fare((i + 1) * 20);
            System.out.println(fare);
        }
        // Output:
        /*
            40 -> index 0 + 1 = 1; 1 * 20 = km (20); 20 * 2 = fare 40
            120 -> index 1 + 1 = 2; 2 * 20 = km (40); 40 * 3 = fare 120
            120 -> index 2 + 1 = 3; 3 * 20 = km (60); 60 * 2 = fare120
        */
//        trainTickets[2] = null; // At index 2, there is no TrainTicket object anymore.
        /*
        index       Value
        0           st1
        1           ac1
        2           null
        */
//        trainTickets[2].fare(60); // NullPointerException
        System.out.println("Test - for [1] " + trainTickets[1].coachType());

        for (TrainTicket t : trainTickets) {
            System.out.println(
                    "PNR: " + t.getPnr() +
                    ", Coach: " + t.coachType() +
                    ", Fare: " + t.fare(10)

            );
        }
        // Output:
        /*
        PNR: PNR1, Coach: SleeperNew, Fare: 20
        PNR: PNR3, Coach: AC-New, Fare: 30
        PNR: PNR3, Coach: , Fare: 20
        */
        System.out.println("===================================");
        TrainTicket[] ts = {new SleeperTicket("PNR5"), new AcTicket("PNR6")};
        for(TrainTicket t : ts) {
            System.out.println("fare -> " + t.fare(8));
        }
        System.out.println("===================================");
        Payable[] ps = {new CreditCard(500), new UPI(400), null};
        for(Payable p : ps) {
            if(p == null) continue;
            System.out.println("paid -> " + p.pay(300));
        }

        System.out.println("===================================");

        Notifier[] ns = {new SmsNotifier()};
        for (Notifier n : ns) {
            n.send("Delivered");
        }
        // Output: SMS -> Delivered
    }
}
/*
    Lecture 6 slide 25
    Putting it together: arrays and loops across packages
        - Let’s look at an example with one pattern and three domains
        - TrainTicket[] (rail), Payable[] (payments), Notifier[] (notify)
    Boundary
        - Guard null entries
*/
