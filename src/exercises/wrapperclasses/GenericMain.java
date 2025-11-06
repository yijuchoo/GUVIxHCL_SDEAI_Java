package exercises.wrapperclasses;

public class GenericMain {
    // Generic method that works with any type
    public static <T> void printValue(T value) {
        System.out.println(value);
    }

    public static void main(String[] args) {
        printValue(42);          // Integer
        printValue(3.14);        // Double
        printValue("Hello");     // String
        printValue(true);        // Boolean

        // You can also use wrapper objects directly
        Integer num = Integer.valueOf(99);
        printValue(num);
    }
}
