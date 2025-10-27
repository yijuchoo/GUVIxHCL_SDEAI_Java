package foundations.activites.traintickets;

public class AcTicket extends TrainTicket {
    public AcTicket(String p) {
        super(p);
    }

    @Override
    public int fare(int km) {
        return (km <= 0) ? 0 : km * 3;
    }

    @Override
    public String coachType() {
        return "AC";
    }
}
