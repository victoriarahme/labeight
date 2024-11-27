//PART 1:
let student = {
    name: "Victoria",
    age: 26,
    //boolean
    enrolled: true,
    //course array   
    course: ["Algorithms", "Web design", "Javascript"],
    //method
    information: function () {
        
        console.log(student.name, student.age, student.enrolled, student.course);
}};
        console.log(student.name, student.age);

        student.information();
//PART 2:
        let studentJson = JSON.stringify(student);

        console.log(studentJson);