package foundations.activites.arrays;

public class AverageArray {
    /*
    Lecture 4: Arrays ,String API & Wrapper Classes

    Activity: Average

    What you will build
        - A method that returns the average of all elements in an int[]
    Hints for accurate results
        - Add up everything first, then divide once at the end
        - Use a wider running total to reduce overflow risk
    Edge rules we will use today
        - If the array is empty, return 0.0 as “no data yet”
        - Make the return type double to keep fractional parts
    */
    public static int sum(int[] arr) { // Defined a parameter called arr
        if (arr == null || arr.length == 0) {
            return 0;
        }

        int total = 0;
        // For Loop Method
        for (int i = 0; i < arr.length; i++) {
            total = arr[i] + total;
        }
        // For Each Method
        /*
            The loop automatically goes through each element in the array arr.
            On every iteration, the value of the current element is assigned to the variable i.
        */
        int total2 = 0;
        for (int j : arr) {
            total2 = j + total2; // total += i;
        }
        return total2;
    }

    // Method to get the average of all elements
    public static double avg(int[] arr) {
        if (arr == null || arr.length == 0) {
            return 0.0; // no data
        }

        int total = sum(arr);
        double average;
        average = (double) total / arr.length;
        return average;
    }

    public static void main(String[] args) {
        int[] array = {5, 7, 10, 20};

        // store returned results
        int total = sum(array);
//        int total2 = sum(array);
        double average = avg(array);
        System.out.println("Total sum of elements is " + total); // Output: 42
        System.out.println("Total sum of elements is " + sum(array)); // Output: 42
        System.out.println("Average of elements is " + average); // Output: 10.5

        // Another way of printing the result when sum and avg values are not stored in a variable
//        System.out.println("Total sum of elements is " + sum(array)); // Output: 42
//        System.out.println("Average of elements is " + avg(array)); // Output: 10.5
    }
}
