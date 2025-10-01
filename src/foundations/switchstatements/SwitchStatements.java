package foundations.switchstatements;

public class SwitchStatements {

    public static void main(String[] args) {

        // with Java 14, a more concise version of Switch statements was released
        /* Improvements
         * Returns a value directly -> results in fewer temporary variables to store
         * Arrow syntax prevents fall-through bugs
         * Encourages exhaustive handling
         * Default handles "Anything Else"
         */
        int score = 85;
        // score / 10 -> 85 / 10 = 8.5
        String grade = switch (score / 10) {
            case 10, 9 -> "A";
            case 8 -> "B";
            case 7 -> "C";
            default -> "D";
        };
        System.out.println(grade);
        // Output: B

    }
}
