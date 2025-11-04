package foundations.wrapperclasses;

public class WrapperIntroDemo {

    public static void main(String[] args) {
        int p = 128; //Primitive
        // Integer.valueOf(128) -> Returns an Integer object that represents the value 128
        Integer w = Integer.valueOf(128); // Wrapper

        System.out.println(w.equals(Integer.valueOf(p))); // true

        /*
        Both sides ( w & Integer.valueOf(p)) are Integer objects — no unboxing occurs.
        Since 128 is not cached, these are different objects in memory.
        */
        System.out.println(w == (Integer.valueOf(p))); // false
        System.out.println(w == p); // true
    }
}
