package dsa.activities.arrays;

public class OrderStats {
    public static void main(String[] args) {
        int[] orders = {120, 90, 100, 140, 80};
        printSumAndAverage(orders);

    }

    public static void printSumAndAverage(int[] arr){
        int sum = 0;
        double average = 0;
        for(int elem : arr) {
            // Shorthand: sum += elem;
            sum = sum + elem;
        }
        average = (double) sum / arr.length;
        System.out.println("Sum: " + sum + ", Average: " + average);
    }
}
/*
    Lecture 12 DSA Arrays and Strings notes
    Activity: Sum and Average

    - Problem: Given an array of integers representing daily order totals,
      compute and print the sum and average
    - Ensure no invalid index access occurs.
    - Test with small and empty arrays.

*/