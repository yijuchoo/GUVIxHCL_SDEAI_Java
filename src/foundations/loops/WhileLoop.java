package foundations.loops;

import javax.swing.plaf.IconUIResource;

public class WhileLoop {

    public static void main(String[] args) {
        /*
         * Used when repeat until a rule is satisfied and the count is not known upfront
         * It keeps going while this remain true
         * Example
         *    Ask until the input is valid
         *    while (!isValid) {
         *    ...
         *    }
         */

        // Infinite Loop (Keep printing "TRUE")
        //        while (true) {
        //            System.out.println("TRUE");
        //        }

        // Example 1
        System.out.println("Example 1 : i < 10");
        int i = 0;
        while (i < 10) {
            System.out.println(i);
            i++;
        }
        // Output: Prints 0 to 9 vertically

        // Example 2
        System.out.println("Example 2 : boolean");
        boolean hasUserEnteredDate = false;
        while (!hasUserEnteredDate) {
            // Ask user to enter a valid date
            System.out.println(hasUserEnteredDate = true);
            System.out.println("Date is successfully recorded and saved");

        }
    }
}
