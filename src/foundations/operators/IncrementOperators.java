package foundations.operators;

public class IncrementOperators {

    public static void main(String[] args) {

        int number = 2;
        System.out.println("== Post-increment Operator ==");
        // Post-increment Operator
        // Will increment the value of i only AFTER executing the code block {...}
        number++;
        System.out.println(number);

        // Post-increment Example
        System.out.println("\nPost-increment Example");
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

        System.out.println("\n== Pre-increment Operator ==");
        // Pre-increment Operator
        // Will increment the value of i BEFORE executing the code block {...}
        ++number;
        System.out.println(number);
    }
}
