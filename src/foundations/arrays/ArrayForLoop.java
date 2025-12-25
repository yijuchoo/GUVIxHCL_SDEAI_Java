package foundations.arrays;

public class ArrayForLoop {
    public static void main(String[] args) {
        int[] a = {2, 4, 6};
        // index   0   1  2
        for (int i = 0; i < a.length; i++) {
            // If i = 1, then index 0 (value 2) will not be multiplied by 2
            // It will start at index 1 (value 4) to multiply by 2
            a[i] = a[i] * 2;
        }
        System.out.println(a[0] + " " + a[1] + " " + a[2]);
        // If starts at i = 1, a[0] will still be printed but it will remain as value 2 since
        // index 0 (value 2) is not multiplied.

        // Output: 4 8 12
    }
}
