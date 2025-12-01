package foundations.oop.overriding;

public class Child extends Base {
    // More open + Subtype return
    @Override
    public Integer price() {
        return 12;
    }

    // Overridden method is final in Base. Override is not allowed
//    @Override
//    public int code() {
//        return 7;
//    }
}
