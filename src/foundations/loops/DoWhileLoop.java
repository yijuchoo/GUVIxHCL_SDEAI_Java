package foundations.loops;

public class DoWhileLoop {
    public static void main(String[] args) {

        /*
        * Used when the body must run at least once before you can check the condition
        * Execute the code block once then check is the condition valid
        * Example
        *   Show menu once, then ask to continue
        *   do {
        *   ...
        *   } while (choice != 'q');
        */

        int j = 0;
        do {
            System.out.println(j);
            j = j + 1; // or use shorthand j++;
        } while (j < 50);
        // Output: Prints 0 to 49 vertically
    }

}
