package foundations.oop.objectsclasses.tiffinsubscription;

public class TiffinSubscription {
    private String planName;
    private int remainingMeals;

    // Parameterized Constructor
    TiffinSubscription(String planName, int remainingMeals) {
        this.planName = (planName == null) ? "" : planName;
        // Math.max -> return the maximum between the 2 arguments
        // Set this.remainingMeals to remainingMeals, but never allow it to drop below zero.
        this.remainingMeals = Math.max(0, remainingMeals);
    }
}
