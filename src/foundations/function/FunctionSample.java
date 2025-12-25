package foundations.function;

public class FunctionSample {
    public static void main(String[] args) {
        int m = max(3, 5); // method max returns the larger of the two numbers
        System.out.println(m);
    }

    public static int max(int a, int b) {
        // ternary operator; short form of an if-else statement
        // If a >= b is true → return a,
        // otherwise → return b.
        return (a >= b) ? a : b; // this or Math.max(a, b)
//        return Math.max(a, b);
        // Output: 5
    }
}
