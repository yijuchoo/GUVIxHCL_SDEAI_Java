package foundations.oop.objectsclasses.tiffinsubscription;

public class TiffinSubscriptionMain {
    public static void main(String[] args) {
        TiffinSubscription ts = new TiffinSubscription("Breakfast", 3);

        System.out.println("=== Standard Tiffin Subscription ===");
        System.out.println(ts.getPlanName());
        ts.setPlanName("Lunch");
        System.out.println("Remaining Meals for " + ts.getPlanName() + ": " + ts.getRemainingMeals());
        ts.useMeal();
        ts.useMeal();
        System.out.println("Remaining Meals for " + ts.getPlanName() + ": " + ts.getRemainingMeals());
        ts.useMeal();
        System.out.println("Remaining Meals for " + ts.getPlanName() + ": " + ts.getRemainingMeals());

        System.out.println("\n=== Bonus Tiffin Subscription ===");
        BonusTiffin bt = new BonusTiffin("Dinner", 3, 1);
        System.out.println("Plan Name: " + bt.getPlanName() + ", Total Meals: " + bt.getRemainingMeals());
        bt.useMeal();
        bt.showRemainingMeals();
        bt.useMeal();
        bt.showRemainingMeals();
        bt.useMeal();
        bt.addMeals(1);
        System.out.println("Remaining Meals for " + bt.getPlanName() + ": " + bt.getRemainingMeals());
    }
}
