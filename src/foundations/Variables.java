package foundations;

public class Variables {
    public static void main(String[] args) {
        // this is a comment
        // byte, short, int, long, float, decimal, char, boolean
        // To declare a variable: dataType identifier;

        // byte
        // hold -128 to +128
        byte demo;
        demo = 50;
        System.out.println("byte " + demo);
        // 128 -> -128
        // 129 -> -128 +1 = -127
        byte placeholder = (byte) 129;
        System.out.println("type-Casted (int to byte) " + placeholder);

        // short
        // 2^16; ~-32,000 to ~+32,000
        short test = 10000;
        System.out.println("short " + test);

        // int
        int distanceToMoon = 384_400;
        System.out.println("int " + distanceToMoon);

        // char
        char maleOrFemale = 'M';
        System.out.println("char " + maleOrFemale);

        // boolean
        boolean matchOver = true;
        System.out.println("boolean " + matchOver);

        System.out.println("\nHello World!");
    }
}
