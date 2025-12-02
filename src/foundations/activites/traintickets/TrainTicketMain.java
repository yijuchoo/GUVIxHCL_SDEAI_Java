package foundations.activites.traintickets;

import java.util.Arrays;

public class TrainTicketMain {
    public static void main(String[] args) {
        System.out.println(new SleeperTicket("1234A").fare(10));
        System.out.println(new AcTicket("2456B").fare(10));
        TrainTicket[] arr = {
                new SleeperTicket("1234A"),
                new AcTicket("2456B"),
        };
//        System.out.println(Arrays.toString(arr));
        for (TrainTicket t : arr) {
            System.out.println(
                    "PNR: " + t.getPnr() +
                    ", Coach: " + t.coachType() +
                    ", Fare: " + t.fare(10)

            );
        }
    }
}
