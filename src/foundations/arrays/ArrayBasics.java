package foundations.arrays;

public class ArrayBasics {
    public static void main(String[] args) {
        // Array declaration
        // int[] array;
        // Array declaration & initialization
        int randomInt = 5;
        int[] array = {10, 20, 30, 40};
        System.out.println(array); // Output: [I@6acbcfc0 -> References. Arrays are reference variables
        System.out.println(array[0]); // Output: 10
        System.out.println(array[1]); // Output: 20
        System.out.println(array[2]); // Output: 30
        System.out.println(array[3]); // Output: 40

        array[0] = 50; // Update array of index 0 to 50.
        System.out.println(array[0]); // Output: 50

        System.out.println(array.length); // Output: 4 -> No. of elements in an array
        System.out.println("Last element " + array[array.length-1]); // Accessing the last element of the array
        System.out.println("Last 2nd element " + array[array.length-2]); // Accessing the last 2nd element of the array
        System.out.println("=========================");

        // Creating another array
        // int -> data type of array elements
        // array2[] -> Declares an array variable named array2
        // new int[3] -> Creates an array with 3 integer slots (all initialized to 0)
        // Allocate memory for 3 elements
        int array2[] = new int[3];
        // Assign the values
        array2[0] = 10; // array2 'sub' 0 -> array2[0]
        array2[1] = 20;
        array2[2] = 30;
        // array2[3] = 50; // This will give an error: ArrayIndexOutOfBoundsException
        System.out.println(array2[0]); // Output: 10
        System.out.println(array2[array2.length-1]); // Output: 30

        if (array2.length / 2 > 0) {
            System.out.println("In the if...");
        }
    }
}
