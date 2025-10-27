package foundations.activites;

public class MinMaxArray2 {
    /*
    * Proper usage
    */

    // Find the maximum value in an array
    public static int max(int[] arr) {
        // Check for null or empty array
        if (arr == null || arr.length == 0) {
            // Sentinel value: no valid maximum
            return Integer.MIN_VALUE;
        }

        int maxValue = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > maxValue) {
                maxValue = arr[i];
            }
        }
        return maxValue;
    }

    // Find the minimum value in an array
    public static int min(int[] arr) {
        // Check for null or empty array
        if (arr == null || arr.length == 0) {
            // Sentinel value: no valid minimum
            return Integer.MAX_VALUE;
        }

        int minValue = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < minValue) {
                minValue = arr[i];
            }
        }
        return minValue;
    }

    // Test it in main()
    public static void main(String[] args) {
        int[] array = {20, 40, 50, 10, 30};
//        int[] array = {}; // Test for NULL

        System.out.println("Maximum value is " + max(array)); // Output: 50
        System.out.println("Minimum value is " + min(array)); // Output: 10

        // Test sentinel behavior
        System.out.println("Max of empty array: " + max(new int[0])); // Output: -2147483648
        System.out.println("Min of empty array: " + min(new int[0])); // Output: 2147483647
        System.out.println("Max of null array: " + max(null)); // Output: -2147483648
        System.out.println("Min of null array: " + min(null)); // Output: 2147483647
    }
}