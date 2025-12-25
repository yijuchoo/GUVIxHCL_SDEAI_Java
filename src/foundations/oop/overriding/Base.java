package foundations.oop.overriding;

public class Base {
    protected Integer price() {
        return 10;
    }

    // Non-Overridable; Cannot be Overridden
    public final int code() {
        return 42;
    }
}
