package foundations.loops;

public class ForLoop {
    public static void main(String[] args) {
        /*
        * Used when the number of iterations is known or counted
        * Header shows Start, Condition and Update together -> Easy to read
        * Example
        *   Process items 0 to 10
        *   Start from 0, scan 10 items, increase value of i by 1 after the loop is executed (post increment i++)
        *   for (int i = 0; i < 10; i++) {
        *   ...
        *   }
        */


        // Post-increment Operator i++
        // Will increment the value of i only AFTER executing the code block {...}
        for (int i = 0; i < 10; i++) {
            /*
             * i = 0
             *   Condition: 0 < 10; Console (Print): 0
             * i = 0 + 1 ->1
             *   Condition: 1 < 10; Console (Print): 1
             * ...
             * ...
             * i = 7 + 1 -> 8
             *   Condition: 8 < 10; Console (Print): 8
             * i = 8 + 1 -> 9
             *   Condition: 9 < 10; Console (Print): 9
             * i = 9 + 1 -> 10
             *   Condition: 10 < 10; Console (Print): XXX Not Printing cos 10 is not less than 10
             */
            System.out.println(i);
        }
    }
}
