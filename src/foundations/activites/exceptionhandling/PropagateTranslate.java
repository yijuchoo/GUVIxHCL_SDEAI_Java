package foundations.activites.exceptionhandling;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class PropagateTranslate {

    public static void main(String[] args) throws IOException {
        /*
         * Activity: propagate or translate
         * A) Input text is "29x" at gate keypad during entry. Assume input must be a number.
         *       • Translate to IllegalArgumentException with message “fare must be a whole number”
         */
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new InputStreamReader(System.in));
            System.out.print("Enter Fare Amount: ");

            String userInput = reader.readLine();
            int fare = Integer.parseInt(userInput);
            System.out.println("You entered: $ " + fare);

        } catch (IllegalArgumentException i) {
            throw new IllegalArgumentException("Fare must be a whole number");
            //            System.out.println("Fare must be a whole number");

        } finally {
            if (reader != null) {
                reader.close();
            }
        }

    }

}
