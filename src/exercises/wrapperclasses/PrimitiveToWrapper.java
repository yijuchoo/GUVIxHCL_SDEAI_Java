package exercises.wrapperclasses;

public class PrimitiveToWrapper {
    /*
    Convert the primitive to a wrapper manually (no autoboxing):
    int a = 7;
    */
    // Convert to Integer manually:
    public static void main(String[] args) {
        int a = 7;
        Integer b = Integer.valueOf(a);
        System.out.println(b);
    }
}
