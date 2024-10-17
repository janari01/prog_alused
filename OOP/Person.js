class Person {
    constructor(name, date_of_birth) {
        this.name = name;
        this.date_of_birth = date_of_birth;
    }

    setDateOfBirth(year) {
        this.date_of_birth = year;
    }

    getDateOfBirth() {
        return this.date_of_birth;
    }

    age() {
        const year = new Date().getFullYear();
        return Math.abs(this.date_of_birth - year);
    }

    getName() {
        return this.name;
    }

    description() {
        return {name: this.name, description: `Hello, my name is ${this.name}.`};
    }
}

module.exports = Person;