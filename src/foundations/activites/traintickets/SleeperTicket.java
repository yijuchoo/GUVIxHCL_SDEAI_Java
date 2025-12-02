package foundations.activites.traintickets;

public class SleeperTicket extends TrainTicket {
    // No-arg Constructor
    public SleeperTicket(){
        super("NA");
    }
    // Constructor
    public SleeperTicket(String p) {
        super(p);
    }

    @Override
    public int fare(int km) {
        return (km <= 0) ? 0 : km * 2;
    }

    @Override
    public String coachType() {
        return "Sleeper";
    }
}
