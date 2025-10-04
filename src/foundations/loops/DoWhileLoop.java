package foundations.loops;

public class DoWhileLoop {
    public static void main(String[] args) {

        /*
         * Used when the body must run at least once before you can check the condition
         * Execute the code block once then check is the condition valid
         *
         * Runs the body first, then checks the condition.
         * Use it when action must happen at least once.
         *
         * Contrast/ Compare with while loop:
         *   if condition is false at start, while loop runs zero times.
         *   But do-while loop still runs once to gather the information needed for the next decision
         *
         * Example
         *   Show menu once, then ask to continue
         *   char choice;
         *   do {
         *   ...
         *   // show menu and handle one selection
         *   // choice = readChoice();
         *   } while (choice != 'q'); // Keep going until the user chooses to quit
         */

        int j = 0;
        do {
            System.out.println(j);
            j = j + 1; // or use shorthand j++;
        } while (j < 50);
        // Output: Prints 0 to 49 vertically
    }

}
