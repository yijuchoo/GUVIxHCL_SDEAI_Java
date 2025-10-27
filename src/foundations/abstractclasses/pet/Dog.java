package foundations.abstractclasses.pet;

public class Dog extends Pet {
    public Dog(String name) {
        super(name);
    }

    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }

    @Override
    public void consumeFood() {
        System.out.println("My dog is enjoying some beef jerky");
    }

    public void consumeFood(String foodName) {
        System.out.println("My dog is enjoying some " + foodName);
    }
}
