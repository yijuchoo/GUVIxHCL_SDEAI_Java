package dsa.arrays;

public class ScoresMain {
    // Lecture 16 arrays > Main.java
    public static void main(String[] args) {
        int[] scores = {85, 40, 23};
        System.out.println(scores.length); // Output: 3
        // System.out.println(scores[5]); // Error
        // ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 3

        for(int n : scores){
            System.out.println("Value: " + n);
        }
        /*
        Output:
            Value: 85
            Value: 40
            Value: 23
        */
    }
}
