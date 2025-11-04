package foundations.strings;

public class StringBuilderBasics {

    public static void main(String[] args) {
        // Declaring and instantiating
        StringBuilder sb = new StringBuilder();

        sb.append("Hello");
        sb.append(",");
        sb.append(" World");

        // Variation 1
        System.out.println(sb); // Hello, World
        // Java converts the appended data to a String with toString method
        // System.out.println(sb.toString);

        // Variation 2
        String greeting = sb.toString();
        System.out.println(greeting); // Hello, World

        // Example with String Array
        String[] names = new String[3];
        names[0] = "Sudharsana";
        names[1] = "Malini";
        names[2] = "Thirumani";
        //Reassign the StringBuilder to a new StringBuilder
        sb = new StringBuilder("Name: "); // Passing a default value
        System.out.println(sb); // Name:
        // Go through the list of names and append them to the StringBuilder
        for (int i = 0; i < names.length; i++) {
            if (i > 0) sb.append(", ");
            sb.append(names[i]);
        }
        System.out.println(sb); // Name: Sudharsana, Malini, Thirumani

        // Example with insert by index
        sb = new StringBuilder("Java is fun");
        //          index :     012345678910
        sb.insert(8, "really ");
        System.out.println(sb); // Java is really fun
        System.out.println(sb.indexOf("s")); // 6

        System.out.println(sb.reverse()); // nuf yllaer si avaJ

        System.out.println("\n=== Checking num 1 == 5 ===");
        // Declaring a variable num
        // Initializing it with a value of 1
        int num = 1;
        if(num == 5) {
            System.out.println("equal");
        } else {
            System.out.println("not equal");
        }

        // Instantiation -> Create a new String object on the heap
        // Even if "temp" exists
        // eg. reference is 123456
        String str = new String("temp");
        // String literal
        // Initialization
        // If "temp" string already exists, resue
        // eg. reference is 123457
        String str2 = "temp";
        String str3 = "temp";

        // equals() → compares content (value)
        // Checks whether the characters in both strings are the same.

        System.out.println("\n=== Checking str == str2 ===");
        // == → compares object references
        // Checks whether both variables point to the same object in memory
        // reference 123456 != 1234567
        if (str == str2) {
            System.out.println("equal");
        } else {
            System.out.println("not equal");
        }
        // str is not equal to str2
        // str was created with new String("temp"), which forces a new object in the heap.
        // Even though the value is the same, they are DIFFERENT OBJECTS.

        System.out.println("\n=== Checking str2 == str3 ===");
        // str2 and str3 are both string literals.
        // reference 123457 == 123457
        if (str2 == str3) {
            System.out.println("equal");
        } else {
            System.out.println("not equal");
        }
        // str 2 is equal to str3
        // Java stores string literals in a string pool, so identical literals
        // point to the same memory reference

        System.out.println("\n=== Checking str, str2 and str3 are of SAME VALUES ===");
        boolean isEqual = str.equals(str3);
        System.out.println(isEqual); // true

        boolean isEqual2 = str2.equals(str3);
        System.out.println(isEqual2); // true
    }
}
