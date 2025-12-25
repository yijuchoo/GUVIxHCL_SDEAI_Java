package foundations.arrays;

public class ArrayDemo {
    public static void main(String[] args) {
        // Example 1
        // int[] a -> Common Form
        // int a[] -> is also valid but less consistent
        // int[3] -> Giving array size of 3. 3 Elements.
        int[] a = new int[3];        // defaults: 0, 0, 0
        System.out.println(a.length); // 3
        System.out.println("a values: " + a[0] + a[1] + a[2]);

        // Does not create a new array.
        // It simply makes b refer to the same array that a refers to
        // (a is a reference variable that points to its array)
        int[] b = a;                  // also same as a
        System.out.println(b.length); // 3
        System.out.println("b values before inserting 42 to index 1: " + b[0] + b[1] + b[2]);
        b[1] = 42;
        System.out.println("b values: " + b[0] + b[1] + b[2]);
        System.out.println("a index 1: " + a[1]);      // if b[1] is 42, then a[1] is also 42
        System.out.println("b index 0: " + b[0]);      // if a[0] is 0, then b[0] is also 0

        // Example 2
        // Declare and initialize an array, given the value
        int[] c = {10, 20, 30, 40};
        // length = 1   2   3   4
        if (c.length > 0) {
            int last = c[c.length - 1];
            System.out.println(last); // 40
        }


    }
}
