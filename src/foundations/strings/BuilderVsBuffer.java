package foundations.strings;

public class BuilderVsBuffer {
    static StringBuilder sb = new StringBuilder();
    static StringBuffer sbuf = new StringBuffer();

    public static void main(String[] args) throws InterruptedException {
        Runnable task = () -> {
            for (int i = 0; i < 10000; i++) {
                sb.append("A");
                sbuf.append("B");
            }
        };

        Thread t1 = new Thread(task);
        Thread t2 = new Thread(task);
        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println("Builder length: " + sb.length());
        System.out.println("Buffer length: " + sbuf.length());
    }
}
