package foundations.strings;

public class StringBuilderDemo {
    public static void main(String[] args) {
        /*
            Showing how StringBuilder is used to efficiently build a single string
            from multiple parts (in this case, "a", "b", "c"), separated by commas.
        */
        // parts is an array containing 3 strings: "a", "b", "c".
        String[] parts = {"a", "b", "c"};
        // Add String[] elements to the StringBuilder
        // Create a new StringBuilder object and instantiate
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < parts.length; i++) {
            if (i > 0) sb.append(",");
            sb.append(parts[i]);
        }
        String out = sb.toString();
        System.out.println(out); // a,b,c
    }
}
/*
First iteration (i = 0):

i > 0 is false, so no comma is added.

sb.append(parts[0]) → appends "a"
→ now sb = "a"

✅ Second iteration (i = 1):

i > 0 is true, so add a comma: sb.append(",")
→ now sb = "a,"

Then sb.append(parts[1]) → appends "b"
→ now sb = "a,b"

✅ Third iteration (i = 2):

i > 0 is true, so add a comma again → "a,b,"

Append "c" → "a,b,c"

StringBuilder stores the characters in a mutable buffer.

toString() converts the final content ("a,b,c") into a regular immutable String
*/