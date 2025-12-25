package foundations.operators;

public class ArithmeticOperators {
    public static void main(String[] args) {

        int number = 2;

        // Basic Operators +, -, *, /
        number = number * 2;        // 2 * 2
        System.out.println(number); // Output: 4

        number = number / 2;        // 4 - 2
        System.out.println(number); // Output: 2

        number = number + 100;      // 2 + 100
        System.out.println(number); // Output: 102

        number = number - 50;       // 102 - 50
        System.out.println(number); // Output: 52

        number = 2 * 5 + 10 - 15;   // 10 + 10 - 15
        System.out.println(number); // Output: 5

        // Modulus Operator %
        number = 100;                    // reassigned variable
        System.out.println(number % 10); // Output: 0
        System.out.println(number % 11); // Output: 1 (derived from 100 % 11. Cos number is not reassigned)

    }
}
