package foundations.oop.abstractclasses.pet;

public class Main {
    public static void main(String[] args) {
        // 'Pet' is abstract; cannot be instantiated
//        Pet myPet = new Pet("testpet");

        // This line does not create a Pet object directly
        /*  (because Pet is abstract and cannot be instantiated).
            Instead, it creates:
            ✔️ An anonymous subclass of Pet
            ✔️ That subclass implements the abstract method makeSound()

            treated as:
            class SomeGeneratedClass extends Pet {
                public SomeGeneratedClass() { super("testpet"); }

                @Override
                public void makeSound() {
                    System.out.println("Grrrr....");
                }
            }
        */
        Pet myPet = new Pet("testpet") {
            @Override
            public void makeSound() {
                System.out.println("Grrrr....");
            }
        };
        myPet.makeSound(); // Grrrr....

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
