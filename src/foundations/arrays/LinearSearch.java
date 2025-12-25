package foundations.arrays;

public class LinearSearch {
    // Example finding a number exists in an Array
    // Go through each number to perform a comparison to see whether this is the number or not
    static int indexOf(int[] arr, int target) {
        if (arr == null) return -1;
        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] == target) return i;
            // if arr[0] == 7 -> is 4 == 7 -> No
            // if arr[1] == 7 -> is 7 == 7 -> Yes
        }
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(indexOf(new int[]{4, 7, 7}, 7));
        //                          index    0  1  2
        // Output: 1
        // returns the first element that's equal to the target, even though there's duplicates

        System.out.println(indexOf(new int[]{4, 7, 7}, 5));
        // Output: -1
        // If target is not found in the elements, return -1

    }
}
