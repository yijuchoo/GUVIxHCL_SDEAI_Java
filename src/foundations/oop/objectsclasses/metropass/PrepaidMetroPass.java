package foundations.oop.objectsclasses.metropass;

public class PrepaidMetroPass extends MetroPass {

    private final int dailyRideLimit;
    private int ridesToday;

    // Constructor
    public PrepaidMetroPass(String ownerName, int balance, int dailyRideLimit) {
        super(ownerName, balance); // Parent setup
        this.dailyRideLimit = Math.max(0, dailyRideLimit);
        this.ridesToday = 0;
    }

//    public boolean rideOnceWithLimit(int fare) {
//        if (ridesToday >= dailyRideLimit) return false;
//        boolean ok = rideOnce(fare); // reuse parent rule
//        if (ok) ridesToday++;
//        return ok;
//    }

    @Override
    public boolean rideOnce(int fare) { // override parent rule safely
        // 1. Child rule FIRST
        if (ridesToday >= dailyRideLimit) return false;
        // 2. Call parent rule (fare check + deduct money)
        boolean ok = super.rideOnce(fare); // reuse parent check and deduct
        // 3. Only act if parent succeeds
        if (ok) ridesToday++;
        return ok;
    }

    // Getters
    public int getRidesToday() {
        return ridesToday;
    }

    public int getDailyRideLimit() {
        return dailyRideLimit;
    }

    public int getDailyRideBalance() {
//        int dailyRideBalance = dailyRideLimit - ridesToday;
//        return dailyRideBalance;
        return dailyRideLimit - ridesToday;
    }

}
