package foundations.activites.threadtwoworkers;

public class ThreadTwoWorkers {
    public static void main(String[] args) {
        /*
        * Create two workers that print their task names and then exit
        * Implement one as a Thread subclass and the other as a Runnable
        */
        Runnable taskA = new Runnable() {
            @Override
            public void run() {
                System.out.println("Task A");
            }
        };

        Runnable taskB = () -> System.out.println("Task B");

        Thread threadA = new Thread(taskA,"Worker-A");
        Thread threadB = new Thread(taskB,"Worker-B");

        threadA.start();
        threadB.start();
    }
}
