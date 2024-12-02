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

//Part 3:
        let { name, course } = student;

        console.log(name);
        console.log(course);

    let scores = [75, 87, 50, 46];

    let [first, second]= scores;

    console.log(first);
    console.log(second);

//Part 4
let originalStudent = {name: "Victoria",
    age: 26,
    //boolean
    enrolled: true,
    //course array   
    course: ["Algorithms", "Web design", "Javascript"],}

let copiedStudent = {
    name: "Victoria",
    age: 26,
    //boolean
    enrolled: true,
    //course array   
    course: ["Algorithms", "Web design", "Javascript"],
    graduationYear: 2026
    
}