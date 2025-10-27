package foundations.polymorphism.trainticket;

public class TrainTicket {
    // Parent
    // Shared default
    public String coachType() {
        return "Sleeper";
    }

    public int fare(int km) {
        return (km <= 0) ? 0 : km * 2;
    }
}
