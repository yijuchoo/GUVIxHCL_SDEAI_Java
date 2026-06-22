package leetcodepractice.linearsearch;

public class FindNumberExists {
/*
    Loop through an array
    Check if any element equals k
    If found → return its index
    If not found → return -1
*/
    public static int linearSearch(int[] arr, int k) {
        // Method 1: for loop
//        for (int i = 0; i < arr.length; i++) {
//            if (arr[i] == k) {
//                return i;
//            }
//        }
        // Method 2: Enahnced for loop
        int index = 0;
        for (int num : arr) {
            if (num == k) {
                return index;
            }
                index++;
        }
        // Only after the full loop
        return -1;
    }
    public static void main(String[] args) {
        int[] arr = {18, 12, 9, 14, 77, 50};
        //  index    0   1   2   3   4   5
        int k = 14;

        int result = linearSearch(arr, k);
        System.out.println(result);
    }
}