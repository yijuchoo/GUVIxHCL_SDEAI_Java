package foundations.oop.objectsclasses.metropass;

public class MetroPassMain {
    public static void main(String[] args) {
        MetroPass m1 = new MetroPass("Asha", 100);
        MetroPass m2 = new MetroPass("Ravi", 50);
        PrepaidMetroPass p1 = new PrepaidMetroPass("Tuvesh", 80, 3);

        System.out.println("==== Prepaid Metro Pass Customer Record ====");
        System.out.println(p1.ownerName + ", Balance Amount: " + p1.balance); // Tuvesh, 80
        System.out.println("Daily Ride Limit: " + p1.getDailyRideLimit()); // 3
        System.out.println("Rides today: " + p1.getRidesToday()); // 0
        System.out.println(p1.rideOnce(20)); // true
        System.out.println("Rides today: " + p1.getRidesToday() + ", Daily Remaining Rides: "
                + p1.getDailyRideBalance() + ", Balance Amount: " + p1.balance);
        // Rides today: 1, Daily Remaining Rides: 2, Balance: 60

        System.out.println(p1.rideOnce(20));
        System.out.println("Rides today: " + p1.getRidesToday() + ", Daily Remaining Rides: "
                + p1.getDailyRideBalance() + ", Balance Amount: " + p1.balance);
        // Rides today: 2, Daily Remaining Rides: 1, Balance: 40

        System.out.println(p1.rideOnce(10));
        System.out.println("Rides today: " + p1.getRidesToday() + ", Daily Remaining Rides: "
                + p1.getDailyRideBalance() + ", Balance Amount: " + p1.balance);
        // Rides today: 3, Daily Remaining Rides: 0, Balance: 30

        System.out.println(p1.rideOnce(10));
        System.out.println("Rides today: " + p1.getRidesToday() + ", Daily Remaining Rides: "
                + p1.getDailyRideBalance() + ", Balance Amount: " + p1.balance);
        // Rides today: 3, Daily Remaining Rides: 0, Balance: 30


        System.out.println("\n==== Metro Pass Customer Record ====");
        System.out.println(m1.ownerName + ", Balance Amount: " + m1.balance); // Asha, 100
        m1.addMoney(40);                // m1 balance becomes -> 100 + 40 = 140
        System.out.println("Balance Amount: " + m1.balance);         // 140
        m1.rideOnce(140);                  // true, m1 balance becomes 140 - 140 = 0
        System.out.println(m1.balance);         // 0
        boolean canRide = m1.rideOnce(50); // 0 - 50 = -50
        System.out.println(canRide);            // false
        System.out.println(m1.balance);         // 0

        System.out.println("\n" + m2.ownerName + ", Balance Amount: " + m2.balance); // Ravi, 50
        System.out.println(m2.rideOnce(30)); // m2 balance becomes -> 50 - 30 = 20
        System.out.println("Balance Amount: " + m2.balance);    // Balance Amount: 20
        boolean ok = m2.addMoney(0);                    // false, no change
        System.out.println(ok);                                 // false
        System.out.println("Balance Amount: " + m2.balance);    // 20

        System.out.println(m1.addMoney(500)); // true
        System.out.println(m1.ownerName + "'s Balance Amount: " + m1.balance); // Asha's Balance Amount: 500
        System.out.println(m2.rideOnce(5)); // true
        System.out.println(m2.ownerName + "'s Balance Amount: " + m2.balance); // Ravi's Balance Amount: 15
    }
}
