# Exercise A — Create a Student Class (Constructor + Validation)

## 🎯 Goal
Create a class that protects its state by validating everything that enters through the constructor.

---

## 📌 Requirements

### 1. Create a class named **`Student`** with two fields:
- `String name`
- `int age`

### 2. Implement a constructor with validation rules:

- If `name` is `null`, store `""` (empty string).
- Otherwise, store the given name.
- If `age` is negative, store `0`.
- Otherwise, store the provided age.

### 3. Add getter methods:
- `getName()`
- `getAge()`

---

## 📝 Sample Structure

```java
public class Student {

    private String name;
    private int age;

    public Student(String name, int age) {
        // constructor validation logic goes here
    }

    public String getName() {
        // return name
    }

    public int getAge() {
        // return age
    }
}
