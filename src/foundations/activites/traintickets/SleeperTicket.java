package foundations.activites.traintickets;

public class SleeperTicket extends TrainTicket {

    // Default constructor: uses standard "Sleeper"
    public SleeperTicket(String p) {
        super(p, "Sleeper");
    }

    // Flexible constructor: lets caller override coachType
    public SleeperTicket(String p, String coachType) {
        super(p, coachType);
    }


    @Override
    public int fare(int km) {
        return (km <= 0) ? 0 : km * 2;
    }

}
