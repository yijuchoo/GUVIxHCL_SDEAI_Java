package foundations.oop.abstractclasses.trainticket;

public class AcTicket extends TrainTicket {
    // Child
    // Overriding

    public AcTicket(String p) {
        super(p);
    }

    @Override
    public String coachType() {
        return "AC";
    }

    @Override
    public int fare(int km) {
        return (km <= 0) ? 0 : km * 3;
    }

}
