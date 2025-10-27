package foundations.activites;

public class MinMaxArray {
    /*
     * What you will build
     *  - A method to return the largest value in an int[]
     *  - A method to return the smallest value in an int[]
     * Hints for a correct first pass
     *  - Start from the first element and track
     *  - Update the best when you see a better candidate
     * Edge rules
     *  - If array is empty or NULL, return a documented sentinel
     *  - For min use Integer.MIN_VALUE; for max use Integer.MAX_VALUE
     */

    public static int max(int[] arr) {

        if (arr == null || arr.length == 0) {
            return -1;
        }
        int maxValue = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (maxValue < arr[i]) {
                maxValue = arr[i];
                System.out.println(maxValue);
            }
        }
        return maxValue;
    }

    public static int min(int[] arr) {
        int minValue = 0;
        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                minValue = arr[i];
            } else {
                minValue = arr[i + 1];
            }
        }
        return minValue;
    }

    public static int minValue(int[] arr) {
        // Validation
        int min = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }

    public static void main(String[] args) {
        // max in an array
        int[] array = new int[5];
        array[0] = 20;
        array[1] = 40;
        array[2] = 50;
        array[3] = 10;
        array[4] = 30;

        int max = max(array);
        System.out.println("Maximum value is " + max);
        max(null);

        System.out.println(Integer.MIN_VALUE);
//        int min = min(array);
//        System.out.println("Minimum value is " + min);
    }
}
