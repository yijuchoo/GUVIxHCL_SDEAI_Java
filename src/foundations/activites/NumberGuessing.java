package foundations.activites;

public class NumberGuessing {
    public static void main(String[] args) {
        /*
         * Goal:
         *   - The program stores a secret in 1 - 100 (hardcoded for now)
         *   - It repeatedly guesses the secret
         *   - After each guess, it prints "Higher than ..."
         *     or "Lower than ..." by comparing the guess with the secret
         */

        int secret = 23;
        int myGuess = 30;
/*
        while secret is between 1 and 100
        if myGuess is equal to secret, print "You guessed right! The secret number is " + secret
        else if myGuess < secret then print "Higher than " myGuess
        else (myGuess > secret) print "Lower than " myGuess
        (outside loop, not between 1 and 100) Out of 1 - 100 range
*/
        System.out.println("Example 1: Compare my guess against secret number");
        while (myGuess >= 1 && myGuess <= 100) {
            if (myGuess == secret) {
                System.out.println("You guessed right! The secret number is " + secret);
            } else if (myGuess < secret) {
                System.out.println("Secret number is higher than " + myGuess);
            } else {
                System.out.println("Secret number is lower than " + myGuess);
            }
            break;
        }
        if (myGuess < 1 || myGuess > 100) {
            System.out.println("Your guess is out of the range 1 - 100. Try again.");
        }


        /*
         * If I keep guessing, and it starts from any number from 1 to 100.
         */
        System.out.println("\nExample 2: Keep guessing until hit secret number");
        int guess = 30;
        while (guess >= 1 && guess <= 100) {
            System.out.print("[My guess " + guess + "] -- ");

            if (guess == secret) {
                System.out.println("You guessed right");
                break; // exit loop
            } else if (guess < secret) {
                System.out.println("Secret number is higher than " + guess);
                guess++; // move upward
            } else { // guess > secret
                System.out.println("Secret number is lower than " + guess);
                guess--; // move downward
            }
        }
        // Only print "out of range" if loop ended naturally (not via break)
        if (guess < 1 || guess > 100) {
            System.out.println("Outside range of 1 - 100. Try again.");
        }

        // Example 3: Live Class
        System.out.println("\nExample 3: Random generated number to guess secret number");
        // math.random -> gives a number equal to 0.00 or less than 1
        // eg. (int) 0.1234 -> 0
        while (true) {
            int randomNumber = (int) (Math.random() * 100) + 1; // casting double to an integer
            /* The (int) part casts the double into an integer by dropping the decimal part (truncating).
             *  Examples:
             * 50.9 → 50
             * 0.0 → 0
             * 99.99 → 99
             * Now the range is 0–99 (inclusive)
             * Adding 1 shifts the range from 0 to 99 → 1 to 100.
             * So the final randomNumber is an integer between 1 and 100, inclusive.
             */
            if (randomNumber == secret) {
                System.out.println("Secret found!");
                break;
            } else if (randomNumber > secret) {
                System.out.println(randomNumber + " is higher than secret no.");
            } else {
                System.out.println(randomNumber + " is lower than secret no.");

            }
        }

        // Example 4: Live Class
        System.out.println("\nExample 4: Using i = 1 to guess secret number");
        for (int i = 1; i <= 100; i++) {
            if (i == secret) {
                System.out.println("Secret found!");
                break;
            } else if (i > secret) {
                System.out.println(i + " is Higher than secret no.");
            } else {
                System.out.println(i + " is Lower than secret no.");
            }
        }

    }
}
