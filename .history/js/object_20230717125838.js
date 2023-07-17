// Cách khai báo object
// object literal
const objectLiteral = {};
// object constructor
const objectConstructor = new Object();
const student = {
    name: "Cloly",
    age: 21,
    male: true,
    "last-name": "but",
    hi: function() {
        console.log("Hello Cloly");
    },
};
// properties
// method
// 2 cách truy xuất giá trị của object 
// 1. Dot notation .
console.log(student.name);
// 2. Bracket notation ["key"]
console.log(student["age"]);
console.log(student["last-name"]);
// Thay đổi giá trị của object
student.age = 20;
console.log(student)