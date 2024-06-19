//initial student array//
var students = [
    { id: 1, name: "Sana", age: 20 },
    { id: 2, name: "Amna", age: 21 },
    { id: 3, name: "Fatima", age: 19 },
];
//using map method//
var studentNames = students.map(function (student) { return student.name; });
console.log("Students Names:", studentNames);
//using filter //
var youngStudent = students.filter(function (student) { return student.age < 20; });
console.log("Young student :", youngStudent);
