package dsa.backtracking;

import java.util.ArrayList;
import java.util.List;

/*
    Problem:
    You have numbers [2, 3, 5] and a limit K = 5.
    Generate all subsequences whose sum is ≤ 5.
    (Assume all numbers are non-negative.)
 */
public class BacktrackingVariation {

    /*
     * Recursive approach to backtracking an input array
     * @param nums      the input array
     * @param index     the position in nums we're currently considering
     * @param current   the subsequence we have chosen so far. Eg. [2] or [2,3] ...
     * @param currentSum   the sum of the subsequence, current
     * @param K
     * index++ - discuss
     * [] -> [2] -> current=[2,3],currentSum=5....
     */
    private static void backtrack(int[] nums, int index,
                                  List<Integer> current, int currentSum, int K) {
        // Pruning condition
        // if the currentSum > K -> no further exploration required; return
        if (currentSum > K) {
            // System.out.println(current + " : No further exploration required.");
            // Not printing since currentSum is > K which does not meet K <= 5.
            return;
        }

        // Base case
        // if the index == nums.length --> we've reached the end of the array
        // at this point, currentSum <= K
        // print current
        // return
        if (index == nums.length && currentSum <= K) {
            System.out.println("Current: " + current);
            return;
        }

        // decision 1: TAKE nums[index]
        // choosing to include the current element in the subsequence
        // add nums[index] to current
        // new current sum -> currentSum + nums[index]
        // backtrack(nums, index + 1, current, newCurrentSum, K )
        current.add(nums[index]); // Choose
        int newCurrentSum = currentSum + nums[index];
        backtrack(nums, index + 1, current, newCurrentSum, K);
        // or backtrack(nums, index + 1, current, currentSum + nums[index], K)

        // decision 2: SKIP nums[index]
        // remove the last element we added from current
        // backtrack(nums,index + 1, current, currentSum, K)
        current.remove(current.size() - 1); // Unchoose
        backtrack(nums, index + 1, current, currentSum, K); // currentSum will be using the one from previous

    }

    public static void main(String[] args) {
        int[] nums = {2, 3, 5};
        int K = 5;
        backtrack(nums, 0, new ArrayList<>(), 0, K); // comparing currentSum to K
        // the current/ subsequence is increased by 1.
        // therefore instead of using Array of length 1 -> [2] and
        // copy the current to an array whose length is 2 -> [2,3]
        // we use ArrayList instead as its flexible as we increase the size.

    }
}
// Output:
// Current: [2, 3]
// Current: [2]
// Current: [3]
// Current: [5]
// Current: []