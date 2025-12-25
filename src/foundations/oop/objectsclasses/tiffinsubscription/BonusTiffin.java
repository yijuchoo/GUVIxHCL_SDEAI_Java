package foundations.oop.objectsclasses.tiffinsubscription;

public class BonusTiffin extends TiffinSubscription {

    private int weeklyBonus;
    // weeklyBonus -> how many extra meals the customer earns each week (or each time the rule is triggered)

    public BonusTiffin(String planName, int remainingMeals, int weeklyBonus) {
        super(planName, remainingMeals);
        this.weeklyBonus = Math.max(0, weeklyBonus);
        // Always store 0 or more. Never store a negative weeklyBonus.
    }

    @Override
    public boolean useMeal() {
        // Call parent method
        boolean ok = super.useMeal();
        if (!ok) return false;

        // ⭐ When meals hit 0 → give bonus meals
        if (getRemainingMeals() == 0 && weeklyBonus > 0) {
            // Call the parent class’s method addMeals() and
            // increase the remainingMeals by the value of weeklyBonus.
            addMeals(weeklyBonus);
        }
        return true;
    }
}
