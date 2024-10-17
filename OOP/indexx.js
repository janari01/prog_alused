const Person = require('./Person')
const Student = require('./Student')
const Course = require('./Course')
const School = require('./School')

const school = new School("Awesome School")
const student1 = new Student("John Smith")
student1.setDateOfBirth(1995)
const student2 = new Student("Mary Lee")
student2.setDateOfBirth(2000)

school.addStudent(student1)
school.addStudent(student2)

// console.log(school.getStudents())  // 2

const course1 = new Course("Math")
const course2 = new Course("Physics")

school.addCourse(course1)
school.addCourse(course2)
school.addCourse(course1)

// console.log(school)

school.addStudentGrade(student1, course1, 4)
school.addStudentGrade(student1, course1, 2)
school.addStudentGrade(student1, course2, 5)
school.addStudentGrade(student2, course1, 5)
// school.addStudentGrade((new Student("fuck Lee")), (new Course("dsa")), 5)
// console.log(student1)
// console.log(student2)
// console.log(school.courses[0].course_grades)
// school.getStudentsOrderedByAverageGrade().forEach((student) => {
//     console.log(student.name, student.getAverageGrade())
// })

// console.log(school)
// school.getCourses().forEach((course) => {
//     console.log(course.name, course.getAverageGrade())
// })
console.log(student1.description())