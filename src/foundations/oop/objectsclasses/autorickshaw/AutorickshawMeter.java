package foundations.oop.objectsclasses.autorickshaw;

/*
    Lecture 5
    Boundary rules
        perKmFare below one becomes one
        startKm below zero becomes zero

*/
public class AutorickshawMeter {
    private int startKm;
    private int perKmFare;

    // Parameterized Constructor
    AutorickshawMeter(int startKm, int perKmFare) {
        this.startKm = (startKm < 0) ? 0 : startKm; // start 0 or greater
        this.perKmFare = (perKmFare < 1) ? 1 : perKmFare; // start 1 or greater
    }
}
