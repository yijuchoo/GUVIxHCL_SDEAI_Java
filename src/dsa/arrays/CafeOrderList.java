package dsa.arrays;

public class CafeOrderList {
    public static void main(String[] args) {
        // 2 Nov 2025 - L16  Lecture 12 DSA Arrays and Strings notes

        // Representing a simple café order list
        int[] prices = {120, 90, 100, 140, 80};
        System.out.println("Index 0: " + prices[0]); // 120
        System.out.println("Index 4: " + prices[4]); // 80
        // Access by index gives O(1) constant time lookup

        int[] orders = {120, 90, 100, 140, 80};
        System.out.println("\nTotal orders: " + orders.length); // Total orders: 5
        for (int i = 0; i < orders.length; i++) {
            System.out.println("Order " + i + ": " + orders[i]);
        }
        /*
        Output:
            Order 0: 120
            Order 1: 90
            Order 2: 100
            Order 3: 140
            Order 4: 80
        */
    }
}
