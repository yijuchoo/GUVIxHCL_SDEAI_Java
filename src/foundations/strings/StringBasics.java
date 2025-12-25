package foundations.strings;

public class StringBasics {
    public static void main(String[] args) {
        String name = null; // or use empty String "" as default value but using null will save memory
        System.out.println(name); // null
        name = "Soumyajit";

        String city = new String("Bangalore");
        //                      index :  0123456789
        String greet = "Hello, " + name + "!";
        System.out.println(greet); // Hello, Soumyajit!

        String empty = ""; // Empty String
        System.out.println("Length of empty String = " + empty.length()); // 0

        char first = name.charAt(0);
        //        char last2 = name.charAt(name.length()); // StringIndexOutOfBoundsException:
        // Index 9 out of bounds for length 9
        char last = name.charAt(name.length() - 1);
        System.out.println("First character: " + first); // S
        System.out.println("Last character: " + last); // t
        //        System.out.println("Last2 character: " + last2); // Error StringIndexOutOfBoundsException

        System.out.println(city.length()); // 9
        System.out.println(city.substring(5)); // lore -> start from 5th index to the last
        System.out.println(city.substring(0, 5)); // Banga -> Start from index to index 5 but not including index 5

        int index = city.indexOf("a");
        System.out.println(index); // 1
        int index2 = city.indexOf("z");
        System.out.println(index2); // -1 -> z is not found in String Bangalore
        int indexOfGalore = city.indexOf("galore");
        System.out.println(indexOfGalore); // 3

    }
}
