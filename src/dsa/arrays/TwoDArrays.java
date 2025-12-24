package dsa.arrays;

public class TwoDArrays {
    public static void main(String[] args) {
        // 2 Nov 2025 - L16  Lecture 12 DSA Arrays and Strings notes
        int[][] arr = new int[3][5];
        // loop over the rows -> O(n) -> row 1, row 2, row 3...
        // arr.length -> length of the rows
        for (var i = 0; i < arr.length; i++) {
            // for a given row, iterate over the columns
            for (var j = 0; j < arr[i].length; j++) {
                arr[i][j] = i + j;
                System.out.print(arr[i][j]);
                if(j < arr[i].length-1){
                    System.out.print(", ");
                }
            }
            System.out.println();
        }
        /*
            0, 1, 2, 3, 4
            1, 2, 3, 4, 5
            2, 3, 4, 5, 6
        */
        // 2D matrix of size 3r, 3c -> O(n * n) -> O(n^2) => 9 iterations
        // Time Complexity: 2D matrix of size n = 3, m = 5 -> O(n * m) => 15
    }
}
