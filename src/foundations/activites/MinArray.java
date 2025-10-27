package foundations.activites;

public class MinArray {
    public static int min(int[] arr) {
        if (arr == null || arr.length == 0) {
            return -1; // or return Integer.MAX_VALUE as a sentinel
        }

        int minValue = arr[0]; // start with first element
        // Start from the second element (index 1) and
        // compare each element to the current minValue
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < minValue) {
                minValue = arr[i];
            }
        }
        return minValue;
    }

    public static void main(String[] args) {
        int[] array = {20, 40, 50, 10, 30};
        System.out.println(array.length);
        int min = min(array);
        System.out.println("Minimum value is " + min);
    }
}
