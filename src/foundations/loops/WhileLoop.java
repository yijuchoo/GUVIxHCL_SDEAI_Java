package foundations.loops;

public class WhileLoop {

    public static void main(String[] args) {
        /*
         * Used when repeat until a rule is satisfied and the count is not known upfront
         * It keeps going while this remain true
         * Ideal for input validation and for searching when the number of iterations is not known in advance
         * Validation pattern:
         *      - Keep checking the condition until the value passes the rule
         *      - Use "continue" to skip the rest of the iteration when the current value is unusable
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
        System.out.println("\nExample 2 : boolean");
//        boolean hasUserEnteredDate = false;
        int score = 30;
        while (score >= 30) {
            if (score > 40) {
                System.out.println("Continue");
                score = score + 1;
                break;
            }
            System.out.println(score);
            score = score + 1;
        }
        // Output: Prints 30 to 40. Then "Continue"

    }
}
