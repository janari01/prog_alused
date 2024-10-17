class Student {
    constructor(name, finished = false) {
        this.name = name;
        this.finished = finished;
    }
}

const student = new Student("John")
console.log(student.name)      
console.log(student.finished)  