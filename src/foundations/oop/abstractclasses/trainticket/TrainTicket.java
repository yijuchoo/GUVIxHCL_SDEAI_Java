package foundations.oop.abstractclasses.trainticket;

abstract class TrainTicket {
    // Parent
    // Shared default
    final String pnr;

    public TrainTicket(String p) {
        this.pnr = p;
    }
    // Must implement
    public abstract int fare (int km);

    // Optional Override
    public String coachType() {
        return "Sleeper";
    }

//    public int fare(int km) {
//        return (km <= 0) ? 0 : km * 2;
//    }
}
