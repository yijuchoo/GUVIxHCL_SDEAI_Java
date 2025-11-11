package foundations.strings;
/*
Problem: You receive a compact tag like "A3C2Z5"
    - Each letter is followed by a digit telling how many times to repeat it.
    - Expected output: "AAACCZZZZZ".
Task
    - Write a method decodeTag(String input) to expand the tag.
    - Use charAt() to read letters and digits one by one.
    - Use substring() or concat() to build the new string progressively.
    - Call .intern() on the final string to store it in the String pool.

*/
public class TagDecoder {
    public static void main(String[] args) {
        decodeTag("A3C2Z5");
        decodeTag("B1D4");
        decodeTag("AB12");  // invalid example
    }

    public static void decodeTag(String input) {
        // TODO
        // if (decode.length % 2 = 0) return 0;
        // else return 1;

        // for each decodeTag.length / 2 = 0
        // if i is more than 0 and less than 9, store in variable freq
        // else, store in varibale character
        //
    }
}
