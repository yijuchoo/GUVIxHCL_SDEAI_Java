package foundations.oop.objectsclasses.practice.wallet;

public class RewardWallet extends Wallet {

    private int rewardPoints = 0;


    public RewardWallet(int balance) {
        super(balance);
    }

    @Override
    public boolean pay(int amount) {
        if (!super.pay(amount)) {
            return false;
        }
        rewardPoints++;
        return true;
    }

    public int getRewardPoints() {
        return rewardPoints;
    }
}
