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

        int secret = 66;
        int myGuess = 50;
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
        int guess = 58;
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


    }
}
