package dsa.arrays;

public class Test {
    public static void main(String[] args) {
        // O(1)
//        for (var i = 0; i < 5; i++) {
//            System.out.println(i);
//        }

        /*
        Output:
            0
            1
            2
            3
            4
        */

        // Memory allocation for 5 integers
        // Space Complexity: O(n)
        // n will look like: ["10"] in Edit Configurations > args
        // it can also be: Input: 10 45 60 -> ["10", "45", "60"]
        int n = Integer.parseInt(args[0]);
        int[] pref = new int[n];
        for(var i = 0; i < pref.length; i++) {
            System.out.println(i);
        }
        /*
            Output:
            0
            1
            2
            3
            4
            5
            6
            7
            8
            9
        */
    }
}
