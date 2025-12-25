package foundations.arrays;

import java.util.Arrays;

public class TwoDArray {
    public static void main(String[] args) {
        int[][] m = {{1, 2}, {3, 4, 5}}; // 2 Rows
        int[][] arr = {
                // 3 Rows, 3 Columns
                {1, 2},
                {3, 4, 5},
                {10, 8}
        };

        int first = arr[0][0];
        System.out.println("first = " + first); // Output: 1

        int lastRow = arr.length - 1; // arr.length -> No. of rows = 3, -1 -> 2 rows
        System.out.println("lastRow = " + lastRow); // Output: 2

        int lastColumn = arr[arr.length - 1].length - 1;
        // arr.length - 1 -> index of the last row i.e. 2
        // arr[arr.length - 1].length → number of elements in the last row
        System.out.println("lastColumn = " + lastColumn); // Output: 1

        String lastRowArray = Arrays.toString(arr[arr.length - 1]);
        /*
        arr[arr.length - 1] → gives the last row (a 1D int[])
        Arrays.toString(...) → converts that array into a String representation, e.g., [3, 4, 5]
        Assign it to a String variable
        */
        System.out.println("lastRowArray = " + lastRowArray); // Output: [10, 8]

        int last = arr[lastRow][lastColumn];
        System.out.println("last = " + last); // Output: 8

        System.out.println("Assigning new number to array element");
        System.out.println("Original value = " + arr[1][0]); // 3
        arr[1][0] = 89;
        System.out.println("New value = " + arr[1][0]); // 89
        System.out.println(Arrays.deepToString(arr)); // [[1, 2], [89, 4, 5], [10, 8]]

        System.out.println(m.length); // Output: 2 -> No. of Rows of m
        System.out.println(arr.length); // Output: 3 -> No. of Rows of arr
        System.out.println(Arrays.toString(arr[arr.length - 1])); // Output: [10, 8]
        System.out.println(m[0].length); // Output: 2 -> No. of columns in Row 0 {1, 2}
        System.out.println(Arrays.toString(m[0])); // Output: [1, 2] -> Row 0
        System.out.println(m[1].length); // Output: 3 -> No. of columns in Row 1 {3, 4, 5}
        System.out.println(arr[2].length); // Output: 2 -> No. of columns in Row 2 {10, 8}
        System.out.println(m[1][2]); // Output: 5 -> Row 1, Col 2

        System.out.println("======================");
        for (int row = 0; row < arr.length; row++) { // the length of row that's iterating
            for (int col = 0; col < arr[row].length; col++) { // Each element in the specific row
//                arr[row][col] = arr[row][col] * 2;
//                arr[row][col] = arr[row][col] / 2;
                System.out.println(arr[row][col]);
            }
        }
    }
    /*
    Access items with [row] [col]
    {{1, 2}, {3, 4, 5}}

      col |  0  1  2
---------------------
    row 0 | {1, 2}
    row 1 | {3, 4, 5}

    arr.length in 1D = length of the array
    arr.length in 2D = total rows in 2D array
    If {{1, 2}, {3, 4, 5}, {1, 6}} then the arr.length is 3 rows

    arr[row no.X].length -> Number of Columns in Row no. X
    eg. arr[2].length -> 2 , Number of Columns in Row 2
    */

    // 3D Array
        /*
        int[layer][row][column]
        int[][][] arr = {
                // Layer 0
                {
                        {1, 2}, {3, 4, 5}
                },
                // Layer 1
                {
                        {1, 6}, {10, 8}
                }
        };
        */
}
