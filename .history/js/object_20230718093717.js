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
student.male = "male";
// Thêm 
student.isDeveloper = true;
// is-developer
student["is-developer"] = false;
student.hello = function() {
    console.log("hello");
}
console.log(student);
// Cách xóa giá trị trong Object
delete student["last-name"];
// for in hay dùng cho object for of hay dùng cho mảng
for (let key in student) {
    if(key === "name") {
        console.log("hello name");
    }
    const value = student[key];
    console.log(`${key}:${value}`);
}

// Object.keys() -> trả về 1 mảng chứa tất cả các keys của object
const keys = Object.keys(student);
console.log(keys);
console.log(keys.length);
// Object.value() -> trả về 1 mảng chứa tat