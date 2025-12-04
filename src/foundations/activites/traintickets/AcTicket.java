package foundations.activites.traintickets;

public class AcTicket extends TrainTicket {
    // Default Constructor
    public AcTicket(String p) {
        super(p, "AC");
    }
    // Flexible Constructor
    public AcTicket(String p, String coachType) {
        super(p, coachType);
    }

    @Override
    public int fare(int km) {
        return (km <= 0) ? 0 : km * 3;
    }

//    @Override
//    public String coachType() {
//        return "AC";
//    }
}
