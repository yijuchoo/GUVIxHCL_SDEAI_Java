package exercises.wrapperclasses;

class Box<T> {
    T value;
    Box(T value) { this.value = value; }
    T get() { return value; }
}

public class Test {
    public static void main(String[] args) {
        Box<Integer> box = new Box<>(25);
        System.out.println(box.get());
    }
}