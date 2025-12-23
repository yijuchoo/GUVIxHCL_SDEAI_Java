package gdoc.warmupproblems;

public class ElevatorService {

    public static void main(String[] args) {
        /*
        *  Warm Up Problems (Google Doc)
        *  Elevator: ServiceMode
        *  A lift serves floors 1 to 10.
        *  From floor 7 upwards, it stops only on even floors (8 and 10).
        *  Simulate the lift going up from floor 1 and print the floors where it stops.
        *  End the run completely when you hit floor 10.
        */

        for (int i = 1; i <= 10; i++) {
            if (i < 7) {
                System.out.println("Stop at floor " + i);
            } else if (i % 2 == 0) {
                System.out.println("Stop at floor " + i);
            }
        }
    }
}
