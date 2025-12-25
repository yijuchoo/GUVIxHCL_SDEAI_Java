package foundations.switchstatements;

public class ClassicSwitch {
    public static void main(String[] args) {
        // Older Version of Switch Expression
        // switch (value)
        /*
         * Evaluates the condition once
         * Compares to labelled cases
         * Chooses matching blocks
         * Default handles "Anything Else"
         */
        // break;
        /*
         * Ends the chosen block
         * without break, control falls through into the next case
         */
        // Use for discrete choices (eg. day number, menu option) where each label has a short, clear action or assignment

        // Day 1 - 7
        int day = 4;
        String dayName;

        switch (day) {
            case 1:
                dayName = "Mon";
                break;
            case 2:
                dayName = "Tue";
                break;
            case 3:
                dayName = "Wed";
                break;
            case 4:
                dayName = "Thu";
                break;
            case 5:
                dayName = "Fri";
                break;
            case 6:
                dayName = "Sat";
                break;
            case 7:
                dayName = "Sun";
                break;
            default:
                dayName = "Unknown";
        }
        System.out.println(dayName);
        // Output: Thu

    }
}
