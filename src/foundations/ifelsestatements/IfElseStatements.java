package foundations.ifelsestatements;

public class IfElseStatements {
    public static void main(String[] args) {
        // if (condition) {...} -> handle the first matching case
        // else if (nextCondition) {...} -> handle the next specific cases in order
        // else {...} -> handle everything not matched above

        // Example 1
        System.out.println("Example 1");
        int minutes = 5;
        // If I have more than 7 minutes, then make chai
        // Else make coffee
        if (minutes > 7) {
            System.out.println("Make Chai");
        } else {
            System.out.println("Make Coffee");
        }

        // Example 2 - Comparison Operator
        System.out.println("\nExample 2 - Comparison Operator");
        int score = 70;
        char grade = 'B';
        double temperature = 30.5;
        boolean isOpen = true;

        System.out.println(score >= 60);
        System.out.println(grade != 'C');
        System.out.println(temperature == 30.5);
        System.out.println(!isOpen);

        // Example 3 - If Else Statement
        System.out.println("\nExample 3 - If Else Statement");
        int result = 40;
        char grading;

        if (result >= 90) {
            System.out.println(grading = 'A');
        } else if (result >= 80) {
            System.out.println(grading = 'B');
        } else if (result >= 60) {
            System.out.println(grading = 'C');
        } else {
            System.out.println(grading = 'D');
        }

        // Example 4 - Logical Operator
        // If score is greater than or equal to 60 AND
        // Attendance is greater than or equal to 75
        // Then, learner is passing
        System.out.println("\nExample 4 - Logical Operator");
        double attendance = 80.75;
        if ((score >= 60) && (attendance >= 75)) {
            System.out.println("You pass");
        }

        boolean pass = (score >= 60) && (attendance >= 75);
        System.out.println(pass);

        // Example 5
        // Is user eligible for discount? YES/ NO
        // Is user a prime member OR Cart Total greater than or equal to 250?
        System.out.println("\nExample 5");
        boolean isMember = false;
        double cartTotal = 250.5;
        boolean isUserEligible = isMember || (cartTotal >= 250);
        System.out.println(isUserEligible);

        // Example 6
        // Score >= 90 -> A
        // Score >= 80 -> B
        // Score >= 70 -> C
        // Everything else is D
        System.out.println("\nExample 6");
        String grades;
        if (score >= 90) {
            grades = "A";
        } else if (score >= 80) {
            grades = "B";
        } else if (score >= 70) {
            grades = "C";
        } else {
            grades = "D";
        }
        System.out.println(grades);

    }
}
