package foundations.oop.interfaces.interfaceabdemo;

public class Combo implements A, B {
    @Override
    public String note() {
        return A.super.note() +
                " + " +
                B.super.note();
        // Choose / Compose
    }
}
