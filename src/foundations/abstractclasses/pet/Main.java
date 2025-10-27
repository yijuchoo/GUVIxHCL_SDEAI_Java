package foundations.abstractclasses.pet;

public class Main {
    public static void main(String[] args) {
        // Declaration of type Pet
        // Instance of its children -> Dog
        Dog myDog = new Dog("Charlie");

        // Declaration of type Dog
        Dog myDog2 = new Dog("Pocky"); // To declare using Dog(child) not Pet(Parent)
                                             // as Dog inherits from Pet

        myDog.makeSound();
        myDog2.makeSound();
        myDog.consumeFood("chicken slices");
        myDog2.consumeFood();

    }
}
