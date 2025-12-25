package foundations.function;

public class MathUtil {

    /*
    *   public - access
    *   static - modifier
    *   void - return type
    *   main - function name
    * String[] args - parameters
    */
    public static void main(String[] args) {
        int biggerNumber = max(3, 7);
        System.out.println(biggerNumber);

        boolean checkIsPositive = isNonNegative(-8);
        System.out.println(checkIsPositive);
    }

    public static int max(int a, int b) {
        // ternary operator
        return (a >= b) ? a : b; // or use -> Math.max(a, b);
    } // If a >= b, return a; otherwise, return b
    /*
    * if (a > b) {
    *   return a;
    * } else {
    *   return b;
    * }
    */

    private static boolean isNonNegative(int n) {
        return n >= 0;
    }
    /*
     * Java only allows:
     * Field declarations (e.g., int biggerNumber = 10;)
     * Method declarations
     * Blocks (static or instance initializers)
     *
     * Printing (println) is an executable statement, and
     * executable statements must live inside a method or block —
     * not directly inside the class.
     * Will gives a compile-time error
     */


}
