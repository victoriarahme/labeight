let student = {
    name: "Victoria",
    age: 26,
    enrolled: true,
 //course array   
course: ["Algorithms", "Web design", "Javascript"],
information: function () {
console.log(student.name, student.age, student.enrolled, student.course);
}};
console.log(student.name, student.age);

student.information();