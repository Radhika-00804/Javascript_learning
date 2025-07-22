const course = {
    coursename: "excel in js",
    price: 999,
    courseInstructor: "Radhika"
}

// console.log(course.courseInstructor)

const {courseInstructor: teacher} = course

console.log(teacher)
console.log(typeof course.price)

////json api -:
// 1)
// {
//    in the form of String
//    "name" : "radhika",
//     "surname" : "gupta"
// }

// 2)
// [
//      in the form of array
// //     {},
// //     {}
// ]
// //randomuser api
