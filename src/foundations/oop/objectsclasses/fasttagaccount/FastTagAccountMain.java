package foundations.oop.objectsclasses.fasttagaccount;

public class FastTagAccountMain {
    public static void main(String[] args) {
        FastTagAccount fta1 = new FastTagAccount("SGT1234", 500);

        System.out.println("Vehicle Number: " + fta1.getVehicleNumber()); // SGT1234
        System.out.println(fta1.getBalance()); // 500
        fta1.addMoney(200);
        System.out.println("New Balance: " + fta1.getBalance());
        // Toll fee of: $300 is deducted
        // Balance: $400
        fta1.payToll(300);
        System.out.println(fta1.getBalance()); // 400
    }

}
