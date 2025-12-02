package foundations.activites.traintickets;

public abstract class TrainTicket {

    private final String pnr; // final -> cannot be changed. private -> not exposed to anyone.

    public TrainTicket(String p) {
        this.pnr = p;
    }

    // Must implement
    public abstract int fare(int km);

    public String coachType() {
        return "Seater";
    }

    @Override
    public String toString() {
        return "PNR: " + pnr + ", Coach: " + coachType();
    }

    public String getPnr() {
        return pnr;
    }

}
