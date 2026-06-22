class Employee {
    // property to store the employee name
    name: string;

    // property to store the city, state, country
    city: string;
    state: string;
    country: string;

    // constructor -> runs automatically when the object is created
    constructor(name: string, city: string, state: string, country: string) {
        this.city = city;
        this.state = state;
        this.country = country;
        this.name = name;
    }

    // method that shares by all employees
    displayInfo(): void {
        console.log("Employee name", this.name);
        console.log("Employee city", this.city);
        console.log("Employee state", this.state);
        console.log("Employee country", this.country);
    }
}

// Employee 1
const employee1 = new Employee("Ram", "bangalore", "KA", "India");
employee1.displayInfo();
/* 
Output:
Employee name Ram
Employee city bangalore
Employee state KA
Employee country India
 */

// Employee 2
const employee2 = new Employee("Venkat", "bangalore", "KA", "India");
employee2.displayInfo();
/* 
Output:
Employee name Venkat
Employee city bangalore
Employee state KA
Employee country India
 */