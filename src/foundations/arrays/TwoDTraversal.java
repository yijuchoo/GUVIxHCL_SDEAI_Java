package foundations.arrays;

public class TwoDTraversal {
    public static void main(String[] args) {
        int[][] m = {{1, 2}, {3, 4, 5}};
        for (int r = 0; r < m.length; r++) { // Loop for Row
            for (int c = 0; c < m[r].length; c++) { // Loop for Column
                System.out.print(m[r][c] + " ");
            }
            System.out.println();
        }
        /*
        Output:
        1 2
        3 4 5
        */
        System.out.println("======================");
        String str = "";
        for (int row = 0; row < m.length; row++) {
            for (int col = 0; col < m[row].length; col++) {
                str = str + m[row][col] + "\t";
            }
            System.out.println(str);
            str = "";
        }
        /*
        Output:
        1	2
        3	4	5
        */

    }

}
