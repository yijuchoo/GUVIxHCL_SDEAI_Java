package foundations.oop.polymorphism.trainticket;

public class AcTicket extends TrainTicket {
    // Child
    // Overriding
    @Override
    public String coachType() {
        return "AC";
    }

    // If w/o Override, a signature/ name change eg. parameter change from int to long,
    // creates an Overload instead of an Override.
    @Override
    public int fare(int km) {
        return (km <= 0) ? 0 : km * 3;
    }

}
