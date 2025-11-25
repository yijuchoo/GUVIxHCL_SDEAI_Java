package foundations.oop.objectsclasses;

import foundations.oop.objectsclasses.metropass.MetroPass;

public class Main {
    public static void main(String[] args) {
        // Declaring w/ a variable name
        // Instantiating using new keyword
        MetroPass m1 = new MetroPass("Asha", 100);
        MetroPass m2 = new MetroPass("Ravi", 50);

        m1.addMoney(40);                // m1 balance becomes -> 100 + 40 = 140
        System.out.println(m1.balance);         // 140
        m1.rideOnce(140);                  // true, m1 balance becomes 140 - 140 = 0
        System.out.println(m1.balance);         // 0
        boolean canRide = m1.rideOnce(50); // 0 - 50 = -50
        System.out.println(canRide);            // false

        System.out.println(m1.addMoney(500));
        m1.balance = -1;
        System.out.println("m1 balance: " + m1.balance);         // -1

        m2.rideOnce(30);       	        // m2 balance becomes -> 50 - 30 = 20
        boolean ok = m2.addMoney(0);    // false, no change
        System.out.println(ok);                 // false
        System.out.println(m2.balance);         // 20
    }
}
