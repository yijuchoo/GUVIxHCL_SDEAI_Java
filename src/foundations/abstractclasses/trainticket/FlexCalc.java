package foundations.abstractclasses.trainticket;

public class FlexCalc {
    // Overloading in same class
    int price(int km) {
        return (km <= 0) ? 0 : km * 3;
    }

    int price(int km, int surcharge) {
        return price (km) + surcharge;
    }
}
