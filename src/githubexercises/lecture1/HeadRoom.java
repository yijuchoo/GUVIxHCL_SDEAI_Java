package githubexercises.lecture1;

public class HeadRoom {
    public static void main(String[] args) {
        int appStart;
        appStart = 2_147_483_647;
        appStart += appStart + 1;
        System.out.println(appStart); // -1
    }

}
/*
    Lecture 1 Problem Set
    Variables, Primitive Types, Literals

    5. Type with headroom
        Pick a primitive for "milliseconds since app start" that must work up to 3 days;
        declare the variable and show with a quick bound check that overflow cannot occur within that window.
*/