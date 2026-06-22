package leetcodepractice.linearsearch;
/*
Linear Search Algorithm - Theory + Code + Questions
https://www.youtube.com/watch?v=_HRA37X8N_Q&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=13
*/
public class Main {
    public static void main(String[] args) {
        int[] nums = {23, 45, 1, 2, 8, 19, -3, 16, -11, 28};
        int target = 19;

        int ans = linearsearch(nums, target);
        System.out.println(ans); // Output: 5
        int ans2 = linearsearch2(nums, target);
        System.out.println(ans2); // Output: 19
    }

    // 1. Search in the array: Return the index if item found
    // Otherwise if item not found, Return -1
    static int linearsearch(int[] arr, int target) {
        if (arr.length == 0) {
            return -1;
        }

        // Run for loop
        for (int index = 0; index < arr.length; index++) {
            // Check for element at every index if it is = target
            int element = arr[index];
            if (element == target) {
                return index;
            }
        }

        // this line will execute if none of the return statements above have executed
        // hence target not found
        return -1;
    }

    // 2. Search the target and return the element
    static int linearsearch2(int[] arr, int target) {
        if (arr.length == 0) {
            return -1;
        }

        // Run for loop
        for (int index = 0; index < arr.length; index++) {
            // Check for element at every index if it is = target
            int element = arr[index];
            if (element == target) {
                return element;
            }
        }

        // this line will execute if none of the return statements above have executed
        // hence target not found
        return -1;
    }

}
