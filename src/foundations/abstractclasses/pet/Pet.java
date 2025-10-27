package foundations.abstractclasses.pet;

public abstract class Pet {
    private String name;

    public Pet(String name) {
        this.name = name;
    }

    // Must implement in child
    public abstract void makeSound();

    public void consumeFood() {
        System.out.println(name + " is eating some food.");
    }
}
