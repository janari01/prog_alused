class Course {
    constructor(name, course_grades = []) {
        this.name = name;
        this.course_grades = course_grades;
    }

    addGrade(student, grade) {
        this.course_grades.push({student: student, grade: grade});
    }

    getGrades() {
        return this.course_grades;
    }

    getAverageGrade() {
        if (!this.course_grades.length) {
            return -1;
        }

        let sum = 0;
        for (let x = 0; x < this.course_grades.length; x++) {
            sum += this.course_grades[x].grade;
        }
        return Math.round(sum / this.course_grades.length);
    }

    description() {
        return this.name;
    }
}

module.exports = Course;