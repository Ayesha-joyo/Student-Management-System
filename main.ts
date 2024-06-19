//student management system//
interface Student {
    name: string;
    id: number;
    age: number;
}
//initial student array//
let students: Student[] = [
    { id: 1, name:"Sana", age:20 },
    { id: 2, name:"Amna", age:21 },
     { id: 3, name:"Fatima", age:19 },
];
//using map method//
let studentNames: string[] = students.map(student => student.name);
console.log("Students Names:", studentNames);

//using filter //
let youngStudent: Student[]= students.filter(student => student.age < 20);
console.log("Young student :", youngStudent);
