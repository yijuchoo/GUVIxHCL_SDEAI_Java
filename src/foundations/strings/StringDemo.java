package foundations.strings;

public class StringDemo {
    public static void main(String[] args) {
        String s = "hi";
        String t = s + "!";
        System.out.println(s); // Output: hi
        System.out.println(t); // Output: hi!

        String s1 = "hello";
        //   index   01234
        System.out.println("Total count of characters in 'hello' = " + s1.length()); // 5
        System.out.println("Character at index 1 = " + s1.charAt(1)); // e
        System.out.println("Characters of the String/ word from index 1 to index 4 (but not including 4) = " + s1.substring(1, 4)); // ell
        System.out.println("Characters from start of index 1 to end = " + s1.substring(1)); // ello
        System.out.println("Index of 'lo' in 'hello' = " + s1.indexOf("lo")); // 3
        System.out.println("Index of 'a' in 'hello' = " + s1.indexOf("a")); // -1 SAME result if looking for "LO"
    }
}
