package foundations.operators;

public class LogicalOperators {
    public static void main(String[] args) {
        // Work on booleans
        // && (and) means both conditions must be true
        // || (or) means at least one condition is true
        // ! (not) flips a boolean

        // Short-circuits
        // A && B, if A is false then B is not evaluated
        // A || B, if A is true then B is not evaluated

        // Example 1
        // Pass if score >= 60 AND Attendance >= 75%
        // (score >= 60) && (attendance >= 75)

        // Example 2
        // Apply discount if user is a Member OR Cart Total >= 500
        // isMember || (cartTotal >= 500)

    }


}
