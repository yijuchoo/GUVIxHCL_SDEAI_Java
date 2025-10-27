package foundations.activites.traintickets;

public class SleeperTicket extends TrainTicket {
    public SleeperTicket(String p) {
        super(p);
    }

    @Override
    public int fare(int km) {
        return 0;
    }
}
