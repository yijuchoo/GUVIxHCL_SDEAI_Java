package exercises.wrapperclasses;

public class NullUnboxing {
    public static void main(String[] args) {
        Integer num = null;
        int result = num;  // NullPointerException because num is null. Primitives cannot be null.
        // unboxing a null wrapper throws NPE, even though it compiles.
    }
}
