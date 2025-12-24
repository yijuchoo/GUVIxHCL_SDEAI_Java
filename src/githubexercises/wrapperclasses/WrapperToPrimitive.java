package githubexercises.wrapperclasses;

public class WrapperToPrimitive {
    /*
    Convert the wrapper to primitive manually (no unboxing):
    Integer b = 15;
    */
    // Convert to int manually:
    public static void main(String[] args) {
        Integer b = 15;
        int c = b.intValue();
        System.out.println(c); // 15
        System.out.println(b.equals(Integer.valueOf(c))); // true

        //        Integer d = 100;
        int d = 100;
        Integer e = 100;

        System.out.println(d == e); // true


    }
}
