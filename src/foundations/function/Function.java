package foundations.function;

public class Function {
    /*
     *   public - access
     *   static - modifier
     *   void - return type
     *   main - function name
     * String[] args - parameters
     */
    public static void main(String[] args) {
        boolean isNegative = isNumberNegative(-50);
        System.out.println(isNegative);

        System.out.println(max(10, 8));

        System.out.println("\n== Method Overloading ==");
        greet("Nikhil", "Nair");
        greet("Nikhil Nair");
    }

    /*
     *   private - access
     *   static - modifier
     *   boolean - return type
     *   isNumberNegative - function name
     *   int n - parameters
     *   isNumberNegative + (int n) -> Signature
     */
    private static boolean isNumberNegative(int n) {
        if (n < 0) return true;
        else return false;

    }

    /*
     *   public - access
     *   static - modifier
     *   int - return type
     *   max - function name
     *   int a, int b - parameters
     *   max + (int a, int b) -> Signature
     */
    public static int max(int a, int b) {
        // ternary operator -> (a > b) ? a : b
        int max = (a > b) ? a : b;
        return max;
    }

    // Method Overloading - Same method name but DIFFERENT PARAMETERS
    // Greet sample First Name + Last Name
    public static void greet(String first, String last) {
        System.out.println("Welcome " + first + " " + last);
    }

    // Greet sample Full Name
    public static void greet(String fullName) {
        System.out.println("Hi, " + fullName);
    }

}
