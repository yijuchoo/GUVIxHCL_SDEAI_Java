package foundations.activites.traintickets;

public abstract class TrainTicket {

    private final String pnr; // final -> cannot be changed. private -> not exposed to anyone.
    private String coachType;

    public TrainTicket(String p, String coachType) {
        this.pnr = p;
        this.coachType = coachType;
    }

    public TrainTicket(String pnr) {
        this.pnr = pnr;
    }

    // Must implement
    public abstract int fare(int km);

    // Use the field rather than hard-coding in subclasses
    public String coachType() {
        return coachType;
    }

    @Override
    public String toString() {
        return "PNR: " + pnr + ", Coach: " + coachType();
    }

    public String getPnr() {
        return pnr;
    }

}
