package foundations.strings;

public class Equality {
    // Equality: == vs equals
    /*
        == asks whether two references point to the same object
        equals asks whether two Strings have the same sequence of characters
    */
    public static void main(String[] args) {
        String a = new String("Admin");
        String a2 = "Admin";
        String b = "Admin";
        System.out.println(a == b); // false (usually)
        System.out.println(a2 == b); // true
        System.out.println(a.equals(b)); // true

        String name = null;
        String name2 = "Jessica";
        System.out.println(name == "Admin"); // false
        System.out.println("Admin".equals(name)); // false
//        System.out.println(name.equals("Jake")); // NullPointerException ->
        //                                            Cannot invoke "String.equals(Object)"
        //                                            because "name" is null
        System.out.println("Jake".equals(name)); // false

        System.out.println(name2.equals("Jake")); // false
        System.out.println(name2.equals("Jessica")); // true
    }
}
