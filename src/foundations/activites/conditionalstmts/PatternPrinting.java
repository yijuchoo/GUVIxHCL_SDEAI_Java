package foundations.activites.conditionalstmts;

public class PatternPrinting {
    /*
     * Lecture 2 & 3: Control Flow, Loops & Functions
     *
     * Activity C: Pattern Printing
     *
     * Goal:
     *   - Print a Left-aligned triangle of * using a variable rows set at the top (no user input yet)
     *   - The outer loop controls rows; the inner loop prints row number of stars
     * Design rules:
     *   Decide if the last row counts (we'll make it inclusive). Print a newline after each row;
     *   Do not hardcode star counts
     * Consider:
     *   - Declaring a variable, totalRows, and assigning it a value
     *   - for-loop where i starts at 1 and goes to the totalRows, incrementing by 1
     *   - For each iteration of i, a nested loop to perform the printing
     */

    public static void main(String[] args) {
        int totalRows = 5;
        for (int i = 1; i <= totalRows; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            // After the inner loop finishes printing all stars for one row, move to the next line
            System.out.println();
        }
    }
}

/*
* Output:
  *
  **
  ***
  ****
  *****
*/
