package foundations.activites.conditionalstmts;

public class GradeCalculator {
    public static void main(String[] args) {

        /*
         * Lecture 2 & 3: Control Flow, Loops & Functions
         *
         * Activity A: Grade Calculator
         * Goal: Convert a numeric score (0 - 100) to "A" | "B" | "C" | "D" | "F"
         *        using clear boundaries, then refactor the mapping to a SWITCH expression.
         * Boundaries: A: 90 - 100, B: 80 - 89, C: 70 - 79, D: 60 - 69, F: 0 - 59
         *      - Treat anything outside 0 - 100 as invalid
         * Consider:
         *      - Edge Cases: Each of these - 60, 70, 80, 90 - must land in the correct bucket
         *      - invalid inputs show "Invalid"
         */
        System.out.println("Switch Expression Example");
        int score = 72;
        String grade = switch (score / 10) {
            case 10, 9 -> "A";
            case 8 -> "B";
            case 7 -> "C";
            case 6 -> "D";
            case 0, 1, 2, 3, 4, 5 -> "F";
            // case 0 ... 5 -> "B";
            default -> "Invalid";
        };
        System.out.println(grade);
        // Output: C

        // If Else Statement Example
        System.out.println("\nIf Else Statement Example");
        int finalScore = 88;
        String finalGrade;
        if (finalScore >= 90 && finalScore <= 100) {
            finalGrade = "A";
        } else if (finalScore >= 80 && finalScore <= 89) {
            finalGrade = "B";
        } else if (finalScore >= 70 && finalScore <= 79) {
            finalGrade = "C";
        } else if (finalScore >= 60 && finalScore <= 69) {
            finalGrade = "D";
        } else if (finalScore >= 0 && finalScore <= 59) {
            finalGrade = "F";
        } else {
            finalGrade = "Invalid";
        }
        System.out.println(finalGrade);
        // Output: B
    }
}