class Person {
    constructor() {
        this.firstname = '';
        this.lastname = '';
        this.age = 0;
    }
}

class Student {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}

let person1 = new Person();
person1.firstname = "John";
person1.lastname = "Doe";
person1.age = 30;

let person2 = new Person();
person2.firstname = "Jane";
person2.lastname = "Smith";
person2.age = 25;

let person3 = new Person();
person3.firstname = "Alice";
person3.lastname = "Johnson";
person3.age = 40;

let student1 = new Student("Michael", "Brown", 20);
let student2 = new Student("Emily", "Davis", 22);
let student3 = new Student("David", "Wilson", 19);