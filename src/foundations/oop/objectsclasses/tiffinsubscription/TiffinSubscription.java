package foundations.oop.objectsclasses.tiffinsubscription;

public class TiffinSubscription {
    private String planName = "";
    private int remainingMeals = 0;

    // Parameterized Constructor
    TiffinSubscription(String planName, int remainingMeals) {
        this.planName = (planName == null) ? "" : planName;
        // Math.max -> return the maximum between the 2 arguments
        // Set this.remainingMeals to remainingMeals, but never allow it to drop below zero.
        this.remainingMeals = Math.max(0, remainingMeals);
    }

    // Methods
    String getPlanName() {
        return planName;
    }

    int getRemainingMeals() {
        return remainingMeals;
    }

    boolean setPlanName(String name) {
        String cleaned = (name == null) ? "" : name.trim(); // cleaned planName
        if (cleaned.isEmpty()) // if cleaned planName is empty
            return false;
        planName = cleaned;
        return true;
    }
}
