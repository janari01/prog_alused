const Person = require('./Person');

class Student extends Person {
    constructor(name, grades = [], id = null) {
        super(name);
        this.grades = grades;
        this.id = id;
    }

    addGrade(student, grade) {
        this.grades.push({student: student, grade: grade});
    }

    setId(id) {
        if (!this.id) {
            this.id = id;
        }
    }

    getId() {
        return this.id;
    }

    getGrades() {
        // iga element object - grades array
        return this.grades;
    }

    getAverageGrade() {
        if (!this.grades.length) { 
            return -1;
        }
        
        let sum = 0;
        for (let x = 0; x < this.grades.length; x++) { sum += this.grades[x].grade; };
        return sum / this.grades.length;
    }
}

module.exports = Student;