const Student = require('./Student');
const Course = require('./Course');

class School {
    constructor(school_name, students = [], courses = []) {
        this.school_name = school_name;
        this.students = students;
        this.courses = courses;
    }

    addCourse(add_course) {
        let course_check = this.courses.find(course => course.name === add_course.name);

        if (!course_check) {
            this.courses.push(add_course);
        }

    }

    addStudent(student) {
        let exists = this.students.find(stud => stud.getId() === student.getId());
        if ((!exists || !this.students.length) && student.age() > 7) {
            student.setId(this.students.length + 1);
            this.students.push(student);
        }
    }

    addStudentGrade(student, course, grade) {
        // hinne 6pilasele ja kursusele
        // class obj, class obj, int
        if (this.students.includes(student) && this.courses.includes(course)) {
            student.addGrade(course, grade);
            course.addGrade(student, grade);
        }
    }

    getStudents() {
        return this.students;
    }

    getCourses() {
        return this.courses;
    }

    getStudentsOrderedByAverageGrade() {
        // teeb koopia, siis sorteerib
        return this.students.slice().sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
    }
}

module.exports = School;