package foundations.activites.traintickets.notification;

public class WhatsAppNotifier implements Notifier {
    @Override
    public void send(String msg) {
        System.out.println("WA -> " + msg);
    }
}
