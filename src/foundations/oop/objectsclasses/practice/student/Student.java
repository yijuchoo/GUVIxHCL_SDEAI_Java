package foundations.oop.objectsclasses.practice.student;

public class Student {
    private String name;
    private int age;

    public Student(String name, int age) {
        this.name = (name == null) ? "" : name;
        this.age = Math.max(0, age);
    }

    public boolean setName(String name) {
        String cleaned = (name == null) ? "" : name.trim();
        if (cleaned.isEmpty()) {
            return false;
        }
        this.name = cleaned;
        return true;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

}
