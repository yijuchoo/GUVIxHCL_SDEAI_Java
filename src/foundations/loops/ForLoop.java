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
        System.out.println("Example 1");
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
        } // Output: Prints 0 to 9 vertically


        System.out.println("\nExample 2: Declaring n, i < n");
        int n = 10;
        for(int i = 0; i < n; i++) {
            System.out.println(i);
        } // Output: Prints 0 to 9 vertically


        System.out.println("\nExample 3: Counting Down (Reverse)");
        int j = 10;
        // i-- -> Decrementing the value of i by 1
        for(int i = j; i >= 0; i--) {
            System.out.println(i);
        } // Output: Prints 10 to 0 vertically


        System.out.println("\nExample 4: Counting Up from 0, each time +10");
        int m = 100;
        for(int i = 0; i <= m; i = i + 10) {
            System.out.println(i);
        } // Output: Prints 0 to 100 vertically (each time +10)
    }
}
