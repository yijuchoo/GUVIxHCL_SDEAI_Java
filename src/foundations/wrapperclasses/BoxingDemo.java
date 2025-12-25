package foundations.wrapperclasses;

public class BoxingDemo {

    static int safeUnbox(Integer maybe) {

        return (maybe != null) ? maybe : 0; // default when null
    }

    public static void main(String[] args) {
        Integer boxed = 7; // autoboxing
        int sum = boxed + 3; // unboxing then addition
        System.out.println(sum); // 10
        System.out.println(safeUnbox(null)); // 0

    }
}
