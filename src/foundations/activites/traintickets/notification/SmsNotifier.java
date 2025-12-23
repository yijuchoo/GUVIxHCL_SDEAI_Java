package foundations.activites.traintickets.notification;

public class SmsNotifier implements Notifier {
    @Override
    public void send(String msg) {
        System.out.println("SMS -> " + msg);
    }
}
